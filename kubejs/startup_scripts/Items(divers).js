StartupEvents.registry('item', event =>{
	
    event.create('glass_shard').displayName('Glass Shard');
	event.create('cinder_plate').displayName('Cinder Plate');
	event.create('netherrack_plate').displayName('Netherrack Plate');
	event.create('leeres_upgrade_template').displayName('Leeres upgrade Template');
		event.create('certus_piece').displayName('Certus piece');


	event.create('manaberry').displayName("Manaberry").food(food => {
		food
    		.hunger(8)
    		.saturation(0.25)
      		.effect('regeneration', 200, 1, 1)
      		.alwaysEdible()
        	})
    })

