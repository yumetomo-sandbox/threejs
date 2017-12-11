import THREELib from 'three-js';
import TWEEN from 'tween.js';

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
    this.geometry2 = new this.THREE.Geometry();
    this.geometry3 = new this.THREE.Geometry();
    this.geometry4 = new this.THREE.Geometry();
    this.geometry5 = new this.THREE.Geometry();
    this.geometry6 = new this.THREE.Geometry();
    this.geometry7 = new this.THREE.Geometry();
    this.geometry8 = new this.THREE.Geometry();
    this.geometry9 = new this.THREE.Geometry();
    this.geometry10 = new this.THREE.Geometry();

    //頂点座標データを追加
    this.geometry.vertices[0] = new this.THREE.Vector3(0, -75, 0);
    this.geometry.vertices[1] = new this.THREE.Vector3(90, 80, 0);
    this.geometry.vertices[2] = new this.THREE.Vector3(-90, 80, 0);

    this.geometry2.vertices[0] = new this.THREE.Vector3(0, 235, 0);
    this.geometry2.vertices[1] = new this.THREE.Vector3(90, 80, 0);
    this.geometry2.vertices[2] = new this.THREE.Vector3(-90, 80, 0);

    this.geometry3.vertices[0] = new this.THREE.Vector3(-90, 80, 0);
    this.geometry3.vertices[1] = new this.THREE.Vector3(0, -75, 0);
    this.geometry3.vertices[2] = new this.THREE.Vector3(-180, -75, 0);

    this.geometry4.vertices[0] = new this.THREE.Vector3(90, 80, 0);
    this.geometry4.vertices[1] = new this.THREE.Vector3(180, -75, 0);
    this.geometry4.vertices[2] = new this.THREE.Vector3(0, -75, 0);

    this.geometry5.vertices[0] = new this.THREE.Vector3(0, 235, 0);
    this.geometry5.vertices[1] = new this.THREE.Vector3(-90, 80, 0);
    this.geometry5.vertices[2] = new this.THREE.Vector3(-180, 130, 0);

    this.geometry6.vertices[0] = new this.THREE.Vector3(0, 235, 0);
    this.geometry6.vertices[1] = new this.THREE.Vector3(90, 80, 0);
    this.geometry6.vertices[2] = new this.THREE.Vector3(180, 130, 0);

    this.geometry7.vertices[0] = new this.THREE.Vector3(-90, 80, 0);
    this.geometry7.vertices[1] = new this.THREE.Vector3(-180, -75, 0);
    this.geometry7.vertices[2] = new this.THREE.Vector3(-180, 130, 0);

    this.geometry8.vertices[0] = new this.THREE.Vector3(90, 80, 0);
    this.geometry8.vertices[1] = new this.THREE.Vector3(180, -75, 0);
    this.geometry8.vertices[2] = new this.THREE.Vector3(180, 130, 0);

    this.geometry9.vertices[0] = new this.THREE.Vector3(0, -75, 0);
    this.geometry9.vertices[1] = new this.THREE.Vector3(0, -180, 0);
    this.geometry9.vertices[2] = new this.THREE.Vector3(-180, -75, 0);

    this.geometry10.vertices[0] = new this.THREE.Vector3(0, -75, 0);
    this.geometry10.vertices[1] = new this.THREE.Vector3(0, -180, 0);
    this.geometry10.vertices[2] = new this.THREE.Vector3(180, -75, 0);


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

    //マテリアル（材質）の宣言と生成
    var material =  new this.THREE.MeshBasicMaterial({ color: 0xf09a33, side: this.THREE.DoubleSide });
    var material2 =  new this.THREE.MeshBasicMaterial({ color: 0xecaa39, side: this.THREE.DoubleSide });
    var material3 =  new this.THREE.MeshBasicMaterial({ color: 0xecaa39, side: this.THREE.DoubleSide });
    var material4 =  new this.THREE.MeshBasicMaterial({ color: 0xb04f2e, side: this.THREE.DoubleSide });
    var material5 =  new this.THREE.MeshBasicMaterial({ color: 0xf8d466, side: this.THREE.DoubleSide });
    var material6 =  new this.THREE.MeshBasicMaterial({ color: 0xf09a33, side: this.THREE.DoubleSide });
    var material7 =  new this.THREE.MeshBasicMaterial({ color: 0xf0bf59, side: this.THREE.DoubleSide });
    var material8 =  new this.THREE.MeshBasicMaterial({ color: 0x794434, side: this.THREE.DoubleSide });
    var material9 =  new this.THREE.MeshBasicMaterial({ color: 0xb04f2e, side: this.THREE.DoubleSide });
    var material10 =  new this.THREE.MeshBasicMaterial({ color: 0x794434, side: this.THREE.DoubleSide });

    this.Triangle =  new this.THREE.Mesh(this.geometry, material);
    this.Triangle2 =  new this.THREE.Mesh(this.geometry2, material2);
    this.Triangle3 =  new this.THREE.Mesh(this.geometry3, material3);
    this.Triangle4 =  new this.THREE.Mesh(this.geometry4, material4);
    this.Triangle5 =  new this.THREE.Mesh(this.geometry5, material5);
    this.Triangle6 =  new this.THREE.Mesh(this.geometry6, material6);
    this.Triangle7 =  new this.THREE.Mesh(this.geometry7, material7);
    this.Triangle8 =  new this.THREE.Mesh(this.geometry8, material8);
    this.Triangle9 =  new this.THREE.Mesh(this.geometry9, material9);
    this.Triangle10 =  new this.THREE.Mesh(this.geometry10, material10);

    this.Triangle.position.x = this.windowWidth + 150;
    this.Triangle.position.y = this.windowHeight + 50;
    this.Triangle.rotation.x = 5;
    this.Triangle.rotation.y = 19;

    this.Triangle2.position.x = this.windowWidth - 300;
    this.Triangle2.position.y = this.windowHeight + 100;
    this.Triangle2.rotation.x = 15;
    this.Triangle2.rotation.y = 16;

    this.Triangle3.position.x = this.windowWidth - 100;
    this.Triangle3.position.y = this.windowHeight + 200;
    this.Triangle3.rotation.x = 19;
    this.Triangle3.rotation.y = 12;

    this.Triangle4.position.x = this.windowWidth - 200;
    this.Triangle4.position.y = this.windowHeight + 150;
    this.Triangle4.rotation.x = 8;
    this.Triangle4.rotation.y = 10;

    this.Triangle5.position.x = this.windowWidth;
    this.Triangle5.position.y = this.windowHeight;
    this.Triangle5.rotation.x = 12;
    this.Triangle5.rotation.y = 9;

    this.Triangle6.position.x = this.windowWidth / 2;
    this.Triangle6.position.y = this.windowHeight + 300;
    this.Triangle6.rotation.x = 14;
    this.Triangle6.rotation.y = 11;

    this.Triangle7.position.x = -this.windowWidth + 120;
    this.Triangle7.position.y = this.windowHeight + 220;
    this.Triangle7.rotation.x = 11;
    this.Triangle7.rotation.y = 14;

    this.Triangle8.position.x = -this.windowWidth + 180;
    this.Triangle8.position.y = this.windowHeight + 180;
    this.Triangle8.rotation.x = 15;
    this.Triangle8.rotation.y = 8;

    this.Triangle9.position.x = -this.windowWidth + 280;
    this.Triangle9.position.y = this.windowHeight + 260;
    this.Triangle9.rotation.x = 8;
    this.Triangle9.rotation.y = 15;

    this.Triangle10.position.x = -this.windowWidth + 230;
    this.Triangle10.position.y = this.windowHeight + 120;
    this.Triangle10.rotation.x = 17;
    this.Triangle10.rotation.y = 13;

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
      this.Triangle10
    );

    document.body.appendChild( this.renderer.domElement );

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

      TWEEN.update();
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }

  animate() {


    for (let i = 0; i < this.geometry.vertices.length; i++) {
      const triangleParameter = {
        positionX: this.Triangle.position.x,
        positionY: this.Triangle.position.y,
        rotateX: this.Triangle.rotation.x,
        rotateY: this.Triangle.rotation.x
      }
      const triangleParameter2 = {
        positionX: this.Triangle2.position.x,
        positionY: this.Triangle2.position.y,
        rotateX: this.Triangle2.rotation.x,
        rotateY: this.Triangle2.rotation.x
      }
      const triangleParameter3 = {
        positionX: this.Triangle3.position.x,
        positionY: this.Triangle3.position.y,
        rotateX: this.Triangle3.rotation.x,
        rotateY: this.Triangle3.rotation.x
      }
      const triangleParameter4 = {
        positionX: this.Triangle4.position.x,
        positionY: this.Triangle4.position.y,
        rotateX: this.Triangle4.rotation.x,
        rotateY: this.Triangle4.rotation.x
      }
      const triangleParameter5 = {
        positionX: this.Triangle5.position.x,
        positionY: this.Triangle5.position.y,
        rotateX: this.Triangle5.rotation.x,
        rotateY: this.Triangle5.rotation.x
      }
      const triangleParameter6 = {
        positionX: this.Triangle6.position.x,
        positionY: this.Triangle6.position.y,
        rotateX: this.Triangle6.rotation.x,
        rotateY: this.Triangle6.rotation.x
      }
      const triangleParameter7 = {
        positionX: this.Triangle7.position.x,
        positionY: this.Triangle7.position.y,
        rotateX: this.Triangle7.rotation.x,
        rotateY: this.Triangle7.rotation.x
      }
      const triangleParameter8 = {
        positionX: this.Triangle8.position.x,
        positionY: this.Triangle8.position.y,
        rotateX: this.Triangle8.rotation.x,
        rotateY: this.Triangle8.rotation.x
      }
      const triangleParameter9 = {
        positionX: this.Triangle9.position.x,
        positionY: this.Triangle9.position.y,
        rotateX: this.Triangle9.rotation.x,
        rotateY: this.Triangle9.rotation.x
      }
      const triangleParameter10 = {
        positionX: this.Triangle10.position.x,
        positionY: this.Triangle10.position.y,
        rotateX: this.Triangle10.rotation.x,
        rotateY: this.Triangle10.rotation.x
      }

      let animation = new TWEEN.Tween(triangleParameter)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle.position.x = triangleParameter.positionX;
            this.Triangle.position.y = triangleParameter.positionY;
            this.Triangle.rotation.x = triangleParameter.rotateX;
            this.Triangle.rotation.y = triangleParameter.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter2)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle2.position.x = triangleParameter2.positionX;
            this.Triangle2.position.y = triangleParameter2.positionY;
            this.Triangle2.rotation.x = triangleParameter2.rotateX;
            this.Triangle2.rotation.y = triangleParameter2.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter3)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle3.position.x = triangleParameter3.positionX;
            this.Triangle3.position.y = triangleParameter3.positionY;
            this.Triangle3.rotation.x = triangleParameter3.rotateX;
            this.Triangle3.rotation.y = triangleParameter3.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter4)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle4.position.x = triangleParameter4.positionX;
            this.Triangle4.position.y = triangleParameter4.positionY;
            this.Triangle4.rotation.x = triangleParameter4.rotateX;
            this.Triangle4.rotation.y = triangleParameter4.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter5)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle5.position.x = triangleParameter5.positionX;
            this.Triangle5.position.y = triangleParameter5.positionY;
            this.Triangle5.rotation.x = triangleParameter5.rotateX;
            this.Triangle5.rotation.y = triangleParameter5.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter6)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle6.position.x = triangleParameter6.positionX;
            this.Triangle6.position.y = triangleParameter6.positionY;
            this.Triangle6.rotation.x = triangleParameter6.rotateX;
            this.Triangle6.rotation.y = triangleParameter6.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter7)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle7.position.x = triangleParameter7.positionX;
            this.Triangle7.position.y = triangleParameter7.positionY;
            this.Triangle7.rotation.x = triangleParameter7.rotateX;
            this.Triangle7.rotation.y = triangleParameter7.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter8)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle8.position.x = triangleParameter8.positionX;
            this.Triangle8.position.y = triangleParameter8.positionY;
            this.Triangle8.rotation.x = triangleParameter8.rotateX;
            this.Triangle8.rotation.y = triangleParameter8.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter9)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle9.position.x = triangleParameter9.positionX;
            this.Triangle9.position.y = triangleParameter9.positionY;
            this.Triangle9.rotation.x = triangleParameter9.rotateX;
            this.Triangle9.rotation.y = triangleParameter9.rotateY;
          })
          .start();

      new TWEEN.Tween(triangleParameter10)
          .delay(500)
          .to( { positionX: 0, positionY: 0, rotateX: 0, rotateY: 0 }, 3000 )
          .easing( TWEEN.Easing.Quadratic.Out )
          .onUpdate(() => {
            this.Triangle10.position.x = triangleParameter10.positionX;
            this.Triangle10.position.y = triangleParameter10.positionY;
            this.Triangle10.rotation.x = triangleParameter10.rotateX;
            this.Triangle10.rotation.y = triangleParameter10.rotateY;
          })
          .start();

      animation.onComplete(this.endAnimate.bind(this));
    }

    this.animateFlg = true;

  }

  endAnimate() {
    this.animateFlg = false;
  }

}

new Polygon();
