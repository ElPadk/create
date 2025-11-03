StartupEvents.registry('fluid', event => {
    event.create('flowberry_saft')
        .displayName('Flowbeery Saft')
        .thickTexture(0x15e3f0)
        .bucketColor(0x15e3f0)

        event.create('flowberry_sprudel')
        .displayName('Flowberry Sprudel')
        .thickTexture(0x15b0da)
        .bucketColor(0x15b0da)

});



  StartupEvents.registry('item', event => {
	event.create('flowberry').displayName("Flowberry").food(food => {
		food
    		.hunger(4)
    		.saturation(0.5)
      	.effect('speed', 200, 0, 1)
        .effect('absorption', 6000, 0.25, 1)
      	.alwaysEdible()
      	.fastToEat()
        	})
        
        event.create('flowberry_sprudel').displayName("Flowberry Sprudel").food(food => {
          food
              .hunger(1)
              .saturation(10)
              .effect('absorption', 6000, 4, 1)
              .effect('glowing', 50, 0, 1)
              .effect('jump_boost', 600, 2, 1)
              .effect('speed', 200, 0, 1)
              .alwaysEdible()
              .eaten((ctx)=>{
                ctx.player.give('minecraft:glass_bottle');
              })
          })
                .useAnimation("drink");
        
        })
  



        