import * as assert from 'assert';
import * as vscode from 'vscode';

suite('STMR Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Extension should be present', () => {
        assert.ok(vscode.extensions.getExtension('stmr.stmr-vscode-plugin'));
    });

    test('Should activate extension', async () => {
        const extension = vscode.extensions.getExtension(
            'stmr.stmr-vscode-plugin'
        );
        assert.ok(extension);

        if (extension && !extension.isActive) {
            await extension.activate();
        }

        assert.ok(extension?.isActive);
    });

    test('Should register STMR commands', async () => {
        const commands = await vscode.commands.getCommands(true);

        const stmrCommands = [
            'stmr.create',
            'stmr.feature',
            'stmr.generate.page',
            'stmr.generate.controller',
            'stmr.generate.repository',
            'stmr.generate.dto',
        ];

        for (const command of stmrCommands) {
            assert.ok(
                commands.includes(command),
                `Command ${command} should be registered`
            );
        }
    });

    test('Commands should be available in package.json', () => {
        const extension = vscode.extensions.getExtension(
            'stmr.stmr-vscode-plugin'
        );
        const packageJSON = extension?.packageJSON;

        assert.ok(packageJSON);
        assert.ok(packageJSON.contributes);
        assert.ok(packageJSON.contributes.commands);

        const commands = packageJSON.contributes.commands;
        assert.strictEqual(commands.length, 6);

        const expectedCommands = [
            'stmr.create',
            'stmr.feature',
            'stmr.generate.page',
            'stmr.generate.controller',
            'stmr.generate.repository',
            'stmr.generate.dto',
        ];

        for (const expectedCommand of expectedCommands) {
            const found = commands.some(
                (cmd: { command: string }) => cmd.command === expectedCommand
            );
            assert.ok(
                found,
                `Command ${expectedCommand} should be in package.json`
            );
        }
    });
});
