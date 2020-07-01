var typer = {
    words: ['Frontend Developer', 'Maker', 'Logical-Thinker'],
    wordIndex: 0,
    speed: 150,
    nextWordWait: 1000,
    html: {
       word: document.querySelector('.myWord')
    },
    init: function init() {
       this.typeLetter();
    },
    typeLetter: function typeLetter() {
       var _this = this;
 
       var timer = arguments.length <= 0 || arguments[0] === undefined ? this.speed : arguments[0];
 
       setTimeout(function () {
          var word = {
             finished: _this.words[_this.wordIndex],
             current: _this.readWord()
          };
 
          var nextLetterIndex = word.finished.length - word.current.length;
          if (nextLetterIndex > 0) {
             nextLetterIndex = word.finished.length - nextLetterIndex;
             var nextLetter = word.finished[nextLetterIndex];
             _this.html.word.innerHTML += nextLetter;
             _this.typeLetter();
             return;
          }
          _this.nextWord();
       }, timer);
    },
    readWord: function readWord() {
       return this.html.word.innerHTML;
    },
    clearWord: function clearWord() {
       this.html.word.innerHTML = '';
    },
    nextWord: function nextWord() {
       var _this2 = this;
 
       this.wordIndex++;
       if (this.wordIndex == this.words.length) {
          this.wordIndex = 0;
       }
       setTimeout(function () {
          _this2.clearWord();
          _this2.typeLetter(_this2.nextWordWait);
       }, this.nextWordWait);
    }
 };
 
 typer.init();