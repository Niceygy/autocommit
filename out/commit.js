"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = exports.commit = void 0;
const vscode = require("vscode");
async function commit(message) {
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const git = gitExtension?.getAPI(1);
    //get current repo (if many, gets latest one)
    const repo = git?.repositories[0];
    const commitMessage = message || message || ' - AutoCommit';
    await repo?.commit(commitMessage);
}
exports.commit = commit;
async function push(params) {
}
exports.push = push;
//# sourceMappingURL=commit.js.map