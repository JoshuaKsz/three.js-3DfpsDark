import * as THREE from "three"
import * as CANNON from 'cannon-es';

export default class PlaneMesh {

    constructor(scene, world) {
        const wood_texture = new THREE.TextureLoader().load("./texture/container.jpg");

        wood_texture.repeat.set(5, 5);
        wood_texture.wrapS = THREE.RepeatWrapping;
        wood_texture.wrapT = THREE.RepeatWrapping;
        wood_texture.needsUpadate = true;

        let plane = new CANNON.Plane();
        let planebody = new CANNON.Body({shape: plane, mass:0});
        planebody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI/2);
        world.addBody(planebody);

        const plane_geo = new THREE.PlaneGeometry(25, 25, 50, 50);
        const plane_material = new THREE.MeshStandardMaterial({ map: wood_texture });
        this.plane_mesh = new THREE.Mesh(plane_geo, plane_material);
        this.plane_mesh.rotation.x = -Math.PI/2;
        // this.plane_mesh.rotation.y = -0.5;
        this.plane_mesh.receiveShadow = true;
        scene.add(this.plane_mesh);
        
        
    }
}