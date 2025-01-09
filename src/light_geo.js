import * as THREE from "three"

export default class LightGeo {
    constructor(scene, light_geo = new THREE.BoxGeometry(1, 1, 1), position_c = new THREE.Vector3(0, 0, 0), color = 0xffffff) {
        this.position = position_c;
        this.light_geo = light_geo;
        this.color = color;
        const light_material = new THREE.MeshBasicMaterial({ color: this.color });
        this.light_mesh = new THREE.Mesh(light_geo, light_material);
        this.light_mesh.receiveShadow = true;

        // https://github.com/mrdoob/three.js/issues/8940
        // Harus nya bisa dan tehnik ini lebih efisien karena hanya copy memory addres / alamat memory
        // dan tidak perlu set 2 object posisi hanya 1 yaitu this.position 
        // Uncaught TypeError: "position" is read-only
        // this.light_mesh.position = this.position;
        
        this.light_mesh.position.set(this.position.x, this.position.y, this.position.z);

        this.light = new THREE.PointLight( this.color, 5, 100 );

        // https://github.com/mrdoob/three.js/issues/8940
        // Harus nya bisa dan tehnik ini lebih efisien karena hanya copy memory addres / alamat memory
        // dan tidak perlu set 2 object posisi hanya 1 yaitu this.position
        // Uncaught TypeError: "position" is read-only
        // this.light.position = this.position;
        
        this.light.position.set(this.position.x, this.position.y, this.position.z);
        
        scene.add(this.light);
        scene.add(this.light_mesh);
    }

    

    updatePositionnewPosition(newPosition) {
        this.light.position.set(newPosition.x, newPosition.y, newPosition.z);
        this.light_mesh.position.set(newPosition.x, newPosition.y, newPosition.z);
    }
}