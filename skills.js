import { global } from "/2min-Dungeon/index.js";

class Skill {
    constructor(name, damageMin, damageMax) {
        (this.name = name),
        (this.damageMin = damageMin),
        (this.damageMax = damageMax);
    }

    damage() {
        const damageResult = global.diceRoll(this.damageMin, this.damageMax);
        return damageResult;
    }
}

const skills = {
    player: {
        warrior: {
            punch: new Skill("punch", 1, 4),
            tackle: new Skill("tackle", 1, 2),
            guard: new Skill("guard", 1, 4)
        },
        warlock: {
            firebolt: new Skill("firebolt", 1, 4),
            flameWeapon: new Skill("flame weapon", 1, 4),
            fireshield: new Skill("fireshield", 1)
        }
    },
    weapon: {
        slash: new Skill("slash", 1, 3),
        thrust: new Skill("thrust", 2, 3),
        bash: new Skill("bash", 1, 4),
        basicAttack: new Skill("basic attack", 1, 4)
    }
};

export { skills };
