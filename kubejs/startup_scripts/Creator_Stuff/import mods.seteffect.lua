import mods.seteffect.ArmorSetEffect;

ArmorSetEffect.dumpParticleNames(); 
//Can be commented out after getting the right name for what you want.

val iron_set = new ArmorSetEffect("iron_set")
               .inSlot(<equipmentslottype:head>, <item:minecraft:iron_helmet>)
               .inSlot(<equipmentslottype:chest>, <item:minecraft:iron_chestplate>)
               .inSlot(<equipmentslottype:legs>, <item:minecraft:iron_leggings>)
               .inSlot(<equipmentslottype:feet>, <item:minecraft:iron_boots>)
               .setIgnoreNBT()
               .addEffect(<effect:minecraft:regeneration>.newInstance(100, 5))
               .addImmunity(<effect:minecraft:blindness>)
               .addAttackerEffect(<effect:minecraft:poison>.newInstance(60, 1))
               .requireGamestages("hello");
iron_set.register();

//You can also chain the register to remove the need for a variable.

 new ArmorSetEffect("iron_set")
                .inSlot(<equipmentslottype:head>, <item:minecraft:iron_helmet>)
               .inSlot(<equipmentslottype:chest>, <item:minecraft:iron_chestplate>)
               .inSlot(<equipmentslottype:legs>, <item:minecraft:iron_leggings>)
               .inSlot(<equipmentslottype:feet>, <item:minecraft:iron_boots>)
               .addEffect(<effect:minecraft:regeneration>.newInstance(10, 5))
               .addParticle("minecraft:angry_villager",  1.0f, 1.0f, 1.0f, 10.0f, 10.0f, 10.0f, 10.0f, 10.0f, 10.0f, -5.0f, -5.0f, -5.0f, 2.0f, 0.3f, 2);
               .register();

