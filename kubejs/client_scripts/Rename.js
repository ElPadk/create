ClientEvents.higPriorityAssets(event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
    rename('ad_astra:steel_ingot', 'Rude Steel')
    rename('tfmg:steel_ingot', 'Reinforced Steel')
})  