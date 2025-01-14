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
            new CubeTest(world, scene, new CANNON.Vec3(-51.5779852621245, 0.48901539534193306, -32.17024053171269), new CANNON.Vec3(14, 0.5 ,16), 0x00ff00, 0),  
            new CubeTest(world, scene, new CANNON.Vec3(-63.43548707041873, 2.865651025434058, -40.327578715517184), new CANNON.Vec3(2, 2, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-49.982714676173245, 0.2551647892780488, -15.83609897743612), new CANNON.Vec3(4, 0.25, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-57.547448208187966, 0.4942419901450224, -15.823250275442522), new CANNON.Vec3(4, 0.5, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-42.19744820818884, 0.4942419901450224, -15.823250275442522), new CANNON.Vec3(4, 0.5, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-58.48807509853876, 6.665100506135049, -20.105349625542928), new CANNON.Vec3(3.4, 6, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-44.89508893290175, 5.476301066459069, -24.974229468999763), new CANNON.Vec3(3.2, 5, 4), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-53.74508893290125, 5.476301066459069, -24.82422946899976), new CANNON.Vec3(2, 5, 4), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-49.87519081784013, 8.23400009471504, -31.92977362315945), new CANNON.Vec3(2, 2.5, 11), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-39.35865471725059, 1.8853191712936133, -37.450492441461854), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-37.458654717250695, 2.385319171293612, -37.450492441461854), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-52.6889347971615, 4.325371445517642, -45.127213395489754), new CANNON.Vec3(5, 3.5, 3), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-63.4389347971609, 3.325371445517645, -48.02721339548959), new CANNON.Vec3(2, 2.7, 5.9), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-59.77263427264563, 3.436941847462456, -31.53165563089116), new CANNON.Vec3(6, 2.5, 3), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-66.21846745380817, 3.2915000819027185, -38.35916726892128), new CANNON.Vec3(1, 2.5, 4), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-54.75657316608885, 3.365815548519609, -50.966758147626756), new CANNON.Vec3(2.9, 3.5, 2.8), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-58.59054493555938, 5.951009031236343, -35.44655110352982), new CANNON.Vec3(8, 0.25, 8), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-59.49574079156712, 6.194790559124056, -48.63977943648313), new CANNON.Vec3(2, 0.5, 5.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-59.57145397356158, 0.4909913199307049, -50.79772118448543), new CANNON.Vec3(2, 0.5, 3), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-32.55700598492232, 3.704136847978803, -42.357658002446044), new CANNON.Vec3(17.2, 2.8, 4), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-36.536194448381835, -1.029985790094554, -36.51284942581884), new CANNON.Vec3(2, 2.5, 2), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-40.08650257323067, 3.388857912639301, -29.7595929520273), new CANNON.Vec3(6, 2.5, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-39.73111512673069, 6.248061794194895, -33.87677185243239), new CANNON.Vec3(8.7, 0.5, 5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-34.62984143593916, -2.4495002210778685, -45.13789153275027), new CANNON.Vec3(2, 1, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-25.427662766770126, -1.9642365800027564, -39.780025050179916), new CANNON.Vec3(1.5, 1.5, 1.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-26.414497158973063, -1.3426930463093638, -46.53775052128215), new CANNON.Vec3(11, 2.5, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-23.029841435939183, -1.099500221077869, -37.437891532750704), new CANNON.Vec3(7.7, 2.5, 1), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-36.97984143593903, -1.149500221077869, -42.23789153275043), new CANNON.Vec3(0.5, 2.5, 4), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-26.32984143593923, -3.8495002210778635, -42.03789153275044), new CANNON.Vec3(11, 0.5, 4.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(-15.332124093183555, 5.98039997166632, 31.179932367030464), new CANNON.Vec3(12, 4.5, 0.5), 0x00ff00, 0),
            new CubeTest(world, scene, new CANNON.Vec3(4.117875906816522, 5.180399971666323, 28.87993236703043), new CANNON.Vec3(8, 5.5, 2), 0x00ff00, 0),
            
            




            
        ];

        
    }

    allCollisionPhysicsUpdate() {
        this.collisionMap.forEach(item => {
            item.update();
        });
    }

};