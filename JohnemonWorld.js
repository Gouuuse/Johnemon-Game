const JohnemonArena = require('./JohnemonArena')
const Johnemon = require('./Johnemon')
const rl = require('./readline.js')


class JohnemonWorld {
  constructor() {
   this.day = 0;
   this.logs = [];
  }

  oneDayPasses(){
    this.day += 1;
    console.log("One day have passed.")
  }
  
  randomizeEvent() {
    const randomEvent = Math.floor(Math.random() * 2);
    switch (randomEvent) {
      case 0:
        console.log("The day passes, nothing happened!");
        this.oneDayPasses();
        break;
      case 1:
        console.log("A wild Johnemon appeared! Do you want to fight it?");
        this.askForFight();
      default:
        console.log("Error")
        break;
    }
  }


  askForFight() {
    rl.question("Do you want to fight it?", (answer) => {
      if (!['y', 'n'].includes(answer)) {
        console.log("Error");
        this.askForFight();
        return;
      }
      if (answer === "n") {
        console.log("No fight, see you tomorrow.");
        oneDayPasses();
        return;
      }
      console.log("Battle has started!");
      arena.startBattle();
      return;
    });
  }


  addLog(newLog){
    
  }

}

module.exports = JohnemonWorld