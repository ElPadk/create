ServerEvents.blockLootTables(event =>{
    event.modifyBlock('create_dd:rubber_leaves', table => {
        table.addPool(pool => {
          pool.addItem('create_dd:rubber_sapling').randomChance(0.025)
        })
    })
})