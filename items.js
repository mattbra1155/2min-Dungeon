import { global } from "./index.js";
class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
};  

class Weapon extends Item {
    constructor(name, type, description) {
        super(name, description);
        this.type = type;
    }

    damage() {
        // depending on the weapon type roll damage
        if (this.type === 'sword') {
            const diceRollResult = global.diceRoll(1, 2);
            return diceRollResult;
        } else if (this.type === 'mace') {
            const diceRollResult = global.diceRoll(1, 3);
            return diceRollResult;
        } else if (this.type === 'staff') {
            const diceRollResult = global.diceRoll(1, 4);
            return diceRollResult;
        }

    }
       
        
    
};

 class Armor extends Item {
    constructor(name, damageReduction, description) {
        super(name, description)
        this.damageReduction = damageReduction;
    }
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

let items = {
    weapons: {
        sword: new Weapon ('Old sword', 'sword', 'An old sword'), 
        mace: new Weapon('Rusty mace', 'mace', 'A rusty mace'),
        staff: new Weapon('Magic staff', 'staff', 'a magic staff with a blue stone on top')
    },
    armors: {
        chainmail: new Armor('Rusty chainmail', 2, 'a worn chainmail that was used in battle' )
    },
    healingItems: {
        smallHealthPotion: new Potion ('Small health potion', 2, 'A small healing potion that recovers 10hp')
    },
    utility: {
        torch: new Utility ('Torch','A torch that you can use to light dark areas. It also could be a weapon')
    } 
}

export {items}