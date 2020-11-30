var
  kind = require("enyo/kind");

var
  Repeater = require("enyo/Repeater"),
  Cell = require("./Cell"),
  Control = require("enyo/Control");

module.exports = kind({
  name: "JottoResult",
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
  published: {
    guess: "",
    result: ""
  },
  create: function() {
    this.inherited(arguments);
    this.data = [];
  },
  rendered: function() {
    this.statusChanged();
  },
  destroy: function() {
    this.inherited(arguments);
  },
  statusChanged: function(oldValue) {
    this.data = [];
    var guess = this.guess;
    var result = this.result;
    var length = result.length;
    var i;
    for (i = 0; i < length; ++i) {
      var letter = guess.charAt(i);
      var statusChar = result.charAt(i);
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