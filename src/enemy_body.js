import * as THREE from "three"

import CharacterBody from "./character_body.js";
import * as CANNON from 'cannon-es';

export default class EnemyBody extends CharacterBody {
    constructor(position, physicsObject) {
        super(position, physicsObject);
        this.quat = new CANNON.Quaternion();
        this.angle = Math.PI / 180 * 1;

    }

    modelUpdate() {
        if (this.physicsObject) {
            if (this.physicsObject.model) {
                this.quat = new CANNON.Quaternion();
                this.angle += 0.01;
                this.quat.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), this.angle);
                this.physicsObject.model.position.set(this.physicsObject.boxBody.position.x, this.physicsObject.boxBody.position.y-1.5, this.physicsObject.boxBody.position.z);
                // this.physicsObject.model.quaternion.copy(this.physicsObject.boxBody.quaternion);
                this.physicsObject.model.quaternion.copy(this.quat);
                
            }
        }
    }

    removeModel(scene) {
        this.physicsObject.removeModel(scene);
        this.position = undefined;
        this.physicsObject = undefined;

    }
};