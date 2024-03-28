const repl = require("repl");
const { addNote, showNote, deleteNote } = require("./notes");


repl.start({
    prompt: ">>",
    eval: (cmd, context, filename, callback) => {
        const command = cmd.trim().split(" ")[0];

        switch (command) {
            case "show":
                showNote();
                callback(null);
                break;
            case "add":
                const note = cmd.trim().split(" ").slice(1).join(" ");
                addNote(note);
                callback(null);
                break;
            case "delete":
                const readline = require('readline');
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout,
                });
                let output = "Enter the Index Number you want to delete : ";

                rl.question(output, (input) => {
                    input = input.trim();
                    deleteNote(input);
                    
                    callback(null);
                    rl.close();
                });
                
                break;
            default:
                callback(null, "wrong command");
        }
    },
});
