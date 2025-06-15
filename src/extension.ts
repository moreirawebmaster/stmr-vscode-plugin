import { exec } from 'child_process';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext): void {
    console.log('STMR Flutter CLI extension ativada!');

    // Registrar comandos
    const commands = [
        vscode.commands.registerCommand('stmr.create', createProject),
        vscode.commands.registerCommand('stmr.feature', createFeature),
        vscode.commands.registerCommand('stmr.generate.page', generatePage),
        vscode.commands.registerCommand(
            'stmr.generate.controller',
            generateController
        ),
        vscode.commands.registerCommand(
            'stmr.generate.repository',
            generateRepository
        ),
        vscode.commands.registerCommand('stmr.generate.dto', generateDto),
    ];

    context.subscriptions.push(...commands);
}

async function createProject(): Promise<void> {
    const projectName = await vscode.window.showInputBox({
        prompt: 'Nome do projeto',
        placeHolder: 'Ex: meu_app',
    });

    if (!projectName) {
        return;
    }

    const displayName = await vscode.window.showInputBox({
        prompt: 'Nome de exibição do projeto (opcional)',
        placeHolder: 'Ex: Meu App',
    });

    const organization = await vscode.window.showInputBox({
        prompt: 'Organização (opcional)',
        placeHolder: 'Ex: com.minhaempresa',
        value: 'tech.stmr',
    });

    const workspaceFolder = getWorkspaceFolder();
    if (!workspaceFolder) {
        return;
    }

    let command = `stmr create ${projectName}`;

    if (displayName) {
        command += ` --name "${displayName}"`;
    }

    if (organization && organization !== 'tech.stmr') {
        command += ` --org ${organization}`;
    }

    await executeCommand(
        command,
        workspaceFolder,
        `Criando projeto ${projectName}...`
    );
}

async function createFeature(): Promise<void> {
    const featureName = await vscode.window.showInputBox({
        prompt: 'Nome do módulo/feature',
        placeHolder: 'Ex: auth, user, dashboard',
    });

    if (!featureName) {
        return;
    }

    const workspaceFolder = getWorkspaceFolder();
    if (!workspaceFolder) {
        return;
    }

    const command = `stmr feature ${featureName}`;
    await executeCommand(
        command,
        workspaceFolder,
        `Criando feature ${featureName}...`
    );
}

async function generatePage(): Promise<void> {
    const pageName = await vscode.window.showInputBox({
        prompt: 'Nome da page',
        placeHolder: 'Ex: login, profile, home',
    });

    if (!pageName) {
        return;
    }

    const workspaceFolder = getWorkspaceFolder();
    if (!workspaceFolder) {
        return;
    }

    const command = `stmr generate page ${pageName}`;
    await executeCommand(
        command,
        workspaceFolder,
        `Gerando page ${pageName}...`
    );
}

async function generateController(): Promise<void> {
    const controllerName = await vscode.window.showInputBox({
        prompt: 'Nome do controller',
        placeHolder: 'Ex: user, auth, dashboard',
    });

    if (!controllerName) {
        return;
    }

    const workspaceFolder = getWorkspaceFolder();
    if (!workspaceFolder) {
        return;
    }

    const command = `stmr generate controller ${controllerName}`;
    await executeCommand(
        command,
        workspaceFolder,
        `Gerando controller ${controllerName}...`
    );
}

async function generateRepository(): Promise<void> {
    const repositoryName = await vscode.window.showInputBox({
        prompt: 'Nome do repository',
        placeHolder: 'Ex: api, user, auth',
    });

    if (!repositoryName) {
        return;
    }

    const workspaceFolder = getWorkspaceFolder();
    if (!workspaceFolder) {
        return;
    }

    const command = `stmr generate repository ${repositoryName}`;
    await executeCommand(
        command,
        workspaceFolder,
        `Gerando repository ${repositoryName}...`
    );
}

async function generateDto(): Promise<void> {
    const dtoName = await vscode.window.showInputBox({
        prompt: 'Nome do DTO',
        placeHolder: 'Ex: user, product, auth',
    });

    if (!dtoName) {
        return;
    }

    const jsonData = await vscode.window.showInputBox({
        prompt: 'JSON de exemplo para o DTO',
        placeHolder:
            'Ex: {"id": 1, "name": "John", "email": "john@example.com"}',
        value: '{"id": 1, "name": "Example"}',
    });

    if (!jsonData) {
        return;
    }

    const workspaceFolder = getWorkspaceFolder();
    if (!workspaceFolder) {
        return;
    }

    const command = `stmr generate dto ${dtoName} '${jsonData}'`;
    await executeCommand(command, workspaceFolder, `Gerando DTO ${dtoName}...`);
}

function getWorkspaceFolder(): string | undefined {
    const workspaceFolders = vscode.workspace.workspaceFolders;

    if (!workspaceFolders || workspaceFolders.length === 0) {
        vscode.window.showErrorMessage('Nenhuma pasta de trabalho aberta');
        return undefined;
    }

    return workspaceFolders[0].uri.fsPath;
}

async function executeCommand(
    command: string,
    workingDirectory: string,
    message: string
): Promise<void> {
    const isCliInstalled = await checkStmrCliInstalled();
    if (!isCliInstalled) {
        await handleCliNotInstalled();
        return;
    }

    await runCommandWithProgress(command, workingDirectory, message);
}

async function handleCliNotInstalled(): Promise<void> {
    const action = await vscode.window.showErrorMessage(
        'STMR CLI não encontrado. Deseja instalar?',
        'Instalar',
        'Cancelar'
    );

    if (action === 'Instalar') {
        await installStmrCli();
    }
}

async function runCommandWithProgress(
    command: string,
    workingDirectory: string,
    message: string
): Promise<void> {
    return new Promise((resolve, reject) => {
        vscode.window.withProgress(
            {
                location: vscode.ProgressLocation.Notification,
                title: message,
                cancellable: false,
            },
            () => {
                return new Promise<void>((progressResolve, progressReject) => {
                    exec(
                        command,
                        { cwd: workingDirectory, timeout: 300000 },
                        (error, stdout, stderr) => {
                            if (error) {
                                handleCommandError(
                                    error,
                                    progressReject,
                                    reject
                                );
                                return;
                            }

                            handleCommandSuccess(
                                stdout,
                                stderr,
                                progressResolve,
                                resolve
                            );
                        }
                    );
                });
            }
        );
    });
}

function handleCommandError(
    error: Error,
    progressReject: (reason?: unknown) => void,
    reject: (reason?: unknown) => void
): void {
    console.error(`Erro: ${error}`);
    let errorMessage = `Erro ao executar comando: ${error.message}`;

    if (error.message.includes('command not found')) {
        errorMessage =
            'STMR CLI não encontrado. Certifique-se de que está instalado globalmente.';
    } else if (error.message.includes('timeout')) {
        errorMessage = 'Comando demorou muito para executar. Tente novamente.';
    }

    vscode.window.showErrorMessage(errorMessage);
    progressReject(error);
    reject(error);
}

function handleCommandSuccess(
    stdout: string,
    stderr: string,
    progressResolve: () => void,
    resolve: () => void
): void {
    if (stderr && !stderr.includes('WARNING')) {
        console.warn(`Stderr: ${stderr}`);
        vscode.window.showWarningMessage(`Aviso: ${stderr}`);
    }

    console.log(`Stdout: ${stdout}`);

    if (stdout.includes('created') || stdout.includes('generated')) {
        showDetailedSuccess(stdout);
    } else {
        vscode.window.showInformationMessage('Comando executado com sucesso!');
    }

    vscode.commands.executeCommand(
        'workbench.files.action.refreshFilesExplorer'
    );
    progressResolve();
    resolve();
}

function showDetailedSuccess(stdout: string): void {
    vscode.window
        .showInformationMessage(
            'Comando executado com sucesso!',
            'Ver detalhes'
        )
        .then((selection) => {
            if (selection === 'Ver detalhes') {
                const outputChannel =
                    vscode.window.createOutputChannel('STMR CLI');
                outputChannel.appendLine(stdout);
                outputChannel.show();
            }
        });
}

async function checkStmrCliInstalled(): Promise<boolean> {
    return new Promise((resolve) => {
        exec('stmr --version', (error) => {
            resolve(!error);
        });
    });
}

async function installStmrCli(): Promise<void> {
    return new Promise((resolve, reject) => {
        vscode.window.withProgress(
            {
                location: vscode.ProgressLocation.Notification,
                title: 'Instalando STMR CLI...',
                cancellable: false,
            },
            () => {
                return new Promise<void>((progressResolve, progressReject) => {
                    const installCommand =
                        'dart pub global activate --source git https://github.com/moreirawebmaster/stmr_cli.git';
                    exec(
                        installCommand,
                        { timeout: 300000 },
                        (error, _stdout, _stderr) => {
                            if (error) {
                                vscode.window.showErrorMessage(
                                    `Erro ao instalar STMR CLI: ${error.message}`
                                );
                                progressReject(error);
                                reject(error);
                            } else {
                                vscode.window.showInformationMessage(
                                    'STMR CLI instalado com sucesso!'
                                );
                                progressResolve();
                                resolve();
                            }
                        }
                    );
                });
            }
        );
    });
}

export function deactivate(): void {}
