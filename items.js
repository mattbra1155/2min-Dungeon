class Item {
    constructor(name, damage, description) {
        this.name = name;
        this.damage = damage;
        this.description = description;
    }
};  

let items = {
    weapons: {
        sword: new Item ('Old sword', 2, 'An old sword'), 
        mace: new Item('Rusty mace', 1, 'A rusty mace'),
        staff: new Item('Magic staff', 2, 'a magic staff with a blue stone on top')
    },
    healingItems: {
        smallHealthPotion: new Item ('Small health potion', -1, 'A small healing potion that recovers 10hp')
    },
    utility: {
        torch: new Item ('Torch', 0.5, 'A torch that you can use to light dark areas. It also could be a weapon')
    } 
}

export {items}