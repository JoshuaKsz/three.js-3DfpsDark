export default class CharacterBody{
    constructor(position, physicsObject) {
        this.position = position;
        this.physicsObject = physicsObject;
        // this.movement;
    }

    physicsUpdate() {
        this.physicsObject.update();
    }

    remove() {
        
    }
};