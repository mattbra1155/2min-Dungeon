const diceRoll = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const diceRollK2 = () => diceRoll(1, 2)
const diceRollK3 = () => diceRoll(1, 3)
const diceRollK10 = () => diceRoll(1, 10)
const diceRollK100 = () => diceRoll(1, 100)

export { diceRollK2, diceRollK3, diceRollK10, diceRollK100 }
