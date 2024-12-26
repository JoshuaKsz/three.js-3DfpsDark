import * as THREE from "three"

import CharacterBody from "./character_body.js";

export default class PlayerBody extends CharacterBody {
    constructor(position, physicsObject, camera) {
        super(position, physicsObject);
        this.cam = camera;
    }

    updateCamera() {
        this.physicsObject.boxBody.quaternion.y = this.cam.quaternion.y;
        this.physicsObject.boxBody.quaternion.x = 0;
        this.physicsObject.boxBody.quaternion.z = 0;

        this.cam.position.copy(this.physicsObject.boxBody.position);
    }
    
    moveForward(velocity) {
        const direction = new THREE.Vector3();

        this.cam.getWorldDirection(direction);
        direction.y = 0;
        direction.normalize();
        let horizontalVelocity = direction.clone().multiplyScalar(velocity);
        let currentVelocity = this.physicsObject.boxBody.velocity;
        let currentPosY = this.physicsObject.boxBody.position.y;
        
        this.physicsObject.boxBody.position.x += horizontalVelocity.x;
        this.physicsObject.boxBody.position.y = currentPosY;
        this.physicsObject.boxBody.position.z += horizontalVelocity.z;
        
        // boxS.boxBody.velocity.set(
        //     horizontalVelocity.x,
        //     currentVelocity.y,
        //     horizontalVelocity.z
        // );
    }

    moveRight(velocity) {
        const direction = new THREE.Vector3();

        this.cam.getWorldDirection(direction);
        direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
        direction.y = 0;
        direction.normalize();
        let horizontalVelocity = direction.clone().multiplyScalar(velocity);
        let currentVelocity = this.physicsObject.boxBody.velocity;
        let currentPosY = this.physicsObject.boxBody.position.y;

        this.physicsObject.boxBody.position.x += horizontalVelocity.x;
        this.physicsObject.boxBody.position.y = currentPosY;
        this.physicsObject.boxBody.position.z += horizontalVelocity.z;
    }
};