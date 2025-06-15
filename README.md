# 🚀 STMR Flutter CLI - VSCode Extension

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://marketplace.visualstudio.com/items?itemName=stmr.stmr-vscode-plugin)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Flutter](https://img.shields.io/badge/Flutter-Ready-blue.svg)](https://flutter.dev)

**Integração completa do STMR CLI para desenvolvimento Flutter com Clean Architecture diretamente no VSCode!**

## ✨ Características

- 🎯 **Integração Nativa**: Comandos STMR diretamente no Command Palette
- 🏗️ **Clean Architecture**: Estruturas prontas seguindo melhores práticas
- 🚀 **Auto-instalação**: Instala automaticamente o STMR CLI se necessário
- 📱 **Flutter Focused**: Otimizado para desenvolvimento Flutter/Dart
- 🎨 **Interface Intuitiva**: Formulários integrados para entrada de dados
- ⚡ **Produtividade**: Acelere seu desenvolvimento com templates prontos

## 🛠️ Comandos Disponíveis

### 🎨 Criação de Projetos
- **STMR: Criar Projeto** - Cria um novo projeto Flutter com arquitetura limpa

### 🏗️ Estruturas de Código
- **STMR: Criar Módulo/Feature** - Gera módulos completos com clean architecture
- **STMR: Gerar Page** - Cria páginas com controllers vinculados
- **STMR: Gerar Controller** - Gera controllers com lógica de negócio
- **STMR: Gerar Repository** - Cria camada de dados com interfaces
- **STMR: Gerar DTO** - Gera Data Transfer Objects com serialização JSON

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

O STMR CLI gera estruturas seguindo **Clean Architecture** com:

```
lib/
├── app/
│   ├── modules/
│   │   └── [module_name]/
│   │       ├── controllers/
│   │       ├── pages/
│   │       ├── repositories/
│   │       └── dtos/
│   ├── routes/
│   └── core/
├── data/
└── domain/
```

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
- [Clean Architecture Guide](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

---

**Desenvolvido com ❤️ para a comunidade Flutter**

*Acelere seu desenvolvimento Flutter com STMR CLI + VSCode!* 