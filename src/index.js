import * as THREE from "three"

import PlaneMesh from "./plane_mesh.js"
import LightGeo from "./light_geo.js"
// import KeyboardInput from "./KeyboardInput.js";

// import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";


const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff);

// camera (field of view, aspect ratio, near and far clipping planes)
const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
cam.position.z = 5;
cam.position.y = 2;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// const controls = new OrbitControls(cam, renderer.domElement);

const texture_container0 = new THREE.TextureLoader().load("./texture/container.jpg");
const texture_container = new THREE.TextureLoader().load("./texture/container2.png");
const texture_container_specular = new THREE.TextureLoader().load("./texture/container2_specular.png");
const texture_window = new THREE.TextureLoader().load("./texture/window.png");
const texture_marble = new THREE.TextureLoader().load("./texture/marble.jpg");
const texture_metal = new THREE.TextureLoader().load("./texture/metal.png");
const texture_grass = new THREE.TextureLoader().load("./texture/grass.png");
const texture_emoji = new THREE.TextureLoader().load("./texture/awesomeface.png");

const geo = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);

renderer.setClearColor(0x0a0a0a);

const box_geo = new THREE.BoxGeometry(1, 1, 1);
const geo_mat = new THREE.MeshPhongMaterial({ map: texture_container, specularMap: texture_container_specular, side: THREE.DoubleSide});
const mesh = new THREE.Mesh(box_geo, geo_mat);
mesh.castShadow = true;
scene.add(mesh);

const plane = new PlaneMesh(scene);
plane.plane_mesh.position.y = -0.5;

// const ambient = new THREE.AmbientLight(0xffffff, 0.09);
// scene.add(ambient);

const lampu = new LightGeo(scene, new THREE.BoxGeometry(1, 1, 1), new THREE.Vector3(0,3,2));
// lampu.light_mesh.position.set(0,5,0);


// const sLight = new THREE.SpotLight(0xffffff, 15, 15, Math.PI/8);
// sLight.position.set(0, 3, -1);
// sLight.target = mesh;
// sLight.castShadow = true;
// scene.add(sLight);

// const sLightHelper = new THREE.SpotLightHelper(sLight, 0xff0000);
// scene.add(sLightHelper);

// const dLight = new THREE.DirectionalLight(0x00ff00, 0.09);
// scene.add(dLight);


window.addEventListener("resize", function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
});

let startTime = 0;
function draw() {
    // controls.update();
    startTime += 0.1;
    renderer.render(scene, cam);


    // mesh.position.y = Math.sin(startTime) * 5;
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;

    requestAnimationFrame(draw);
}
draw();