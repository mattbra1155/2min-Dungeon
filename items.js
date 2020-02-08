import { persons } from "./index.js";
class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
};  

class Weapon extends Item {
    constructor(name,description, modifier = 0) {
        super(name, description);
        this.modifier = modifier;
    };
};

 class Armor extends Item {
    constructor(name,description, armorPoints ) {
        super(name, description)
        this.armorPoints = armorPoints;
    }

    equipItem(item) {

        let playerBodyPartKeys = Object.keys(persons.player.bodyPart);
    
        const getBodyPart = playerBodyPartKeys.filter( (playerBodyPart) => { 
            if (playerBodyPart === this.bodyPart) {
                return playerBodyPart
            };
        });
        persons.player.bodyPart[getBodyPart].armor.item = item
    };
};

class Potion extends Item {
    constructor(name, heal, description) {
        super(name, description)
        this.heal = heal;
    }
};

class Utility extends Item {
    constructor(name, description) {
        super(name, description)
    }
}; 

class RegularWeapon extends Weapon {
    constructor(name, description, modifier) {
        super(name, description, modifier)
        this.damage = 0
    }
}

class MagicWeapon extends Weapon {
    constructor(name, description, damage, modifier ) {
        super(name, description, modifier)
        this.damage = damage
    }
}

class TorsoArmor extends Armor {
    constructor(name, description, armorPoints, bodyPart) {
        super(name, description, armorPoints)
        this.bodyPart = bodyPart
    }


};

let items = {
    weapons: {
        sword: new RegularWeapon('Old sword', 'An old rusty sword'), 
        mace: new RegularWeapon('Rusty mace', 'A rusty mace'),
        staff: new RegularWeapon('Magic staff','a magic staff with a blue stone on top'),
        magicSword: new MagicWeapon('Magic sword', 'Sword imbuded with some sort of magic', 0, 1),
        magicMace: new MagicWeapon('Magic mace', 'Heavy magic mace', 0, 1)
    },
    armors: {
        "head": {
            helmet: new Armor('Rusty helmet', 'an old and worn helmet', 6 ),
        },
        "right arm": {

        },
        "left arm": {

        },
        "torso": {
            chainmail: new Armor('Rusty chainmail','a worn chainmail that was used in battle', 2),
            studedLeather: new TorsoArmor('Studded leather', 'test', 2, "torso")
        },
        "right leg": {

        },
        "left leg": {

        } 
    },
    healingItems: {
        smallHealthPotion: new Potion ('Small health potion', 2, 'A small healing potion that recovers 10hp')
    },
    utility: {
        torch: new Utility ('Torch','A torch that you can use to light dark areas. It also could be a weapon')
    } 
}

export {items}