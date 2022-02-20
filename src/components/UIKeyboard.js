var
  kind = require("enyo/kind"),
  job = require("enyo/job"),
  utils = require("enyo/utils"),
  Signals = require("enyo/Signals"),
  Control = require("enyo/Control"),
  FittableColumns = require("layout/FittableColumns"),
  Button = require("onyx/Button");

var Unicode = {
  nbsp: "\u00A0",
  mdash: "\u2014",
  leftwardArrow: "\u2190",
  upwardArrow: "\u2191",
  rightwardArrow: "\u2192",
  downwardArrow: "\u2193"
};

module.exports = kind({
  name: "UIKeyboard",
  components: [
    { 
      kind: Signals,
      onkeypress: "handleKeyPress",
      onkeydown: "handleKeyDown"
    },
    {
      kind: Control,
      name: "gameStatusLabel",
      content: "Use on-screen keypad or computer keyboard"
    },
    { 
      name: "prompt", 
      style: "font-size: 30px; padding-bottom: 6px; text-align: center;",
      content: Unicode.nbsp
    },
    { 
      name: "keyboard", 
      components: [
        {kind: FittableColumns, classes: "enyo-center", components: [
          {kind: Button, name: "A", content: "A", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "B", content: "B", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "C", content: "C", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "D", content: "D", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "E", content: "E", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "F", content: "F", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"}
        ]},
        {kind: FittableColumns, classes: "enyo-center", components: [
          {kind: Button, name: "G", content: "G", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "H", content: "H", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "I", content: "I", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "J", content: "J", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "K", content: "K", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "L", content: "L", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"}
        ]},
        {kind: FittableColumns, classes: "enyo-center", components: [
          {kind: Button, name: "M", content: "M", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "N", content: "N", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "O", content: "O", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "P", content: "P", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "Q", content: "Q", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "R", content: "R", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"}
        ]},
        {kind: FittableColumns, classes: "enyo-center", components: [
          {kind: Button, name: "S", content: "S", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "T", content: "T", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "U", content: "U", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "V", content: "V", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "W", content: "W", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "X", content: "X", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"}
        ]},
        {kind: FittableColumns, classes: "enyo-center", components: [
          {kind: Button, name: "Y", content: "Y", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "Z", content: "Z", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "Backspace", content: Unicode.leftwardArrow, ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "Enter", content: Unicode.rightwardArrow, ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"},
          {kind: Button, name: "Escape",content: "!", ontap: "tappedKeys", style: "margin: 3px 3px; width: 36px; font-size: 14px; padding: 6px 10px;"}
        ]}
      ]
    }
  ],
  computed: [
    {
      method: "updateGuessStatistics",
      path: [ "turnsTaken" ]
    }
  ],
  published: {
    guessLength: null,
    turnsTaken: null
  },
  create: function() {
    this.inherited(arguments);
    this.guessData = [];
    this.guessLength = 0;
    this.resetGuestStatistics();
  },
  destroy: function() {
    this.inherited(arguments);
  },
  rendered: function() {
    this.inherited(arguments);
  },
  processKeypress: function(key) {
    var ch = key;
    if (ch == Unicode.leftwardArrow || ch == "Backspace") {
      // allow backspace to clear a cell
      if (this.guessData.length > 0) {
        this.guessData.splice(this.guessData.length - 1, 1);
        this.guess();
      }
    }
    else if (ch == Unicode.rightwardArrow || ch == "Enter") {
      // Enter key submits the guess
      if (this.guessData.length > 0 && this.guessData.length == this.guessLength) {
        var guessText = this.guessData.join("");
        this.submitGuess(guessText);
      }
    }
    else if (ch == "!" || ch == "Escape") {
      // Clear the guess data
      this.clear();
    }
    else {
      ch = ch.toUpperCase();
      if (ch >= "A" && ch <= "Z") {
        if (this.guessData.length < this.guessLength) {
          if (true == this.allowNextKeyStroke(ch)) {
            this.guess(ch);
          }
        }
      }
    }
  },
  mergeObjectValues: function(obj1, obj2) {
    var retVal = {};
    for (var attrName in obj1) {
      retVal[attrName] = obj1[attrName];
    }
    for (var attrName in obj2) {
      if (undefined != obj1[attrName]) {
        retVal[attrName] = Math.max(obj1[attrName], obj2[attrName]);
      }
      else {
        retVal[attrName] = obj2[attrName];
      }
    }
    return retVal;
  },
  resetGuestStatistics: function() {
    this.set("guessStatistics", {
      "absent": {},    //. or -
      "present": {},   //o
      "perfect": {},   //*
      "count": {}
    });
  },
  updateGuessStatistics: function() {
    var letterStatusMap = {
      ".": "absent",
      "-": "absent",
      "o": "present",
      "*": "perfect"
    };

    var state = this.guessStatistics;
    var items = this.turnsTaken || [];
    var finalLetterMap = {};
    for (var i = 0; i < items.length; ++i) {
      var guess = items[i].guess;
      var result = items[i].result;
      var letterMap = {};
      for (var j = 0; j < guess.length; ++j) {
        var char = guess.charAt(j);
        var status = letterStatusMap[result[j]];
        var value = state[status][char];
        letterMap[char] = (letterMap[char] || 0) + (("absent" != status) ? 1 : 0);
        if ("absent" == status) {
          if (undefined == value) {
            if ((undefined == state["present"][char]) && (undefined == state["perfect"][char])){
              state[status][char] = true;
            }
            else {
              state[status][char] = false;
            }
          }
        }
        else if ("present" == status) {
          state[status][char] = Math.min((letterMap[char] || 0),  (value || 0) + 1);
          if (undefined != state["absent"][char]) {
            state["absent"][char] = false;
          }
        }
        else if ("perfect" == status) {
          state[status][char] = Math.min((letterMap[char] || 0),  (value || 0) + 1);
          if (undefined != state["present"][char]) {
            var count = state["present"][char] - 1;
            if (count > 0) {
              state["present"][char] = count;
            }
            else {
              state["present"][char] = undefined;
            }
          }
          if (undefined != state["absent"][char]) {
            state["absent"][char] = false;
          }
        }
      }
      state.finalLetterMap = this.mergeObjectValues(finalLetterMap, letterMap);
    }

    this.updateKeyStates();

    return state;
  },
  updateKeyStates: function() {
    var absentLetters = this.guessStatistics.absent;
    for (var keyName in absentLetters) {
      if (true == absentLetters[keyName]) {
        var k = this.$[keyName.toUpperCase()];
        k.addClass("button-absent");
        k.set("disabled", true);
      }
    }
    var presentLetters = this.guessStatistics.present;
    for (var keyName in presentLetters) {
      if (0 < presentLetters[keyName]) {
        var k = this.$[keyName.toUpperCase()];
        k.addClass("button-present");
        k.set("disabled", false);
      }
    }
    var perfectLetters = this.guessStatistics.perfect;
    for (var keyName in perfectLetters) {
      if (0 < perfectLetters[keyName]) {
        var k = this.$[keyName.toUpperCase()];
        k.removeClass("button-present").addClass("button-perfect");
        k.set("disabled", false);
      }
    }
  },
  resetKeyStates: function() {
    for (var i = 0; i < 26; ++i) {
      var k = this.$[String.fromCharCode(i + 65)];
      k.removeClass("button-highlight").removeClass("button-present").removeClass("button-absent").removeClass("button-perfect");
      k.set("disabled", false);
    }
  },
  allowNextKeyStroke: function(key) {
    var retVal = true;
    var keyName = key.toLowerCase();
    var absentLetters = this.guessStatistics.absent;
    if (true == absentLetters[keyName]) {
      retVal = false;
    }
    else if (false == absentLetters[keyName]) {
      // There is a known letter limit.
      var count = 0;
      var perfectLetters = this.guessStatistics.perfect;
      var presentLetters = this.guessStatistics.present;
      var inUseCount = (perfectLetters[keyName] || 0) + (presentLetters[keyName] || 0);
      for (var i = 0; i < this.guessData.length; ++i) {
        var char = this.guessData[i].toLowerCase();
        if (char == keyName) {
          count++;
        }
      }
      retVal = (count + 1 <= inUseCount);
    }
    return retVal;
  },
  highlightKey: function(key) {
    var k = this.$[key];
    if (k) {
      k.addClass("button-highlight");
      job("resetColor", utils.bindSafely(k, "removeClass", "button-highlight"), 25);
    }
  },
  clear: function() {
    // Clear the guess data
    if (this.guessData.length > 0) {
      this.guessData = [];
      this.$.prompt.setContent(Unicode.nbsp);
    }
  },
  setPrompt: function(guess) {
    this.$.prompt.setContent(guess);
    
    var readyToSubmit = (guess.length == this.guessLength);
    if (readyToSubmit) {
      this.$.prompt.removeClass("text-typing").addClass("text-complete");
    }
    else {
      this.$.prompt.removeClass("text-complete").addClass("text-typing");
    }
  },
  guess: function(key) {
    if (key) {
      this.guessData.push(key);
    }
    if (this.guessData.length > 0) {
      this.setPrompt(this.guessData.join(""));
    }
    else {
      this.setPrompt(Unicode.nbsp);
    }
  },
  submitGuess: function(guessText) {
    // Enter key submits the guess
    Signals.send("onFinishGuess", {
      guess: guessText
    });
    this.clear();
  },
  handleKeyDown: function(inSender, inEvent) {
    var doKeypress = false;
    var ch = inEvent.key;
    switch (inEvent.keyCode) {
      case 8:
      case 27:
        doKeypress = true;
        break;
      default:
        ch = ch.toUpperCase();
    }

    this.highlightKey(ch);
    if (doKeypress) {
      this.processKeypress(ch);
    }

    /* stop propagation */
    return true;
  },
  handleKeyPress: function(inSender, inEvent) {
    var ch = inEvent.key;
    this.processKeypress(ch);

    /* stop propagation */
    return true;
  },
  tappedKeys: function(inSender, inEvent) {
    var ch = inEvent.originator.content;
    this.processKeypress(ch);

    /* stop propagation */
    return true;
  }
});