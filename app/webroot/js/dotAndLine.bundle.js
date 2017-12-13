webpackJsonp([4],{

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(67);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = exports.Circle = function () {
  function Circle() {
    _classCallCheck(this, Circle);

    this.requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000.0 / 60.0);
      };
    }();

    this.canvas = (0, _jquery2.default)('#c1')[0];

    this.canvas.width = 980;
    this.canvas.height = 250;
    if (this.canvas.getContext) {
      this.context = this.canvas.getContext('2d');
      this.positionX = 0; //x座標
      this.loop(); //アニメーションを実行
    }
  }

  //描画処理をファンクションで定義します


  _createClass(Circle, [{
    key: 'drawCircle',
    value: function drawCircle() {
      this.context.beginPath();
      //y=sin(x)のグラフを再現
      this.context.arc(this.positionX, Math.sin(this.positionX / 180 * Math.PI) * 100 + 130, 2, 0 / 180 * Math.PI, 360 / 180 * Math.PI);
      this.context.fillStyle = 'rgb(0, 0, 0)';
      this.context.fill();
    }

    //アニメーションの処理

  }, {
    key: 'loop',
    value: function loop() {
      this.requestAnimationFrame.call(window, this.loop.bind(this));
      //描画を半透明の背景色で塗りつぶす
      this.context.globalAlpha = 0.1;
      this.context.fillStyle = (0, _jquery2.default)('#c1').css("background-color");
      this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.globalAlpha = 1;
      //ループ毎にx座標を加算
      this.positionX += 1;
      //x座標が領域外の場合は最初の位置に戻す
      if (this.positionX > this.canvas.width) {
        this.positionX = 0;
        //ここでクリア
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      }
      //描画処理
      this.drawCircle();
    }
  }]);

  return Circle;
}();

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Yagasuri = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(67);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Yagasuri = exports.Yagasuri = function () {
  function Yagasuri() {
    _classCallCheck(this, Yagasuri);

    this.requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    }();

    this.cancelAnimationFrame = function () {
      return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
    }();

    this.upperPositionX = [];
    this.canvas = (0, _jquery2.default)('#c2')[0];

    this.canvas.width = 980;
    this.canvas.height = 450;
    if (this.canvas.getContext) {
      this.context = this.canvas.getContext('2d');
      this.context.strokeStyle = '#000';
      this.context.lineWidth = 2;
      var x = 50;
      for (var i = 0; i < 4; i++) {
        this.upperPositionX[i] = x;
        x += 220;
      }
      this.positionY = 50;
      this.total = 0;
      this.drawDot(); //アニメーションを実行
    }
  }

  //最初の点を描画


  _createClass(Yagasuri, [{
    key: 'drawDot',
    value: function drawDot() {
      this.context.beginPath();
      //↓これ増やせば点増える
      for (var i = 0; i < this.upperPositionX.length; i++) {
        this.context.arc(this.upperPositionX[i], 50, 4, 0, Math.PI * 2, false);
      }
      // this.context.arc(250, 50, 4, 0, Math.PI*2, false);
      //↑これ増やせば点増える
      this.context.fillStyle = 'rgb(0, 0, 0)';
      this.context.fill();

      setTimeout(this.loop.bind(this), 2000);
    }
  }, {
    key: 'drawFirstLine',
    value: function drawFirstLine() {
      for (var i = 0; i < this.upperPositionX.length; i++) {
        this.context.beginPath();
        this.context.moveTo(this.upperPositionX[i], this.positionY);
        this.context.lineTo(this.upperPositionX[i] + this.total, this.positionY);
        this.context.closePath();
        this.context.stroke();
      }
    }
  }, {
    key: 'drawSecondLine',
    value: function drawSecondLine() {
      for (var i = 0; i < this.upperPositionX.length; i++) {
        this.context.beginPath();
        this.context.moveTo(this.upperPositionX[i] + 101, this.positionY + 0.5);
        this.context.lineTo(this.upperPositionX[i] + 101 + this.total, this.positionY + 0.5 + this.total);
        this.context.closePath();
        this.context.stroke();
      }
    }
  }, {
    key: 'drawThirdLine',
    value: function drawThirdLine() {
      for (var i = 0; i < this.upperPositionX.length; i++) {
        this.context.beginPath();
        this.context.moveTo(this.upperPositionX[i] + 150, this.positionY + 50);
        this.context.lineTo(this.upperPositionX[i] + 150 - this.total, this.positionY + 50);
        this.context.closePath();
        this.context.stroke();
      }
    }
  }, {
    key: 'drawFourthLine',
    value: function drawFourthLine() {
      for (var i = 0; i < this.upperPositionX.length; i++) {
        this.context.beginPath();
        this.context.moveTo(this.upperPositionX[i] + 50, this.positionY + 49.5);
        this.context.lineTo(this.upperPositionX[i] + 50 - this.total, this.positionY + 49.5 - this.total);
        this.context.closePath();
        this.context.stroke();
      }
    }
  }, {
    key: 'reDrawFourthLine',
    value: function reDrawFourthLine() {
      for (var i = 0; i < this.upperPositionX.length; i++) {
        this.context.beginPath();
        this.context.moveTo(this.upperPositionX[i] + 4, this.positionY + 4);
        this.context.lineTo(this.upperPositionX[i] + this.total + 4.5, this.positionY + this.total + 4);
        this.context.closePath();
        this.context.stroke();
      }
    }

    //アニメーションの処理

  }, {
    key: 'loop',
    value: function loop() {
      var loop = this.requestAnimationFrame.call(window, this.loop.bind(this));
      this.total += 2;
      //x座標が領域外の場合は最初の位置に戻す
      if (this.total >= 102) {
        this.total = 0;
        this.cancelAnimationFrame.call(window, loop);
        this.secondLoop();
      }
      //描画処理
      this.drawFirstLine();
    }
  }, {
    key: 'secondLoop',
    value: function secondLoop() {
      var loop = this.requestAnimationFrame.call(window, this.secondLoop.bind(this));
      this.total += 1;
      //x座標が領域外の場合は最初の位置に戻す
      if (this.total >= 50) {
        this.total = 0;
        this.cancelAnimationFrame.call(window, loop);
        this.thirdLoop();
      }
      //描画処理
      this.drawSecondLine();
    }
  }, {
    key: 'thirdLoop',
    value: function thirdLoop() {
      var loop = this.requestAnimationFrame.call(window, this.thirdLoop.bind(this));
      this.total += 2;
      //x座標が領域外の場合は最初の位置に戻す
      if (this.total >= 102) {
        this.total = 0;
        this.cancelAnimationFrame.call(window, loop);
        this.fourthLoop();
      }
      //描画処理
      this.drawThirdLine();
    }
  }, {
    key: 'fourthLoop',
    value: function fourthLoop() {
      var loop = this.requestAnimationFrame.call(window, this.fourthLoop.bind(this));
      this.total += 1;
      //x座標が領域外の場合は最初の位置に戻す
      if (this.total >= 50) {
        this.total = 0;
        this.cancelAnimationFrame.call(window, loop);
        this.context.globalCompositeOperation = 'destination-out';
        this.reFourthLoop();
      }
      //描画処理
      this.drawFourthLine();
    }
  }, {
    key: 'reFourthLoop',
    value: function reFourthLoop() {
      var loop = this.requestAnimationFrame.call(window, this.reFourthLoop.bind(this));
      this.total += 1;
      //x座標が領域外の場合は最初の位置に戻す
      if (this.total >= 50) {
        this.total = 0;
        this.cancelAnimationFrame.call(window, loop);
      }
      //描画処理
      this.reDrawFourthLine();
    }
  }]);

  return Yagasuri;
}();

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _circle = __webpack_require__(68);

var _yagasuri = __webpack_require__(69);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DotAndLine = function DotAndLine() {
  _classCallCheck(this, DotAndLine);

  this.circle = new _circle.Circle();
  this.yagasuri = new _yagasuri.Yagasuri();
};

new DotAndLine();

/***/ })

},[74]);