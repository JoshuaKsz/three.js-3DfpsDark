import * as THREE from "three"
import * as CANNON from 'cannon-es';

export default class PlaneMesh {

    constructor(scene, world, position) {
        const wood_texture = new THREE.TextureLoader().load("./texture/container.jpg");

        wood_texture.repeat.set(5, 5);
        wood_texture.wrapS = THREE.RepeatWrapping;
        wood_texture.wrapT = THREE.RepeatWrapping;
        wood_texture.needsUpadate = true;

        let plane = new CANNON.Plane();
        let planebody = new CANNON.Body({shape: plane, mass:0});
        planebody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI/2);
        planebody.position.y = -5.697073719507009;
        planebody.position.copy(new CANNON.Vec3(42.952951730922166, -5.697073719507009, -3.847427743219132));
        world.addBody(planebody);

        const plane_geo = new THREE.PlaneGeometry(25, 25, 50, 50);
        const plane_material = new THREE.MeshStandardMaterial({ map: wood_texture });
        this.plane_mesh = new THREE.Mesh(plane_geo, plane_material);
        this.plane_mesh.rotation.x = -Math.PI/2;
        // this.plane_mesh.rotation.y = -0.5;
        this.plane_mesh.position.copy(new THREE.Vector3(42.952951730922166, -5.697073719507009, -3.847427743219132));
        this.plane_mesh.receiveShadow = true;
        scene.add(this.plane_mesh);
        
        
    }
}