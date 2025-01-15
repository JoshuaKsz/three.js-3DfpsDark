import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import CubeTest from "./cube_test.js";
import * as CANNON from 'cannon-es';
import * as THREE from 'three';


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

            model.scene.traverse((child) => {
                if (child.isMesh) {
                    child.receiveShadow = true;
                    if (child.material.map) {
                        child.material.shininess = 100; // Blinn-Phong effect
                        // child.material.color.set(0xffffff);
                    } else {
                        const phongMaterial = new THREE.MeshPhongMaterial({
                            shininess: 100, // Blinn-Phong effect
                        });
                        child.material = phongMaterial;
                    }
                }
            });
        
        
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
            new CubeTest(world, scene, new CANNON.Vec3(-16.3, 1.88, -18.21), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
            // new CubeTest(world, scene, new CANNON.Vec3(-16.3, 1.88, -18.21), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
            
            // nur bargus
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
            new CubeTest(world, scene, new CANNON.Vec3(-54.72516604588429, 1.8929998990994126, -54.858650694529906), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0), 
            new CubeTest(world, scene, new CANNON.Vec3(-61.52859984586694, 2.4619573135472965, -85.46596145193908), new CANNON.Vec3(0.7, 1.4, 0.7), 0x00ff00, 0),
             new CubeTest(world, scene, new CANNON.Vec3(-52.026560617643206, -0.9690257129415105, -67.87721540717243), new CANNON.Vec3(12,1,20), 0x00ff00, 0), 
             new CubeTest(world, scene, new CANNON.Vec3(-62.41270216800452, 1.9426790106513572, -74.34836363039051), new CANNON.Vec3(1,1,1), 0x00ff00, 0), 
             new CubeTest(world, scene, new CANNON.Vec3(-57.86270216800478, -0.007320989348643989, -84.89836363038991), new CANNON.Vec3(6,1,12), 0x00ff00, 0), 
             new CubeTest(world, scene, new CANNON.Vec3(-54.16923378815403, 1.548376232665118, -71.53347660255129), new CANNON.Vec3(1.4,1.4,1.4), 0x00ff00, 0),
              new CubeTest(world, scene, new CANNON.Vec3(-48.97138241118863, 1.8858362422031563, -76.32045067850841), new CANNON.Vec3(1,2,1), 0x00ff00, 0),
               new CubeTest(world, scene, new CANNON.Vec3(-64.2314084951634, 3.899149231393345, -74.05611505865008), new CANNON.Vec3(1,4,20), 0x00ff00, 0),
                new CubeTest(world, scene, new CANNON.Vec3(-64.2314084951634, 3.899149231393345, -74.05611505865008), new CANNON.Vec3(1,4,1), 0x00ff00, 0),
            

            // selin grafkom
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
            new CubeTest(world, scene, new CANNON.Vec3(22.96, -1.05, -72.18), new CANNON.Vec3(7.2, 5, 0.4), 0x00ff00, 0),

            // jessica anee
            new CubeTest(world, scene, new CANNON.Vec3(-9.3, 0.111, -8.95), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0), 
            new CubeTest(world, scene, new CANNON.Vec3(-14.2, 1.97, 2.84), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0), 
            new CubeTest(world, scene, new CANNON.Vec3(-14.24, 1.218, 5.22), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0), 
            new CubeTest(world, scene, new CANNON.Vec3(-11.28, 1.138, 10.527), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
             new CubeTest(world, scene, new CANNON.Vec3(-9.912, -1.738, -42.07), new CANNON.Vec3(1, 1, 1), 0x00ff00, 0),
              new CubeTest(world, scene, new CANNON.Vec3(-20.82, 2.47, -6.83), new CANNON.Vec3(3.5, 4, 1), 0x00ff00, 0),
               new CubeTest(world, scene, new CANNON.Vec3(-23.3, 3.71, -11.8), new CANNON.Vec3(1, 4, 4), 0x00ff00, 0), 
               new CubeTest(world, scene, new CANNON.Vec3(-16.17, 3.821, -23.12), new CANNON.Vec3(1, 5, 4), 0x00ff00, 0),
                new CubeTest(world, scene, new CANNON.Vec3(-16.17, 3.821, -23.12), new CANNON.Vec3(2,3, 1), 0x00ff00, 0),
                 new CubeTest(world, scene, new CANNON.Vec3(-15.978009421696722, 4.577809168829093, -28.829464949321647), new CANNON.Vec3(1,6, 4), 0x00ff00, 0), 
                 new CubeTest(world, scene, new CANNON.Vec3(-2.942181355479887, 6.010999778855077, -28.345210729115827), new CANNON.Vec3(1,6, 12), 0x00ff00, 0),
                  new CubeTest(world, scene, new CANNON.Vec3(23.739757970710738, 5.1530753209485285, 2.2415568635492766), new CANNON.Vec3(1,6, 10), 0x00ff00, 0), 
                  new CubeTest(world, scene, new CANNON.Vec3(0.9613236450835803, 1.9459529142675493, -46.93180622281612), new CANNON.Vec3(1,2, 1), 0x00ff00, 0), 
                  
                  new CubeTest(world, scene, new CANNON.Vec3(-8.7745683518459, -2.68952529914758, -42.66710512293871), new CANNON.Vec3(2, 2, 2), 0x00ff00, 0), 
                  new CubeTest(world, scene, new CANNON.Vec3(14.245409678309038, 1.0189474864892474, -43.16452983468517), new CANNON.Vec3(2, 2, 2), 0x00ff00, 0), 
                  new CubeTest(world, scene, new CANNON.Vec3(-20.511510214158303, 3.788012267036377, -17.341376165141014), new CANNON.Vec3(2, 4, 2), 0x00ff00, 0), 
                  new CubeTest(world, scene, new CANNON.Vec3(6.101739356688696, 4.893839318359969, -40.373804316556935), new CANNON.Vec3(10, 5, 2), 0x00ff00, 0), 
                  new CubeTest(world, scene, new CANNON.Vec3(0.9297765845766475, 5.527725907674851, -17.308708585067173), new CANNON.Vec3(4, 6, 1), 0x00ff00, 0),
                   new CubeTest(world, scene, new CANNON.Vec3(-3.958335481684303, 4.685811941204434, -8.098097748888625), new CANNON.Vec3(4, 6, 1), 0x00ff00, 0),
                    new CubeTest(world, scene, new CANNON.Vec3(11.583694084763149, 0.8581208981465023, 11.080882735571757), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0), 
                    new CubeTest(world, scene, new CANNON.Vec3(-16.154767572979683, 2.113706193828605, -5.102542453235506), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0), 
                    new CubeTest(world, scene, new CANNON.Vec3(4.262295887637254, 1.8046786627930906, -15.250049618943907), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0), 
                    new CubeTest(world, scene, new CANNON.Vec3(12.253527611571462, 4.746151170844322, -11.66102985457375), new CANNON.Vec3(1, 5, 4), 0x00ff00, 0), 
                    new CubeTest(world, scene, new CANNON.Vec3(7.156199999570843, 4.6750000000000025, -14.776300000429234), new CANNON.Vec3(4, 5, 1), 0x00ff00, 0),
                     new CubeTest(world, scene, new CANNON.Vec3(0.5513606751583001, 4.820699666579633, -15.980826317523817), new CANNON.Vec3(4, 5, 1), 0x00ff00, 0), 
                     new CubeTest(world, scene, new CANNON.Vec3(3.089670623379372, 4.798750401842562, -3.0911450976992088), new CANNON.Vec3(1, 6, 4), 0x00ff00, 0),
                      new CubeTest(world, scene, new CANNON.Vec3(4.362015643345523, 4.589213865887834, 3.2819825755951326), new CANNON.Vec3(1, 6, 5), 0x00ff00, 0),
                       new CubeTest(world, scene, new CANNON.Vec3(3.233936710041573, 4.492344915294627, 9.171892855524222), new CANNON.Vec3(1, 6, 5), 0x00ff00, 0),
                        new CubeTest(world, scene, new CANNON.Vec3(-15.831788078096315, 2.2995588704843204, -35.7316942561265), new CANNON.Vec3(1, 9, 5), 0x00ff00, 0),
                         new CubeTest(world, scene, new CANNON.Vec3(-11.053754221423873, 8.840095995957283, -1.117644194363581), new CANNON.Vec3(1, 9, 5), 0x00ff00, 0),
                          new CubeTest(world, scene, new CANNON.Vec3(-12.100745791755289, -0.8304096291056715, -13.00500189083331), new CANNON.Vec3(12, 1, 10), 0x00ff00, 0),
                           new CubeTest(world, scene, new CANNON.Vec3(11.26772876527026, -0.8774577134953645, 1.9709406284838342), new CANNON.Vec3(12, 1, 10), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(7.046841437334388, -0.8778483049283137, -8.672084151320924), new CANNON.Vec3(12, 1, 10), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(-11.988950556031861, -4.6844266049765135, -49.654851527107), new CANNON.Vec3(12, 1, 10), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(-5.79519905502408, -0.8897107267029026, -32.06262717812516), new CANNON.Vec3(2, 1, 15), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(-11.6833871212693, -0.8204985438719077, -23.434898638981075), new CANNON.Vec3(4, 1, 1), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(-11.420536624725907, -1.1152786669574093, -25.023777395710407), new CANNON.Vec3(4, 1, 1), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(-0.9741185323017125, 2.1193510113139213, -48.04091199752703), new CANNON.Vec3(8, 6, 1), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(-12.394645579572733, 4.172876580513306, -48.64995713461373), new CANNON.Vec3(4, 4, 1), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(4.105354420427302, 4.872876580513304, -47.94995713461377), new CANNON.Vec3(4, 5, 1), 0x00ff00, 0), 
                           new CubeTest(world, scene, new CANNON.Vec3(-11.114503540002973, -1.696118238368027, -27.913795907507687), new CANNON.Vec3(4, 1, 2), 0x00ff00, 0),
                            new CubeTest(world, scene, new CANNON.Vec3(-10.964503540002971, -2.5461182383680256, -31.81379590750774), new CANNON.Vec3(4, 1, 2), 0x00ff00, 0), 
                            new CubeTest(world, scene, new CANNON.Vec3(-11.164503540002974, -3.4961182383680223, -35.51379590750754), new CANNON.Vec3(4, 1, 2), 0x00ff00, 0), 
                            new CubeTest(world, scene, new CANNON.Vec3(-11.364503540002977, -4.396118238368019, -38.61379590750737), new CANNON.Vec3(4, 1, 1), 0x00ff00, 0), 
                            new CubeTest(world, scene, new CANNON.Vec3(-13.499195092367021, -0.754665246877481, 7.676489449507295), new CANNON.Vec3(2, 1, 11), 0x00ff00, 0),
                             new CubeTest(world, scene, new CANNON.Vec3(12.7720907485816, 4.949326645539157, 19.746427421712212), new CANNON.Vec3(2, 6, 9), 0x00ff00, 0),
                              new CubeTest(world, scene, new CANNON.Vec3(4.94767252495642, 4.857368479439979, 28.65335774098669), new CANNON.Vec3(9, 6, 2), 0x00ff00, 0), 
                              new CubeTest(world, scene, new CANNON.Vec3(-15.252327475043653, 4.857368479439979, 32.45335774098671), new CANNON.Vec3(12, 6, 2), 0x00ff00, 0), 
                              
                              new CubeTest(world, scene, new CANNON.Vec3(18.478381509955653, 4.769800381632966, 12.943944364368113), new CANNON.Vec3(4, 6, 2), 0x00ff00, 0), 
                              new CubeTest(world, scene, new CANNON.Vec3(-3.440267035802729, 4.661818939439008, 14.455413477139496), new CANNON.Vec3(7, 6, 1), 0x00ff00, 0),
                               new CubeTest(world, scene, new CANNON.Vec3(-13.44026703580279, 4.661818939439008, 13.455413477139482), new CANNON.Vec3(3, 6, 1), 0x00ff00, 0), 
                               new CubeTest(world, scene, new CANNON.Vec3(-15.442022194236804, 2.3412385471995822, -51.89270316808889), new CANNON.Vec3(1, 6, 8), 0x00ff00, 0), 
                               new CubeTest(world, scene, new CANNON.Vec3(-15.624864721568706, 6.040018037218257, -42.60356833292285), new CANNON.Vec3(1, 6, 2), 0x00ff00, 0), 
                               new CubeTest(world, scene, new CANNON.Vec3(-18.219292299111324, 5.053642718633982, -17.31589374336823), new CANNON.Vec3(1, 6, 2), 0x00ff00, 0), 
                               new CubeTest(world, scene, new CANNON.Vec3(-18.169292299111323, 8.60364271863398, -9.66589374336812), new CANNON.Vec3(1, 2, 6), 0x00ff00, 0), 
                               new CubeTest(world, scene, new CANNON.Vec3(-16.078294660692123, 5.897089156028815, -2.194272051105659), new CANNON.Vec3(1, 6, 2), 0x00ff00, 0), 
                               new CubeTest(world, scene, new CANNON.Vec3(-4.036424519420141, -0.8713588876151104, 2.8528290711194213), new CANNON.Vec3(8, 1, 10), 0x00ff00, 0),
                                new CubeTest(world, scene, new CANNON.Vec3(5.659475890505399, -0.9985185103332748, -44.99980168630494), new CANNON.Vec3(10, 1, 3), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(-13.808424021479597, 7.4040513139280755, 7.654102776104414), new CANNON.Vec3(2, 3.5, 8), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(-9.308385314738294, 5.202020968016317, -0.5645664898823471), new CANNON.Vec3(2, 5, 8), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(0.5916146852617049, 5.652020968016315, -6.914566489882331), new CANNON.Vec3(2, 5, 2), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(-17.325796502064872, 5.1107780712637005, 16.420836160732282), new CANNON.Vec3(2, 5, 2), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(4.924227263315901, -0.8961438654379024, 19.148404539540724), new CANNON.Vec3(6, 1, 8), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(-6.675772736684075, -0.8961438654379024, 19.148404539540724), new CANNON.Vec3(6, 1, 8), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(-19.11518990965459, 4.912211482708017, -5.0655379014872635), new CANNON.Vec3(2, 4, 1), 0x00ff00, 0), 
                                new CubeTest(world, scene, new CANNON.Vec3(-2.3938250300845993, -0.21864406748430687, 22.889234911113682), new CANNON.Vec3(2, 1, 4), 0x00ff00, 0),
                                 new CubeTest(world, scene, new CANNON.Vec3(-5.14382503008459, 0.48135593251569314, 22.889234911113682), new CANNON.Vec3(2, 1, 5), 0x00ff00, 0), 
                                 new CubeTest(world, scene, new CANNON.Vec3(-20.50813309426311, 3.824684852726227, 29.05184659308875), new CANNON.Vec3(6, 1, 2), 0x00ff00, 0), 
                                 new CubeTest(world, scene, new CANNON.Vec3(-24.829813783202447, -4.1671912068554455, -42.50497744604961), new CANNON.Vec3(10.5, 1, 4), 0x00ff00, 0), 
                                 new CubeTest(world, scene, new CANNON.Vec3(-7.433880794023013, -1.9888083777400813, -34.890927461113414), new CANNON.Vec3(0.5, 3, 12), 0x00ff00, 0), 
                                 new CubeTest(world, scene, new CANNON.Vec3(-7.743825030084581, 0.08135593251569322, 24.78923491111371), new CANNON.Vec3(2, 2, 6), 0x00ff00, 0), 
                                 new CubeTest(world, scene, new CANNON.Vec3(-12.893825030084649, 2.181355932515694, 24.439234911113704), new CANNON.Vec3(2, 2, 6), 0x00ff00, 0), 
                                 new CubeTest(world, scene, new CANNON.Vec3(-9.893825030084606, 0.8313559325156934, 24.0892349111137), new CANNON.Vec3(2, 2, 6), 0x00ff00, 0),
        ];

        
    }

    allCollisionPhysicsUpdate() {
        this.collisionMap.forEach(item => {
            item.update();
        });
    }

};