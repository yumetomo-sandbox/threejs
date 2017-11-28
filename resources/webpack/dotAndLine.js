import THREELib from 'three-js';

class DotAndLine {

  constructor() {

    this.THREE = THREELib();
    this.camera;
    this.scene;
    this.renderer;
    this.imgArray = [];
    this.randomArray = [];
    this.pTween = [];
    this.pTweenBack = [];
    this.particleFlg = false;

    this.init();

  }

  init() {

      this.renderer = new this.THREE.WebGLRenderer({antialias: true});
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.setClearColor(0xffffff, 1.0);

      this.scene = new this.THREE.Scene();

      this.camera = new this.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
      this.camera.position.z = 1000;
      this.scene.add( this.camera );

      let light = new this.THREE.DirectionalLight(0xffffff,0.5);
      light.position.set(-1,0,1);
      this.scene.add(light);

      const material = new this.THREE.MeshBasicMaterial({color: 0x000000});

      const circleGeometry = new this.THREE.CircleGeometry(150, 500);
      const circle = new this.THREE.Mesh(circleGeometry, material);
      circle.position.set(-500,0,0);
      this.scene.add(circle);

      var img = new Image();
      img.onload = function () {

          // canvas
          var imgCanvas = document.createElement( "canvas" );
          imgCanvas.width = this.width;
          imgCanvas.height = this.height;
          var context = imgCanvas.getContext( "2d" );
          context.drawImage(this,0,0);
          console.log(context);
          let imageW = imgCanvas.width;
          let imageH = imgCanvas.height;

          //data
          var pixels = context.getImageData(0, 0, imageW, imageH).data;
          var index = 0;
          var i = 0;

          //geometry
          let pGeometry = new this.THREE.Geometry();
          // material
          let pMaterial = new this.THREE.PointCloudMaterial( {
              size: 2,
              sizeAttenuation: false,
              transparent: true,
              opacity: 0.7,
              vertexColors: this.THREE.VertexColors
          } );
          for (var x=0; x<imageW; x++ ) {
              for (var y=0; y<imageH; y++ ) {
                  var r = pixels[index];
                  var g = pixels[index+1];
                  var b = pixels[index+2];
                  var a = pixels[index+3];

                  var sum = r+g+b;
                  if (sum > 1) {

                      var randomVertex = new this.THREE.Vector3(Math.random() * 6000 - 3000,Math.random() * 6000 - 3000,Math.random() * 6000 - 3000);

                      this.imgArray[i] = {
                          vertex:new this.THREE.Vector3( (x-imageW/2)*5, (y-imageH/2)*-5, 0 )
                      };
                      this.randomArray[i] = {
                          vertex:randomVertex.clone(),
                      };

                      pGeometry.vertices.push( randomVertex.clone() );
                      pGeometry.colors.push( new this.THREE.Color("rgb("+r+","+g+","+b+")") );

                      i += 1;
                  }
                  index = (x*4)+y*(4*imageW);
              }
          }

          // point cloud
          let pointCloud = new this.THREE.PointCloud( pGeometry, pMaterial );
          this.scene.add(pointCloud);

          //animate
          for( let i = 0; i < this.imgArray.length; i++ ){
              this.pTween[i] = new this.THREE.TWEEN.Tween( pGeometry.vertices[i] )
                  .to( { x: this.imgArray[i].vertex.x, y: this.imgArray[i].vertex.y, z: this.imgArray[i].vertex.z }, 4000 )
                  .easing( this.THREE.TWEEN.Easing.Quartic.InOut )
                  .start();
              this.pTweenBack[i] = new this.THREE.TWEEN.Tween( pGeometry.vertices[i] )
                  .delay(1000)
                  .to( { x: this.randomArray[i].vertex.x, y: this.randomArray[i].vertex.y, z: this.randomArray[i].vertex.z }, 4000 )
                  .easing( this.THREE.TWEEN.Easing.Quartic.InOut );

              this.pTween[i].chain(this.pTweenBack[i]);
              this.pTweenBack[i].chain(this.pTween[i]);
          }

          this.particleFlg = true;
      };
      img.src = "http://jsrun.it/assets/A/j/r/V/AjrVS.png";

      document.body.appendChild( this.renderer.domElement );

      this.renderer.render( this.scene, this.camera );

  }

}

new DotAndLine();
