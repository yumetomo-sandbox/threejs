import THREELib from 'three-js';

class Smoke {

  constructor() {

    this.THREE = THREELib();
    this.camera;
    this.scene;
    this.renderer
    this.geometry;
    this.material;
    this.mesh;
    this.clock;

    this.init();
    this.animate();

  }

  init() {

      this.clock = new this.THREE.Clock();
      this.renderer = new this.THREE.WebGLRenderer();
      this.renderer.setSize( window.innerWidth, window.innerHeight );

      this.scene = new this.THREE.Scene();

      this.camera = new this.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
      this.camera.position.z = 1000;
      this.scene.add( this.camera );

      const textGeo = new this.THREE.PlaneGeometry(300,300);
      this.THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
      const textTexture = this.THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
      const textMaterial = new this.THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: this.THREE.AdditiveBlending})
      let text = new this.THREE.Mesh(textGeo,textMaterial);
      text.position.z = 800;
      this.scene.add(text);

      let light = new this.THREE.DirectionalLight(0xffffff,0.5);
      light.position.set(-1,0,1);
      this.scene.add(light);

      const smokeTexture = this.THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
      const smokeMaterial = new this.THREE.MeshLambertMaterial({color: 0x00dddd, map: smokeTexture, transparent: true});
      const smokeGeo = new this.THREE.PlaneGeometry(300,300);
      this.smokeParticles = [];


      for (let p = 0; p < 150; p++) {
          var particle = new this.THREE.Mesh(smokeGeo,smokeMaterial);
          particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
          particle.rotation.z = Math.random() * 360;
          this.scene.add(particle);
          this.smokeParticles.push(particle);
      }

      document.body.appendChild( this.renderer.domElement );

  }

  animate() {
      // note: three.js includes requestAnimationFrame shim
      let delta = this.clock.getDelta();
      requestAnimationFrame( this.animate.bind(this) );
      this.evolveSmoke(delta);
      this.render();
  }

  evolveSmoke(delta) {
      var sp = this.smokeParticles.length;
      while(sp--) {
          this.smokeParticles[sp].rotation.z += (delta * 0.2);
      }
  }

  render() {

      this.renderer.render( this.scene, this.camera );

  }

}

new Smoke();
