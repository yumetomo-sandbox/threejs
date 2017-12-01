import THREELib from 'three-js';
import TWEEN from 'tween.js';
import Promise from 'es6-promise';

class ChangeImage {

  constructor() {
    this.THREE = THREELib();
    this.camera;
    this.scene;
    this.renderer;
    this.circle;

    // array
    this.imgArray = [];
    this.imgArray2 = [];
    this.randomArray = [];
    this.randomArray2 = [];
    this.randomArrayReverse = [];

    // particle
    this.img1 = new Image();
    this.img2 = new Image();
    this.pGeometry = null;
    this.pGeometry2 = null;
    this.pMaterial = null;
    this.pMaterial2 = null;
    this.pointCloud = null;
    this.pTween = [];
    this.pTweenBack = [];
    this.pTweenReverse = [];
    this.pTweenBackReverse = [];

    this.isParticleAnimate = false;
    this.particleFlg = false;

    this.randomFlg = false;

    this.init();

  }

  init() {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // remderer作成
    this.renderer = new this.THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize( windowWidth, windowHeight );
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


    const material = new this.THREE.MeshBasicMaterial({color: 0x000000});

    const circleGeometry = new this.THREE.CircleGeometry(150, 500);
    this.circle = new this.THREE.Mesh(circleGeometry, material);
    this.circle.position.set(windowWidth,0,0);
    this.scene.add(this.circle);

    document.body.appendChild( this.renderer.domElement );



    // this.createParticle();
    // this.animate();
    // console.log(this.circle.position.x)
    this.circleAnimate();
    this.createParticle();


  }

  circleAnimate() {
    const circleAnimationFrame = requestAnimationFrame(this.circleAnimate.bind(this));
    if(this.circle.position.x <= -window.innerWidth) {
      cancelAnimationFrame(circleAnimationFrame);
    } else if(this.circle.position.x <= 0 && !this.isParticleAnimate) {
      this.isParticleAnimate = true;
      this.animate();
    }else {
      this.circle.position.x -= 20;
      this.circleRender();
    }
  }

  circleRender() {
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render();

    TWEEN.update();
  }

  render() {
    if(this.particleFlg) {
      this.pGeometry.verticesNeedUpdate = true;
      this.pGeometry2.verticesNeedUpdate = true;
    }
    this.renderer.render(this.scene, this.camera);
  }

  createParticle() {
    // this.img.onload = result => {
    //   const img = result.path[0];
    //   Promise.all([this.loadedBeforeImage(img)])
    //     .then(console.log('test'));
    // }
    // this.img.src = './../../webroot/images/shizuku.png';

    let Loader = (expectedCnt, callback) => {
      let cnt = 0;
      return () => {
        if(++cnt == expectedCnt){ callback(); }
      }
    };

    const loader = Loader(2, () => {
      Promise.all([
        this.loadedBeforeImage(this.img1),
        this.loadedAfterImage(this.img2)
      ])
      .then(this.setTweenAnimate());
    });
    this.img1.onload = loader;
    this.img2.onload = loader;
    this.img1.src = './../../webroot/images/shizuku.png';
    this.img2.src = './../../webroot/images/shizuku2.png';
  }



  loadedBeforeImage(img1) {
    let _self = this;
    // canvas
    var imgCanvas = document.createElement("canvas");
    if(!imgCanvas.getContext) throw new Error("cannot make canvas");

    imgCanvas.width = img1.width;
    imgCanvas.height = img1.height;

    var context = imgCanvas.getContext("2d");
    context.drawImage(img1, 0, 0);

    var imageW = imgCanvas.width;
    var imageH = imgCanvas.height;

    //data
    var pixels = context.getImageData(0, 0, imageW, imageH).data;
    var index = 0;
    var i = 0;

    //geometry
    _self.pGeometry = new _self.THREE.Geometry();

    // material
    _self.pMaterial = new _self.THREE.PointsMaterial( {
        size: 3,
        sizeAttenuation: false,
        transparent: true,
        opacity: 1.0,
        vertexColors: _self.THREE.VertexColors
    } );

    for (var x=0; x<imageW; x++ ) {
        for (var y=0; y<imageH; y++ ) {
            var r = pixels[index];
            var g = pixels[index+1];
            var b = pixels[index+2];
            var a = pixels[index+3];

            var sum = r+g+b;
            if(sum > 1){

              var randomBaseNum = 6000;
              var randomDiff = 3000;
              var randomVertex = new _self.THREE.Vector3(Math.random() * randomBaseNum -randomDiff*1.5, Math.random() * randomBaseNum -randomDiff, Math.random() * randomBaseNum -randomDiff);

              _self.imgArray[i] = {
                  vertex: new _self.THREE.Vector3( (x-imageW/2)*1, (y-imageH/2)*-1, 0 )
              };
              _self.randomArray[i] = {
                  vertex: randomVertex.clone(),
              };

              _self.pGeometry.vertices.push( new _self.THREE.Vector3( (x-imageW/2-250)*1, (y-imageH/2)*-1, 0 ) );
              // _self.pGeometry.vertices.push( randomVertex.clone() );
              _self.pGeometry.colors.push( new _self.THREE.Color("rgb("+r+","+g+","+b+")") );
              i += 1;
            }


            index = (x*4)+y*(4*imageW);
        }
    }

    // point cloud
    _self.pointCloud = _self.THREE.PointCloud( _self.pGeometry, _self.pMaterial );
    _self.scene.add(_self.pointCloud);

  }

  loadedAfterImage(img1) {
    let _self = this;
    // canvas
    var imgCanvas = document.createElement("canvas");
    if(!imgCanvas.getContext) throw new Error("cannot make canvas");

    imgCanvas.width = img1.width;
    imgCanvas.height = img1.height;

    var context = imgCanvas.getContext("2d");
    context.drawImage(img1, 0, 0);

    var imageW = imgCanvas.width;
    var imageH = imgCanvas.height;

    //data
    var pixels = context.getImageData(0, 0, imageW, imageH).data;
    var index = 0;
    var i = 0;

    //geometry
    _self.pGeometry2 = new _self.THREE.Geometry();

    // material
    _self.pMaterial2 = new _self.THREE.PointsMaterial( {
        size: 3,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0,
        vertexColors: _self.THREE.VertexColors
    } );

    for (var x=0; x<imageW; x++ ) {
        for (var y=0; y<imageH; y++ ) {
            var r = pixels[index];
            var g = pixels[index+1];
            var b = pixels[index+2];
            var a = pixels[index+3];

            var sum = r+g+b;
            if(sum > 1){

              var randomBaseNum = 6000;
              var randomDiff = 3000;
              var randomVertex = new _self.THREE.Vector3(Math.random() * randomBaseNum -randomDiff*1.5, Math.random() * randomBaseNum -randomDiff, Math.random() * randomBaseNum -randomDiff);

              _self.imgArray2[i] = {
                  vertex: new _self.THREE.Vector3( (x-imageW/2)*1, (y-imageH/2)*-1, 0 )
              };
              _self.randomArray[i] = {
                  vertex: randomVertex.clone(),
              };

              _self.pGeometry2.vertices.push( randomVertex.clone() );
              _self.pGeometry2.colors.push( new _self.THREE.Color("rgb("+r+","+g+","+b+")") );
              i += 1;
            }


            index = (x*4)+y*(4*imageW);
        }
    }

    // point cloud
    _self.pointCloud = _self.THREE.PointCloud( _self.pGeometry2, _self.pMaterial2 );
    _self.scene.add(_self.pointCloud);

  }

  setTweenAnimate() {
    let _self = this;
    //animate
    for( var i = 0; i < _self.imgArray.length; i++ ){
        _self.pTweenBack[i] = new TWEEN.Tween( _self.pGeometry.vertices[i] )
            .delay(500)
            .to( { x: _self.randomArray[i].vertex.x, y: _self.randomArray[i].vertex.y, z: _self.randomArray[i].vertex.z }, 4000 )
            .easing( TWEEN.Easing.Cubic.In )
            .start();

        let materialFadeOut = new TWEEN.Tween( _self.pMaterial )
            .delay(30)
            .to( { opacity: 0 }, 80 );

        let material2FadeIn = new TWEEN.Tween( _self.pMaterial2 )
            .to( { opacity: 1 }, 100 );

        _self.pTweenReverse[i] = new TWEEN.Tween( _self.pGeometry2.vertices[i] )
            .to( { x: _self.imgArray2[i].vertex.x +500, y: _self.imgArray2[i].vertex.y, z: _self.imgArray2[i].vertex.z }, 4000 )
            .easing( TWEEN.Easing.Quintic.Out );

        _self.pTweenBackReverse[i] = new TWEEN.Tween( _self.pGeometry2.vertices[i] )
            .delay(500)
            .to( { x: _self.randomArray[i].vertex.x, y: _self.randomArray[i].vertex.y, z: _self.randomArray[i].vertex.z }, 4000 )
            .easing( TWEEN.Easing.Cubic.In );

        let material2FadeOut = new TWEEN.Tween( _self.pMaterial2 )
            .delay(30)
            .to( { opacity: 0 }, 80 );

        let materialFadeIn = new TWEEN.Tween( _self.pMaterial )
            .to( { opacity: 1 }, 100 );

        _self.pTween[i] = new TWEEN.Tween( _self.pGeometry.vertices[i] )
            .to( { x: _self.imgArray[i].vertex.x -250, y: _self.imgArray[i].vertex.y, z: _self.imgArray[i].vertex.z }, 4000 )
            .easing( TWEEN.Easing.Quintic.Out );





        _self.pTweenBack[i].chain(materialFadeOut, material2FadeIn, _self.pTweenReverse[i]);
        _self.pTweenReverse[i].chain(_self.pTweenBackReverse[i]);
        _self.pTweenBackReverse[i].chain(material2FadeOut, materialFadeIn, _self.pTween[i]);
        _self.pTween[i].chain(_self.pTweenBack[i]);

    }

    _self.particleFlg = true;
    return true;
  }

}

new ChangeImage();
