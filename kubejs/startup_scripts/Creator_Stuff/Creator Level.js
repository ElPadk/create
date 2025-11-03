ItemEvents.toolTierRegistry(event => {
    event.add('Creator', tier => {
      tier.uses = 0
      tier.speed = 6.0
      tier.attackDamageBonus = 5.0
      tier.level = 10
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/iron'
    })
  })