var
  kind = require("enyo/kind"),
  Control = require("enyo/Control");

var Unicode = {
  nbsp: "\u00A0",
  mdash: "\u2014",
  leftwardArrow: "\u2190",
  upwardArrow: "\u2191",
  rightwardArrow: "\u2192",
  downwardArrow: "\u2193"
};

module.exports = kind({
  allowHtml: true,
  name: "Cell",
  kind: Control,
  published: {
    status: "",
    text: ""
  },
  components: [
    {
      tag: "span",
      content: Unicode.nbsp,
      name: "cell"
    }
  ],
  style: "border-radius: 50%; color: black; display: inline-block; font-family: monospace; font-size: 30px; line-height: 100%; text-align: center; text-transform: uppercase; width: 32px; height: 32px;",
  create: function() {
    this.inherited(arguments);
    this.textChanged();
    this.statusChanged();
  },
  textChanged: function(oldValue) {
    // Start by forcing uppercase and trimming white space
    this.text = this.text.toUpperCase();
    this.text = this.text.replace(/^\s+|\s+$/g, "");
    this.text = this.text.replace(/\s+/g, Unicode.nbsp);
    this.$.cell.setContent(this.text || Unicode.nbsp);
  },
  statusChanged: function(oldValue) {
    var letterStatusMap = {
      ".": "absent",
      "-": "absent",
      "o": "present",
      "*": "perfect"
    };
    var mappedStatus = letterStatusMap[this.status];
    switch (mappedStatus) {
      case "present":
        this.addClass("cell-present");
        break;
      case "perfect":
        this.addClass("cell-perfect");
        break;
      case "absent":
        this.addClass("cell-absent");
        break;
      default:
        this.addClass("cell-highlight");
    }
  }
});