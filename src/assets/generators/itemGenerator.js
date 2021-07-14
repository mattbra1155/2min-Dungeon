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
        return finalItem
    }

    createPrefix(baseItem) {
        const itemCategory = itemMods[baseItem.category]
        const prefix =
            itemCategory.prefix[
                Math.floor(Math.random() * itemCategory.prefix.length)
            ]
        console.log(prefix)
        return prefix
    }

    createDescription(baseItem, prefix) {
        let description
        if (prefix.name === 'used') {
            description = `This is a ${baseItem.name}. Nothing out of the ordinary`
        } else {
            description = `This is a ${baseItem.name}. It's' ${prefix.name}`
        }
        return description
    }

    addModifier(baseItem, prefix) {
        let modifier
        /* if (baseItem.category === 'armor') {
            modifier = baseItem.modifiers
        } */
        console.log(baseItem)
        if (baseItem.category === 'weapon') {
            const mods = baseItem.modifier === undefined ? 0 : baseItem.modifier
            const prefixMod = prefix.modifier

            modifier = mods + prefixMod
        }
        console.log(modifier)
        return modifier
    }

    createItem(category) {
        const itemBase = this.createItemBase(category)
        const prefix = this.createPrefix(itemBase)
        const description = this.createDescription(itemBase, prefix)
        const modifier = this.addModifier(itemBase, prefix)
        const item = { ...itemBase, prefix, description, damage: modifier }
        console.log(item)
        return item
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

    /*
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
