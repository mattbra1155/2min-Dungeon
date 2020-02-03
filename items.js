
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
    constructor(name, armorPoints, description) {
        super(name, description)
        this.armorPoints = armorPoints;
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

class RegularWeapon extends Weapon{
    constructor(name, description, modifier) {
        super(name, description, modifier)
        this.damage = 0
        
    }
}


let items = {
    weapons: {
        sword: new RegularWeapon ('Old sword', 'An old rusty sword'), 
        mace: new RegularWeapon('Rusty mace', 'A rusty mace'),
        staff: new RegularWeapon('Magic staff','a magic staff with a blue stone on top')
    },
    armors: {
        chainmail: new Armor('Rusty chainmail', 2, 'a worn chainmail that was used in battle' ),
        helmet: new Armor('Rusty helmet', 6, 'an old and worn helmet' )
    },
    healingItems: {
        smallHealthPotion: new Potion ('Small health potion', 2, 'A small healing potion that recovers 10hp')
    },
    utility: {
        torch: new Utility ('Torch','A torch that you can use to light dark areas. It also could be a weapon')
    } 
}

export {items}