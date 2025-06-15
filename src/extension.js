"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
var child_process_1 = require("child_process");
function activate(context) {
    var _a;
    console.log('STMR Flutter CLI extension ativada!');
    // Registrar comandos
    var commands = [
        vscode.commands.registerCommand('stmr.create', createProject),
        vscode.commands.registerCommand('stmr.feature', createFeature),
        vscode.commands.registerCommand('stmr.generate.page', generatePage),
        vscode.commands.registerCommand('stmr.generate.controller', generateController),
        vscode.commands.registerCommand('stmr.generate.repository', generateRepository),
        vscode.commands.registerCommand('stmr.generate.dto', generateDto)
    ];
    (_a = context.subscriptions).push.apply(_a, commands);
}
exports.activate = activate;
function createProject() {
    return __awaiter(this, void 0, void 0, function () {
        var projectName, displayName, organization, workspaceFolder, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showInputBox({
                        prompt: 'Nome do projeto',
                        placeHolder: 'Ex: meu_app'
                    })];
                case 1:
                    projectName = _a.sent();
                    if (!projectName) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, vscode.window.showInputBox({
                            prompt: 'Nome de exibição do projeto (opcional)',
                            placeHolder: 'Ex: Meu App'
                        })];
                case 2:
                    displayName = _a.sent();
                    return [4 /*yield*/, vscode.window.showInputBox({
                            prompt: 'Organização (opcional)',
                            placeHolder: 'Ex: com.minhaempresa',
                            value: 'tech.stmr'
                        })];
                case 3:
                    organization = _a.sent();
                    workspaceFolder = getWorkspaceFolder();
                    if (!workspaceFolder) {
                        return [2 /*return*/];
                    }
                    command = "stmr create ".concat(projectName);
                    if (displayName) {
                        command += " --name \"".concat(displayName, "\"");
                    }
                    if (organization && organization !== 'tech.stmr') {
                        command += " --org ".concat(organization);
                    }
                    return [4 /*yield*/, executeCommand(command, workspaceFolder, "Criando projeto ".concat(projectName, "..."))];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createFeature() {
    return __awaiter(this, void 0, void 0, function () {
        var featureName, workspaceFolder, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showInputBox({
                        prompt: 'Nome do módulo/feature',
                        placeHolder: 'Ex: auth, user, dashboard'
                    })];
                case 1:
                    featureName = _a.sent();
                    if (!featureName) {
                        return [2 /*return*/];
                    }
                    workspaceFolder = getWorkspaceFolder();
                    if (!workspaceFolder) {
                        return [2 /*return*/];
                    }
                    command = "stmr feature ".concat(featureName);
                    return [4 /*yield*/, executeCommand(command, workspaceFolder, "Criando feature ".concat(featureName, "..."))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function generatePage() {
    return __awaiter(this, void 0, void 0, function () {
        var pageName, workspaceFolder, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showInputBox({
                        prompt: 'Nome da page',
                        placeHolder: 'Ex: login, profile, home'
                    })];
                case 1:
                    pageName = _a.sent();
                    if (!pageName) {
                        return [2 /*return*/];
                    }
                    workspaceFolder = getWorkspaceFolder();
                    if (!workspaceFolder) {
                        return [2 /*return*/];
                    }
                    command = "stmr generate page ".concat(pageName);
                    return [4 /*yield*/, executeCommand(command, workspaceFolder, "Gerando page ".concat(pageName, "..."))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function generateController() {
    return __awaiter(this, void 0, void 0, function () {
        var controllerName, workspaceFolder, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showInputBox({
                        prompt: 'Nome do controller',
                        placeHolder: 'Ex: user, auth, dashboard'
                    })];
                case 1:
                    controllerName = _a.sent();
                    if (!controllerName) {
                        return [2 /*return*/];
                    }
                    workspaceFolder = getWorkspaceFolder();
                    if (!workspaceFolder) {
                        return [2 /*return*/];
                    }
                    command = "stmr generate controller ".concat(controllerName);
                    return [4 /*yield*/, executeCommand(command, workspaceFolder, "Gerando controller ".concat(controllerName, "..."))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function generateRepository() {
    return __awaiter(this, void 0, void 0, function () {
        var repositoryName, workspaceFolder, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showInputBox({
                        prompt: 'Nome do repository',
                        placeHolder: 'Ex: api, user, auth'
                    })];
                case 1:
                    repositoryName = _a.sent();
                    if (!repositoryName) {
                        return [2 /*return*/];
                    }
                    workspaceFolder = getWorkspaceFolder();
                    if (!workspaceFolder) {
                        return [2 /*return*/];
                    }
                    command = "stmr generate repository ".concat(repositoryName);
                    return [4 /*yield*/, executeCommand(command, workspaceFolder, "Gerando repository ".concat(repositoryName, "..."))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function generateDto() {
    return __awaiter(this, void 0, void 0, function () {
        var dtoName, jsonData, workspaceFolder, command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showInputBox({
                        prompt: 'Nome do DTO',
                        placeHolder: 'Ex: user, product, auth'
                    })];
                case 1:
                    dtoName = _a.sent();
                    if (!dtoName) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, vscode.window.showInputBox({
                            prompt: 'JSON de exemplo para o DTO',
                            placeHolder: 'Ex: {"id": 1, "name": "John", "email": "john@example.com"}',
                            value: '{"id": 1, "name": "Example"}'
                        })];
                case 2:
                    jsonData = _a.sent();
                    if (!jsonData) {
                        return [2 /*return*/];
                    }
                    workspaceFolder = getWorkspaceFolder();
                    if (!workspaceFolder) {
                        return [2 /*return*/];
                    }
                    command = "stmr generate dto ".concat(dtoName, " '").concat(jsonData, "'");
                    return [4 /*yield*/, executeCommand(command, workspaceFolder, "Gerando DTO ".concat(dtoName, "..."))];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getWorkspaceFolder() {
    var workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
        vscode.window.showErrorMessage('Nenhuma pasta de trabalho aberta');
        return undefined;
    }
    return workspaceFolders[0].uri.fsPath;
}
function executeCommand(command, workingDirectory, message) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    vscode.window.withProgress({
                        location: vscode.ProgressLocation.Notification,
                        title: message,
                        cancellable: false
                    }, function () {
                        return new Promise(function (progressResolve, progressReject) {
                            (0, child_process_1.exec)(command, { cwd: workingDirectory }, function (error, stdout, stderr) {
                                if (error) {
                                    console.error("Erro: ".concat(error));
                                    vscode.window.showErrorMessage("Erro ao executar comando: ".concat(error.message));
                                    progressReject(error);
                                    reject(error);
                                    return;
                                }
                                if (stderr) {
                                    console.warn("Stderr: ".concat(stderr));
                                }
                                console.log("Stdout: ".concat(stdout));
                                vscode.window.showInformationMessage('Comando executado com sucesso!');
                                // Atualizar explorer após comando
                                vscode.commands.executeCommand('workbench.files.action.refreshFilesExplorer');
                                progressResolve();
                                resolve();
                            });
                        });
                    });
                })];
        });
    });
}
function deactivate() { }
exports.deactivate = deactivate;
