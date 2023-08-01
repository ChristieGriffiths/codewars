function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker;
  let defender;
  if(firstAttacker === fighter1.name) {
    attacker = fighter1
    defender = fighter2
  } else {
    attacker = fighter2
    defender = fighter1
  }
  while (attacker.health > 0 && defender.health > 0) {
    defender.health -= attacker.damagePerAttack
    let temp = attacker;
    attacker = defender;
    defender = temp;
  }
  return defender.name
}

