class Shiritori {
  constructor(words = [], game_over = false) {
    this.words = words;
    this.game_over = game_over;
  }

  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
    } else if (
      this.words[this.words.length - 1][
        this.words[this.words.length - 1].length - 1
      ] === word[0] &&
      !this.words.includes(word)
    ) {
      this.words.push(word);
    } else {
      console.log("Game Over");
      this.game_over = true;
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    console.log("Game Restarted");
  }
}
