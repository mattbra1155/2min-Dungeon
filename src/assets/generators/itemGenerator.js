import { Weapon, Armor, Potion, Utility } from '@/assets/models/itemsModel'
import itemMods from '@/assets/json/itemMods'
class ItemGenerator {
    constructor() {}

    createItemBase(category) {
        console.log(itemMods)
        let itemObject
        switch (category) {
            case 'weapon':
                itemObject = new Weapon()
                break
            case 'armor':
                itemObject = new Armor()
                break
            case 'potion':
                itemObject = new Potion()
                break
            case 'utility':
                itemObject = new Utility()
                break
        }
        const itemCategory = itemMods[category]
        
        const randomItem =
            itemCategory.item[
                Math.floor(Math.random() * itemCategory.item.length)
            ]

        const itemType = () => {
            if (Array.isArray(randomItem.type)) {
                return randomItem.type[
                    Math.floor(Math.random() * randomItem.type.length)
                ]
            } else {
                return randomItem.type
            }
        }

        const finalItem = {
            ...itemObject,
            ...randomItem,
            category,
            type: itemType()
        }
        console.log(finalItem)
        return finalItem
    }
    /* addModifier(item, category) {
        if (category === 'armor') {
            const modifier = getItem.modifiers
            return modifier
        } else if (category === 'weapon') {
            const type = getCategories.type.find(
                cat => cat.name === getItem.type
            )
            const modifier = type.modifiers
            return modifier
        } else {
            return null
        }
    } */

    /* const getDescription = () => {
            if (getItem.description) {
                const description = getItem.description
                return description
            } else {
                if (itemPrefix.name === 'regular') {
                    const description = `This is a ${getItem.name}. Nothing out of the ordinary`
                    return description
                } else {
                    const description = `This is a ${getItem.name}. It is ${itemPrefix.name}`
                    return description
                }
            }
        }

        const getPrefix = () => {
            const prefix =
                getCategories.prefix[
                    Math.floor(Math.random() * getCategories.prefix.length)
                ]
            return prefix
        }

        const itemPrefix = getPrefix()

        const getMainValue = () => {
            if (category === 'weapon') {
                const damage = getItem.damage + itemPrefix.modifier
                return damage
            } else if (category === 'armor') {
                let armorPoints = getItem.armorPoints + itemPrefix.modifier
                if (armorPoints <= 0) {
                    armorPoints = 0
                }
                return armorPoints
            } else if (category === 'potion') {
                const baseValue = getItem.baseValue
                return baseValue
            } else if (category === 'utility') {
                const baseValue = getItem.baseValue
                return baseValue
            }
        }

        const itemMainValue = getMainValue()

        const getBodyPart = () => {
            const bodyPart = getItem.bodyPart
            return bodyPart
        }

        const itemBodyPart = getBodyPart()

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
        }

        // pass the function to a variable
        const createdItem = buildItem()

        if (category === 'weapon') {
            const item = new Weapon()
            item.name = createdItem.name
            item.damage = createdItem.mainValue
            item.type = createdItem.type
            item.description = createdItem.description
            item.modifier = createdItem.modifier
            item.category = createdItem.category

            localStorage.setItem('weapon', JSON.stringify(item))

            return item
        }
        if (category === 'armor') {
            const item = new Armor()
            item.name = createdItem.name
            item.armorPoints = createdItem.mainValue
            item.bodyPart = createdItem.bodyPart
            item.type = createdItem.type
            item.modifier = createdItem.modifier
            item.description = createdItem.description
            item.category = createdItem.category

            return item
        }
        if (category === 'potion') {
            const item = new Potion()
            item.name = createdItem.name
            item.baseValue = createdItem.mainValue
            item.type = createdItem.type
            item.description = createdItem.description
            item.category = createdItem.category

            return item
        }
        if (category === 'utility') {
            const item = new Utility()
            item.name = createdItem.name
            item.baseValue = createdItem.mainValue
            item.type = createdItem.type
            item.description = createdItem.description
            item.category = createdItem.category

            return item
        } */
}

export { ItemGenerator }
