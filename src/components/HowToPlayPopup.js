var
  kind = require("enyo/kind"),
  EnyoImage = require("enyo/Image"),
  Control = require("enyo/Control"),
  FittableColumns = require("layout/FittableColumns"),
  FittableRows = require("layout/FittableRows"),
  Toolbar = require("onyx/Toolbar"),
  Button = require("onyx/Button"),
  Popup = require("onyx/Popup");

var Unicode = {
  nbsp: "\u00A0",
  mdash: "\u2014",
  leftwardArrow: "\u2190",
  upwardArrow: "\u2191",
  rightwardArrow: "\u2192",
  downwardArrow: "\u2193"
};

module.exports = kind({
  kind: Popup,
  components: [
    {
      kind: FittableRows,
      components: [
        {
          kind: Button,
          content: "Dismiss",
          ontap: "dismissPopup"
        },
        {
          kind: Toolbar,
          components: [
            {
              kind: EnyoImage,
              /*style: "width:165px; height:55px",*/
              src: "assets/QuickHowTo.png",
              placeholder: EnyoImage.placeholder,
              alt: "Quick How To"
            }
          ]
        }      
      ]
    }
  ],
  create: function() {
    this.inherited(arguments);
  },
  destroy: function() {
    this.inherited(arguments);
  },
  rendered: function() {
    this.inherited(arguments);
  },
  dismissPopup: function(inSender, inEvent) {
    this.hide();
    return true;
  }
});