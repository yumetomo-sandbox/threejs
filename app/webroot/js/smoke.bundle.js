webpackJsonp([0],{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threeJs = __webpack_require__(0);

var _threeJs2 = _interopRequireDefault(_threeJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Smoke = function () {
    function Smoke() {
        _classCallCheck(this, Smoke);

        this.THREE = (0, _threeJs2.default)();
        this.camera;
        this.scene;
        this.renderer;
        this.geometry;
        this.material;
        this.mesh;
        this.clock;

        this.init();
        this.animate();
    }

    _createClass(Smoke, [{
        key: 'init',
        value: function init() {

            this.clock = new this.THREE.Clock();
            this.renderer = new this.THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            this.scene = new this.THREE.Scene();

            this.camera = new this.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            this.camera.position.z = 1000;
            this.scene.add(this.camera);

            var textGeo = new this.THREE.PlaneGeometry(300, 300);
            this.THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
            var textTexture = this.THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
            var textMaterial = new this.THREE.MeshLambertMaterial({ color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: this.THREE.AdditiveBlending });
            var text = new this.THREE.Mesh(textGeo, textMaterial);
            text.position.z = 800;
            this.scene.add(text);

            var light = new this.THREE.DirectionalLight(0xffffff, 0.5);
            light.position.set(-1, 0, 1);
            this.scene.add(light);

            var smokeTexture = this.THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
            var smokeMaterial = new this.THREE.MeshLambertMaterial({ color: 0x00dddd, map: smokeTexture, transparent: true });
            var smokeGeo = new this.THREE.PlaneGeometry(300, 300);
            this.smokeParticles = [];

            for (var p = 0; p < 150; p++) {
                var particle = new this.THREE.Mesh(smokeGeo, smokeMaterial);
                particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
                particle.rotation.z = Math.random() * 360;
                this.scene.add(particle);
                this.smokeParticles.push(particle);
            }

            document.body.appendChild(this.renderer.domElement);
        }
    }, {
        key: 'animate',
        value: function animate() {
            // note: three.js includes requestAnimationFrame shim
            var delta = this.clock.getDelta();
            requestAnimationFrame(this.animate.bind(this));
            this.evolveSmoke(delta);
            this.render();
        }
    }, {
        key: 'evolveSmoke',
        value: function evolveSmoke(delta) {
            var sp = this.smokeParticles.length;
            while (sp--) {
                this.smokeParticles[sp].rotation.z += delta * 0.2;
            }
        }
    }, {
        key: 'render',
        value: function render() {

            this.renderer.render(this.scene, this.camera);
        }
    }]);

    return Smoke;
}();

new Smoke();

/***/ })

},[5]);