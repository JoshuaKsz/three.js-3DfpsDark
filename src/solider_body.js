import * as CANNON from 'cannon-es';
import * as THREE from "three";

import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

export default class SoliderBody {
    constructor(world, scene, position = new CANNON.Vec3(0, 5, 0), bodySize = new CANNON.Vec3(1, 1, 1), meshSize = new CANNON.Vec3(1, 1, 1), mass = 1) {
        this.world = world;
        this.size = bodySize;
        this.meshSize = meshSize;
        this.mass = mass;

        this.boxShape = new CANNON.Box(this.size);
        this.position = position;
        this.boxBody = new CANNON.Body({
            mass: this.mass,
        });
        this.boxBody.position.set(this.position.x, this.position.y, this.position.z);

        const material = new CANNON.Material();
        material.friction = 0.8;   
        material.restitution = 0;  // Set 0 untuk no bounce

        this.boxBody.material = material;

        this.boxBody.linearDamping = 0.9;
        this.boxBody.angularDamping = 0.9;

        this.boxBody.addShape(this.boxShape);
        this.world.addBody(this.boxBody);


        
        this.model = null;
        const loader = new GLTFLoader();
        loader.load('./models/3d_object/solider/solider1.glb', (gltf) => {
            this.model = gltf.scene;
            
            this.model.scale.set(this.meshSize.x * 2, this.meshSize.y * 2, this.meshSize.z * 2);
            this.model.position.set(this.position);
            this.model.name = "enemy";
            // console.log(this.model.name);
            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    child.name = 'enemy';
                    // console.log(child.name)
                }
            });

            scene.add(this.model);
        }, undefined, (error) => {
            console.error('Error loading GLTF model:', error);
        });
    }

    update() {
        this.mesh.position.copy(this.boxBody.position);
        this.mesh.quaternion.copy(this.boxBody.quaternion);
    }

    removeModel(scene) {
        scene.remove(this.model);
    }
}
