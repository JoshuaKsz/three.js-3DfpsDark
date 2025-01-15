import * as THREE from "three"
import * as CANNON from 'cannon-es';
import { PointerLockControls } from "mouseCursorPointers";

import KeyboardInput from "./Keyboard_input.js";

import LightGeo from "./light_geo.js";
import PlaneMesh from "./plane_mesh.js";

import Bullet from "./bullet.js";

import CubeTest from "./cube_test.js";

import Map from "./map.js";

import EnemyBody from "./enemy_body.js";

import SoliderBody from "./solider_body.js"

var GameState;
(function (GameState) {
    GameState[GameState["GAME_ACTIVE"] = 0] = "GAME_ACTIVE";
    GameState[GameState["GAME_MENU"] = 1] = "GAME_MENU";
    GameState[GameState["GAME_WIN"] = 2] = "GAME_WIN";
    GameState[GameState["GAME_DEBUG"] = 3] = "GAME_DEBUG";
})(GameState  || (GameState  = {}));

// coupling vs cohesion
// composition vs inheritance
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(err) {
        console.error('Failed to copy text: ', err);
    });
}
  
export default class Game {
    constructor (scene, camera, renderer, world, width = window.innerWidth, height = window.innerHeight, player) {
        // this.State = GameState.GAME_DEBUG;  
        this.State = GameState.GAME_ACTIVE;
        this.keyboard_input = new KeyboardInput();  
        this.Width = width;
        this.Height = height;

        this.scene = scene;
        this.cam = camera;
        this.renderer = renderer;
        this.world = world;

        this.rayCast = new THREE.Raycaster();

        this.bullet = [];

        this.node = [];
        this.map = new Map(scene, world);
        this.player = player;
        const plane = new PlaneMesh(this.scene, this.world);

        this.enemy_node = [
            new EnemyBody(new CANNON.Vec3(-57.1, 5.54, 24.34), new SoliderBody(world, scene, new CANNON.Vec3(-57.1, 5.54, 24.34), new CANNON.Vec3(1, 1.5, 1), new CANNON.Vec3(1, 1, 1), 1)),
            new EnemyBody(new CANNON.Vec3(-54.864909983335906, 3.162859357850746, -62.86420430259549), new SoliderBody(world, scene, new CANNON.Vec3(-54.864909983335906, 3.162859357850746, -62.86420430259549), new CANNON.Vec3(1, 1.5, 1), new CANNON.Vec3(1, 1, 1), 1)),
            
            new EnemyBody(new CANNON.Vec3(-10.623636840430013, 4.044883297834085, -20.06935921875801), new SoliderBody(world, scene, new CANNON.Vec3(-10.623636840430013, 4.044883297834085, -20.06935921875801), new CANNON.Vec3(1, 1.5, 1), new CANNON.Vec3(1, 1, 1), 1)),
            new EnemyBody(new CANNON.Vec3(23.34172829000856, 6.974449666219084, -76.55029691240725), new SoliderBody(world, scene, new CANNON.Vec3(23.34172829000856, 6.974449666219084, -76.55029691240725), new CANNON.Vec3(1, 1.5, 1), new CANNON.Vec3(1, 1, 1), 1)),

        
        ];

        this.light = new LightGeo(scene, new THREE.BoxGeometry(), new THREE.Vector3(0,1,0), 0xffffff);        
        

        this.controls = new PointerLockControls(
            this.cam,
            document.body,
        );
        this.controls.pointerSpeed =  0.25;


        if (this.State == GameState.GAME_DEBUG) {
            this.player.cam = this.player.physicsObject.boxBody;
        }
        // this.ambient = new THREE.AmbientLight(0xffffff,2)
        // scene.add(this.ambient);

        // setInterval(function() {
        //     // console.log(this.bullet);
        //     if (this.bullet != undefined) {
        //         for (let i = 0; i < this.bullet.length; i++ ){
        //             this.bullet[i].bulletMove();
        //             console.log("trash",this.bullet[i].position);
        //         }
        //     }
        // }, 100);

        
        

        // document.addEventListener('pointerlockchange', () => {});
        document.body.addEventListener('click', (event) => {
            let hit = false;
            console.log("click")
            if (document.pointerLockElement == null) {
                document.body.requestPointerLock();
            } else {
                console.log(this.player.physicsObject.boxBody.position)
                if (this.State == GameState.GAME_DEBUG) {

                    const direction = new THREE.Vector3();
            
                    this.cam.getWorldDirection(direction);
                    direction.normalize();
                    let faceDir = direction.clone().multiplyScalar(4);
                    faceDir.x += this.cam.position.x;
                    faceDir.y += this.cam.position.y;
                    faceDir.z += this.cam.position.z;
                    console.log(faceDir);

                    this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.copy(new CANNON.Vec3(faceDir.x, faceDir.y, faceDir.z));
                } else {   
                    const direction = new THREE.Vector3();
                    
                    this.cam.getWorldDirection(direction);
                    direction.normalize();
                    let faceDir = direction.clone().multiplyScalar(1);
                    // faceDir.x += this.cam.position.x;
                    // faceDir.y += this.cam.position.y;
                    // faceDir.z += this.cam.position.z;
                    
                    console.log("dir",faceDir);
                    this.bullet.push(new Bullet(scene, new THREE.Vector3(this.player.physicsObject.boxBody.position.x, this.player.physicsObject.boxBody.position.y, this.player.physicsObject.boxBody.position.z), new THREE.Vector3(0.01,0.01,0.01), 0xffff00, direction));
                    console.log("t",this.cam.position.y);                    
                    console.log(this.cam.position);
                    // setTimeout(() => {
                    //     this.bullet = this.bullet;  // Update `l` after 1 second
                    // }, 100);
                    
                    this.rayCast.setFromCamera({x: 0, y: 0}, this.cam);
    
                    let items = this.rayCast.intersectObjects(this.scene.children);
                    console.log(items);
                    if (items.length > 0) {
                        items.forEach((i)=>{
                            // console.log(i.object.name);
                            if (i.object.name.includes("enemy")) {
                                // console.log(i.object.name.match(/\d+/));
                                // console.log(i);
                                hit = true;
                            }
                        })
                    }
                    this.node.push(new CubeTest(world, scene, new CANNON.Vec3(0, 5, 0), new CANNON.Vec3(1, 1, 1), 0x00ff00, 1));
                    if (hit) {
                        this.enemy_node[0].removeModel(this.scene);
                        // this.enemy = undefined;
                        hit = false;
                    }
                    // new LightGeo(scene, new THREE.BoxGeometry(), new THREE.Vector3(this.cam.position.x, this.cam.position.y, this.cam.position.z + 5), 0xff0000);
                }
                
                
            }
        });


    }

    init() {

    }

    
    ProcessInput(dt) {
        const speed = 9;
        const velocity = speed * dt;
        if (this.State == GameState.GAME_MENU) {

        }
        else if (this.State == GameState.GAME_WIN) {

        }
        else if (this.State == GameState.GAME_ACTIVE) {
            // w
            if (this.keyboard_input.Keys[87]) {
                this.player.moveForward(velocity);
            }
            // a
            if (this.keyboard_input.Keys[65]) {
                this.player.moveRight(velocity);
            }
            // s
            if (this.keyboard_input.Keys[83]) {
                this.player.moveForward(-velocity);
            }
            // d
            if (this.keyboard_input.Keys[68]) {
                this.player.moveRight(-velocity);                
            }
            // space
            if (this.keyboard_input.justPressedKey[32]) {
                const pushKaki = new CANNON.Vec3();
                pushKaki.copy(this.player.physicsObject.boxBody.position)
                // pushKaki.y -= 100;
                // pushKaki.x -= 1;
                this.player.physicsObject.boxBody.applyImpulse(new CANNON.Vec3(0, 100, 0), pushKaki);
                this.keyboard_input.justPressedKey[32] = false;
                // boxS.boxBody.velocity.set(0, 0, -10);
                // boxS.boxBody.angularVelocity.set(0, 0, 0);
                // this.cam.position.y += velocity;
            }
            // shift
            if (this.keyboard_input.Keys[16]) {
                this.cam.position.y -= velocity;
            }
            // esc
            if (this.keyboard_input.Keys[27]) {
                console.log(document.pointerLockElement);
            }
            // b
            if (this.keyboard_input.Keys[66]) {
                
            }
            
            // 1 - 9 , 0
            if (this.keyboard_input.Keys[49]) {
                this.changeHand("./image/ak.png");
            }
            if (this.keyboard_input.Keys[50]) {
                this.changeHand("./image/glock.png");
            }
            if (this.keyboard_input.Keys[51]) {
                this.changeHand("./image/hand.png");
            }
            if (this.keyboard_input.Keys[52]) {
                this.changeHand("./image/awp.png");
            }
            if (this.keyboard_input.Keys[53]) {
                this.changeHand("./image/m4a1.png");
            }
            if (this.keyboard_input.Keys[54]) {
                this.changeHand("./image/m4a4.png");
            }

            if (this.keyboard_input.Keys[48]) {
                this.changeHand("");
            }
        }
        else if (this.State == GameState.GAME_DEBUG) {
            // m
            if (this.keyboard_input.Keys[77]) {
                let pos = this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position; 
                console.log(pos)

                let text = `${pos.x}, ${pos.y}, ${pos.z}`; 
                copyToClipboard(JSON.stringify(text).replace('"','').replace('"',''));
            }
            // w
            if (this.keyboard_input.Keys[87]) {
                this.controls.moveForward(velocity);
            }
            // a
            if (this.keyboard_input.Keys[65]) {
                this.controls.moveRight(-velocity);
                
            }
            // s
            if (this.keyboard_input.Keys[83]) {
                this.controls.moveForward(-velocity);
                
            }
            // d
            if (this.keyboard_input.Keys[68]) {
                this.controls.moveRight(velocity);
            }
            // space
            if (this.keyboard_input.Keys[32]) {
                this.cam.position.y += velocity;
                // boxS.boxBody.angularVelocity.set(0, 0, 0);
                // this.cam.position.y += velocity;
            }
            // shift
            if (this.keyboard_input.Keys[16]) {
                this.cam.position.y -= velocity;
            }
            // esc
            if (this.keyboard_input.Keys[27]) {
                console.log("cam", this.cam.position);
                console.log(document.pointerLockElement);
            }
            // b
            if (this.keyboard_input.Keys[66]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.z += 0.05;
            }
            // c
            if (this.keyboard_input.Keys[67]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.z -= 0.05;
            }

            // o
            if (this.keyboard_input.Keys[79]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.x -= 0.05;
            }
            // p
            if (this.keyboard_input.Keys[80]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.x += 0.05;
            }
            // k
            if (this.keyboard_input.Keys[75]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.y -= 0.05;
            }
            // l
            if (this.keyboard_input.Keys[76]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.y += 0.05;
            }
        }
    }
    
    nodeAllPhysicsUpdate() {
        this.node.forEach(item => {
            item.update();
        });
        this.map.allCollisionPhysicsUpdate();
        this.enemy_node.forEach(enemy => {
            enemy.modelUpdate();
        });
        // this.enemy.physicsObject.update();
        // this.bullet.forEach(bul => {
        //     bul.bulletMove();
        //     // console.log(bul.position);
        // });

        // setInterval(function() {
        //     console.log(this.bullet);
        //     if (this.bullet != undefined) {
        //         for (let i = 0; i < this.bullet.size(); i++ ){
            //             console.log("trash",this.bullet[i].position);
            //         }
            //     }
            // }, 1000);
        for (let i = 0; i < this.bullet.length; i++ ){
            this.bullet[i].bulletMove();
            // console.log("trash",this.bullet[i].position);
        }
    }

    changeHand(src) {
        const imageElement = document.getElementById('fullscreenImage');
        imageElement.src = src;  // Update the source of the image dynamically
    }

    camUpdate() {

    }

    Update(dt) {

    }

    Render() {

    }
};

