import $ from 'jquery'

export class Circle {
  constructor() {

    this.requestAnimationFrame = (() => {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
          window.setTimeout(callback, 1000.0 / 60.0);
        };
    })();

    this.canvas = $('#c1')[0];

    this.canvas.width = 980;
    this.canvas.height = 250;
    if (this.canvas.getContext){
      this.context = this.canvas.getContext('2d');
      this.positionX = 0; //x座標
      this.loop(); //アニメーションを実行
    }
  }

  //描画処理をファンクションで定義します
  drawCircle(){
    this.context.beginPath();
    //y=sin(x)のグラフを再現
    this.context.arc(this.positionX, (Math.sin((this.positionX/180)*Math.PI))*100+130, 2, (0/180)*Math.PI, (360/180)*Math.PI);
    this.context.fillStyle = 'rgb(0, 0, 0)';
    this.context.fill();
  }

  //アニメーションの処理
  loop() {
    this.requestAnimationFrame.call(window, this.loop.bind(this));
    //描画を半透明の背景色で塗りつぶす
    this.context.globalAlpha = 0.1;
    this.context.fillStyle = $('#c1').css("background-color");
    this.context.fillRect(0,0, this.context.canvas.width, this.context.canvas.height);
    this.context.globalAlpha = 1;
    //ループ毎にx座標を加算
    this.positionX += 1;
    //x座標が領域外の場合は最初の位置に戻す
    if(this.positionX>this.canvas.width){
      this.positionX = 0;
      //ここでクリア
      this.context.clearRect(0,0, this.context.canvas.width, this.context.canvas.height);
    }
    //描画処理
    this.drawCircle();
  }
}
