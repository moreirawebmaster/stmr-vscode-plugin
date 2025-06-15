# Instalação do Plugin STMR VSCode

## 📋 Pré-requisitos

Antes de instalar o plugin, você precisa ter:

1. **VSCode** versão 1.74.0 ou superior
2. **Dart SDK** instalado
3. **STMR CLI** instalado globalmente

### Instalar STMR CLI

```bash
dart pub global activate --source git https://github.com/moreirawebmaster/stmr_cli.git
```

Verifique se foi instalado corretamente:
```bash
stmr --version
```

## 🚀 Instalação do Plugin

### Método 1: Via arquivo VSIX (Recomendado)

1. Baixe o arquivo `stmr-vscode-plugin-0.0.1.vsix`
2. No VSCode, abra o Command Palette (`Ctrl+Shift+P` ou `Cmd+Shift+P`)
3. Digite "Extensions: Install from VSIX..."
4. Selecione o arquivo `.vsix` baixado
5. Reinicie o VSCode

### Método 2: Via desenvolvimento local

```bash
git clone https://github.com/moreirawebmaster/stmr-vscode-plugin.git
cd stmr-vscode-plugin
npm install
npm run compile
```

Em seguida, pressione `F5` no VSCode para abrir uma nova janela com o plugin ativo.

## ✅ Verificar Instalação

1. Abra o Command Palette (`Ctrl+Shift+P` ou `Cmd+Shift+P`)
2. Digite "STMR" - você deve ver os comandos disponíveis:
   - STMR: Criar Projeto
   - STMR: Criar Módulo/Feature
   - STMR: Gerar Page
   - STMR: Gerar Controller
   - STMR: Gerar Repository
   - STMR: Gerar DTO

## 🔧 Configuração

O plugin não requer configuração adicional. Ele utiliza o STMR CLI instalado globalmente.

### Verificar se STMR CLI está disponível

Se você receber erros sobre STMR CLI não encontrado:

1. Verifique se o Dart está no PATH:
   ```bash
   dart --version
   ```

2. Verifique se o diretório bin do pub está no PATH:
   ```bash
   echo $PATH | grep pub
   ```

3. Adicione ao seu `.bashrc` ou `.zshrc`:
   ```bash
   export PATH="$PATH:$HOME/.pub-cache/bin"
   ```

## 🆘 Solução de Problemas

### Plugin não aparece nos comandos
- Reinicie o VSCode
- Verifique se a instalação foi bem-sucedida na aba Extensions

### Comando "stmr not found"
- Verifique se o STMR CLI está instalado globalmente
- Verifique se o PATH inclui o diretório bin do pub

### Comandos não executam
- Abra um projeto Flutter ou crie uma pasta
- O plugin precisa de um workspace ativo para funcionar

## 📞 Suporte

Para suporte e dúvidas:
- 📧 Email: suporte@stmr.com  
- 🐛 Issues: GitHub Issues
- 📖 Documentação: README.md

---

**Desenvolvido pela equipe STMR** 🚀 