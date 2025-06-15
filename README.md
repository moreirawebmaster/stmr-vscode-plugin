# STMR Flutter CLI - Plugin VSCode

Plugin para VSCode que integra os comandos do [STMR CLI](https://github.com/moreirawebmaster/stmr_cli) diretamente no editor.

## 🚀 Funcionalidades

- **Criar Projeto**: Gera um novo projeto Flutter baseado no skeleton STMR
- **Criar Módulo/Feature**: Cria módulos com arquitetura limpa
- **Gerar Componentes**: 
  - Pages (com controllers)
  - Controllers
  - Repositories
  - DTOs

## 📋 Pré-requisitos

Antes de usar este plugin, você precisa ter o STMR CLI instalado globalmente:

```bash
dart pub global activate --source git https://github.com/moreirawebmaster/stmr_cli.git
```

## 🛠️ Como usar

### Via Command Palette

1. Abra o Command Palette (`Ctrl+Shift+P` ou `Cmd+Shift+P`)
2. Digite "STMR" para ver todos os comandos disponíveis
3. Selecione o comando desejado

### Via Context Menu

1. Clique com o botão direito em qualquer pasta no Explorer
2. Selecione "STMR CLI" no menu
3. Escolha o comando desejado

## 📚 Comandos Disponíveis

### STMR: Criar Projeto
Cria um novo projeto Flutter baseado no skeleton STMR.
- Solicita nome do projeto
- Opcionalmente define nome de exibição
- Opcionalmente define organização

### STMR: Criar Módulo/Feature
Cria uma nova feature com estrutura completa seguindo arquitetura limpa.

### STMR: Gerar Page
Gera uma nova page com controller associado.

### STMR: Gerar Controller
Gera um novo controller.

### STMR: Gerar Repository
Gera um novo repository com interface.

### STMR: Gerar DTO
Gera um novo DTO baseado em JSON de exemplo.

## 🏗️ Arquitetura

O plugin executa os comandos do STMR CLI de forma nativa, mantendo toda a funcionalidade e estrutura de arquivos original.

## 🤝 Contribuição

Para contribuir com este plugin:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a licença MIT.

---

**Desenvolvido para facilitar o uso do STMR CLI no VSCode** 🚀 