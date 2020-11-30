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
 //classes: "letter",
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
    // start by forcing uppercase and trimming white space
    this.text = this.text.toUpperCase();
    this.text = this.text.replace(/^\s+|\s+$/g, "");
    this.text = this.text.replace(/\s+/g, Unicode.nbsp);
    this.$.cell.setContent(this.text || Unicode.nbsp);
 },
 statusChanged: function(oldValue) {
   var color = "#ff0000";
   var fontStyle = "normal";
   var fontWeight = "normal";
   var mappedStatus = this.mapStatus(this.status);
   switch (mappedStatus) {
     case "present":
       color = "#ffff00";
       fontStyle = "oblique";
       break;
     case "perfect":
       color = "#00ff00";
       fontWeight = "bold";
       break;
     case "absent":
      color = "#ff0000";
      break;
     default:
      color = "orange";
   }
   //this.addRemoveClass("letter", this.encrypted);
   this.applyStyle("background-color", color);
   this.applyStyle("font-style", fontStyle);
   this.applyStyle("font-weight", fontWeight);
 },
 mapStatus: function(status) {
    var retVal = status;
    switch (status) {
      case "o":
        retVal = "present";
        break;
      case "+":
      case "*":
        retVal = "perfect";
        break;
      case "-":
      case ".":
        retVal = "absent";
        break;
    }
    return retVal;    
  }
});