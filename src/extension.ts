// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { setCommmitMessage } from './configure';
import { commit, push } from './git';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Loaded AutoCommit! (extension.ts)');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('autocommit.setCommmitMessage', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		console.log('setCommmitMessage');
		setCommmitMessage(context);
		
	});

	context.subscriptions.push(disposable);
	// const interval = setInterval(() => {
    //     // Your code here
    // }, 30 * 60 * 1000); // 30 minutes in milliseconds

    // context.subscriptions.push({
    //     dispose: () => clearInterval(interval)
    // });
}

// This method is called when your extension is deactivated
export function deactivate() {}
