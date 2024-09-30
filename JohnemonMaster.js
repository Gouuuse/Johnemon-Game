const JohnemonWorld = require("./JohnemonWorld");
const rl = require('./readline.js')

class JohnemonMaster {
  constructor(name, johnemonCollection, healingItems, reviveItems, JOHNEBALLS) {
    this.name = name;
    this.johnemonCollection = johnemonCollection || [];
    this.healingItems = healingItems || 5; // Initial number of healing items
    this.reviveItems = reviveItems || 3; // Initial number of revive items
    this.JOHNEBALLS = JOHNEBALLS || 10; // Initial number of JOHNEBALLS
  }
  

  renameJohnemon(johnemon) {
    console.log("Rename your Johnemons.")
    const johnemonRename = this.johnemonCollection.find(j => j.name === johnemon);
    if (johnemonRename) {
      johnemonRename.name = newName;
      console.log(`${johnemon.name} has been renamed ${newName}.`);
    } else {
      console.log("Johnemon not find in the collection.")
    };
  }

  healJohnemon(johnemon) {
    
  }

  reviveJohnemon(johnemon) {
    
  }


  releaseJohnemon(johnemon) {
    
  }

  showCollection(johnemonCollection) {
    console.log("See your collection.");
    const validJohnemon = this.johnemonCollection.filter(johnemon => johnemon && johnemon.name);
    if (validJohnemon.length === 0) {
      console.log(`${this.name} has no Johnemon in his collection.`);
    } else {
      console.log(`${this.name}'s Johnemon collection.`);
      validJohnemon.forEach((johnemon, index) => {
        console.log(`${index + 1}. ${johnemon.name}`);
      });
    }
    return;
}

}


module.exports = JohnemonMaster
