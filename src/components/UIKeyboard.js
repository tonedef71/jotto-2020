var
  kind = require("enyo/kind"),
  job = require("enyo/job"),
  utils = require("enyo/utils"),
  Repeater = require("enyo/Repeater"),
  Signals = require("enyo/Signals"),
  Control = require("enyo/Control"),
  FittableColumns = require("layout/FittableColumns"),
  FittableRows = require("layout/FittableRows"),
  onyx = require("onyx"),
  Button = require("onyx/Button");

var Unicode = {
  nbsp: "\u00A0",
  mdash: "\u2014",
  leftwardArrow: "\u2190",
  upwardArrow: "\u2191",
  rightwardArrow: "\u2192",
  downwardArrow: "\u2193"
};

var backgroundColor = "#053120";

module.exports = kind({
  name: "UIKeyboard",
  style: "background-color: " + backgroundColor,
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
  published: {
    guessLength: null
  },
  create: function() {
    this.inherited(arguments);
    this.guessData = [];
    this.guessLength = 0;
  },
  destroy: function() {
    this.inherited(arguments);
  },
  rendered: function() {
    this.inherited(arguments);
    this.refresh();
  },
  processKeypress(key) {
    var ch = key;
    if (ch == Unicode.leftwardArrow || ch == "Backspace") {
      // allow backspace to clear a cell
      if (this.guessData.length > 0) {
        this.guessData.splice(this.guessData.length - 1, 1);
        this.guess(null);
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
          this.guess(ch);
        }
      }
    }
  },
  highlightKey: function(key) {
    var k = this.$[key];
    if (k) {
      var originalColor = "#555656";
      k.addStyles("background-color: orange");
      job("resetColor", utils.bindSafely(k, "applyStyle", "background-color", originalColor), 25);
    }
  },
  clear: function() {
    // Clear the guess data
    if (this.guessData.length > 0) {
      this.guessData = [];
      this.$.prompt.setContent(Unicode.nbsp);
      this.refresh();
    }
  },
  setPrompt: function(guess) {
    this.$.prompt.setContent(guess);
    
    var textColor = (guess.length == this.guessLength) ? "orange" : "white";
    this.$.prompt.applyStyle("color", textColor);
  },
  guess: function(key) {
    if (null != key) {
      this.guessData.push(key);
    }
    this.setPrompt(this.guessData.join(""));
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