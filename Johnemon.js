const students = [
  "Oli","via",
  "No","ra",
  "Dia","na",
  "Moh","ab",
  "Ly","ne",
  "Jas","on",
  "Sébas","tien",
  "Crist","elle",
  "Far","id",
  "Jul","ien",
  "Edou","ard",
  "mbo","gle",
  "Benj","amin",
  "Mat","teo",
  "Re","da",
  "Dona","tien",
  "Ren","aud",
  "Anto","ine",
  "Nahi","mana",
  "Stép","hen",
  "Moha","med",
  "Hak","im",
  "Pier","re", 
  "Hu","go",
  "Th","éo",
  "Max","ime"
]

class Johnemon {
  constructor() {
    this.name = this.generateRandomName();
    this.level = 1;
    this.experienceMeter = 0;
    this.attackRange = this.getRandomNumber(1, 8);
    this.defenseRange = this.getRandomNumber(1, 3);
    this.healthPool = this.getRandomNumber(10, 30);
    this.catchPhrase = this.generateCatchPhrase();
  }

  generateRandomName() {
    const randomStudent1 = students[Math.floor(Math.random() * students.length)];
    const randomStudent2 = students[Math.floor(Math.random() * students.length)];
    return `${randomStudent1}${randomStudent2}`;
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateCatchPhrase() {
    const phrases = ["I choose you!", "Let the battle begin!", "Johnemon, go!"];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  attack(defender) {
    const damage = this.getRandomNumber(this.attackRange * this.level, this.attackRange) - defender.defenseRange;
    defender.healthPool -= damage;
    console.log(`${this.name} attacked ${defender.name} and dealt ${damage} damage!`);
  }

  gainExperience(opponentLevel) {
    const experienceGain = this.getRandomNumber(1, 5) * opponentLevel;
    this.experienceMeter += experienceGain;
    console.log(`${this.name} gained ${experienceGain} experience points!`);
    if (this.experienceMeter >= this.level * 100) {
      this.evolve();
    }
  }

  evolve() {
    this.level += 1;
    const attackIncrease = this.getRandomNumber(1, 5);
    const defenseIncrease = this.getRandomNumber(1, 5);
    const healthIncrease = this.getRandomNumber(1, 5);

    this.attackRange += attackIncrease;
    this.defenseRange += defenseIncrease;
    this.healthPool += healthIncrease;

    console.log(`${this.name} evolved into a higher level! New stats: Level ${this.level}, Attack Range ${this.attackRange}, Defense Range ${this.defenseRange}, Health Pool ${this.healthPool}`);
  }

  sayCatchPhrase() {
    console.log(`${this.name} says: "${this.catchPhrase}"`);
  }
}


module.exports = Johnemon
