
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("creator_ingot")
 .transitionTo(<item:kubejs:creator_ingot_incomplete>)
 .require(<item:create_dd:compound_base>)
 .loops(4)

 .addOutput(<item:kubejs:creator_ingot> * 1, 32)
 
 
 
 
.addStep<mods.createtweaker.PressingRecipe>((rb) => rb.duration(1000))
.addStep<mods.createtweaker.CuttingRecipe>((rb) => rb.duration(500))
.addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create_dd:experience_mass>))
.addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:create_dd:shimmer> * 1000 ))

);
