import * as THREE from 'three';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from "mouseCursorPointers";

import KeyboardInput from "./Keyboard_input.js";

// Create a scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);

// Create a WebGL renderer and append it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x0a0a0a);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.AmbientLight(0x404040, 5); // Ambient light
scene.add(light);

// Load a GLTF model
const loader = new GLTFLoader();
let model;
loader.load('./models/map/dust2/dust2.gltf', (gltf) => {
  model = gltf.scene;
  console.log(model);
  model.scale.set(9, 9, 9); // Scale the model if necessary
  model.position.set(0, 0, 0); // Position the model if necessary
  scene.add(model);
}, undefined, (error) => {
  console.error('Error loading GLTF model:', error);
});
console.log(model)
camera.position.z = 5;

let controls = new PointerLockControls(
  camera,
  document.body
);

controls.pointerSpeed =  0.25; 

// document.addEventListener('pointerlockchange', () => {});
document.body.addEventListener('click', () => {
  console.log("click")
  if (document.pointerLockElement == null) {
      document.body.requestPointerLock();
  } else {
      // this.node.push(new CubeTest(world, scene, new CANNON.Vec3(0, 5, 0), new CANNON.Vec3(1, 1, 1), 0x00ff00, 1));
      // new LightGeo(scene, new THREE.BoxGeometry(), new THREE.Vector3(this.cam.position.x, this.cam.position.y, this.cam.position.z + 5), 0xff0000);
  }
});

let keyboard_input = new KeyboardInput();  


window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  console.log(model)

  const velocity = 5
  // w
  if (keyboard_input.Keys[87]) {
      controls.moveForward(velocity);
  }
  // a
  if (keyboard_input.Keys[65]) {
    controls.moveRight(-velocity);
  
  }
   // a
   if (keyboard_input.Keys[66]) {
    console.log(camera.position);
  }
  // s
  if (keyboard_input.Keys[83]) {
      controls.moveForward(-velocity);
  
  }
  // d
  if (keyboard_input.Keys[68]) {
      controls.moveRight(velocity);
  }
  // space
  if (keyboard_input.Keys[32]) {
      // boxS.boxBody.applyForce(new CANNON.Vec3(0, 100, 0), boxS.boxBody.position);
      // boxS.boxBody.angularVelocity.set(0, 0, 0);
      camera.position.y += velocity;
  }
  // shift
  if (keyboard_input.Keys[16]) {
      camera.position.y -= velocity;
  }

  // Rotate the model (if loaded)
  // if (scene.children.length > 1) {
  //   scene.children[1].rotation.x += 0.01;
  //   scene.children[1].rotation.y += 0.01;
  // }

  renderer.render(scene, camera);
}

animate();
