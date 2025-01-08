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
            new CubeTest(world, scene, new CANNON.Vec3(-52.3, 4.8, 9.2), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-51.3, 5.8, 6.2), new CANNON.Vec3(2, 2, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-60, 2.3, -17.7), new CANNON.Vec3(1.5, 1.5, 1.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-44.7, 1.5, 1), new CANNON.Vec3(1.5, 1.5, 3), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-48.2, 7.7, 30.2), new CANNON.Vec3(20, 3.7, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-67.7, 7.7, 22.5), new CANNON.Vec3(1, 4, 8), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-64.3, 1.8, 0.59), new CANNON.Vec3(3, 2.2, 19), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-40.9, 1.8, 11.7), new CANNON.Vec3(13 , 2.2, 8), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-51.9, -0.1, -5.7), new CANNON.Vec3(10.2, 0.25, 10.2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-52.3, 4.8, 9.2), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-41.8, 4.9, -8.7), new CANNON.Vec3(1, 5, 13), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-35.55071048485854, 7.247332525801083, 5.856868681249355), new CANNON.Vec3(6.5, 3.5, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-64.53104680173745, 7.652583786835282, -2.6245575806727093), new CANNON.Vec3(3, 4, 18), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-61.65983200844137, 4.3529395371049695, 17.23364014848228), new CANNON.Vec3(0.3, 0.5 ,2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-53.50983200844183, 4.3529395371049695, 11.5836401484822), new CANNON.Vec3(0.3, 0.5 ,7.8), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-48.10983200844214, 4.30293953710497, 4.033640148482164), new CANNON.Vec3(5.5, 0.5 ,0.3), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-51.5779852621245, 0.48901539534193306, -32.820240531712656), new CANNON.Vec3(14, 0.5 ,16.5), 0x00ff00, 0),  
            new CubeTest(world, scene, new CANNON.Vec3(-62.43548707041879, 1.815651025434061, -39.37757871551724), new CANNON.Vec3(1.5, 1.5, 1.5), 0x00ff00, 0),
            
            
        ];

        
    }

    allCollisionPhysicsUpdate() {
        this.collisionMap.forEach(item => {
            item.update();
        });
    }

};