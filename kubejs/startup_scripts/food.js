StartupEvents.registry('item', event => {
    event.create('anciendt_tempura').displayName('§a§oAncient Tempura').food(food =>{
        food
        .hunger(20)
        .saturation(0.6)
        .effect('minecraft:regeneration',1800,1,1)
        .effect('minecraft:strength',1800,1,1)
        .removeEffect('poison')
        .alwaysEdible()
        .fastToEat()
        .meat()
    })


})


