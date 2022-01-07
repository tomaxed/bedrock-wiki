import{_ as r,r as l,c,a as e,w as o,b as s,d as n,o as p}from"./404.md.4d395cc7.js";var i="/assets/images/guide/custom_blocks_inventory.png",u="/assets/images/guide/custom_blocks_done.mp4";const ps='{"title":"Intro to Blocks","description":"","frontmatter":{"title":"Intro to Blocks","category":"General","tags":["guide"]},"headers":[{"level":2,"title":"Block Behavior File","slug":"block-behavior-file"},{"level":2,"title":"Block Resource File","slug":"block-resource-file"},{"level":3,"title":"Block terrain texture definition","slug":"block-terrain-texture-definition"},{"level":3,"title":"Block flipbook texture definition","slug":"block-flipbook-texture-definition"},{"level":2,"title":"Setting block names","slug":"setting-block-names"},{"level":2,"title":"What you have learned","slug":"what-you-have-learned"}],"relativePath":"blocks/blocks-intro.md","lastUpdated":1641564640190}',k={},b=s("p",null,"Minecraft Bedrock allows us to add custom blocks into our world with various vanilla-like properties. In latest versions, custom blocks can have multiple stages (like plants), directional facing, and other features. This tutorial will cover how to create some simple blocks for the stable version of Minecraft Bedrock.",-1),d=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[n("Blocks on the stable version of Minecraft (1.10 format version) are missing many new features, available in experimental (1.16 format version). You can learn more about experimental blocks "),s("a",{href:"/blocks/blocks-16.html"},"here"),n(".")])],-1),h=s("h2",{id:"block-behavior-file",tabindex:"-1"},[n("Block Behavior File "),s("a",{class:"header-anchor",href:"#block-behavior-file","aria-hidden":"true"},"#")],-1),m=s("p",null,"Block behaviors are structured similarly to entities: they contain a description and a list of components that defines the block's behavior.",-1),_=n("BP/blocks/blockname.json"),f=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token property"},'"format_version"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"1.12.0"'),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"minecraft:block"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token property"},'"description"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"identifier"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"wiki:blocky"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"is_experimental"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"register_to_creative_menu"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"components"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"minecraft:loot"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"loot_tables/blocks/blocky.json"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"minecraft:destroy_time"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"minecraft:explosion_resistance"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"minecraft:friction"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0.6"),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"minecraft:flammable"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
				`),s("span",{class:"token property"},'"flame_odds"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),n(`
				`),s("span",{class:"token property"},'"burn_odds"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),n(`
			`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"minecraft:map_color"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"#FFFFFF"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"minecraft:block_light_absorption"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"minecraft:block_light_emission"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"0.25"),n(`
		`),s("span",{class:"token punctuation"},"}"),n(`
	`),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br")])],-1),g=s("ul",null,[s("li",null,[s("code",null,'"identifier"'),n(" under "),s("code",null,'"description"'),n(" is already familiar to us.")]),s("li",null,[s("code",null,'"components"'),s("ul",null,[s("li",null,[s("code",null,'"minecraft:loot"'),n(" defines a loot table path for the block to drop. If this is removed, then the block will drop itself. You can learn more about loot tables "),s("a",{href:"/loot/loot_tables-spawn_rules.html"},"here"),n(".")]),s("li",null,[s("code",null,'"minecraft:destroy_time"'),n(" defines how long the player will need to mine the block until it breaks. Currently, it isn't possible to set different destroy times for different tools.")]),s("li",null,[s("code",null,'"minecraft:explosion_resistance"'),n(" defines the chance for an explosion to break the block. Higher the value, lower the chance.")]),s("li",null,[s("code",null,'"minecraft:friction"'),n(" defines how much friction the block has. For example, soulsand has a low value for friction, so it slows the players. Ice has a higher friction value, so it has a slippery effect. The friction of classic blocks such as wood or stone is "),s("code",null,"0.6"),n(".")]),s("li",null,[s("code",null,'"minecraft:flammable"'),s("ul",null,[s("li",null,[s("code",null,'"flame_odds"'),n(" defines how likely the block is to catch fire.")]),s("li",null,[s("code",null,'"burn_odds"'),n(" defines how likely the block is to be destroyed by fire.")])])]),s("li",null,[s("code",null,'"minecraft:map_color"'),n(" is the hex color code that will be displayed on a Minecraft map to symbolize this block. "),s("code",null,"#FFFFFF"),n(" means white. You can get hex codes for other colors "),s("a",{href:"https://www.google.com/search?q=hex+color+picker&rlz=1C1CHBF_enDE886DE886&oq=hex+color+picker&aqs=chrome..69i57j0l7.2293j0j8&sourceid=chrome&ie=UTF-8",target:"_blank",rel:"noopener noreferrer"},"here"),n(".")]),s("li",null,[s("code",null,'"minecraft:block_light_emission"'),n(" defines the light level the block will output. Light level is out of 15, so to get a light level of 9, insert "),s("code",null,"0.6"),n(" as the value.")])])])],-1),y=s("p",null,[n("Let's create some more blocks in "),s("code",null,"BP/blocks"),n(". I created these four block for the tutorial:")],-1),w=s("ul",null,[s("li",null,[n("Filename: "),s("code",null,"blocky.json"),n("; Identifier: "),s("code",null,"wiki:blocky"),n(";")]),s("li",null,[n("Filename: "),s("code",null,"sapp_log.json"),n("; Identifier: "),s("code",null,"wiki:sapp_log"),n(";")]),s("li",null,[n("Filename: "),s("code",null,"compass_block.json"),n("; Identifier: "),s("code",null,"wiki:compass_block"),n(";")]),s("li",null,[n("Filename: "),s("code",null,"flashing.json"),n("; Identifier: "),s("code",null,"wiki:flashing"),n("; You can play around with changing the component values for each of these. Now let's move over to the resource definition.")])],-1),x=s("h2",{id:"block-resource-file",tabindex:"-1"},[n("Block Resource File "),s("a",{class:"header-anchor",href:"#block-resource-file","aria-hidden":"true"},"#")],-1),v=s("p",null,"The resource definition for blocks differs from entities/items because all the definitions appear in a single file. The only two things we can define for blocks are its sound and its textures.",-1),j=n("RP/blocks.json"),B=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token property"},'"format_version"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"wiki:blocky"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"blocky"'),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"sound"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"stone"'),n(`
	`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"wiki:sapp_log"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"up"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"sapp_log_top"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"down"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"sapp_log_top"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"side"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"sapp_log_side"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"sound"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"wood"'),n(`
	`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"wiki:compass_block"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"up"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"compass_block_up"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"down"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"compass_block_down"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"north"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"compass_block_north"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"south"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"compass_block_south"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"west"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"compass_block_west"'),s("span",{class:"token punctuation"},","),n(`
			`),s("span",{class:"token property"},'"east"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"compass_block_east"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"sound"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"wool"'),n(`
	`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"wiki:flashing"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"flashing"'),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"sound"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"glass"'),n(`
	`),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br")])],-1),F=s("p",null,[n("As you can see, every block's identifier is applied with textures and step sounds. When we define the textures, we use their shortnames which we will define in "),s("code",null,"terrain_texture.json"),n(" later on. There are 3 ways we can define the texture of a block:")],-1),I=s("ul",null,[s("li",null,[s("code",null,'"wiki:blocky"'),n(" & "),s("code",null,'"wiki:flashing"'),n(" have the same texture on each side of the block. We will be animating the texture for "),s("code",null,'"wiki:flashing"'),n(" later on.")]),s("li",null,[s("code",null,'"wiki:sapp_log"'),n(" has 3 different textures; the top of the block, the bottom of the block & the remaining sides of the block.")]),s("li",null,[s("code",null,'"wiki:compass_block"'),n(" has a different texture for each side of the block.")])],-1),P=s("p",null,[n("When we define the sounds, we use their shortnames. For a list of vanilla sound shortnames, you can look "),s("a",{href:"/documentation/sound-definitions.html"},"here"),n(". If you want to learn about making your own custom sounds, you can look "),s("a",{href:"/concepts/sounds.html"},"here"),n(".")],-1),R=s("h3",{id:"block-terrain-texture-definition",tabindex:"-1"},[n("Block terrain texture definition "),s("a",{class:"header-anchor",href:"#block-terrain-texture-definition","aria-hidden":"true"},"#")],-1),T=s("p",null,[n(`These "gorgeous" textures are the ones I'm going to use for my example blocks. The first three are located in the `),s("code",null,"RP/textures/blocks/"),n(" folder and, the last 6 are located in the "),s("code",null,"RP/textures/blocks/compass_block"),n(" subfolder - they show North, South, etc.")],-1),W=s("p",null,[s("em",null,[n("Left to right: "),s("code",null,"blocky.png"),n(", "),s("code",null,"sapp_log_side.png"),n(", "),s("code",null,"side_block_top.png"),n(", "),s("code",null,"sb_up.png"),n(", "),s("code",null,"sb_down.png"),n(", "),s("code",null,"sb_north.png"),n(", "),s("code",null,"sb_south.png"),n(", "),s("code",null,"sb_west.png"),n(", "),s("code",null,"sb_east.png")])],-1),A=s("p",null,[n("All textures need to define a "),s("strong",null,"shortname"),n(" and we'll do it the same way as we defined item texture shortnames in "),s("code",null,"RP/textures/item_texture.json"),n(", but this time in "),s("code",null,"RP/textures/terrain_texture.json")],-1),N=n("RP/textures/terrain_texture.json"),C=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token property"},'"resource_pack_name"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"wiki"'),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"texture_name"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"atlas.terrain"'),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"padding"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"8"),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"num_mip_levels"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},","),n(`
	`),s("span",{class:"token property"},'"texture_data"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token property"},'"blocky"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/blocky"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"sapp_log_top"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/sapp_log_top"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"sapp_log_side"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/sapp_log_side"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"compass_block_north"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/compass_block/sb_north"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"compass_block_east"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/compass_block/sb_east"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"compass_block_west"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/compass_block/sb_west"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"compass_block_south"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/compass_block/sb_south"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"compass_block_up"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/compass_block/sb_up"'),n(`
		`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"compass_block_down"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token property"},'"textures"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/compass_block/sb_down"'),n(`
		`),s("span",{class:"token punctuation"},"}"),n(`
	`),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br"),s("span",{class:"line-number"},"31"),s("br"),s("span",{class:"line-number"},"32"),s("br"),s("span",{class:"line-number"},"33"),s("br"),s("span",{class:"line-number"},"34"),s("br"),s("span",{class:"line-number"},"35"),s("br")])],-1),H=s("p",null,[n("The only difference from "),s("code",null,"item_textures.json"),n(' is that "'),s("code",null,"atlas.items"),n('" is now changed to "'),s("code",null,"atlas.terrain"),n('".')],-1),q=s("p",null,[s("code",null,'"padding"'),n(" and "),s("code",null,'"num_mip_leavels"'),n(" mean the quality of how the texture is displayed, especially noticeable on higher resolution textures. The performance will be better if it's lower, but the textures will appear glitchy from further distances.")],-1),M=s("p",null,[n("Next, all our texture shortnames have been defined. These shortnames were already used in "),s("code",null,"RP/blocks.json"),n(", as you might remember. If you load the game now, you'll be able to see the 3 new custom blocks you just added, with all the texture functionality.")],-1),S=s("p",null,[s("img",{src:i,alt:""})],-1),Y=s("p",null,[n("But, we still have to define the "),s("code",null,"wiki:flashing"),n(` texture(third from the left), which is currently undefined. That's why it appears as a dirt block with "update" written on it.`)],-1),D=s("h3",{id:"block-flipbook-texture-definition",tabindex:"-1"},[n("Block flipbook texture definition "),s("a",{class:"header-anchor",href:"#block-flipbook-texture-definition","aria-hidden":"true"},"#")],-1),L=s("p",null,[n("As you might have already guessed, flipbook texture shortnames are defined in a different place than "),s("code",null,"RP/textures/terrain_texture.json"),n(". Let's create another file "),s("code",null,"RP/textures/flipbook_textures.json"),n(".")],-1),$=n("RP/textures/flipbook_textures.json"),E=s("div",{class:"language-json line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"["),n(`
	`),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token property"},'"flipbook_texture"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"textures/blocks/flashing_flipbook"'),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"atlas_tile"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"flashing"'),s("span",{class:"token punctuation"},","),n(`
		`),s("span",{class:"token property"},'"ticks_per_frame"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token number"},"13"),n(`
	`),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"]"),n(`
`)])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br")])],-1),U=s("ul",null,[s("li",null,[s("code",null,'"flipbook_texture"'),n(" is the path to your texture file, which is named "),s("code",null,'"flashing_flipbook"'),n(" in this scenario.")]),s("li",null,[s("code",null,'"atlas_tile"'),n(" is the shortname definition. As you know, we already applied "),s("code",null,'"flashing"'),n(" texture shortname to the "),s("code",null,"wiki:flashing"),n(" block in "),s("code",null,"RP/blocks.json"),n(".")]),s("li",null,[s("code",null,'"ticks_per_frame"'),n(" defines how quickly the different textures will fade into the block, in other words, the speed of the animation.")])],-1),V=s("p",null,[n("A "),s("strong",null,"flipbook texture"),n(" file is created like this:")],-1),z=s("ul",null,[s("li",null,"The image width is 16;"),s("li",null,[n("Image height is "),s("code",null,"16*3"),n(", as we have three different block textures/"),s("strong",null,"frames"),n(" to fade. If you wanted a flipbook with 12 different textures, the height would be "),s("code",null,"16*12"),n(". "),s("strong",null,"Done!"),n(" All of our blocks work perfectly.")])],-1),G=s("video",{width:"320",height:"240",controls:""},[s("source",{src:u,type:"video/mp4"})],-1),J=s("h2",{id:"setting-block-names",tabindex:"-1"},[n("Setting block names "),s("a",{class:"header-anchor",href:"#setting-block-names","aria-hidden":"true"},"#")],-1),K=s("p",null,[n("And, finally, let's define our block's names in "),s("code",null,"/RP/texts/en_US.lang"),n(" as we did with items, somewhat like this:")],-1),O=s("div",{class:"language-"},[s("pre",null,[s("code",null,`tile.wiki:blocky.name=Blocky Block
tile.wiki:sapp_log.name=Sapphire Wood
tile.wiki:compass_block.name=A compass in block-form
tile.wiki:flashing.name=Block of Flashing Matter
`)]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br")])],-1),Q=s("p",null,[n("You can learn more about .lang "),s("a",{href:"/concepts/text-and-translations.html"},"here")],-1),X=s("hr",null,null,-1),Z=s("h2",{id:"what-you-have-learned",tabindex:"-1"},[n("What you have learned "),s("a",{class:"header-anchor",href:"#what-you-have-learned","aria-hidden":"true"},"#")],-1),ss=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"What you have learned:"),s("ul",null,[s("li",null,"What custom block behavior components there are"),s("li",null,"How to create a custom block with simple textures"),s("li",null,"How to create a custom block with side and face-relying textures"),s("li",null,"How to create a custom block with flipbook textures")])],-1);function ns(es,ts,as,os,ls,rs){const a=l("CodeHeader"),t=l("WikiImage");return p(),c("div",null,[b,d,h,m,e(a,null,{default:o(()=>[_]),_:1}),f,g,y,w,x,v,e(a,null,{default:o(()=>[j]),_:1}),B,F,I,P,R,T,W,e(t,{src:"/assets/images/guide/tut_blocky_texture.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_log_side_texture.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_log_top_texture.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_sb_up.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_sb_down.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_sb_north.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_sb_south.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_sb_west.png",pixelated:""}),e(t,{src:"/assets/images/guide/tut_sb_east.png",pixelated:""}),A,e(a,null,{default:o(()=>[N]),_:1}),C,H,q,M,S,Y,D,L,e(a,null,{default:o(()=>[$]),_:1}),E,U,V,z,G,J,K,O,Q,X,Z,ss])}var is=r(k,[["render",ns]]);export{ps as __pageData,is as default};