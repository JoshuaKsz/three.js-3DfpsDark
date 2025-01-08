import * as CANNON from 'cannon-es';
import * as THREE from "three";


export default class CubeTest {
    constructor(world, scene, position = new CANNON.Vec3(0, 5, 0), size = new CANNON.Vec3(1, 1, 1), color = 0x00ff00, mass = 1) {
        this.world = world;
        this.size = size;
        this.mass = mass;

        const texture_window = new THREE.TextureLoader().load("./texture/window.png");


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

        // TIdak tahu kenapa size geometry = 2 * size cannon box
        this.geometry = new THREE.BoxGeometry(this.size.x * 2, this.size.y * 2, this.size.z * 2);
        
        this.material = new THREE.MeshBasicMaterial({ 
            map: texture_window, 
            side: THREE.DoubleSide,
            transparent: true,
            // opacity: 0.0,
        });
        
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        this.mesh.position.set(this.position);
        
        scene.add(this.mesh);

        // https://github.com/mrdoob/three.js/issues/8940
        // Harus nya bisa dan tehnik ini lebih efisien karena hanya copy memory addres / alamat memory
        // dan tidak perlu set 2 object posisi hanya 1 yaitu this.position dan juga tidak pelu copy pos
        // Uncaught TypeError: "position" is read-only
        // this.mesh.position = this.boxBody.position;
        // this.mesh.quaternion = this.boxBody.quaternion;
    }

    update() {
        this.mesh.position.copy(this.boxBody.position);
        this.mesh.quaternion.copy(this.boxBody.quaternion);
    }
}
