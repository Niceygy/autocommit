import * as vscode from 'vscode';

export async function setCommmitMessage(conext: vscode.ExtensionContext) {
    const userInput = await vscode.window.showInputBox({ prompt: 'Enter a commit message' });
    if (userInput === null || userInput === " ") {
        vscode.window.showErrorMessage('No commit message entered, aborting');
        return false;
    }
    await conext.globalState.update('commitMessage', userInput);
}