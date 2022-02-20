/**
  For simple applications, you might define all of your views in this file.
  For more complex applications, you might choose to separate these kind of
  definitions into multiple files under this folder and require() as needed.
*/

var
  kind = require("enyo/kind"),
  job = require("enyo/job"),
  Signals = require("enyo/Signals"),
  Repeater = require("enyo/Repeater"),
  WebService = require("enyo/WebService"),
  Scroller = require("enyo/Scroller"),
  EnyoImage = require("enyo/Image"),
  Control = require("enyo/Control"),
  FittableColumns = require("layout/FittableColumns"),
  FittableRows = require("layout/FittableRows"),
  Toolbar = require("onyx/Toolbar"),
  Button = require("onyx/Button"),
  ContextualPopup = require("onyx/ContextualPopup"),
  Popup = require("onyx/Popup"),
  Spinner = require("onyx/Spinner"),
  IntegerPicker = require("onyx/IntegerPicker"),
  PickerDecorator = require("onyx/PickerDecorator"),
  Tooltip = require("onyx/Tooltip"),
  TooltipDecorator = require("onyx/TooltipDecorator");

var
  JottoResult = require("../components/JottoResult"),
  JottoWord = require("../components/JottoWord"),
  UIKeyboard = require("../components/UIKeyboard"),
  HowToPlayPopup = require("../components/HowToPlayPopup");

var Unicode = {
  nbsp: "\u00A0",
  mdash: "\u2014",
  leftwardArrow: "\u2190",
  upwardArrow: "\u2191",
  rightwardArrow: "\u2192",
  downwardArrow: "\u2193"
};

module.exports = kind({
  kind: FittableRows,
  components: [
    {
      kind: Signals,
      onFinishGuess: "finishGuess"
    },
    {
      kind: WebService,
      name: "newGameWebService",
      callbackName: "callback",
      handleAs: "json",
      onResponse: "processGameServerResponse",
      onError: "processError",
      method: "POST",
      sync: false
    },
    {
      kind: WebService,
      name: "newGuessWebService",
      callbackName: "callback",
      handleAs: "json",
      onResponse: "processGameServerResponse",
      onError: "processError",
      method: "PUT",
      sync: false
    },
    {
      kind: Toolbar,
      components: [
        {
          kind: EnyoImage,
          /** style: "width:102px; height:49px", */
          src: "assets/jotto_logo_small.png",
          alt: "Jotto Logo"
        },
        {
          kind: TooltipDecorator, 
          components: [
            {
              kind: PickerDecorator,
              components: [
                {
                  style: "min-width: 60px;"
                },
                {
                  kind: IntegerPicker,
                  name: "puzzleSizePicker",
                  style: "color: white;",
                  min: 2,
                  max: 12,
                  value: 5
                }
              ]
            },
            {
              kind: Tooltip, 
              content: "Select length of mystery word"
            }
          ]
        },
        {
          kind: TooltipDecorator,
          components: [
            {
              kind: Button,
              name: "newGameButton",
              content: "New Game",
              style: "background-color: orange; color: black",
              ontap: "newGame"
            },
            {
              kind: Tooltip,
              content: "Start a brand new game"
            }
          ]
        },
        {
          kind: TooltipDecorator,
          components: [
            {
              kind: Button,
              content: "?",
              ontap: "showHowToPlayPopup"
            },
            {
              kind: Tooltip,
              content: "How to play"
            }
          ]
        }
      ]
    },
    {
      kind: Toolbar,
      components: [
        {
          kind: Control,
          name: "gameStatusLabel"
        }
      ]
    },
    {
      kind: Scroller,
      fit: true,
      components: [
        {
          name: "jottoWordItem",
          kind: FittableColumns,
          components: [
            {
              name: "jottoWordPadding",
              content: null,
              style: "padding: 5px 0"
            },
            {
              kind: JottoWord,
              name: "jottoWord"
            }
          ]
        },
        {
          kind: Repeater,
          name: "guesses",
          count: 0,
          onSetupItem: "setupGuess",
          components: [
            {
              name: "item",
              kind: FittableColumns,
              components: [
                {
                  name: "index",
                  content: null,
                  style: "padding: 5px 0"
                },
                {
                  kind: JottoResult,
                  result: "***o.",
                  guess: "jotox"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      kind: Toolbar,
      components: [
        {
          kind: UIKeyboard,
          name: "keyboardControl"
        },
        {
          kind: Popup,
          name: "popupGuessWarning",
          classes: "popup",
          content: "This guess has already been submitted!",
          style: "background-color: red"
        }
      ]
    },
    {
      name: "spinnerPopup",
      classes: "onyx-sample-popup",
      kind: Popup,
      centered: true,
      modal: true,
      floating: true,
      onHide: "popupHidden",
      scrim: true,
      components: [
        {
          kind: Spinner
        },
        {
          content: "Contacting server..."
        }
      ]
    },
    {
      kind: ContextualPopup, 
      name: "abortCurrentGamePopup",
      style: "width:250px", 
      title: "Abort current game?", 
      centered: true,
      modal: true,
      floating: true, 
      actionButtons: [
        {
          content: "Yes", 
          classes: "onyx-button-warning",
          ontap: "dismissConfirmationPopup"
        },
        {
          content: "No", 
          ontap: "dismissConfirmationPopup"
        }
      ]
    },
    {
      kind: HowToPlayPopup,
      classes: "onyx-sample-popup",
      name: "howToPlayPopup",
      floating: true,
      modal: true,
      centered: false
    }
  ],
  bindings: [
    {
      from: "updateGameStatus",
      to: "$.gameStatusLabel.content"
    }
  ],
  computed: [
    {
      method: "updateGameStatus",
      path: [ "gameStatus", "guessesRemaining" ]
    },
    {
      method: "updatePuzzleSolution",
      path: [ "numLetters", "solution" ]
    }
  ],
  create: function() {
    //this.log("MainView::create()");
    this.inherited(arguments);
    this.data = [];
    this.guessHistory = null;
    this.sessionToken = null;
    this.guessesRemaining = 0;
    this.guessesToStart = 0;
    this.numLetters = 0;
    this.gameStatus = 0;
    this.solution = "";
  },
  destroy: function() {
    //this.log("MainView::destroy()");
    this.inherited(arguments);
  },
  rendered: function() {
    //this.log("MainView::rendered()");
    this.inherited(arguments);
    this.$.guesses.setCount((this.data || []).length);
  },
  //baseUrl: "http://localhost:8081/api/game",
  baseUrl: "http://jotto2020.us-e2.cloudhub.io/api/game",
  clearGuessHistory: function() {
    this.guessHistory = {};
  },
  updateGameStatus: function() {
    var statusDescription = "";
    switch (this.gameStatus) {
      case 0:
        statusDescription = "Click the [New Game] button to start ...";
        break;
      case 1:
        statusDescription = "Guesses remaining: " + this.guessesRemaining + " of " + this.guessesToStart;
        break;
      case 2:
        statusDescription = "*** Kudos! You won with " + this.data.length + " of " + this.guessesToStart + " guesses. ***";
        break;
      case 3:
        statusDescription = "*** Sorry! You lost. ***";
        break;
    }
    return statusDescription;
  },
  updatePuzzleSolution: function() {
    var length = (String.valueOf(this.data.length)).length;
    var newContent = ">".repeat(length + 1) + Unicode.nbsp;
    this.$.jottoWordPadding.set("content", newContent);
    this.$.jottoWord.set("word", this.solution);
  },
  hideSpinnerPopup: function() {
    var p = this.$.spinnerPopup;
    if (p) {
      p.hide();
    }
  },
  popupHidden: function() {
    //document.activeElement.blur();
  },
  showSpinnerPopup: function() {
    var p = this.$.spinnerPopup;
    if (p) {
      p.show();
    }
  },
  showHowToPlayPopup: function() {
    var p = this.$.howToPlayPopup;
    if (p) {
      p.show();
    }
  },
  dismissConfirmationPopup: function(inSender, inEvent) {
    inSender.popup.hide();
    
    var abortCurrentGame = (inSender.content == "Yes");
    if (abortCurrentGame) {
      this.startNewGame();
    }

    /* stop propagation */
    return true;
  },
  showAbortCurrentGamePopup: function() {
    var p = this.$.abortCurrentGamePopup;
    if (p) {
      p.show();
    }
  },
  invokeNewGameWebService: function(numLetters) {
    //this.log("invokeNewGameWebService: " + numLetters);
    var url = this.baseUrl + "/jotto?letters=" + numLetters;
    this.$.newGameWebService.url = url;
    this.$.newGameWebService.send({});
    this.showSpinnerPopup();
  },
  invokeNewGuessWebService: function(guessText) {
    //this.log("invokeNewGuessWebService: " + guessText);
    var url = this.baseUrl + "/jotto/guess/" + guessText;
    this.$.newGuessWebService.url = url;
    this.$.newGuessWebService.set("headers", {"x-session": this.sessionToken});
    this.$.newGuessWebService.send({});
    this.guessHistory[guessText] = guessText;
    this.showSpinnerPopup();
  },
  finishGuess: function(inSender, inEvent) {
    var guessText = inEvent.guess;
    //this.log("finishGuess: " + guessText);
    if (null == this.guessHistory[guessText]) {
      this.invokeNewGuessWebService(guessText);
    }
    else {
      this.showPopupGuessWarning();
    }

    /* stop propagation */
    return true;
  },
  startNewGame: function() {
    var numLetters = this.$.puzzleSizePicker.selected.content;
    this.invokeNewGameWebService(numLetters);
    this.$.keyboardControl.resetKeyStates();
  },
  setupGuess: function(inSender, inEvent) {
    //this.log("setupGuess...");
    var index = inEvent.index;
    var item = inEvent.item;
    var datum = this.data[index];
    item.$.jottoResult.set("guess", datum.guess);
    item.$.jottoResult.set("result", datum.result);

    var newIndex = "" + (this.data.length - index);
    var newContent = Unicode.nbsp.repeat(2 - newIndex.length) + newIndex + ":" + Unicode.nbsp;
    item.$.index.setContent(newContent);

    /* stop propagation */
    return true;
  },
  newGame: function(inSender, inEvent) {
    //this.log("newGame click...");
    
    var gameStatus = this.get("gameStatus");
    if (gameStatus != 1) {
      this.startNewGame();
    }
    else {
      this.showAbortCurrentGamePopup();
    }

    inSender.blur();

    /* stop propagation */
    return true;
  },
  processGameServerResponse: function(inSender, inEvent) {
    this.hideSpinnerPopup();
    //this.sessionToken = inEvent.ajax.xhrResponse.headers["x-session"];

    // do something with it
    //var data = JSON.stringify(inEvent.data[0], null, 2);
    var data = inEvent.data;
    var stats = data.stats || {};
    var turnsRemaining = stats.turnsRemaining || 0;
    var turnsTakenList = data["turnsTaken"];
    var turnCount = turnsTakenList.length;

    this.set("sessionToken", data["token"]);
    this.set("numLetters", stats.puzzleLength);
    this.set("gameStatus", 1);
    this.set("solution", "?".repeat(this.numLetters));
    this.set("data", []);

    if (turnCount < 1) {
      // New game
      this.set("guessesToStart", turnsRemaining);
      this.clearGuessHistory();
      this.$.keyboardControl.set("guessLength", this.numLetters);
      this.$.keyboardControl.resetKeyStates();
      this.$.keyboardControl.resetGuestStatistics();
    }
    else {
      this.$.keyboardControl.set("turnsTaken", turnsTakenList);
    }

    this.set("guessesRemaining", turnsRemaining);

    for (var i = 0; i < turnCount; ++i) {
      var item = turnsTakenList[i];
      var guess = item.guess;
      var result = item.result;
      var entry = {guess: guess, result: result};
      this.data.splice(0, 0, entry); // prepend a new entry
    }

    this.$.guesses.setCount(this.data.length);

    var isGameOver = stats.gameOver || false;
    var isVictory = stats.victory || false;
    if (isGameOver) {
      var puzzleWord = stats.puzzleWord;
      var gameStatus = (isVictory) ? 2 : 3;
      this.set("solution", puzzleWord);
      this.set("gameStatus", gameStatus);
      this.$.keyboardControl.clear();
      this.$.keyboardControl.set("guessLength", 0);
    }

    /* stop propagation */
    return true;
  },
  processError: function(inSender, inEvent) {
    this.hideSpinnerPopup();
    var errorResponse = JSON.stringify(inEvent.ajax.xhrResponse, null, 2);
    var xhrBody = (inEvent.ajax.xhrResponse.body.length > 0) ? (JSON.parse(inEvent.ajax.xhrResponse.body)) : null;
    var code = (xhrBody) ? xhrBody.code : 500;
    var errorDescription = (xhrBody) ? xhrBody.detailedMessage : "";
    var errorLog = "Error (" + code + "): " + inEvent.data + "! " + errorDescription;
    this.log(errorLog);
  },
  showPopupGuessWarning: function(inSender, inEvent) {
    var p = this.$.popupGuessWarning;
    if (p) {
      p.setShowing(true);
      job("autoHidePopup", function() {
        p.hide();
      }, 2000);
    }

    /* stop propagation */
    return true;
  }
});
