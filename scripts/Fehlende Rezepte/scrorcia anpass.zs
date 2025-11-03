import mods.create.CrushingManager;
import mods.createtweaker.SequencedAssemblyRecipeBuilder;



<recipetype:create:crushing>.removeByName("vintageimprovements:crushing/scoria_recycling");
<recipetype:create:crushing>.removeByName("create_dd:crushing/scorchia");
<recipetype:create:crushing>.removeByName("create_dd:crushing/scorchia_recycling");




 <recipetype:create:crushing>.addRecipe("besser_scorcia_crush", 
 [<item:create_dd:coal_piece> % 100.0, 
 <item:create_dd:coal_piece> % 50.0, 
 <item:create_dd:coal_piece> % 25.0, 
 <item:create_dd:coal_piece> % 15.000001, 
 <item:vintageimprovements:sulfur_chunk> %50, 
 <item:create:cinder_flour> % 15.0], 
 
 <item:create:scorchia>, 350);
