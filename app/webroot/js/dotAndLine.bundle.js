webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threeJs = __webpack_require__(0);

var _threeJs2 = _interopRequireDefault(_threeJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DotAndLine = function () {
    function DotAndLine() {
        _classCallCheck(this, DotAndLine);

        this.THREE = (0, _threeJs2.default)();
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

    _createClass(DotAndLine, [{
        key: "init",
        value: function init() {

            this.renderer = new this.THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setClearColor(0xffffff, 1.0);

            this.scene = new this.THREE.Scene();

            this.camera = new this.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            this.camera.position.z = 1000;
            this.scene.add(this.camera);

            var light = new this.THREE.DirectionalLight(0xffffff, 0.5);
            light.position.set(-1, 0, 1);
            this.scene.add(light);

            var material = new this.THREE.MeshBasicMaterial({ color: 0x000000 });

            var circleGeometry = new this.THREE.CircleGeometry(150, 500);
            var circle = new this.THREE.Mesh(circleGeometry, material);
            circle.position.set(-500, 0, 0);
            this.scene.add(circle);

            var img = new Image();
            img.onload = function () {

                // canvas
                var imgCanvas = document.createElement("canvas");
                imgCanvas.width = this.width;
                imgCanvas.height = this.height;
                var context = imgCanvas.getContext("2d");
                context.drawImage(this, 0, 0);
                console.log(context);
                var imageW = imgCanvas.width;
                var imageH = imgCanvas.height;

                //data
                var pixels = context.getImageData(0, 0, imageW, imageH).data;
                var index = 0;
                var i = 0;

                //geometry
                var pGeometry = new this.THREE.Geometry();
                // material
                var pMaterial = new this.THREE.PointCloudMaterial({
                    size: 2,
                    sizeAttenuation: false,
                    transparent: true,
                    opacity: 0.7,
                    vertexColors: this.THREE.VertexColors
                });
                for (var x = 0; x < imageW; x++) {
                    for (var y = 0; y < imageH; y++) {
                        var r = pixels[index];
                        var g = pixels[index + 1];
                        var b = pixels[index + 2];
                        var a = pixels[index + 3];

                        var sum = r + g + b;
                        if (sum > 1) {

                            var randomVertex = new this.THREE.Vector3(Math.random() * 6000 - 3000, Math.random() * 6000 - 3000, Math.random() * 6000 - 3000);

                            this.imgArray[i] = {
                                vertex: new this.THREE.Vector3((x - imageW / 2) * 5, (y - imageH / 2) * -5, 0)
                            };
                            this.randomArray[i] = {
                                vertex: randomVertex.clone()
                            };

                            pGeometry.vertices.push(randomVertex.clone());
                            pGeometry.colors.push(new this.THREE.Color("rgb(" + r + "," + g + "," + b + ")"));

                            i += 1;
                        }
                        index = x * 4 + y * (4 * imageW);
                    }
                }

                // point cloud
                var pointCloud = new this.THREE.PointCloud(pGeometry, pMaterial);
                this.scene.add(pointCloud);

                //animate
                for (var _i = 0; _i < this.imgArray.length; _i++) {
                    this.pTween[_i] = new this.THREE.TWEEN.Tween(pGeometry.vertices[_i]).to({ x: this.imgArray[_i].vertex.x, y: this.imgArray[_i].vertex.y, z: this.imgArray[_i].vertex.z }, 4000).easing(this.THREE.TWEEN.Easing.Quartic.InOut).start();
                    this.pTweenBack[_i] = new this.THREE.TWEEN.Tween(pGeometry.vertices[_i]).delay(1000).to({ x: this.randomArray[_i].vertex.x, y: this.randomArray[_i].vertex.y, z: this.randomArray[_i].vertex.z }, 4000).easing(this.THREE.TWEEN.Easing.Quartic.InOut);

                    this.pTween[_i].chain(this.pTweenBack[_i]);
                    this.pTweenBack[_i].chain(this.pTween[_i]);
                }

                this.particleFlg = true;
            };
            img.src = "http://jsrun.it/assets/A/j/r/V/AjrVS.png";

            document.body.appendChild(this.renderer.domElement);

            this.renderer.render(this.scene, this.camera);
        }
    }]);

    return DotAndLine;
}();

new DotAndLine();

/***/ })

},[4]);