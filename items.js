import { persons } from "./index.js";

class Item {
    constructor(id, name, description) {
        this.name = name;
        this.description = description;
        this.id = id;
    };
};  

class Weapon extends Item {
    constructor(name,description, modifier = 0) {
        super(name, description);
        this.modifier = modifier;
    };
};

 class Armor extends Item {
    constructor(name, description, modifier, bodyPart ) {
        super(name, description)
        this.modifier = modifier;
        this.bodyPart = bodyPart;
    }; 
};

class Potion extends Item {
    constructor(name, modifier, description) {
        super(name, description)
        this.modifier = modifier;
    };
};

class Utility extends Item {
    constructor(name, description) {
        super(name, description)
    };
}; 

class RegularWeapon extends Weapon {
    constructor(name, description, modifier) {
        super(name, description, modifier)
        this.damage = 0
    };
};

class MagicWeapon extends Weapon {
    constructor(name, description, damage, modifier ) {
        super(name, description, modifier)
        this.damage = damage
    };
};



let items = {
    weapons: [
        new RegularWeapon('Old sword', 'An old rusty sword'), 
        new RegularWeapon('Rusty mace', 'A rusty mace'),
        new RegularWeapon('Magic staff','a magic staff with a blue stone on top'),
        new MagicWeapon('Magic sword', 'Sword imbuded with some sort of magic', 0, 1),
        new MagicWeapon('Magic mace', 'Heavy magic mace', 0, 1)
    ],
    armors: {
        "head": [ new Armor('Rusty helmet', 'an old and worn helmet', 6 )],
        "hands": [],
        "torso": [],
        "legs": []
    },
    potions: [
        new Potion ('Small health potion', 2, 'A small healing potion that recovers 10hp')
    ],
    utility: [
        new Utility ('Torch','A torch that you can use to light dark areas. It also could be a weapon')
    ]
}

export {items}