ServerEvents.tags('item', event => {
    event.remove('forge:ingots/steel','ad_astra:steel_ingot')
    event.add('forge:deco_steel', 'ad_astra:steel_ingot')
})