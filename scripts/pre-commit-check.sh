#!/bin/bash

# 🚀 STMR VSCode Plugin - Pre-commit Check
# Este script executa todas as verificações antes de permitir um commit

set -e  # Parar execução se algum comando falhar

echo "🚀 Iniciando verificações de pre-commit..."

# Função para exibir mensagens coloridas
print_success() {
    echo -e "\033[32m✅ $1\033[0m"
}

print_error() {
    echo -e "\033[31m❌ $1\033[0m"
}

print_warning() {
    echo -e "\033[33m⚠️  $1\033[0m"
}

print_info() {
    echo -e "\033[34mℹ️  $1\033[0m"
}

# 1. Verificar se há arquivos staged
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|js|json|md)$' || true)

if [ -z "$STAGED_FILES" ]; then
    print_warning "Nenhum arquivo relevante foi staged para commit."
    exit 0
fi

print_info "Arquivos staged para verificação:"
echo "$STAGED_FILES"
echo ""

# 2. Compilar TypeScript
print_info "🔨 Compilando TypeScript..."
if ! npm run compile; then
    print_error "Falha na compilação TypeScript!"
    echo "❌ Corrija os erros de compilação antes de fazer commit."
    exit 1
fi
print_success "TypeScript compilado com sucesso"

# 3. Executar ESLint
print_info "🧹 Executando ESLint..."
if ! npm run lint; then
    print_warning "ESLint encontrou problemas. Tentando correção automática..."
    
    # Tentar correção automática
    if npm run lint:fix; then
        print_info "Problemas corrigidos automaticamente. Verificando novamente..."
        
        # Verificar se ainda há problemas
        if npm run lint; then
            print_success "ESLint passou após correção automática"
            
            # Adicionar arquivos corrigidos ao stage
            git add $STAGED_FILES
            print_info "Arquivos corrigidos foram adicionados ao stage"
        else
            print_error "ESLint ainda encontra problemas após tentativa de correção!"
            echo ""
            echo "🔧 Ações necessárias:"
            echo "1. Execute: npm run lint"
            echo "2. Corrija os problemas manualmente"
            echo "3. Execute: npm run lint:fix"
            echo "4. Tente fazer commit novamente"
            exit 1
        fi
    else
        print_error "Falha ao tentar correção automática do ESLint!"
        echo ""
        echo "🔧 Ações necessárias:"
        echo "1. Execute: npm run lint"
        echo "2. Corrija os problemas manualmente"
        echo "3. Tente fazer commit novamente"
        exit 1
    fi
else
    print_success "ESLint passou sem problemas"
fi

# 4. Verificar formatação com Prettier
print_info "💅 Verificando formatação com Prettier..."
if ! npm run format:check; then
    print_warning "Formatação inconsistente detectada. Corrigindo..."
    npm run format
    git add $STAGED_FILES
    print_success "Formatação corrigida e arquivos atualizados"
else
    print_success "Formatação está correta"
fi

# 5. Executar testes
print_info "🧪 Executando testes..."
if ! npm test; then
    print_error "Testes falharam!"
    echo ""
    echo "🔧 Ações necessárias:"
    echo "1. Execute: npm test"
    echo "2. Verifique os erros nos testes"
    echo "3. Corrija os problemas"
    echo "4. Tente fazer commit novamente"
    exit 1
fi
print_success "Todos os testes passaram"

# 6. Verificação final
print_info "🔍 Verificação final..."

# Verificar se não há arquivos não staged após as correções
UNSTAGED_CHANGES=$(git diff --name-only | grep -E '\.(ts|js|json|md)$' || true)
if [ ! -z "$UNSTAGED_CHANGES" ]; then
    print_warning "Há mudanças não staged após as correções:"
    echo "$UNSTAGED_CHANGES"
    print_info "Adicionando mudanças corrigidas ao stage..."
    git add $UNSTAGED_CHANGES
fi

# Sucesso
echo ""
print_success "🎉 Todas as verificações passaram!"
print_success "✨ Commit autorizado!"
echo ""
print_info "📊 Resumo das verificações:"
echo "  ✅ Compilação TypeScript"
echo "  ✅ ESLint (com correções se necessário)"
echo "  ✅ Formatação Prettier"
echo "  ✅ Testes unitários"
echo ""

exit 0 