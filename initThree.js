var stats, renderer, scene, camera, controls;
function init(width, height, showAxes, showStats) {
  //init scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  // scene.fog = new THREE.Fog(0xa0a0a0, 10, 100);
  //init camera
  camera = new THREE.PerspectiveCamera(80, width / height, 1, 1000);
  camera.position.set(0, 0, 15);
  scene.add(camera);
  //init render
  renderer = new THREE.WebGLRenderer({
    // antialias: true, //抗锯齿
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById("three").appendChild(renderer.domElement);
  // AxisHelper
  var axes = new THREE.AxisHelper(10);
  if (showAxes) {
    scene.add(axes);
  }
  // ambient平行光
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  //点光源
  // var light = new THREE.PointLight(0xffffff, 1);
  // light.position.set(5, 30, 0);
  // camera.add(light);
  //init controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  // controls.maxPolarAngle = 0;
  // controls.minPolarAngle = Math.PI;
  //init stats
  if (showStats) {
    stats = new Stats();
    stats.dom.style.position = "absolute";
    document.getElementById("three").appendChild(stats.dom);
    stats.update();
  }
}
