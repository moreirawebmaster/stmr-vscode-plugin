# Change Log

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [0.0.1] - 2025-06-15

### Adicionado
- Comando "STMR: Criar Projeto" - Integração com `stmr create`
- Comando "STMR: Criar Módulo/Feature" - Integração com `stmr feature`
- Comando "STMR: Gerar Page" - Integração com `stmr generate page`
- Comando "STMR: Gerar Controller" - Integração com `stmr generate controller`
- Comando "STMR: Gerar Repository" - Integração com `stmr generate repository`
- Comando "STMR: Gerar DTO" - Integração com `stmr generate dto`
- Menu de contexto no Explorer para acesso rápido aos comandos
- Interface de usuário com campos de entrada para parâmetros
- Indicador de progresso durante execução dos comandos
- Atualização automática do Explorer após execução dos comandos
- **Sistema de Lint com melhores práticas do mercado**
- Verificação automática de instalação do STMR CLI
- Opção de instalar STMR CLI automaticamente
- Tratamento robusto de erros e timeouts

### Funcionalidades
- Execução de comandos STMR CLI diretamente do VSCode
- Validação de workspace ativo
- Tratamento de erros e feedback visual
- Suporte a todos os parâmetros dos comandos originais do CLI

### Técnico
- Implementação em TypeScript
- Compatibilidade com VSCode 1.74.0+
- Integração com Command Palette
- Menu contextual no Explorer 