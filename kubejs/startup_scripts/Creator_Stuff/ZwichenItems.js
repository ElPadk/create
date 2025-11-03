StartupEvents.registry('item', event =>{
	event.create('energy_core').displayName('§b§oEnergy Core').unstackable()
    event.create('singularity_core').displayName('§5§l§oSingularity Core').fireResistant(true)
    event.create('creator_ingot').displayName('§5§oCreator Ingot').fireResistant(true)
    event.create('creator_ingot_incomplete')
    event.create('singularity_core_incomplete')
    event.create('blue_crystal_shard').displayName('Blue Crystal Shard')
    event.create('clear_crystal_shard').displayName('Clear Crystal Shard')
	event.create('crystal_cell').displayName('Crystal Cell').unstackable()
	event.create('matter_ingot').displayName('Matter Ingot')
})


StartupEvents.registry('block', event =>{

	event.create('zinc_sheetmetal')
	.displayName('Zinc Sheetmetal')
	.hardness(4.0)
	.resistance(5)
	.requiresTool(true)
	.tagBlock('minecraft:mineable/pickaxe');

    event.create('test')
	.displayName('Test')
	.hardness(0.0)
	.resistance(0)
	.requiresTool(false);

	event.create('clear_crystal_block')
	.displayName('Clear Crystal Block')
	.hardness(15)
	.resistance(9999)
	.glassSoundType()
	.requiresTool(true)
	.tagBlock('minecraft:mineable/pickaxe');

})


StartupEvents.registry('fluid', event =>{

	event.create('molten_clear_crystal')
    .thickTexture(0x7c40b8)
    .bucketColor(0x7c40b8)
    .displayName('Molten clear Crystal'),

	event.create('molten_matter')
    .thinTexture(0x7c7583)
    .bucketColor(0x7c7583)
    .displayName('Molten Matter')

})



