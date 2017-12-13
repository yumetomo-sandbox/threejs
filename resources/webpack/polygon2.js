import THREELib from 'three-js';
import TWEEN from 'tween.js';
import $ from 'jquery';

class Polygon {

  constructor() {
    this.THREE = THREELib();
    this.camera;
    this.scene;
    this.renderer;
    this.animateFlg = false;
    this.q = new this.THREE.Quaternion();
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.init();

    $(window).on('resize', () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      const widthRatio = this.windowWidth / 1600;
      const heightRatio = this.windowHeight / 900;
      const ratio = Math.min(widthRatio, heightRatio);
      $('#frame').css('transform', 'scale('+ ratio +')');
    })
  }

  init() {
    // remderer作成
    this.renderer = new this.THREE.WebGLRenderer({alpha: true, antialias: true});
    this.renderer.setSize( 1600, 900 );
    this.renderer.setClearColor(new this.THREE.Color(0xffffff), 0.0);

    const widthRatio = this.windowWidth / 1600;
    const heightRatio = this.windowHeight / 900;
    const ratio = Math.min(widthRatio, heightRatio);
    $('#frame').css('transform', 'scale('+ ratio +')');
    // scene作成
    this.scene = new this.THREE.Scene();

    // camera作成
    this.camera = new this.THREE.PerspectiveCamera( 84, 1600 / 900, -10, 100 );
    this.camera.position.z = 1000;
    this.scene.add( this.camera );

    // light作成
    let light = new this.THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0,1);
    this.scene.add(light);

    //ジオメトリ（形状）の宣言と生成
    this.geometry = new this.THREE.Geometry();
    this.geometry2 = new this.THREE.Geometry();
    this.geometry3 = new this.THREE.Geometry();
    this.geometry4 = new this.THREE.Geometry();
    this.geometry5 = new this.THREE.Geometry();
    this.geometry6 = new this.THREE.Geometry();
    this.geometry7 = new this.THREE.Geometry();
    this.geometry8 = new this.THREE.Geometry();
    this.geometry9 = new this.THREE.Geometry();
    this.geometry10 = new this.THREE.Geometry();
    this.geometry11 = new this.THREE.Geometry();
    this.geometry12 = new this.THREE.Geometry();
    this.geometry13 = new this.THREE.Geometry();
    this.geometry14 = new this.THREE.Geometry();
    this.geometry15 = new this.THREE.Geometry();
    this.geometry16 = new this.THREE.Geometry();
    this.geometry17 = new this.THREE.Geometry();
    this.geometry18 = new this.THREE.Geometry();
    this.geometry19 = new this.THREE.Geometry();
    this.geometry20 = new this.THREE.Geometry();
    this.geometry21 = new this.THREE.Geometry();
    this.geometry22 = new this.THREE.Geometry();
    this.geometry23 = new this.THREE.Geometry();
    this.geometry24 = new this.THREE.Geometry();
    this.geometry25 = new this.THREE.Geometry();
    this.geometry26 = new this.THREE.Geometry();
    this.geometry27 = new this.THREE.Geometry();
    this.geometry28 = new this.THREE.Geometry();
    this.geometry29 = new this.THREE.Geometry();
    this.geometry30 = new this.THREE.Geometry();
    this.geometry31 = new this.THREE.Geometry();
    this.geometry32 = new this.THREE.Geometry();
    this.geometry33 = new this.THREE.Geometry();
    this.geometry34 = new this.THREE.Geometry();
    this.geometry35 = new this.THREE.Geometry();
    this.geometry36 = new this.THREE.Geometry();
    this.geometry37 = new this.THREE.Geometry();
    this.geometry38 = new this.THREE.Geometry();
    this.geometry39 = new this.THREE.Geometry();
    this.geometry40 = new this.THREE.Geometry();
    this.geometry41 = new this.THREE.Geometry();
    this.geometry42 = new this.THREE.Geometry();
    this.geometry43 = new this.THREE.Geometry();
    this.geometry44 = new this.THREE.Geometry();
    this.geometry45 = new this.THREE.Geometry();
    this.geometry46 = new this.THREE.Geometry();
    this.geometry47 = new this.THREE.Geometry();
    this.geometry48 = new this.THREE.Geometry();
    this.geometry49 = new this.THREE.Geometry();
    this.geometry50 = new this.THREE.Geometry();
    this.geometry51 = new this.THREE.Geometry();
    this.geometry52 = new this.THREE.Geometry();
    this.geometry53 = new this.THREE.Geometry();
    this.geometry54 = new this.THREE.Geometry();
    this.geometry55 = new this.THREE.Geometry();
    this.geometry56 = new this.THREE.Geometry();
    this.geometry57 = new this.THREE.Geometry();
    this.geometry58 = new this.THREE.Geometry();
    this.geometry59 = new this.THREE.Geometry();

    //頂点座標データを追加

    // this.geometry.vertices[0] = new this.THREE.Vector3(-0, 0, 0);
    // this.geometry.vertices[1] = new this.THREE.Vector3(-0, 0, 0);
    // this.geometry.vertices[2] = new this.THREE.Vector3(-0, 0, 0);

    this.geometry.vertices[0] = new this.THREE.Vector3(-1400, 950, 10);
    this.geometry.vertices[1] = new this.THREE.Vector3(-1630, 700, 10);
    this.geometry.vertices[2] = new this.THREE.Vector3(-1490, 660, 10);

    this.geometry2.vertices[0] = new this.THREE.Vector3(-1490, 660, 10);
    this.geometry2.vertices[1] = new this.THREE.Vector3(-1440, 820, 10);
    this.geometry2.vertices[2] = new this.THREE.Vector3(-1140, 420, 10);

    this.geometry3.vertices[0] = new this.THREE.Vector3(-1490, 660, 10);
    this.geometry3.vertices[1] = new this.THREE.Vector3(-1730, 570, 10);
    this.geometry3.vertices[2] = new this.THREE.Vector3(-1396, 391, 10);

    this.geometry4.vertices[0] = new this.THREE.Vector3(-1396, 391, 10);
    this.geometry4.vertices[1] = new this.THREE.Vector3(-1140, 420, 10);
    this.geometry4.vertices[2] = new this.THREE.Vector3(-1328, 549, 10);

    this.geometry5.vertices[0] = new this.THREE.Vector3(-1140, 420, 10);
    this.geometry5.vertices[1] = new this.THREE.Vector3(-1020, 310, 10);
    this.geometry5.vertices[2] = new this.THREE.Vector3(-910, 450, 10);

    this.geometry6.vertices[0] = new this.THREE.Vector3(-910, 450, 10);
    this.geometry6.vertices[1] = new this.THREE.Vector3(-990, 44, 10);
    this.geometry6.vertices[2] = new this.THREE.Vector3(-868, 126, 10);

    this.geometry7.vertices[0] = new this.THREE.Vector3(-910, 450, 10);
    this.geometry7.vertices[1] = new this.THREE.Vector3(-848, 250, 10);
    this.geometry7.vertices[2] = new this.THREE.Vector3(-850, 425, 10);

    this.geometry8.vertices[0] = new this.THREE.Vector3(-848, 250, 10);
    this.geometry8.vertices[1] = new this.THREE.Vector3(-868, 126, 10);
    this.geometry8.vertices[2] = new this.THREE.Vector3(-800, 190, 10);

    this.geometry9.vertices[0] = new this.THREE.Vector3(-868, 126, 10);
    this.geometry9.vertices[1] = new this.THREE.Vector3(-800, 190, 10);
    this.geometry9.vertices[2] = new this.THREE.Vector3(-806, -20, 10);

    this.geometry10.vertices[0] = new this.THREE.Vector3(-910, 450, 10);
    this.geometry10.vertices[1] = new this.THREE.Vector3(-810, 409, 10);
    this.geometry10.vertices[2] = new this.THREE.Vector3(-734, 408, 10);

    this.geometry11.vertices[0] = new this.THREE.Vector3(-850, 425, 10);
    this.geometry11.vertices[1] = new this.THREE.Vector3(-810, 409, 10);
    this.geometry11.vertices[2] = new this.THREE.Vector3(-814, 350, 10);

    this.geometry12.vertices[0] = new this.THREE.Vector3(-810, 409, 10);
    this.geometry12.vertices[1] = new this.THREE.Vector3(-814, 350, 10);
    this.geometry12.vertices[2] = new this.THREE.Vector3(-734, 408, 10);

    this.geometry13.vertices[0] = new this.THREE.Vector3(-734, 408, 10);
    this.geometry13.vertices[1] = new this.THREE.Vector3(-680, 392, 10);
    this.geometry13.vertices[2] = new this.THREE.Vector3(-620, 410, 10);

    this.geometry14.vertices[0] = new this.THREE.Vector3(-680, 392, 10);
    this.geometry14.vertices[1] = new this.THREE.Vector3(-694, 332, 10);
    this.geometry14.vertices[2] = new this.THREE.Vector3(-620, 366, 10);

    this.geometry15.vertices[0] = new this.THREE.Vector3(-620, 410, 10);
    this.geometry15.vertices[1] = new this.THREE.Vector3(-680, 392, 10);
    this.geometry15.vertices[2] = new this.THREE.Vector3(-530, 410, 10);

    this.geometry16.vertices[0] = new this.THREE.Vector3(-530, 410, 10);
    this.geometry16.vertices[1] = new this.THREE.Vector3(-508, 365, 10);
    this.geometry16.vertices[2] = new this.THREE.Vector3(-360, 406, 10);

    this.geometry17.vertices[0] = new this.THREE.Vector3(-360, 406, 10);
    this.geometry17.vertices[1] = new this.THREE.Vector3(-430, 387, 10);
    this.geometry17.vertices[2] = new this.THREE.Vector3(-270, 385, 10);

    this.geometry18.vertices[0] = new this.THREE.Vector3(-430, 387, 10);
    this.geometry18.vertices[1] = new this.THREE.Vector3(-270, 385, 10);
    this.geometry18.vertices[2] = new this.THREE.Vector3(-294, 375, 10);

    this.geometry19.vertices[0] = new this.THREE.Vector3(-270, 385, 10);
    this.geometry19.vertices[1] = new this.THREE.Vector3(-294, 375, 10);
    this.geometry19.vertices[2] = new this.THREE.Vector3(-240, 336, 10);

    this.geometry20.vertices[0] = new this.THREE.Vector3(-700, 176, 0);
    this.geometry20.vertices[1] = new this.THREE.Vector3(-676, 108, 0);
    this.geometry20.vertices[2] = new this.THREE.Vector3(-578, 110, 0);

    this.geometry21.vertices[0] = new this.THREE.Vector3(-676, 108, 0);
    this.geometry21.vertices[1] = new this.THREE.Vector3(-578, 110, 0);
    this.geometry21.vertices[2] = new this.THREE.Vector3(-559, -28, 0);

    this.geometry22.vertices[0] = new this.THREE.Vector3(-559, -28, 0);
    this.geometry22.vertices[1] = new this.THREE.Vector3(-570, 50, 0);
    this.geometry22.vertices[2] = new this.THREE.Vector3(-467, 37, 0);

    this.geometry23.vertices[0] = new this.THREE.Vector3(-559, -28, 0);
    this.geometry23.vertices[1] = new this.THREE.Vector3(-467, 37, 0);
    this.geometry23.vertices[2] = new this.THREE.Vector3(-406, -47, 0);

    this.geometry24.vertices[0] = new this.THREE.Vector3(-406, -47, 0);
    this.geometry24.vertices[1] = new this.THREE.Vector3(-306, 10, 0);
    this.geometry24.vertices[2] = new this.THREE.Vector3(-300, -40, 0);

    this.geometry25.vertices[0] = new this.THREE.Vector3(-306, 10, 0);
    this.geometry25.vertices[1] = new this.THREE.Vector3(-300, -40, 0);
    this.geometry25.vertices[2] = new this.THREE.Vector3(-244, -112, 0);

    this.geometry26.vertices[0] = new this.THREE.Vector3(-306, 10, 0);
    this.geometry26.vertices[1] = new this.THREE.Vector3(-260, -80, 0);
    this.geometry26.vertices[2] = new this.THREE.Vector3(-198, -44, 0);

    this.geometry27.vertices[0] = new this.THREE.Vector3(-198, -44, 0);
    this.geometry27.vertices[1] = new this.THREE.Vector3(-82, 8, 0);
    this.geometry27.vertices[2] = new this.THREE.Vector3(-56, -82, 0);

    this.geometry28.vertices[0] = new this.THREE.Vector3(-82, 8, 0);
    this.geometry28.vertices[1] = new this.THREE.Vector3(-56, -82, 0);
    this.geometry28.vertices[2] = new this.THREE.Vector3(46, 80, 0);

    this.geometry29.vertices[0] = new this.THREE.Vector3(-56, -82, 0);
    this.geometry29.vertices[1] = new this.THREE.Vector3(-22, -86, 0);
    this.geometry29.vertices[2] = new this.THREE.Vector3(-40, -195, 0);

    this.geometry30.vertices[0] = new this.THREE.Vector3(-56, -82, 0);
    this.geometry30.vertices[1] = new this.THREE.Vector3(46, 80, 0);
    this.geometry30.vertices[2] = new this.THREE.Vector3(60, 6, 0);

    this.geometry31.vertices[0] = new this.THREE.Vector3(46, 80, 0);
    this.geometry31.vertices[1] = new this.THREE.Vector3(82, 45, 0);
    this.geometry31.vertices[2] = new this.THREE.Vector3(124, 70, 0);

    this.geometry32.vertices[0] = new this.THREE.Vector3(124, 70, 0);
    this.geometry32.vertices[1] = new this.THREE.Vector3(82, 45, 0);
    this.geometry32.vertices[2] = new this.THREE.Vector3(142, -6, 0);

    this.geometry33.vertices[0] = new this.THREE.Vector3(124, 70, 0);
    this.geometry33.vertices[1] = new this.THREE.Vector3(142, -6, 0);
    this.geometry33.vertices[2] = new this.THREE.Vector3(190, 72, 0);

    this.geometry34.vertices[0] = new this.THREE.Vector3(190, 72, 0);
    this.geometry34.vertices[1] = new this.THREE.Vector3(340, 172, 0);
    this.geometry34.vertices[2] = new this.THREE.Vector3(338, 97, 0);

    this.geometry35.vertices[0] = new this.THREE.Vector3(338, 97, 0);
    this.geometry35.vertices[1] = new this.THREE.Vector3(374, 100, 0);
    this.geometry35.vertices[2] = new this.THREE.Vector3(368, 16, 0);

    this.geometry36.vertices[0] = new this.THREE.Vector3(368, 16, 0);
    this.geometry36.vertices[1] = new this.THREE.Vector3(373, 76, 0);
    this.geometry36.vertices[2] = new this.THREE.Vector3(470, 50, 0);

    this.geometry37.vertices[0] = new this.THREE.Vector3(470, 50, 0);
    this.geometry37.vertices[1] = new this.THREE.Vector3(432, -52, 0);
    this.geometry37.vertices[2] = new this.THREE.Vector3(622, -49, 0);

    this.geometry38.vertices[0] = new this.THREE.Vector3(622, -49, 0);
    this.geometry38.vertices[1] = new this.THREE.Vector3(520, -52, 0);
    this.geometry38.vertices[2] = new this.THREE.Vector3(617, -165, 0);

    this.geometry39.vertices[0] = new this.THREE.Vector3(617, -165, 0);
    this.geometry39.vertices[1] = new this.THREE.Vector3(1110, 25, 0);
    this.geometry39.vertices[2] = new this.THREE.Vector3(1092, -264, 0);

    this.geometry40.vertices[0] = new this.THREE.Vector3(617, -165, 0);
    this.geometry40.vertices[1] = new this.THREE.Vector3(1092, -264, 0);
    this.geometry40.vertices[2] = new this.THREE.Vector3(990, -363, 0);

    this.geometry41.vertices[0] = new this.THREE.Vector3(990, -363, 0);
    this.geometry41.vertices[1] = new this.THREE.Vector3(640, -396, 0);
    this.geometry41.vertices[2] = new this.THREE.Vector3(814, -442, 0);

    this.geometry42.vertices[0] = new this.THREE.Vector3(990, -363, 0);
    this.geometry42.vertices[1] = new this.THREE.Vector3(1018, -508, 0);
    this.geometry42.vertices[2] = new this.THREE.Vector3(1032, -432, 0);

    this.geometry43.vertices[0] = new this.THREE.Vector3(990, -363, 0);
    this.geometry43.vertices[1] = new this.THREE.Vector3(1404, -570, 0);
    this.geometry43.vertices[2] = new this.THREE.Vector3(1420, -358, 0);

    this.geometry44.vertices[0] = new this.THREE.Vector3(990, -363, 0);
    this.geometry44.vertices[1] = new this.THREE.Vector3(1420, -358, 0);
    this.geometry44.vertices[2] = new this.THREE.Vector3(1078, -336, 0);

    this.geometry45.vertices[0] = new this.THREE.Vector3(1078, -336, 0);
    this.geometry45.vertices[1] = new this.THREE.Vector3(1420, -358, 0);
    this.geometry45.vertices[2] = new this.THREE.Vector3(1092, -264, 0);

    this.geometry46.vertices[0] = new this.THREE.Vector3(1092, -264, 0);
    this.geometry46.vertices[1] = new this.THREE.Vector3(1420, -358, 0);
    this.geometry46.vertices[2] = new this.THREE.Vector3(1670, -220, 0);

    this.geometry47.vertices[0] = new this.THREE.Vector3(1420, -358, 0);
    this.geometry47.vertices[1] = new this.THREE.Vector3(1404, -570, 0);
    this.geometry47.vertices[2] = new this.THREE.Vector3(1540, -564, 0);

    this.geometry48.vertices[0] = new this.THREE.Vector3(1404, -570, 0);
    this.geometry48.vertices[1] = new this.THREE.Vector3(1400, -729, 0);
    this.geometry48.vertices[2] = new this.THREE.Vector3(1470, -596, 0);

    this.geometry49.vertices[0] = new this.THREE.Vector3(1470, -596, 0);
    this.geometry49.vertices[1] = new this.THREE.Vector3(1540, -564, 0);
    this.geometry49.vertices[2] = new this.THREE.Vector3(1500, -765, 0);

    this.geometry50.vertices[0] = new this.THREE.Vector3(1470, -596, 0);
    this.geometry50.vertices[1] = new this.THREE.Vector3(1400, -729, 0);
    this.geometry50.vertices[2] = new this.THREE.Vector3(1500, -765, 0);

    this.geometry51.vertices[0] = new this.THREE.Vector3(1500, -765, 0);
    this.geometry51.vertices[1] = new this.THREE.Vector3(1583, -730, 0);
    this.geometry51.vertices[2] = new this.THREE.Vector3(1800, -850, 0);

    this.geometry52.vertices[0] = new this.THREE.Vector3(1583, -730, 0);
    this.geometry52.vertices[1] = new this.THREE.Vector3(1540, -564, 0);
    this.geometry52.vertices[2] = new this.THREE.Vector3(1630, -432, 0);

    this.geometry53.vertices[0] = new this.THREE.Vector3(1420, -358, 0);
    this.geometry53.vertices[1] = new this.THREE.Vector3(1540, -564, 0);
    this.geometry53.vertices[2] = new this.THREE.Vector3(1525, -435, 0);

    this.geometry54.vertices[0] = new this.THREE.Vector3(1420, -358, 0);
    this.geometry54.vertices[1] = new this.THREE.Vector3(1525, -435, 0);
    this.geometry54.vertices[2] = new this.THREE.Vector3(1670, -220, 0);

    this.geometry55.vertices[0] = new this.THREE.Vector3(1525, -435, 0);
    this.geometry55.vertices[1] = new this.THREE.Vector3(1625, -435, 0);
    this.geometry55.vertices[2] = new this.THREE.Vector3(1625, -364, 0);

    this.geometry56.vertices[0] = new this.THREE.Vector3(-1070, -160, 0);
    this.geometry56.vertices[1] = new this.THREE.Vector3(-1650, -100, 0);
    this.geometry56.vertices[2] = new this.THREE.Vector3(-1630, 430, 0);

    this.geometry57.vertices[0] = new this.THREE.Vector3(1420, -358, 0);
    this.geometry57.vertices[1] = new this.THREE.Vector3(1404, -570, 0);
    this.geometry57.vertices[2] = new this.THREE.Vector3(1540, -564, 0);

    this.geometry58.vertices[0] = new this.THREE.Vector3(1404, -570, 0);
    this.geometry58.vertices[1] = new this.THREE.Vector3(1400, -729, 0);
    this.geometry58.vertices[2] = new this.THREE.Vector3(1470, -596, 0);

    this.geometry59.vertices[0] = new this.THREE.Vector3(1470, -596, 0);
    this.geometry59.vertices[1] = new this.THREE.Vector3(1540, -564, 0);
    this.geometry59.vertices[2] = new this.THREE.Vector3(1500, -765, 0);

    //面指定用頂点インデックスを追加
    this.geometry.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry2.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry3.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry4.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry5.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry6.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry7.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry8.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry9.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry10.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry11.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry12.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry13.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry14.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry15.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry16.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry17.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry18.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry19.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry20.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry21.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry22.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry23.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry24.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry25.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry26.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry27.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry28.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry29.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry30.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry31.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry32.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry33.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry34.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry35.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry36.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry37.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry38.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry39.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry40.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry41.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry42.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry43.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry44.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry45.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry46.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry47.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry48.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry49.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry50.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry51.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry52.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry53.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry54.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry55.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry56.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry57.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry58.faces[0] = new this.THREE.Face3(0,1,2);
    this.geometry59.faces[0] = new this.THREE.Face3(0,1,2);

    //マテリアル（材質）の宣言と生成
    var material =  new this.THREE.MeshBasicMaterial({ color: 0x000000, side: this.THREE.DoubleSide, wireframe: true });
    var material2 =  new this.THREE.MeshBasicMaterial({ color: 0xefefef, side: this.THREE.DoubleSide, transparent: true, opacity: 0.8 });
    // var material3 =  new this.THREE.MeshBasicMaterial({ color: 0xecaa39, side: this.THREE.DoubleSide });
    // var material4 =  new this.THREE.MeshBasicMaterial({ color: 0xb04f2e, side: this.THREE.DoubleSide });
    // var material5 =  new this.THREE.MeshBasicMaterial({ color: 0xf8d466, side: this.THREE.DoubleSide });
    // var material6 =  new this.THREE.MeshBasicMaterial({ color: 0xf09a33, side: this.THREE.DoubleSide });
    // var material7 =  new this.THREE.MeshBasicMaterial({ color: 0xf0bf59, side: this.THREE.DoubleSide });
    // var material8 =  new this.THREE.MeshBasicMaterial({ color: 0x794434, side: this.THREE.DoubleSide });
    // var material9 =  new this.THREE.MeshBasicMaterial({ color: 0xb04f2e, side: this.THREE.DoubleSide });
    // var material10 =  new this.THREE.MeshBasicMaterial({ color: 0x794434, side: this.THREE.DoubleSide });

    this.Triangle =  new this.THREE.Mesh(this.geometry, material);
    this.Triangle2 =  new this.THREE.Mesh(this.geometry2, material);
    this.Triangle3 =  new this.THREE.Mesh(this.geometry3, material);
    this.Triangle4 =  new this.THREE.Mesh(this.geometry4, material);
    this.Triangle5 =  new this.THREE.Mesh(this.geometry5, material);
    this.Triangle6 =  new this.THREE.Mesh(this.geometry6, material);
    this.Triangle7 =  new this.THREE.Mesh(this.geometry7, material);
    this.Triangle8 =  new this.THREE.Mesh(this.geometry8, material);
    this.Triangle9 =  new this.THREE.Mesh(this.geometry9, material);
    this.Triangle10 =  new this.THREE.Mesh(this.geometry10, material);
    this.Triangle11 =  new this.THREE.Mesh(this.geometry11, material);
    this.Triangle12 =  new this.THREE.Mesh(this.geometry12, material);
    this.Triangle13 =  new this.THREE.Mesh(this.geometry13, material);
    this.Triangle14 =  new this.THREE.Mesh(this.geometry14, material);
    this.Triangle15 =  new this.THREE.Mesh(this.geometry15, material);
    this.Triangle16 =  new this.THREE.Mesh(this.geometry16, material);
    this.Triangle17 =  new this.THREE.Mesh(this.geometry17, material);
    this.Triangle18 =  new this.THREE.Mesh(this.geometry18, material);
    this.Triangle19 =  new this.THREE.Mesh(this.geometry19, material);
    this.Triangle20 =  new this.THREE.Mesh(this.geometry20, material);
    this.Triangle21 =  new this.THREE.Mesh(this.geometry21, material);
    this.Triangle22 =  new this.THREE.Mesh(this.geometry22, material);
    this.Triangle23 =  new this.THREE.Mesh(this.geometry23, material);
    this.Triangle24 =  new this.THREE.Mesh(this.geometry24, material);
    this.Triangle25 =  new this.THREE.Mesh(this.geometry25, material);
    this.Triangle26 =  new this.THREE.Mesh(this.geometry26, material);
    this.Triangle27 =  new this.THREE.Mesh(this.geometry27, material);
    this.Triangle28 =  new this.THREE.Mesh(this.geometry28, material);
    this.Triangle29 =  new this.THREE.Mesh(this.geometry29, material);
    this.Triangle30 =  new this.THREE.Mesh(this.geometry30, material);
    this.Triangle31 =  new this.THREE.Mesh(this.geometry31, material);
    this.Triangle32 =  new this.THREE.Mesh(this.geometry32, material);
    this.Triangle33 =  new this.THREE.Mesh(this.geometry33, material);
    this.Triangle34 =  new this.THREE.Mesh(this.geometry34, material);
    this.Triangle35 =  new this.THREE.Mesh(this.geometry35, material);
    this.Triangle36 =  new this.THREE.Mesh(this.geometry36, material);
    this.Triangle37 =  new this.THREE.Mesh(this.geometry37, material);
    this.Triangle38 =  new this.THREE.Mesh(this.geometry38, material);
    this.Triangle39 =  new this.THREE.Mesh(this.geometry39, material);
    this.Triangle40 =  new this.THREE.Mesh(this.geometry40, material);
    this.Triangle41 =  new this.THREE.Mesh(this.geometry41, material);
    this.Triangle42 =  new this.THREE.Mesh(this.geometry42, material);
    this.Triangle43 =  new this.THREE.Mesh(this.geometry43, material);
    this.Triangle44 =  new this.THREE.Mesh(this.geometry44, material);
    this.Triangle45 =  new this.THREE.Mesh(this.geometry45, material);
    this.Triangle46 =  new this.THREE.Mesh(this.geometry46, material);
    this.Triangle47 =  new this.THREE.Mesh(this.geometry47, material);
    this.Triangle48 =  new this.THREE.Mesh(this.geometry48, material);
    this.Triangle49 =  new this.THREE.Mesh(this.geometry49, material);
    this.Triangle50 =  new this.THREE.Mesh(this.geometry50, material);
    this.Triangle51 =  new this.THREE.Mesh(this.geometry51, material);
    this.Triangle52 =  new this.THREE.Mesh(this.geometry52, material);
    this.Triangle53 =  new this.THREE.Mesh(this.geometry53, material);
    this.Triangle54 =  new this.THREE.Mesh(this.geometry54, material);
    this.Triangle55 =  new this.THREE.Mesh(this.geometry55, material);
    this.Triangle56 =  new this.THREE.Mesh(this.geometry56, material2);
    this.Triangle57 =  new this.THREE.Mesh(this.geometry57, material);
    this.Triangle58 =  new this.THREE.Mesh(this.geometry58, material);
    this.Triangle59 =  new this.THREE.Mesh(this.geometry59, material);

    //シーンオブジェクトに追加
    this.scene.add(
      this.Triangle,
      this.Triangle2,
      this.Triangle3,
      this.Triangle4,
      this.Triangle5,
      this.Triangle6,
      this.Triangle7,
      this.Triangle8,
      this.Triangle9,
      this.Triangle10,
      this.Triangle11,
      this.Triangle12,
      this.Triangle13,
      this.Triangle14,
      this.Triangle15,
      this.Triangle16,
      this.Triangle17,
      this.Triangle18,
      this.Triangle19,
      this.Triangle20,
      this.Triangle21,
      this.Triangle22,
      this.Triangle23,
      this.Triangle24,
      this.Triangle25,
      this.Triangle26,
      this.Triangle27,
      this.Triangle28,
      this.Triangle29,
      this.Triangle30,
      this.Triangle31,
      this.Triangle32,
      this.Triangle33,
      this.Triangle34,
      this.Triangle35,
      this.Triangle36,
      this.Triangle37,
      this.Triangle38,
      this.Triangle39,
      this.Triangle40,
      this.Triangle41,
      this.Triangle42,
      this.Triangle43,
      this.Triangle44,
      this.Triangle45,
      this.Triangle46,
      this.Triangle47,
      this.Triangle48,
      this.Triangle49,
      this.Triangle50,
      this.Triangle51,
      this.Triangle52,
      this.Triangle53,
      this.Triangle54,
      this.Triangle55,
      this.Triangle56,
      this.Triangle57,
      this.Triangle58,
      this.Triangle59
    );
    console.log(this.Triangle56.position);
    $('#frame').append( this.renderer.domElement );

    this.render();
    this.animate();

  }

  render() {
    if(this.animateFlg) {
      this.geometry.verticesNeedUpdate = true;
      this.geometry2.verticesNeedUpdate = true;
      this.geometry3.verticesNeedUpdate = true;
      this.geometry4.verticesNeedUpdate = true;
      this.geometry5.verticesNeedUpdate = true;
      this.geometry6.verticesNeedUpdate = true;
      this.geometry7.verticesNeedUpdate = true;
      this.geometry8.verticesNeedUpdate = true;
      this.geometry9.verticesNeedUpdate = true;
      this.geometry10.verticesNeedUpdate = true;
      this.geometry11.verticesNeedUpdate = true;
      this.geometry12.verticesNeedUpdate = true;
      this.geometry13.verticesNeedUpdate = true;
      this.geometry14.verticesNeedUpdate = true;
      this.geometry15.verticesNeedUpdate = true;
      this.geometry16.verticesNeedUpdate = true;
      this.geometry17.verticesNeedUpdate = true;
      this.geometry18.verticesNeedUpdate = true;
      this.geometry19.verticesNeedUpdate = true;
      this.geometry20.verticesNeedUpdate = true;
      this.geometry21.verticesNeedUpdate = true;
      this.geometry22.verticesNeedUpdate = true;
      this.geometry23.verticesNeedUpdate = true;
      this.geometry24.verticesNeedUpdate = true;
      this.geometry25.verticesNeedUpdate = true;
      this.geometry26.verticesNeedUpdate = true;
      this.geometry27.verticesNeedUpdate = true;
      this.geometry28.verticesNeedUpdate = true;
      this.geometry29.verticesNeedUpdate = true;
      this.geometry30.verticesNeedUpdate = true;
      this.geometry31.verticesNeedUpdate = true;
      this.geometry32.verticesNeedUpdate = true;
      this.geometry33.verticesNeedUpdate = true;
      this.geometry34.verticesNeedUpdate = true;
      this.geometry35.verticesNeedUpdate = true;
      this.geometry36.verticesNeedUpdate = true;
      this.geometry37.verticesNeedUpdate = true;
      this.geometry38.verticesNeedUpdate = true;
      this.geometry39.verticesNeedUpdate = true;
      this.geometry40.verticesNeedUpdate = true;
      this.geometry41.verticesNeedUpdate = true;
      this.geometry42.verticesNeedUpdate = true;
      this.geometry43.verticesNeedUpdate = true;
      this.geometry44.verticesNeedUpdate = true;
      this.geometry45.verticesNeedUpdate = true;
      this.geometry46.verticesNeedUpdate = true;
      this.geometry47.verticesNeedUpdate = true;
      this.geometry48.verticesNeedUpdate = true;
      this.geometry49.verticesNeedUpdate = true;
      this.geometry50.verticesNeedUpdate = true;
      this.geometry51.verticesNeedUpdate = true;
      this.geometry52.verticesNeedUpdate = true;
      this.geometry53.verticesNeedUpdate = true;
      this.geometry54.verticesNeedUpdate = true;
      this.geometry55.verticesNeedUpdate = true;
      this.geometry56.verticesNeedUpdate = true;
      this.geometry57.verticesNeedUpdate = true;
      this.geometry58.verticesNeedUpdate = true;
      this.geometry59.verticesNeedUpdate = true;

      TWEEN.update();
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }

  animate() {

    let apexUp = [];
    let apexDown = [];
    let apexExtend = [];
    let apexShrink = [];
    apexUp[0] = new TWEEN.Tween(this.Triangle.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[1] = new TWEEN.Tween(this.Triangle2.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[2] = new TWEEN.Tween(this.Triangle3.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[3] = new TWEEN.Tween(this.Triangle4.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[4] = new TWEEN.Tween(this.Triangle5.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[5] = new TWEEN.Tween(this.Triangle6.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[6] = new TWEEN.Tween(this.Triangle7.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[7] = new TWEEN.Tween(this.Triangle8.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[8] = new TWEEN.Tween(this.Triangle9.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[9] = new TWEEN.Tween(this.Triangle10.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[10] = new TWEEN.Tween(this.Triangle11.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[11] = new TWEEN.Tween(this.Triangle12.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[12] = new TWEEN.Tween(this.Triangle13.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[13] = new TWEEN.Tween(this.Triangle14.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[14] = new TWEEN.Tween(this.Triangle15.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[15] = new TWEEN.Tween(this.Triangle16.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[16] = new TWEEN.Tween(this.Triangle17.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[17] = new TWEEN.Tween(this.Triangle18.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[18] = new TWEEN.Tween(this.Triangle19.position)
        .to( { y: 30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexUp[19] = new TWEEN.Tween(this.Triangle56.position)
        .to( { y: 200, x: 50 }, 10000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexDown[0] = new TWEEN.Tween(this.Triangle.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[1] = new TWEEN.Tween(this.Triangle2.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[2] = new TWEEN.Tween(this.Triangle3.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[3] = new TWEEN.Tween(this.Triangle4.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[4] = new TWEEN.Tween(this.Triangle5.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[5] = new TWEEN.Tween(this.Triangle6.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[6] = new TWEEN.Tween(this.Triangle7.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[7] = new TWEEN.Tween(this.Triangle8.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[8] = new TWEEN.Tween(this.Triangle9.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[9] = new TWEEN.Tween(this.Triangle10.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[10] = new TWEEN.Tween(this.Triangle11.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[11] = new TWEEN.Tween(this.Triangle12.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[12] = new TWEEN.Tween(this.Triangle13.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[13] = new TWEEN.Tween(this.Triangle14.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[14] = new TWEEN.Tween(this.Triangle15.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[15] = new TWEEN.Tween(this.Triangle16.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[16] = new TWEEN.Tween(this.Triangle17.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[17] = new TWEEN.Tween(this.Triangle18.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[18] = new TWEEN.Tween(this.Triangle19.position)
        .to( { y: -30 }, 5000 )
        .easing( TWEEN.Easing.Linear.None );


    apexDown[19] = new TWEEN.Tween(this.Triangle56.position)
        .to( { y: 0, x:0 }, 8000 )
        .easing( TWEEN.Easing.Linear.None );

    apexExtend[0] = new TWEEN.Tween(this.geometry8.vertices[2])
        .to( { x: -770 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexExtend[1] = new TWEEN.Tween(this.geometry9.vertices[1])
        .to( { x: -770 }, 5000 )
        .easing( TWEEN.Easing.Linear.None )
        .start();

    apexShrink[0] = new TWEEN.Tween(this.geometry8.vertices[2])
        .to( { x: -830 }, 4000 )
        .easing( TWEEN.Easing.Linear.None );

    apexShrink[1] = new TWEEN.Tween(this.geometry9.vertices[1])
        .to( { x: -830 }, 4000 )
        .easing( TWEEN.Easing.Linear.None );

    for(let i = 0; i <= 19; i++) {
      apexUp[i].chain(apexDown[i]);
      apexDown[i].chain(apexUp[i]);
    }

    for(let i = 0; i <= 1; i++) {
      apexExtend[i].chain(apexShrink[i]);
      apexShrink[i].chain(apexExtend[i]);
    }
    // apexUp.chain(apexDown);
    // apexDown.chain(apexUp);
    this.animateFlg = true;

  }

  endAnimate() {
    this.animateFlg = false;
  }

}

new Polygon();
