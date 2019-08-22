class item {
    constructor(name, damage, description) {
        this.name = name;
        this.damage = damage;
        this.description = description;
    }
};  

const items = {
    weapons: {
        sword: new item ('Old sword', 2, 'An old sword'), 
        mace: new item('Rusty mace', 1, 'A rusty mace')
    },
    healingItems: {
        smallHealthPotion: new item ('Small health potion', -1, 'A small healing potion that recovers 10hp')
    },
    utility: {
        torch: new item ('Torch', 0.5, 'A torch that you can use to light dark areas. It also could be a weapon')
    } 
}

export {items}