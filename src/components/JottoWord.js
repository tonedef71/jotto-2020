var
  kind = require("enyo/kind");

var
  Repeater = require("enyo/Repeater"),
  Cell = require("./Cell"),
  Control = require("enyo/Control");

module.exports = kind({
  name: "JottoWord",
  kind: Control,
  components: [
    { 
      name: "cells", 
      kind: Repeater,
      onSetupItem: "setupCell",
      components: [ 
        { 
          kind: Cell
        }
      ]
    }
  ],
  //bindings: [
  //  {
  //    from: "updateWord", 
  //    to: "$.gameStatusLabel.content"
  //  }
  //],
  computed: [
    { 
      method: "updateWord", 
      path: [ "word" ] 
    }
  ],
  published: {
    word: ""
  },
  create: function() {
    this.inherited(arguments);
    this.data = [];
  },
  rendered: function() {
    this.inherited(arguments);
    this.updateWord();
  },
  destroy: function() {
    this.inherited(arguments);
  },
  updateWord: function() {
    this.data = [];
    var length = this.word.length || 0;
    for (var i = 0; i < length; ++i) {
      var letter = this.word.charAt(i);
      var statusChar = " ";
      this.data.push({"text": letter, "status": statusChar});
    }
    this.$.cells.setCount(this.data.length);
  },
  setupCell: function(inSender, inEvent) {
    var index = inEvent.index;
    var item = inEvent.item;
    var datum = this.data[index];
    item.$.cell.set("text", datum.text);
    item.$.cell.set("status", datum.status);

    /* stop propagation */
    return true;
  },
});