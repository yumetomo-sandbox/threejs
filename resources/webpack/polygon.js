import THREELib from 'three-js';
import TWEEN from 'tween.js';
import Promise from 'es6-promise';

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
  }

  init() {
    // remderer作成
    this.renderer = new this.THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize( this.windowWidth, this.windowHeight );
    this.renderer.setClearColor(0xffffff, 1.0);

    // scene作成
    this.scene = new this.THREE.Scene();

    // camera作成
    this.camera = new this.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;
    this.scene.add( this.camera );

    // light作成
    let light = new this.THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0,1);
    this.scene.add(light);

    //ジオメトリ（形状）の宣言と生成
    this.geometry = new this.THREE.Geometry();

    //頂点座標データを追加
    this.geometry.vertices[0] = new this.THREE.Vector3(0, -75, 0);
    this.geometry.vertices[1] = new this.THREE.Vector3(90, 80, 0);
    this.geometry.vertices[2] = new this.THREE.Vector3(-90, 80, 0);

    // this.geometry.vertices[0] = new this.THREE.Vector3(0, -75, 0);
    // this.geometry.vertices[1] = new this.THREE.Vector3(90, 80, 0);
    // this.geometry.vertices[2] = new this.THREE.Vector3(-90, 80, 0);

    //面指定用頂点インデックスを追加
    this.geometry.faces[0] = new this.THREE.Face3(0,1,2);
    console.log(this.windowWidth);
    //マテリアル（材質）の宣言と生成
    var material =  new this.THREE.MeshBasicMaterial({ color: 0xf09a33, side: this.THREE.DoubleSide });
    this.Triangle =  new this.THREE.Mesh(this.geometry, material);
    this.Triangle.position.x = 900;
    this.Triangle.position.y = 900;


    //シーンオブジェクトに追加
    this.scene.add(this.Triangle);

    document.body.appendChild( this.renderer.domElement );

    this.render();
    this.animate();
  }

  render() {
    if(this.animateFlg) {
      this.geometry.verticesNeedUpdate = true;
      TWEEN.update();

      this.Triangle.rotation.x += Math.PI / 40;
      this.Triangle.rotation.y += Math.PI / 40;
      console.log(this.Triangle.rotation.x);
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }

  animate() {
    console.log(TWEEN);
    for (let i = 0; i < this.geometry.vertices.length; i++) {
      let animation = new TWEEN.Tween(this.Triangle.position)
          .delay(500)
          .to( { x: 0, y: 0 }, 3000 )
          .easing( TWEEN.Easing.Cubic.In )
          .start();

      let finish = new TWEEN.Tween(this.Triangle.rotation)
          .to( { x: 18.8, y: 18.8 }, 300 )
          .easing( TWEEN.Easing.Linear.None );

      console.log(animation);
      animation.chain(finish);
      finish.onComplete(this.endAnimate.bind(this));
      // animation.onComplete(this.endAnimate.bind(this));
    }

    this.animateFlg = true;

  }

  endAnimate() {
    this.animateFlg = false;
    // this.Triangle.rotation.z = 0;
    // this.Triangle.rotation.x = 0;
    // this.Triangle.rotation.y = 0;



    console.log('end');
  }

}

new Polygon();
