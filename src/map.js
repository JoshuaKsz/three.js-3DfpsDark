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
            new CubeTest(world, scene, new CANNON.Vec3(-16.3, 1.88, -18.21), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
            // new CubeTest(world, scene, new CANNON.Vec3(-16.11, 1.69, -4.94), new CANNON.Vec3(1, 2, 1), 0x00ff00, 0),
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

            
            
           
            

            
            
            
            
            
            
            
            
            
        ];

        
    }

    allCollisionPhysicsUpdate() {
        this.collisionMap.forEach(item => {
            item.update();
        });
    }

};