ServerEvents.recipes(event =>{
  event.recipes.create.crushing('ad_astra:moon_sand', 'ad_astra:moon_cobblestone').processingTime(50)
    event.recipes.create.compacting('snowball', [Fluid.water(250)])
    event.recipes.create.compacting([Fluid.of('kubejs:flowberry_saft', 250)],[Fluid.water(1000), 'kubejs:flowberry', '2x minecraft:sugar'  ])
    event.recipes.create.filling('kubejs:flowberry_sprudel', [Fluid.of('kubejs:flowberry_sprudel', 500), 'minecraft:glass_bottle'])
    event.recipes.create.filling('create_sa:creative_filling_tank',  [Fluid.of('create_dd:shimmer', 1000), 'create_sa:large_fueling_tank'])
    event.recipes.create.pressing('kubejs:cinder_plate', 'create:cinder_flour')
    event.blasting('kubejs:netherrack_plate', 'kubejs:cinder_plate')
    event.recipes.create.deploying('minecraft:netherite_upgrade_smithing_template', ['kubejs:leeres_upgrade_template', 'minecraft:diamond'])
    event.recipes.create.deploying('kubejs:leeres_upgrade_template', ['kubejs:netherrack_plate', '#forge:tools/pickaxes']).keepHeldItem()
    event.recipes.create.sandpaper_polishing('kubejs:blue_crystal_shard', 'create_crush_everything:diamond_shard')
    event.recipes.create.mixing( '8x ae2:sky_dust', [Fluid.water(100), '8x minecraft:redstone', 'ad_astra:moon_sand']).processingTime(150)
    event.recipes.create.mixing('minecraft:pointed_dripstone', 'create_dd:gabbro').heated() 
    event.recipes.create.mixing(Item.of('minecraft:sugar').withChance(0.5), [Fluid.of('create_dd:sap', 500)]).heated().processingTime(50)
    event.recipes.create.mixing('10x minecraft:glowstone_dust', ['10x minecraft:redstone', 'minecraft:glow_berries'])
    event.stonecutting('4x tfmg:steel_truss', '#forge:deco_steel')
    event.stonecutting('4x tfmg:steel_frame', '#forge:deco_steel')
    event.stonecutting('2x tfmg:steel_scaffolding', '#forge:deco_steel')
    event.stonecutting('2x tfmg:aluminum_scaffolding', '#forge:deco_steel')
    event.stonecutting('2x tfmg:steel_ladder', '#forge:deco_steel')
    event.stonecutting('4x tfmg:steel_bars', '#forge:deco_steel')
    event.stonecutting('2x create_dd:steel_scaffolding', '#forge:deco_steel')
    event.stonecutting('4x design_decor:steel_large_chain', '#forge:deco_steel')




    event.recipes.create.sequenced_assembly([
      'kubejs:crystal_cell'
    ], 'ae2:item_storage_cell_1k'
    , [ 
      event.recipes.createFilling('ae2:item_cell_housing', ['ae2:item_cell_housing', Fluid.of('kubejs:molten_clear_crystal', 1000)]),
      event.recipes.createFilling('ae2:item_cell_housing', ['ae2:item_cell_housing', Fluid.of('kubejs:molten_clear_crystal', 1000)]),
      event.recipes.createFilling('ae2:item_cell_housing', ['ae2:item_cell_housing', Fluid.of('kubejs:molten_clear_crystal', 1000)]),
      event.recipes.createFilling('ae2:item_cell_housing', ['ae2:item_cell_housing', Fluid.of('kubejs:molten_clear_crystal', 1000)]),
      event.recipes.createFilling('ae2:item_cell_housing', ['ae2:item_cell_housing', Fluid.of('kubejs:molten_clear_crystal', 1000)])
    ]).transitionalItem('ae2:item_cell_housing').loops(2) 
    

    event.remove({ output: 'tfmg:heavy_plate'  })




    event.custom({
    
        "type": "createdieselgenerators:basin_fermenting",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": 'ae2:matter_ball'
          },
          {
            "fluid": "createbigcannons:molten_nethersteel",
            "amount": 100
          }
        ],
        "processingTime": 20,
        "results": [
          {
            "fluid": 'kubejs:molten_matter',  
            'amount': 1
          }
        ]
      
    }),

    event.custom({
        
      "type": "create_bic_bit:deep_frying",
      "heatRequirement": "none",
      "ingredients": [
            {
              "item": 'minecraft:paper'
            },
            {
              "amount": 100,
              "fluid": "create_bic_bit:frying_oil"
            }
          ],
      "processingTime": 100,
      "results": [
            {
              "item": 'create_bic_bit:dirty_paper'
            }
          ]                   
  })

  event.custom({
      "type": "tfmg:coking",
      "ingredients": [
        {
          "count": 4,
          "item": 'kubejs:blue_crystal_shard'}],
      "processingTime": 500,
      "results": [
        {
          "count": 1,
          "item": 'kubejs:clear_crystal_shard'},
        {
          "fluid": "vintageimprovements:sulfuric_acid",
          "amount": 50}]
  })


  event.custom({
    "type": "tfmg:industrial_blasting",
    "ingredients": [{
        "count": 1,
        "item": 'kubejs:clear_crystal_shard'}],
    "processingTime": 200,
    "results": [{
        "fluid": "kubejs:molten_clear_crystal",
        "amount": 50},{
        "fluid": "garnished:purple_mastic_resin",
        "amount": 25
      }]})

event.custom(
  {
    "type":"vintageimprovements:pressurizing",
    "secondaryFluidResults": 0,
    "heatRequirement": "heated",
    "ingredients": [ 
      {
        "fluid": "kubejs:flowberry_saft",
        "amount": 250
      }
    ],
    "results": [
      {
        "fluid": "kubejs:flowberry_sprudel",
        "amount": 250
      }
    ],
    "processingTime": 200
  })


event.custom(
  {
    "type": "create_new_age:energising",
    "energy_needed": 10000,
    "ingredients": [
      {
        "item": 'ae2:certus_quartz_crystal'
      }
    ],
    "results": [
      {
        "item": 'ae2:charged_certus_quartz_crystal'
      }
    ]
  })


  event.custom(
    {
      "type": "create_mechanical_extruder:extruding",
      "ingredients": [
    
        {
          "fluid": 'ad_astra:cryo_fuel',
          "amount": 1000
        },
        {
          "fluid": 'ad_astra:oil',
          "amount": 1000
        }
      ],
      "result": {
        "item": 'ad_astra:moon_cobblestone'
      }}
  )

  event.custom(
  {
    "type": "waystones:warp_plate",
    "result": {
      "item": 'kubejs:manaberry',
      "count": 1},
    "primary": {
      "item": 'minecraft:sweet_berries'},
    "secondary": [
      {"item": 'minecraft:sweet_berries'},
      {"item": 'minecraft:sweet_berries'},
      {"item": 'minecraft:sweet_berries'},
      {"item": 'minecraft:sweet_berries'}
    ]
  })


  event.shaped(
    Item.of('tfmg:steel_flywheel'), // arg 1: output
    [
      'A A A',
      'A C A', // arg 2: the shape (array of strings)
      'A A A'
    ],
    {
      A: '#forge:deco_steel',
      C: 'create:shaft'
    }
  )

  event.shapeless(
    Item.of('ae2:certus_quartz_crystal'), // arg 1: output
    [
  'kubejs:certus_piece',
  'kubejs:certus_piece',
  'kubejs:certus_piece',
  'kubejs:certus_piece' 
    ]
  )

  
  event.shapeless(
    Item.of('minecraft:flint_and_steel', '{Damage:0}'), // arg 1: output
    [
      '#forge:deco_steel',
      'minecraft:flint'
    ]
  )
  event.shapeless(
    Item.of('create_dd:spectral_ruby_lamp'), // arg 1: output
    [
      'create_dd:polished_spectral_ruby',
      'minecraft:redstone', 	       // arg 2: the array of inputs
      '#forge:deco_steel'
    ]
  )

  event.custom(
{
	"type":"vintageimprovements:vibrating",
	"ingredients": [ 
		{
			"item": 'ad_astra:moon_sand'
		}
	],
	"results": [
		{
			"item": 'kubejs:certus_piece',
			"count": 1
		}
	],
	"processingTime": 100 
})

event.custom({         
  "type": "create_new_age:energising",
  "energy_needed": 50000000,
  "ingredients": [
    {
      "item": 'ae2:singularity'
    }
  ],
  "results": [
    {
      "item": 'kubejs:energy_core'
    }
  ] 
})

































})  