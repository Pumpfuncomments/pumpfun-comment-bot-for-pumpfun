const { comment } = require("./source/comments.js");
const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let running = true;
    await comment();

    while (running) {
        console.log("Github Comment bot");
        console.log("\nMenu:");
        console.log("This trial version contains only the comment bot");
        console.log("1. Comment bot");
        console.log("Type 'exit' to quit.");

        // Use a promise to handle user input
        const answer = await new Promise(resolve => rl.question("Choose an option or 'exit': ", resolve));

        switch (answer) {
            case "1":
                await comment();
                break;
            case "exit":
                running = false;
                break;
            default:
                console.log("Invalid option, please choose again.");
        }
    }

    console.log("Exiting...");
    rl.close(); // Close the readline interface
    process.exit(0);
}

main().catch((err) => {
    console.error("Error:", err);
});
