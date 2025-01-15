import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import CubeTest from "./cube_test.js";
import * as CANNON from 'cannon-es';


export default class Map{
    constructor(scene, world) {
        const loader = new GLTFLoader();

        let model = null;
        loader.load('./models/map/dust2/dust2.gltf', (gltf) => {
            model = gltf;
            
            model.scene.scale.set(2.25, 2.25, 2.25);
            model.scene.position.set(0, 0, 0);
            scene.add(model.scene);
            console.log(model);

            // scene.remove(this.model);

        });
        console.log(model);
        // this.model.dispose();
        console.log("a",model);
        

        
        this.collisionMap = [
            new CubeTest(world, scene, new CANNON.Vec3(-42, 3.8, 24.7), new CANNON.Vec3(26.7, 0.25, 6), 0x00ff00, 0), // lantai
            new CubeTest(world, scene, new CANNON.Vec3(-27.87, 6.9, 28.6), new CANNON.Vec3(1, 3.69, 2.8), 0x00ff00, 0), // wall z
            new CubeTest(world, scene, new CANNON.Vec3(-27.87, 9.35, 23), new CANNON.Vec3(1, 1.3, 2.99), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-27.87, 6.9, 14), new CANNON.Vec3(1, 3.69, 6.3), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-21.2, 6.9, 18.75), new CANNON.Vec3(5.85, 3.69, 0.5), 0x00ff00, 0), // wall x
            new CubeTest(world, scene, new CANNON.Vec3(-30.7, 5.7, 17.3), new CANNON.Vec3(2, 2, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-29.8, 5.7, 14.4), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(32.1, 3.93, -90.83), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(39.44, 6.46, -92.64), new CANNON.Vec3(9, 4, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(53.84, 5.73, -69.37), new CANNON.Vec3(4, 5, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(54.11, 4.44, -61.39), new CANNON.Vec3(0.5, 5, 11), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(48.30, 5.77, -81.27), new CANNON.Vec3(0.5, 5, 11), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(30.32, 7.08, -87.90), new CANNON.Vec3(0.5, 3.5, 4), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(48.13, 5.62, -42.35), new CANNON.Vec3(0.5, 5, 10), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(38.22, 4.85, -49.08), new CANNON.Vec3(0.5, 5, 10), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(54.19, 3.92, -21.15), new CANNON.Vec3(0.5, 5, 10), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(48.24, -2.20, -15.00), new CANNON.Vec3(0.5, 5, 10), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(7.25, 6.68, -79.91), new CANNON.Vec3(0.5, 3.7, 2.9), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(8.27, 6.68, -73.16), new CANNON.Vec3(0.5, 3.7, 4), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(7.40, 5.48, -58.15), new CANNON.Vec3(0.5, 5.3, 11), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(15.76, 4.2, -51.71), new CANNON.Vec3(0.5, 4.4, 10), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(37.93, -2.21, -11.56), new CANNON.Vec3(0.6, 3.3, 11.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(28.38, 4.37, -12.21), new CANNON.Vec3(0.5, 4.2, 9.3), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(14.98, 4.43, -27.85), new CANNON.Vec3(0.5, 4.3, 5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(34.74, 5.23, -6.04), new CANNON.Vec3(0.5, 5.3, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(37.41, 4.27, -37.38), new CANNON.Vec3(2, 5.3, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(37.55, 4.35, -60.55), new CANNON.Vec3(2, 5.3, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(52.19, 4.85, -11.14), new CANNON.Vec3(1.5, 3, 1.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(52.58, 2.95, -29.77), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(52.58, 2.95, -29.77), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(36.92, 3.95, -75.36), new CANNON.Vec3(1, 1, 1.2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(52.36, 2.65, -55.24), new CANNON.Vec3(1.5, 1.5, 1.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(13.86, 1.45, -43.83), new CANNON.Vec3(1.5, 1.5, 1.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(25.01, 1.97, -34.51), new CANNON.Vec3(2, 2, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(27.84, 0.93, -35.46), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(14.32, 4.76, -60.03), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(39.40, -4.83, -1.94), new CANNON.Vec3(1, 1, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(46.98, -4.74, -5.75), new CANNON.Vec3(1, 1, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(47.06, -2.88, -5.31), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(31.60, 2.86, -4.80), new CANNON.Vec3(3, 3, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(30.67, 1.88, -6.75), new CANNON.Vec3(2, 2, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(30.62, 1.62, -9.55), new CANNON.Vec3(1.7, 1.6, 1.7), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(30.62, 1.62, -9.55), new CANNON.Vec3(1.7, 1.6, 1.7), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(39.18, 1.66, -71.72), new CANNON.Vec3(1.2, 1.2, 1.2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(32.15, 4.83, -70.8), new CANNON.Vec3(1, 2, 1.25), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(32.39, 3.88, -72.64), new CANNON.Vec3(1.2, 1, 1.25), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(18.20, 0.21, -71.05), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(17.74, -2.14, -70.55), new CANNON.Vec3(1.5, 1.5, 1.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(20.64, -1.49, -70.55), new CANNON.Vec3(1.5, 1.5, 1.5), 0x00ff00, 0),

            // Tangga
            new CubeTest(world, scene, new CANNON.Vec3(48.43, 1.21, -26.89), new CANNON.Vec3(0.5, 0.3, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(47.48, 0.80, -26.89), new CANNON.Vec3(0.5, 0.3, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(46.53, 0.19, -26.89), new CANNON.Vec3(0.5, 0.3, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(53.20, 2.20, -16.81), new CANNON.Vec3(0.5, 0.3, 2.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(34.12, 3.20, -83.43), new CANNON.Vec3(2.5, 0.3, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(9.5, 2.17, -53.25), new CANNON.Vec3(2, 0.3, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(9.6, 1.67, -52.25), new CANNON.Vec3(2, 0.3, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(9.6, 1.21, -51.30), new CANNON.Vec3(2, 0.3, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(9.54, 0.70, -50.40), new CANNON.Vec3(2, 0.3, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(9.94, 0.24, -49.35), new CANNON.Vec3(2.2, 0.3, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(34.26, 3.38, -84.38), new CANNON.Vec3(4, 0.5, 0.5), 0x00ff00, 0),
            

            // Pijakan
            new CubeTest(world, scene, new CANNON.Vec3(11.29, -0.009, -47.90), new CANNON.Vec3(4, 0.1, 6), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(11.64, 2.88, -68.58), new CANNON.Vec3(4.3, 0.1, 15), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(19.69, 2.87, -77.47), new CANNON.Vec3(3.8, 0.1, 5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(27.39, 2.92, -78.41), new CANNON.Vec3(3.9, 0.1, 6), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(34.43, 2.96, -77.01), new CANNON.Vec3(3.5, 0.1, 7.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(39.71, 3.89, -87.90), new CANNON.Vec3(9, 0.1, 4), 0x00ff00, 0),


            // Gundukan
            new CubeTest(world, scene, new CANNON.Vec3(47.50, 3.93, -87.97), new CANNON.Vec3(1, 0.5, 4), 0x00ff00, 0),

            // Dinding
            new CubeTest(world, scene, new CANNON.Vec3(11.15, 6.72, -82.53), new CANNON.Vec3(3.8, 3.8, 0.1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(19.25, 6.67, -81.68), new CANNON.Vec3(3.9, 3.8, 0.1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(26.19, 6.67, -82.57), new CANNON.Vec3(2.8, 3.8, 0.1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(25.43, 2.61, -61.42), new CANNON.Vec3(10, 6.2, 0.1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(27.23, 4.45, -36.57), new CANNON.Vec3(8.2, 4.6, 0.1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(45.29, 5.27, -9.62), new CANNON.Vec3(9.1, 5.3, 0.1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(52.60, 5.78, -53.07), new CANNON.Vec3(5, 5.3, 0.8), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(52.89, 5.78, -31.42), new CANNON.Vec3(5, 5.3, 0.8), 0x00ff00, 0),
        ];
    }

    allCollisionPhysicsUpdate() {
        this.collisionMap.forEach(item => {
            item.update();
        });
    }

};