import * as THREE from "three";

export default class Bullet {
    constructor(scene, position = new THREE.Vector3(0, 5, 0), size = new THREE.Vector3(1, 1, 1), color = 0xffff00, faceDir) {
        this.size = size;
        this.faceDir = faceDir.clone();
        this.position = position;

        this.geometry = new THREE.BoxGeometry(this.size.x * 2, this.size.y * 2, this.size.z * 2);
        
        this.material = new THREE.MeshBasicMaterial({ 
            side: THREE.DoubleSide,
            color: color
        });
        
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        this.mesh.position.copy(this.position);
        this.mesh.name = "bullet";
        scene.add(this.mesh);

        console.log("adsadad", this.mesh.position)
    }

    bulletMove() {
        let dir = this.faceDir.clone();
        this.position.add(dir.clone().multiplyScalar(0.1).clone());
        
        this.mesh.position.copy(this.position);

    }
    
    checkOutBounds() {

    }

}
