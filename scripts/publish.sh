#!/bin/bash

# 🚀 Script de Publicação no VS Code Marketplace
# Este script automatiza o processo de publicação do plugin STMR

set -e  # Parar em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir mensagens coloridas
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

print_message $BLUE "🚀 Iniciando processo de publicação do STMR VSCode Plugin..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    print_message $RED "❌ Erro: package.json não encontrado. Execute este script na raiz do projeto."
    exit 1
fi

# Verificar se @vscode/vsce está instalado
if ! command -v vsce &> /dev/null; then
    print_message $YELLOW "⚠️  vsce não encontrado. Instalando..."
    npm install -g @vscode/vsce
fi

print_message $BLUE "📋 Executando verificações pré-publicação..."

# 1. Compilar TypeScript
print_message $BLUE "🔨 Compilando TypeScript..."
npm run compile
if [ $? -eq 0 ]; then
    print_message $GREEN "✅ Compilação bem-sucedida"
else
    print_message $RED "❌ Erro na compilação"
    exit 1
fi

# 2. Executar lint
print_message $BLUE "🧹 Executando ESLint..."
npm run lint
if [ $? -eq 0 ]; then
    print_message $GREEN "✅ Lint passou sem problemas"
else
    print_message $YELLOW "⚠️  Lint encontrou problemas, mas continuando..."
fi

# 3. Executar testes
print_message $BLUE "🧪 Executando testes..."
npm test
if [ $? -eq 0 ]; then
    print_message $GREEN "✅ Todos os testes passaram"
else
    print_message $RED "❌ Testes falharam"
    exit 1
fi

# 4. Verificar se há mudanças não commitadas
if [ -n "$(git status --porcelain)" ]; then
    print_message $YELLOW "⚠️  Há mudanças não commitadas. Deseja continuar? (y/n)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        print_message $RED "❌ Publicação cancelada"
        exit 1
    fi
fi

# 5. Criar package
print_message $BLUE "📦 Criando package VSIX..."
vsce package
if [ $? -eq 0 ]; then
    print_message $GREEN "✅ Package criado com sucesso"
else
    print_message $RED "❌ Erro ao criar package"
    exit 1
fi

# 6. Perguntar sobre publicação
print_message $YELLOW "🤔 Deseja publicar no marketplace agora? (y/n)"
read -r publish_response

if [[ "$publish_response" =~ ^[Yy]$ ]]; then
    # Verificar se está logado
    print_message $BLUE "🔐 Verificando autenticação..."
    
    # Tentar obter informações do publisher
    if ! vsce ls-publishers &> /dev/null; then
        print_message $YELLOW "⚠️  Não está logado. Faça login primeiro:"
        print_message $BLUE "Execute: vsce login <publisher-name>"
        print_message $BLUE "Depois execute este script novamente."
        exit 1
    fi
    
    # Publicar
    print_message $BLUE "🚀 Publicando no marketplace..."
    vsce publish
    
    if [ $? -eq 0 ]; then
        print_message $GREEN "🎉 Plugin publicado com sucesso!"
        print_message $BLUE "📊 Acesse https://marketplace.visualstudio.com/manage para ver estatísticas"
        print_message $BLUE "🔗 Link do plugin: https://marketplace.visualstudio.com/items?itemName=stmr.stmr-vscode-plugin"
    else
        print_message $RED "❌ Erro na publicação"
        exit 1
    fi
else
    print_message $BLUE "📦 Package criado. Para publicar manualmente:"
    print_message $BLUE "1. vsce login <publisher-name>"
    print_message $BLUE "2. vsce publish"
fi

print_message $GREEN "✨ Processo concluído!"

# Mostrar informações do package
PACKAGE_FILE=$(ls -t *.vsix | head -n1)
if [ -f "$PACKAGE_FILE" ]; then
    PACKAGE_SIZE=$(du -h "$PACKAGE_FILE" | cut -f1)
    print_message $BLUE "📋 Informações do package:"
    print_message $BLUE "   Arquivo: $PACKAGE_FILE"
    print_message $BLUE "   Tamanho: $PACKAGE_SIZE"
fi

print_message $BLUE "🎯 Próximos passos:"
print_message $BLUE "   1. Monitorar downloads e reviews"
print_message $BLUE "   2. Responder feedback dos usuários"
print_message $BLUE "   3. Planejar próximas funcionalidades"
print_message $BLUE "   4. Manter documentação atualizada"

print_message $GREEN "🚀 Obrigado por usar o STMR VSCode Plugin!" 