import * as THREE from "three"

export default class LightGeo {
    constructor(scene, light_geo = new THREE.BoxGeometry(1, 1, 1), position_c = new THREE.Vector3(0, 0, 0), color = 0xffffff) {
        this.position = position_c;
        this.light_geo = light_geo;
        this.color = color;
        const light_material = new THREE.MeshBasicMaterial({ color: this.color });
        this.light_mesh = new THREE.Mesh(light_geo, light_material);
        this.light_mesh.receiveShadow = true;

        this.light_mesh.position.x = this.position.x;
        this.light_mesh.position.y = this.position.y;
        this.light_mesh.position.z = this.position.z;

        this.light = new THREE.PointLight( this.color, 5, 100 );

        this.light.position.set(this.position.x, this.position.y, this.position.z);
        scene.add(this.light);
        scene.add(this.light_mesh);
    }
}