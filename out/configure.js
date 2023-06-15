"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCommmitMessage = void 0;
const vscode = require("vscode");
async function setCommmitMessage(conext) {
    const userInput = await vscode.window.showInputBox({ prompt: 'Enter a commit message' });
    if (userInput === null || userInput === " ") {
        vscode.window.showErrorMessage('No commit message entered, aborting');
        return false;
    }
    await conext.globalState.update('commitMessage', userInput);
}
exports.setCommmitMessage = setCommmitMessage;
//# sourceMappingURL=configure.js.map