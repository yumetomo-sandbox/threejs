import $ from 'jquery'

export class Yagasuri {
  constructor() {

    this.requestAnimationFrame = (() => {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    })();

    this.cancelAnimationFrame = (() => {
      return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        window.msCancelAnimationFrame;
    })();

    this.upperPositionX = [];
    this.canvas = $('#c2')[0];

    this.canvas.width = 980;
    this.canvas.height = 450;
    if (this.canvas.getContext){
      this.context = this.canvas.getContext('2d');
      this.context.strokeStyle = '#000';
      this.context.lineWidth = 2;
      let x = 50;
      for(let i = 0; i < 4; i++) {
        this.upperPositionX[i] = x;
        x += 220;
      }
      this.positionY = 50;
      this.total = 0;
      this.drawDot(); //アニメーションを実行
    }
  }

  //最初の点を描画
  drawDot() {
    this.context.beginPath();
    //↓これ増やせば点増える
    for(let i = 0; i < this.upperPositionX.length; i++) {
      this.context.arc(this.upperPositionX[i], 50, 4, 0, Math.PI*2, false);
    }
    // this.context.arc(250, 50, 4, 0, Math.PI*2, false);
    //↑これ増やせば点増える
    this.context.fillStyle = 'rgb(0, 0, 0)';
    this.context.fill();

    setTimeout(this.loop.bind(this), 2000)
  }

  drawFirstLine() {
    for(let i = 0; i < this.upperPositionX.length; i++) {
      this.context.beginPath();
      this.context.moveTo(this.upperPositionX[i], this.positionY);
      this.context.lineTo(this.upperPositionX[i] + this.total, this.positionY);
      this.context.closePath();
      this.context.stroke();
    }
  }

  drawSecondLine() {
    for(let i = 0; i < this.upperPositionX.length; i++) {
      this.context.beginPath();
      this.context.moveTo(this.upperPositionX[i] + 101, this.positionY + 0.5);
      this.context.lineTo(this.upperPositionX[i] + 101 + this.total, this.positionY + 0.5 + this.total);
      this.context.closePath();
      this.context.stroke();
    }
  }

  drawThirdLine() {
    for(let i = 0; i < this.upperPositionX.length; i++) {
      this.context.beginPath();
      this.context.moveTo(this.upperPositionX[i] + 150, this.positionY + 50);
      this.context.lineTo(this.upperPositionX[i] + 150 - this.total, this.positionY + 50);
      this.context.closePath();
      this.context.stroke();
    }
  }

  drawFourthLine() {
    for(let i = 0; i < this.upperPositionX.length; i++) {
      this.context.beginPath();
      this.context.moveTo(this.upperPositionX[i] + 50, this.positionY + 49.5);
      this.context.lineTo(this.upperPositionX[i] + 50 - this.total, this.positionY + 49.5 - this.total);
      this.context.closePath();
      this.context.stroke();
    }
  }

  reDrawFourthLine() {
    for(let i = 0; i < this.upperPositionX.length; i++) {
      this.context.beginPath();
      this.context.moveTo(this.upperPositionX[i] + 4, this.positionY + 4);
      this.context.lineTo(this.upperPositionX[i] + this.total + 4.5, this.positionY  + this.total + 4);
      this.context.closePath();
      this.context.stroke();
    }
  }

  //アニメーションの処理
  loop() {
    const loop = this.requestAnimationFrame.call(window, this.loop.bind(this));
    this.total += 2;
    //x座標が領域外の場合は最初の位置に戻す
    if(this.total >= 102){
      this.total = 0;
      this.cancelAnimationFrame.call(window, loop);
      this.secondLoop();
    }
    //描画処理
    this.drawFirstLine();
  }

  secondLoop() {
    const loop = this.requestAnimationFrame.call(window, this.secondLoop.bind(this));
    this.total += 1;
    //x座標が領域外の場合は最初の位置に戻す
    if(this.total >= 50){
      this.total = 0;
      this.cancelAnimationFrame.call(window, loop);
      this.thirdLoop();
    }
    //描画処理
    this.drawSecondLine();
  }

  thirdLoop() {
    const loop = this.requestAnimationFrame.call(window, this.thirdLoop.bind(this));
    this.total += 2;
    //x座標が領域外の場合は最初の位置に戻す
    if(this.total >= 102){
      this.total = 0;
      this.cancelAnimationFrame.call(window, loop);
      this.fourthLoop();
    }
    //描画処理
    this.drawThirdLine();
  }

  fourthLoop() {
    const loop = this.requestAnimationFrame.call(window, this.fourthLoop.bind(this));
    this.total += 1;
    //x座標が領域外の場合は最初の位置に戻す
    if(this.total >= 50){
      this.total = 0;
      this.cancelAnimationFrame.call(window, loop);
      this.context.globalCompositeOperation = 'destination-out';
      this.reFourthLoop();
    }
    //描画処理
    this.drawFourthLine();
  }

  reFourthLoop() {
    const loop = this.requestAnimationFrame.call(window, this.reFourthLoop.bind(this));
    this.total += 1;
    //x座標が領域外の場合は最初の位置に戻す
    if(this.total >= 50){
      this.total = 0;
      this.cancelAnimationFrame.call(window, loop);
    }
    //描画処理
    this.reDrawFourthLine();
  }
}
