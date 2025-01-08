import * as THREE from "three";

import PlaneMesh from "./plane_mesh.js";
import LightGeo from "./light_geo.js";

import CharacterBody from "./character_body.js";
import PlayerBody from "./player_body.js";

// https://www.npmjs.com/package/cannon-es Untuk cannon tetapi es module
// Kebanyakan physics engine tidak support es module 
// sudah coba ammo.js tidak bisa dengan es6
import * as CANNON from 'cannon-es';

import Game from "./game.js";

import CubeTest from "./cube_test.js";

const scene = new THREE.Scene();


const cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
cam.position.x = -19;
cam.position.y = 7.5;
cam.position.z = 23;
cam.position.copy(new THREE.Vector3(-9.98,5.325, -20.4));

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x0a0a0a);

const world = new CANNON.World();
const player = new PlayerBody(new CANNON.Vec3(-19, 7.5, 23), new CubeTest(world, scene, new CANNON.Vec3(-19, 7.5, 23), new CANNON.Vec3(1, 1.5, 1), 0x00ff00, 70), cam);
const fps3dDark = new Game(scene, cam, renderer, world, window.innerWidth, window.innerHeight, player);

function main() {

    
    world.gravity.set(0, -9.8, 0);
    world.broadphase = new CANNON.NaiveBroadphase();
    let timeStamp = 1.0/60.0;
    
    // let boxObject1 = new CubeTest(world, scene, new CANNON.Vec3(5, 0.2, 0), new CANNON.Vec3(2, 0.2, 2), 0x00ff00, 0);
    // let boxObject2 = new CubeTest(world, scene, new CANNON.Vec3(9, 0.4, 0), new CANNON.Vec3(2, 0.2, 2), 0x00ff00, 0);

    // let quat = new CANNON.Quaternion();
    // quat.setFromEuler(Math.PI / 9, 0, 0);  // Rotate 45 degrees around the X-axis
    // boxObject1.boxBody.quaternion = quat;


    // boxObject.boxBody.angularVelocity.set(0, 0, 0); // This will stop any rotation
    // boxObject.boxBody.fixedRotation = true;  // Locks rotation on all axes
    // boxObject.boxBody.angularDamping = 0.99; 

    const clock = new THREE.Clock();
    function loop() {
        world.step(timeStamp);

        player.updateCamera();
        player.physicsUpdate();

        // boxObject.boxBody.position.x = cam.position.x;
        // boxObject.boxBody.position.z = cam.position.z;

        // cam.position.x = boxObject.boxBody.position.x;
        // cam.position.z = boxObject.boxBody.position.z;
        // cam.position.y = boxObject.boxBody.position.y;


        // boxObject1.update();
        // boxObject2.update();

        fps3dDark.nodeAllPhysicsUpdate();


        renderer.render(scene, cam);
        const deltaTime = clock.getDelta();
        fps3dDark.ProcessInput(deltaTime);
        requestAnimationFrame(loop);
    }
    loop();
    return 0;
}
main();

