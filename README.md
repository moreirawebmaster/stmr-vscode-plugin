# 🚀 STMR Flutter CLI - VSCode Extension

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://marketplace.visualstudio.com/items?itemName=stmr.stmr-vscode-plugin)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Flutter](https://img.shields.io/badge/Flutter-Ready-blue.svg)](https://flutter.dev)

**Integração completa do STMR CLI para desenvolvimento Flutter com MVC/MVVM + Clean Architecture diretamente no VSCode!**

## ✨ Características

- 🎯 **Integração Nativa**: Comandos STMR diretamente no Command Palette
- 🏗️ **MVC/MVVM + Clean Architecture**: Estruturas organizadas seguindo melhores práticas
- 🚀 **Auto-instalação**: Instala automaticamente o STMR CLI se necessário
- 📱 **Flutter Focused**: Otimizado para desenvolvimento Flutter/Dart
- 🎨 **Interface Intuitiva**: Formulários integrados para entrada de dados
- ⚡ **Produtividade**: Acelere seu desenvolvimento com templates prontos

## 🛠️ Comandos Disponíveis

### 🎨 Criação de Projetos
- **STMR: Criar Projeto** - Cria um novo projeto Flutter com arquitetura limpa

### 🏗️ Estruturas de Código
- **STMR: Criar Módulo/Feature** - Gera módulos completos com MVC/MVVM + Clean Architecture
- **STMR: Gerar Page** - Cria páginas na camada de presentation com controllers
- **STMR: Gerar Controller** - Gera controllers com lógica de negócio e binding
- **STMR: Gerar Repository** - Cria camada de dados com DTOs organizados
- **STMR: Gerar DTO** - Gera Request/Response DTOs com serialização JSON

## 🚀 Como Usar

### Via Command Palette
1. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
2. Digite "STMR" para ver todos os comandos disponíveis
3. Selecione o comando desejado
4. Preencha os campos solicitados
5. Aguarde a execução!

### Via Menu Contextual
1. Clique com o botão direito em qualquer pasta no Explorer
2. Selecione "STMR CLI" no menu contextual
3. Escolha a operação desejada
4. Preencha o formulário
5. Execute!

## 📋 Pré-requisitos

- **VSCode**: Versão 1.74.0 ou superior
- **Node.js**: Para instalação automática do STMR CLI
- **Flutter**: SDK Flutter instalado (para projetos Flutter)

> 💡 **Nota**: O plugin instala automaticamente o STMR CLI se não estiver presente no sistema!

## 🎯 Funcionalidades Avançadas

### ✅ Instalação Automática
O plugin verifica automaticamente se o STMR CLI está instalado e oferece instalação automática se necessário.

### ✅ Validação Inteligente
- Validação de nomes de projetos e módulos
- Verificação de estruturas existentes
- Prevenção de conflitos de nomenclatura

### ✅ Feedback Visual
- Indicadores de progresso durante execução
- Output detalhado em canal dedicado
- Mensagens de erro claras e acionáveis

### ✅ Integração Completa
- Atualização automática do Explorer após criação
- Suporte a workspaces múltiplos
- Compatibilidade com temas do VSCode

## 🏗️ Arquitetura Gerada

O STMR CLI gera estruturas tendo como referência **MVC** / **MVVM** e **Clean Architecture** com:

### 📁 Estrutura de Módulo Simples
```
lib/
├── app/
│   └── modules/
│       └── auth/
│           ├── presentations/
│           │   ├── controllers/
│           │   │   └── auth_controller.dart
│           │   └── pages/
│           │       └── auth_page.dart
│           ├── repositories/
│           │   ├── auth_repository.dart
│           │   └── dtos/
│           │       ├── requests/
│           │       │   └── auth_request.dart
│           │       └── responses/
│           │           └── auth_response.dart
│           ├── auth_routes.dart
│           ├── auth_bindings.dart
│           └── auth_constants.dart
```

### 📁 Estrutura com Múltiplas Features
```
lib/
├── app/
│   └── modules/
│       └── auth/
│           └── features/
│               ├── login/
│               │   ├── presentations/
│               │   │   ├── controllers/
│               │   │   │   └── login_controller.dart
│               │   │   └── pages/
│               │   │       └── login_page.dart
│               │   ├── repositories/
│               │   │   ├── login_repository.dart
│               │   │   └── dtos/
│               │   │       ├── requests/
│               │   │       │   └── login_request.dart
│               │   │       └── responses/
│               │   │           └── login_response.dart
│               │   ├── login_routes.dart
│               │   ├── login_bindings.dart
│               │   └── login_constants.dart
│               ├── recovery_password/
│               │   ├── presentations/
│               │   │   ├── controllers/
│               │   │   │   └── recovery_controller.dart
│               │   │   └── pages/
│               │   │       └── recovery_page.dart
│               │   ├── repositories/
│               │   │   ├── recovery_repository.dart
│               │   │   └── dtos/
│               │   │       ├── requests/
│               │   │       │   └── recovery_request.dart
│               │   │       └── responses/
│               │   │           └── recovery_response.dart
│               │   ├── recovery_routes.dart
│               │   ├── recovery_bindings.dart
│               │   └── recovery_constants.dart
│               └── create_account/
│                   ├── presentations/
│                   │   ├── controllers/
│                   │   │   └── create_account_controller.dart
│                   │   └── pages/
│                   │       └── create_account_page.dart
│                   ├── repositories/
│                   │   ├── create_account_repository.dart
│                   │   └── dtos/
│                   │       ├── requests/
│                   │       │   └── create_account_request.dart
│                   │       └── responses/
│                   │           └── create_account_response.dart
│                   ├── create_account_routes.dart
│                   ├── create_account_bindings.dart
│                   └── create_account_constants.dart
```

### 🎯 Camadas da Arquitetura
- **Presentations**: Controllers e Pages (UI/UX)
- **Repositories**: Camada de dados e APIs
- **DTOs**: Data Transfer Objects (Requests/Responses)
- **Routes**: Configuração de rotas do módulo
- **Bindings**: Injeção de dependências (GetX)
- **Constants**: Constantes e configurações do módulo

### 📋 Quando Usar Cada Estrutura
- **Módulo Simples**: Para funcionalidades únicas (ex: `modules/auth/`)
- **Múltiplas Features**: Para módulos complexos com várias funcionalidades relacionadas (ex: `modules/auth/features/login/`, `modules/auth/features/recovery_password/`, `modules/auth/features/create_account/`)

## 🔧 Configuração

Não é necessária configuração adicional! O plugin funciona imediatamente após a instalação.

### Configurações Opcionais
Você pode personalizar o comportamento através das configurações do VSCode:

```json
{
  "stmr.autoInstall": true,
  "stmr.showProgress": true,
  "stmr.outputLevel": "detailed"
}
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja nosso [repositório no GitHub](https://github.com/moreirawebmaster/stmr-vscode-plugin) para mais informações.

## 📝 Changelog

### 1.0.0 (Versão Estável)
- ✅ Sistema de lint integrado com ESLint e Prettier
- ✅ Configuração de pre-commit hooks com Husky
- ✅ Testes unitários implementados com Mocha
- ✅ TypeScript modo estrito habilitado
- ✅ Documentação completa do projeto
- ✅ Arquitetura modular e manutenível
- ✅ Qualidade de código enterprise-grade
- ✅ Links úteis atualizados (GetX, MVVM, MVC)
- ✅ Plugin empacotado e pronto para produção

### 0.0.1 (Inicial)
- ✅ Implementação de todos os comandos STMR
- ✅ Interface integrada com VSCode
- ✅ Instalação automática do CLI
- ✅ Menu contextual no Explorer
- ✅ Sistema de validação e feedback

## 🐛 Reportar Problemas

Encontrou um bug? [Abra uma issue](https://github.com/moreirawebmaster/stmr-vscode-plugin/issues) no nosso repositório.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🔗 Links Úteis

- [STMR CLI Repository](https://github.com/moreirawebmaster/stmr_cli)
- [Flutter Documentation](https://flutter.dev/docs)
- [GetX - State Management](https://pub.dev/packages/get)
- [Clean Architecture Guide](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [MVVM Pattern for Mobile](https://www.geeksforgeeks.org/mvvm-model-view-viewmodel-architecture-pattern-in-android)
- [MVC Pattern for Mobile Development](https://www.geeksforgeeks.org/mvc-model-view-controller-architecture-pattern-in-android-with-example)


---

**Desenvolvido com ❤️ por Thiago Moreira para a comunidade Flutter**

*Acelere seu desenvolvimento Flutter com STMR CLI + VSCode!* 