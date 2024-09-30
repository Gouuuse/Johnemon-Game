const JohnemonMaster = require('./JohnemonMaster.js'); // Replace 'your_classes_filename' with the actual filename
const Johnemon = require('./Johnemon')
const JohnemonWorld = require ('./JohnemonWorld')

const fs = require('fs');
const rl = require('./readline.js')

const player = new JohnemonMaster();
const world = new JohnemonWorld();

const saveData = loadGame();

// console.log(saveData);


function saveGameState(){
    fs.writeFileSync("save.json", JSON.stringify(player, null, 2));
}

function loadGame() {
    return JSON.parse(fs.readFileSync("save.json"));
}


function askForName() {
    return "What's your name? ";
}

function proposeFirstJohnemon(){
    const proposeJohnemon = [new Johnemon(), new Johnemon(), new Johnemon()];
    
    proposeJohnemon.forEach((johnemon, index) => {
        console.log(`${index + 1}: ${johnemon.name}`);
        });

    rl.question("Choose your first johnemon: ", (choice) => {
        const selectedJohnemon = proposeJohnemon[parseInt(choice) -1];
        if (selectedJohnemon) {
            console.log(`You choose ${selectedJohnemon.name}.`);
            player.johnemonCollection.push(selectedJohnemon);
            saveGameState();
            Showmenu(0);
        } else {
            console.log("Invalid choice");
            proposeFirstJohnemon();
        };
    });
}

async function startGame(){
    rl.question(`${askForName()}`, (answer) =>{
        console.log(`Hello, ${answer}! Let your Johnemon adventure begin!`);
        player.name = answer;
        saveGameState();
        proposeFirstJohnemon();
    });
}

function Showmenu() {
    console.log("-------Main menu------")
    console.log("1. Show the Johnemon collection.")
    console.log("2. Rename your Johnemons.")
    console.log("3. Close the game.")
rl.question ("Choose an option : ", (choice) => {
    switch (choice) {
        case "1":
            console.log(player.showCollection());
            Showmenu();
            break;
        case "2":
            console.log(player.renameJohnemon());
            Showmenu();
            break;
        case "3":
            rl.close();
            break;
        default:
            console.log("Invalid option");
            Showmenu();
            break;
        }
    });
}

startGame()
