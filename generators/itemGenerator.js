import {Weapon, Armor, Potion, Utility} from '../index.js'
class ItemGenerator {
    constructor(category) {
        this.category = category
    };

    createItem(category) {
        const getItemObject = () => {
            
            const getCategories = itemMods[category];
        
            const getItem = getCategories.item[Math.floor(Math.random() * getCategories.item.length)];

            const getModifier = () => {
                if (category === 'armor') {
                    const modifier = getItem.modifiers;
                    return modifier

                } else if (category === 'weapon'){
                    const type = getCategories.type.find( cat => cat.name === getItem.type);
                    const modifier = type.modifiers;
                    return modifier
                } else {
                    return null
                };
            };

            const getDescription = () => {
                if (getItem.description) {
                    const description = getItem.description;
                    return description
                } else {
                    if (itemPrefix.name === 'regular') {
                        const description = `This is a ${getItem.name}. Nothing out of the ordinary`;
                        return description
                    } else {
                        const description = `This is a ${getItem.name}. It is ${itemPrefix.name}`;
                        return description
                    }
                    
                    
                };
            };

            const getPrefix = () => {
                const prefix = getCategories.prefix[Math.floor(Math.random() * getCategories.prefix.length)];
                return prefix;
            };

            const itemPrefix = getPrefix();

            const getMainValue = () => {
                if (category === 'weapon') {
                    const damage = getItem.damage + itemPrefix.modifier;
                    return damage;

                } else if (category === 'armor') {
                    let armorPoints = getItem.armorPoints + itemPrefix.modifier;
                    if (armorPoints <= 0) {
                        armorPoints = 0;
                    }
                    return armorPoints;

                } else if (category === 'potion') {
                    const baseValue = getItem.baseValue;
                    return baseValue;

                } else if (category === 'utility') {
                    const baseValue = getItem.baseValue;
                    return baseValue;
                }
            };

            const itemMainValue = getMainValue();

            const getBodyPart = () => {
                const bodyPart = getItem.bodyPart;
                return bodyPart;
            };

            const itemBodyPart = getBodyPart();

            // create a object from all data
            const item = {
                name: `${itemPrefix.name} ${getItem.name}`,
                mainValue: itemMainValue,
                armorPoints: getItem.armorPoints,
                bodyPart: itemBodyPart,
                type: getItem.type,
                description: getDescription(),
                modifier: getModifier(),
                id: getItem.id,
                category: category
            };

            return item;
        };


        // pass the function to a variable
        const createdItem = getItemObject(); 


        if (category === 'weapon') {
            const item = new Weapon();
            item.name = createdItem.name;
            item.damage = createdItem.mainValue;
            item.type = createdItem.type;
            item.description = createdItem.description;
            item.modifier = createdItem.modifier;
            item.category = createdItem.category


            localStorage.setItem('weapon', JSON.stringify(item))
            
            return item;
        }
        if (category === 'armor') {
            const item = new Armor();
            item.name = createdItem.name;
            item.armorPoints = createdItem.mainValue;
            item.bodyPart = createdItem.bodyPart;
            item.type = createdItem.type;
            item.modifier = createdItem.modifier;
            item.description = createdItem.description;
            item.category = createdItem.category
            
            return item;
        }
        if (category === 'potion') {
            const item = new Potion();
            item.name = createdItem.name;
            item.baseValue = createdItem.mainValue;
            item.type = createdItem.type;
            item.description = createdItem.description;
            item.category = createdItem.category

            return item;
        }
        if (category === 'utility') {
            const item = new Utility();
            item.name = createdItem.name;
            item.baseValue = createdItem.mainValue;
            item.type = createdItem.type;
            item.description = createdItem.description;
            item.category = createdItem.category

            return item;
        }

    }
};

const itemMods = {
    weapon: { 
        type: [
            {
                name: 'one handed',
                modifiers: {
                    initiative: 0,
                    melee: 0
                },
            },
            {
                name: 'two handed',
                modifiers: {
                    initiative: -10,
                    melee: 0,
                },
            },
            {
                name: 'knife',
                modifiers: {
                    initiative: 10,
                    melee: 0,
                },
            },
            {
                name: 'spear',
                modifiers: {
                    initiative: 10,
                    melee: 0,
                },
            },
            {
                name: 'staff',
                modifiers: {
                    initiative: 0,
                    melee: 0,
                },
            },
        ],
        item: [
            {
                name: 'sword',
                damage: 0,
                type: 'one handed'
            },
            {
                name: 'axe',
                damage: 0,
                type: 'one handed'
            },
            {
                name: 'zweihander',
                damage: 2,
                type: 'two handed'
            },
            {
                name: 'dagger',
                damage: -2,
                type: 'knife'
            },
            {
                name: 'short spear',
                damage: 0,
                type: 'spear'
            },
            {
                name: 'staff',
                damage: 0,
                type: 'staff'
            }
            
        ],
       prefix: [ 
            {
                name: 'old',
                modifier: -1
            },
            {
                name: 'regular',
                modifier: 0
            },
            {
                name: 'new',
                modifier: 1
            },
            {
                name: 'sharp',
                modifier: 2
            }
        ]
    },
    armor: {
        type: [
            {
                name: 'leather',
                armorPoints: 0,
            },
            {
                name: 'chainmail',
                armorPoints: 1,

            },
            {
                name: 'plate',
                armorPoints: 2,
            }
        ],
        item: [
            {
                name: 'leather cap',
                bodyPart: 'head',
                armorPoints: 0,
                modifiers: {},
                type: 'leather'
            },
            {
                name: 'leather glove',
                bodyPart: 'right arm',
                armorPoints: 0,
                modifiers: {},
                type: 'leather'
            },
            {
                name: 'leather glove',
                bodyPart: 'left arm',
                armorPoints: 0,
                modifiers: {},
                type: 'leather'
            },
            {
                name: 'leather tunic',
                bodyPart: 'torso',
                armorPoints: 0,
                modifiers: {},
                type: 'leather'
            },
            {
                name: 'leather boot',
                bodyPart: 'right leg',
                armorPoints: 0,
                modifiers: {},
                type: 'leather'
            },
            {
                name: 'leather boot',
                bodyPart: 'left leg',
                armorPoints: 0,
                modifiers: {},
                type: 'leather'
            },
            {
                name: 'chainmail basinet',
                bodyPart: 'head',
                armorPoints: 1,
                modifiers: {},
                type: 'chainmail'
            },
            {
                name: 'chainmail glove',
                bodyPart: 'right arm',
                armorPoints: 1,
                modifiers: {},
                type: 'chainmail'
            },
            {
                name: 'chainmail glove',
                bodyPart: 'left arm',
                armorPoints: 1,
                modifiers: {},
                type: 'chainmail'
            },
            {
                name: 'chainmail tunic',
                bodyPart: 'torso',
                armorPoints: 1,
                modifiers: {},
                type: 'chainmail'
            },
            {
                name: 'chainmail boot',
                bodyPart: 'right leg',
                armorPoints: 1,
                modifiers: {},
                type: 'chainmail'
            },
            {
                name: 'chainmail boot',
                bodyPart: 'left leg',
                armorPoints: 1,
                modifiers: {},
                type: 'chainmail'
            },
            {
                name: 'plate helmet',
                bodyPart: 'head',
                armorPoints: 2,
                modifiers: {},
                type: 'plate'
            },
            {
                name: 'plate glove',
                bodyPart: 'right arm',
                armorPoints: 2,
                modifiers: {},
                type: 'plate'
            },
            {
                name: 'plate glove',
                bodyPart: 'left arm',
                armorPoints: 2,
                modifiers: {},
                type: 'plate'
            },
            {
                name: 'breastplate',
                bodyPart: 'torso',
                armorPoints: 2,
                modifiers: {},
                type: 'plate'
            },
            {
                name: 'plate boot',
                bodyPart: 'right leg',
                armorPoints: 2,
                modifiers: {},
                type: 'plate'
            },
            {
                name: 'plate boot',
                bodyPart: 'left leg',
                armorPoints: 2,
                modifiers: {},
                type: 'plate'
            },
        ],
        prefix: [ 
            {
                name: 'old',
                modifier: -1
            },
            {
                name: 'regular',
                modifier: 0
            },
            {
                name: 'new',
                modifier: 1
            },
            {
                name: 'good quality',
                modifier: 2
            }
        ]
    },
    potion: {
        type: [
            {
                name: 'healing',
            }
        ],
        item: [
            {
                name: 'healing potion',
                baseValue: 1,
                type: 'healing'
            }
        ],
        prefix: [
            {
                name: 'weak',
                modifier: -1
            },
            {
                name: 'regular',
                modifier: 0
            },
            {
                name: 'strong',
                modifier: 2
            }
        ]
    },
    utility: {
        type: [
            {
                name: 'light source',
            },
            {
                name: 'lockpick',
            }
        ],
        item: [
            {
                name: 'torch',
                baseValue: 0,
                type: 'light source'
            },
            {
                name: 'lockpick',
                baseValue: 0,
                type: 'lockpick'
            }

        ],
        prefix: [
            {
                name: 'used',
                modifier: -1
            },
            {
                name: 'regular',
                modifier: 0
            },
            {
                name: 'good quality',
                modifier: 2
            }
        ]
    }

    
}


export { ItemGenerator };