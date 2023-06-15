"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = exports.commit = void 0;
const vscode = require("vscode");
async function commit(context) {
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const git = gitExtension?.getAPI(1);
    let message = await context.globalState.get('commitMessage');
    //get current repo (if many, gets latest one)
    const repo = git?.repositories[0];
    const commitMessage = message || message || ' - AutoCommit';
    await repo?.commit(commitMessage);
    vscode.window.showInformationMessage('Committed changes using commit message "' + commitMessage + '"');
    return true;
}
exports.commit = commit;
async function push() {
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const git = gitExtension?.getAPI(1);
    //get current repo (if many, gets latest one)
    const repo = git?.repositories[0];
    await repo?.push();
    vscode.window.showInformationMessage('Pushed changes');
    return true;
}
exports.push = push;
//# sourceMappingURL=git.js.map