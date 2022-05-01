import{_ as l,c as d,a,w as n,e as i,b as e,d as t,r as o,o as c}from"./404.md.60f3d7d0.js";const I=`{"title":"Molang Queries","description":"","frontmatter":{"title":"Molang Queries"},"headers":[{"level":2,"title":"query.get_equiped_item_name","slug":"query-get-equiped-item-name"},{"level":2,"title":"query.get_name","slug":"query-get-name"},{"level":2,"title":"query.is_name_any","slug":"query-is-name-any"},{"level":2,"title":"query.is_item_name_any","slug":"query-is-item-name-any"},{"level":3,"title":"Test for items within the player's inventory","slug":"test-for-items-within-the-player-s-inventory"},{"level":2,"title":"query.armor_texture_slot","slug":"query-armor-texture-slot"},{"level":3,"title":"X","slug":"x"},{"level":3,"title":"Y","slug":"y"},{"level":3,"title":"Example","slug":"example"},{"level":2,"title":"query.armor_material_slot","slug":"query-armor-material-slot"},{"level":3,"title":"X","slug":"x-1"},{"level":3,"title":"Y","slug":"y-1"},{"level":2,"title":"query.armor_color_slot","slug":"query-armor-color-slot"},{"level":3,"title":"Slot","slug":"slot"},{"level":3,"title":"Channel","slug":"channel"},{"level":3,"title":"Color","slug":"color"},{"level":2,"title":"query.is_enchanted","slug":"query-is-enchanted"},{"level":2,"title":"query.is_eating","slug":"query-is-eating"},{"level":2,"title":"query.is_ghost","slug":"query-is-ghost"},{"level":2,"title":"query.is_grazing","slug":"query-is-grazing"},{"level":2,"title":"query.is_jumping","slug":"query-is-jumping"},{"level":2,"title":"query.modified_move_speed","slug":"query-modified-move-speed"},{"level":2,"title":"query.on_fire_time","slug":"query-on-fire-time"},{"level":2,"title":"query.scoreboard","slug":"query-scoreboard"},{"level":2,"title":"query.structural_integrity","slug":"query-structural-integrity"},{"level":2,"title":"variable.attack_time","slug":"variable-attack-time"},{"level":3,"title":"Explanation","slug":"explanation"},{"level":3,"title":"For entities","slug":"for-entities"},{"level":3,"title":"For the Player","slug":"for-the-player"},{"level":2,"title":"query.is_roaring","slug":"query-is-roaring"},{"level":2,"title":"query.head_x_rotation","slug":"query-head-x-rotation"},{"level":2,"title":"query.head_y_rotation","slug":"query-head-y-rotation"},{"level":2,"title":"query.target_x_rotation and query.target_y_rotation","slug":"query-target-x-rotation-and-query-target-y-rotation"},{"level":2,"title":"query.eye_target_x_rotation and query.eye_target_y_rotation","slug":"query-eye-target-x-rotation-and-query-eye-target-y-rotation"},{"level":2,"title":"variable.short_arm_offset_right","slug":"variable-short-arm-offset-right"},{"level":2,"title":"variable.short_arm_offset_left","slug":"variable-short-arm-offset-left"},{"level":2,"title":"query.movement_direction","slug":"query-movement-direction"},{"level":2,"title":"query.block_neighbor_has_any_tag and query.relative_block_has_any_tag","slug":"query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag"}],"relativePath":"documentation/queries.md"}`,u={},p=i('<p>The bedrock documentation for Molang is notoriously bad. This page will attempt to remedy this by providing additional details for individual queries, <em>where possible</em>. This page is intended to be searched, not read in full. Use the side-bar, or use <code>ctrl-f</code> to navigate.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This page is not an exhaustive list list! It only contains queries we&#39;ve written extra information for. The full list of queries can be found <a href="https://bedrock.dev/docs/stable/Molang#List%20of%20Entity%20Queries" target="_blank" rel="noopener noreferrer">here</a>!</p></div><h2 id="query-get-equiped-item-name" tabindex="-1">query.get_equiped_item_name <a class="header-anchor" href="#query-get-equiped-item-name" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>DEPRECATED QUERY:</strong> It is recommended to use the new query (<code>query.is_item_name_any</code>) if possible as it is more of an updated version of this query. However, this query will still continue to work in the future for backwards compatibility.</p></div><p>Formatted like: <code>query.get_equiped_item_name(&#39;main_hand&#39;) = &#39;item_name&#39;</code></p><p>Takes one optional hand slot as a parameter (0 or &#39;main_hand&#39; for main hand, 1 or &#39;off_hand&#39; for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns &#39;&#39;.</p><p>Where <code>item_name</code> is the item you want to test for. No namespace, and please notice the quotes.</p><p>Example: <code>&quot;query.get_equipped_item_name == &#39;diamond&#39;&quot;</code></p><p><strong>Can you test for items in the inventory? Yes! Using the new query <code>query.is_item_name_any</code>.</strong></p><h2 id="query-get-name" tabindex="-1">query.get_name <a class="header-anchor" href="#query-get-name" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>DEPRECATED QUERY:</strong> It is recommended to use the new query (<code>query.is_name_any</code>) if possible as it is more of an updated version of this query. However, this query will still continue to work in the future for backwards compatibility.</p></div><p>Formatted like: <code>query.get_name == &#39;Name&#39;</code></p><p>Turns true if actual in-game displayed name matches name (use OnixClient to see names in third view). Needs to be used in special conditions.</p>',13),h=t("animation_controllers/ac.json"),m=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token punctuation"},"{"),t(`
    `),e("span",{class:"token property"},'"format_version"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"1.10.0"'),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token property"},'"animation_controllers"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
        `),e("span",{class:"token property"},'"controller.animation.ac"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
            `),e("span",{class:"token property"},'"initial_state"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"default"'),e("span",{class:"token punctuation"},","),t(`
            `),e("span",{class:"token property"},'"states"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"query.is_alive"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),t(`
                `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"(1.0)"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),t(`
                    `),e("span",{class:"token property"},'"animations"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"anim"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},`"query.get_name == '...'"`),t(),e("span",{class:"token comment"},"// You can use it only here!"),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),t(`
            `),e("span",{class:"token punctuation"},"}"),t(`
        `),e("span",{class:"token punctuation"},"}"),t(`
    `),e("span",{class:"token punctuation"},"}"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br")])],-1),y=e("h2",{id:"query-is-name-any",tabindex:"-1"},[t("query.is_name_any "),e("a",{class:"header-anchor",href:"#query-is-name-any","aria-hidden":"true"},"#")],-1),b=e("p",null,[t("Formatted like: "),e("code",null,"query.get_name('Name1', 'Name2')"),t(". Takes one or more arguments. Turns true if actual in-game displayed name matches one of the given names. Needs to be used in special conditions.")],-1),g=t("animation_controllers/ac.json"),_=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token punctuation"},"{"),t(`
    `),e("span",{class:"token property"},'"format_version"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"1.10.0"'),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token property"},'"animation_controllers"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
        `),e("span",{class:"token property"},'"controller.animation.ac"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
            `),e("span",{class:"token property"},'"initial_state"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"default"'),e("span",{class:"token punctuation"},","),t(`
            `),e("span",{class:"token property"},'"states"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"query.is_alive"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),t(`
                `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"(1.0)"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),t(`
                    `),e("span",{class:"token property"},'"animations"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"anim"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"query.is_name_any(...)"'),t(),e("span",{class:"token comment"},"// You can use it only here!"),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),t(`
            `),e("span",{class:"token punctuation"},"}"),t(`
        `),e("span",{class:"token punctuation"},"}"),t(`
    `),e("span",{class:"token punctuation"},"}"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br")])],-1),f=i('<h2 id="query-is-item-name-any" tabindex="-1">query.is_item_name_any <a class="header-anchor" href="#query-is-item-name-any" aria-hidden="true">#</a></h2><p>Formatted like: <code>query.is_item_name_any(&#39;slot.weapon.mainhand&#39;, 0, &#39;namespace:item_name&#39;)</code></p><p>Takes the equipment slot name first, followed by the slot index value, and then the list of item names with namespaces after it.</p><p>Possible equipment slot are as follows:</p><table><thead><tr><th>Slot Name</th><th>Slot Counts</th><th>Description</th></tr></thead><tbody><tr><td><code>slot.weapon.mainhand</code></td><td>0</td><td>Usually any held items are in here</td></tr><tr><td><code>slot.weapon.offhand</code></td><td>0</td><td>Offhand slot for things like <code>Shield</code>, <code>Totem of Undying</code> or a <code>Map</code></td></tr><tr><td><code>slot.armor.head</code></td><td>0</td><td>Head armor piece</td></tr><tr><td><code>slot.armor.chest</code></td><td>0</td><td>Chestplate armor piece</td></tr><tr><td><code>slot.armor.legs</code></td><td>0</td><td>Leggings armor piece</td></tr><tr><td><code>slot.armor.feet</code></td><td>0</td><td>Boots armor piece</td></tr><tr><td><code>slot.armor</code></td><td>0</td><td>Horse armor</td></tr><tr><td><code>slot.saddle</code></td><td>0</td><td>Saddle slot</td></tr><tr><td><code>slot.hotbar</code></td><td>0 to 8</td><td>Player hotbar slots</td></tr><tr><td><code>slot.inventory</code></td><td>0+ (varies)</td><td>Entities that has an inventory, like the player, minecart with chests, donkey, etc.</td></tr><tr><td><code>slot.enderchest</code></td><td>0 to 26</td><td>Ender chest inventory for players only</td></tr></tbody></table><h3 id="test-for-items-within-the-player-s-inventory" tabindex="-1">Test for items within the player&#39;s inventory <a class="header-anchor" href="#test-for-items-within-the-player-s-inventory" aria-hidden="true">#</a></h3><p>Formatted like: <code>t.val = 0; t.i = 0; loop(27, {t.val = q.is_item_name_any(&#39;slot.inventory&#39;, t.i, &#39;namespace:item_name&#39;); t.val ? {return t.val;}; t.i = t.i+1;});</code></p><p>Replace <code>namespace:item_name</code> with any item you wish to check for. This simply loops through all 27 slots of the inventory and returns <code>1.0</code> if it has found any slot that has the specified item provided. Note that the hotbar is in a different slot from the main inventory slot so you will have to check that seperately.</p><h2 id="query-armor-texture-slot" tabindex="-1">query.armor_texture_slot <a class="header-anchor" href="#query-armor-texture-slot" aria-hidden="true">#</a></h2><p>Formatted like: <code>query.armor_texture_slot(x) = y</code>.</p><p>Where <code>x</code> and <code>y</code> are both integer arguments, from the following table:</p><h3 id="x" tabindex="-1">X <a class="header-anchor" href="#x" aria-hidden="true">#</a></h3><table><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Helmet</td></tr><tr><td>1</td><td>Chestplace</td></tr><tr><td>2</td><td>Leggings</td></tr><tr><td>3</td><td>Boots</td></tr></tbody></table><h3 id="y" tabindex="-1">Y <a class="header-anchor" href="#y" aria-hidden="true">#</a></h3><table><thead><tr><th>Argument</th><th>Type</th></tr></thead><tbody><tr><td>-1</td><td>none</td></tr><tr><td>0</td><td>Leather armor piece</td></tr><tr><td>1</td><td>Chain armor piece</td></tr><tr><td>2</td><td>Iron armor piece</td></tr><tr><td>3</td><td>Diamond armor piece</td></tr><tr><td>4</td><td>Gold armor piece</td></tr><tr><td>5</td><td>Elytra</td></tr><tr><td>6</td><td>Turtle helmet</td></tr><tr><td>7</td><td>Netherite armor piece</td></tr></tbody></table><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><p><code>query.armor_texture_slot(3) == 1</code>: queries for Iron Boots.</p><h2 id="query-armor-material-slot" tabindex="-1">query.armor_material_slot <a class="header-anchor" href="#query-armor-material-slot" aria-hidden="true">#</a></h2><p>Formatted like: <code>query.armor_material_slot(x) = y</code>.</p><p>Where <code>x</code> and <code>y</code> are both integer arguments, from the following table:</p><h3 id="x-1" tabindex="-1">X <a class="header-anchor" href="#x-1" aria-hidden="true">#</a></h3><table><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Helmet</td></tr><tr><td>1</td><td>Chestplace</td></tr><tr><td>2</td><td>Leggings</td></tr><tr><td>3</td><td>Boots</td></tr></tbody></table><h3 id="y-1" tabindex="-1">Y <a class="header-anchor" href="#y-1" aria-hidden="true">#</a></h3><p>Unknown, possibly:</p><table><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Default armor material</td></tr><tr><td>1</td><td>Enchanted armor material</td></tr><tr><td>2</td><td>Leather armor material</td></tr><tr><td>3</td><td>Leather enchanted material</td></tr></tbody></table><h2 id="query-armor-color-slot" tabindex="-1">query.armor_color_slot <a class="header-anchor" href="#query-armor-color-slot" aria-hidden="true">#</a></h2><p><em>Notice: As of version <code>1.16.100.51</code>, this query is crashing minecraft. It might be fixed in later versions.</em></p><p>Formatted like: <code>color = query.armor_color_slot(slot, channel)</code>.</p><p>Where <code>slot</code> and <code>channel</code> are both integer arguments, from the following tables:</p><h3 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h3><table><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Helmet</td></tr><tr><td>1</td><td>Chestplace</td></tr><tr><td>2</td><td>Leggings</td></tr><tr><td>3</td><td>Boots</td></tr></tbody></table><h3 id="channel" tabindex="-1">Channel <a class="header-anchor" href="#channel" aria-hidden="true">#</a></h3><table><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>0</td><td>Red channel</td></tr><tr><td>1</td><td>Green channel</td></tr><tr><td>2</td><td>Blue channel</td></tr><tr><td>3</td><td>Alpha channel</td></tr></tbody></table><h3 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-hidden="true">#</a></h3><p>Query returns color value in specified channel.</p><h2 id="query-is-enchanted" tabindex="-1">query.is_enchanted <a class="header-anchor" href="#query-is-enchanted" aria-hidden="true">#</a></h2><p>Formatted like: <code>is_enchanted = query.is_enchanted</code>.</p><p>Return 1.0 or 0.0 based on whether the entity is enchanted.</p><p><em>Currently, can be only used in materials.</em></p><h2 id="query-is-eating" tabindex="-1">query.is_eating <a class="header-anchor" href="#query-is-eating" aria-hidden="true">#</a></h2><p>This query tracks when certain entities are &#39;eating&#39;. It&#39;s not used for the player. To trigger, use one of the following components:</p><ul><li><code>minecraft:behavior.eat_carried_item</code></li><li><code>minecraft:behavior.snacking</code></li></ul><h2 id="query-is-ghost" tabindex="-1">query.is_ghost <a class="header-anchor" href="#query-is-ghost" aria-hidden="true">#</a></h2><p>Formatted like: <code>is_ghost = query.is_ghost</code>.</p><p>Return 1.0 or 0.0 based on whether the entity is a ghost.</p><p><em>Currently, only returns 1.0 for a guardian ghost and is used by its renderer.</em></p><h2 id="query-is-grazing" tabindex="-1">query.is_grazing <a class="header-anchor" href="#query-is-grazing" aria-hidden="true">#</a></h2><p>Formatted like: <code>is_grazing = query.is_grazing</code>.</p><p>Return 1.0 or 0.0 based on whether the entity is eating a block.</p><p><em>Currently, only returns 1.0 for a sheep and entities using runtime identifier of a sheep.</em></p><h2 id="query-is-jumping" tabindex="-1">query.is_jumping <a class="header-anchor" href="#query-is-jumping" aria-hidden="true">#</a></h2><p>Formatted like: <code>is_jumping = query.is_jumping</code>.</p><p>Return 1.0 or 0.0 based on whether the entity is jumping.</p><p>For the player, conditions for its activation are:</p><ul><li>the jump button is pressed (includes being in water and climbing a scaffolding)</li><li>OR auto-jump is triggered</li><li>OR swimming with auto-jump</li><li>OR charging the jump of a ridable entity</li></ul><h2 id="query-modified-move-speed" tabindex="-1">query.modified_move_speed <a class="header-anchor" href="#query-modified-move-speed" aria-hidden="true">#</a></h2><p>Formatted like: <code>modified_move_speed = query.modified_move_speed</code>.</p><p>Returns the current walk speed of the entity modified by status flags such as is_baby or on_fire</p><p>Value example:</p><ul><li>Player is walking: around 0.86</li><li>Player is sprinting: 1.0</li><li>Player is sprinting and jumping: 0.35</li><li>Player is walking on fire: 1.0</li><li>Player is sprinting on fire: 1.0</li><li>Player is sprinting and jumping on fire: 0.525</li></ul><h2 id="query-on-fire-time" tabindex="-1">query.on_fire_time <a class="header-anchor" href="#query-on-fire-time" aria-hidden="true">#</a></h2><p>Formatted like: <code>on_fire_time = query.on_fire_time</code>.</p><p>Returns the time in ticks since the entity started or stopped being on fire, else it returns 0.0</p><p>Value example:</p><ul><li>Entity is summoned: value is 0</li><li>Entity is ignited: value is 0 and starts counting up 1 every tick</li><li>Entity is on fire for 2 seconds already: value is 40 and still counts up 1 every tick</li><li>Entity stops being on fire: value resets to 0 and continues to count up 1 every tick despite not being on fire</li><li>Entity is ignited second time: value resets to 0 and continues counting up 1 every tick</li><li>Entity stops being on fire the second time: value resets to 0 and continues to count up 1 every tick despite not being on fire</li></ul><p>Basically it&#39;s tick timer that starts after entity is first ignited and resets every time it changes from/to being on fire.</p><h2 id="query-scoreboard" tabindex="-1">query.scoreboard <a class="header-anchor" href="#query-scoreboard" aria-hidden="true">#</a></h2><p>Formatted like: <code>query.scoreboard(&#39;objective_name&#39;) &gt; 0</code></p><p>Returns 1.0 or 0.0 if the queried value is within the specified range provided. Or based on score count, molang operator and number.</p><p>Note that sometimes it might not work because of unknown reasons. One of which is that this cannot query scoreboard objective names with uppercase letters. In this case, for example, objective <code>testfoo</code> will work but <strong>not</strong> <code>testFoo</code>.</p><h2 id="query-structural-integrity" tabindex="-1">query.structural_integrity <a class="header-anchor" href="#query-structural-integrity" aria-hidden="true">#</a></h2><p>Formatted like: <code>structural_integrity = query.structural_integrity</code>.</p><p>Used by boats and minecarts for destroying it. It will decrease when attacking the entity and will recover with time. Probably unusable by anything other than boats and minecarts.</p><h2 id="variable-attack-time" tabindex="-1">variable.attack_time <a class="header-anchor" href="#variable-attack-time" aria-hidden="true">#</a></h2><h3 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h3><p>This variable is setup as IF it was a query. In other words, it can be used on any entity, both on the client and server, regardless of whether you setup/define the variable correctly.</p><h3 id="for-entities" tabindex="-1">For entities <a class="header-anchor" href="#for-entities" aria-hidden="true">#</a></h3><p>The variable tracks when the entity is swinging to attack. When not attacking, it will return 0.0, when attacking it will range from 0.0 to the total attack time, which may be around 0.3 or something similar. For players, this value ranges from 0.0 to 1.0. The variable returns a percentage, in the form of a decimal, for how far into the attack the entity is. For example, if an entity is halfway into its attack swing, then the variable will return 0.5. It increments linearly.</p><h3 id="for-the-player" tabindex="-1">For the Player <a class="header-anchor" href="#for-the-player" aria-hidden="true">#</a></h3><p>For the player, the variable will track whenever the arm bones are swinging, this includes:</p><ul><li>placing blocks</li><li>placing entities</li><li>interacting (when swing is enabled)</li><li>melee attack</li></ul><h2 id="query-is-roaring" tabindex="-1">query.is_roaring <a class="header-anchor" href="#query-is-roaring" aria-hidden="true">#</a></h2><p>Evaluates to true when a <code>knockback_roar</code> attack is happening.</p><h2 id="query-head-x-rotation" tabindex="-1">query.head_x_rotation <a class="header-anchor" href="#query-head-x-rotation" aria-hidden="true">#</a></h2><p>Formatted like: <code>query.head_x_rotation(x)</code></p><p>Where <code>x</code> specifies the head of the entity. It is not really relevant for any entity but the wither.</p><p>Returns head pitch. looking up returns <code>-89.9</code>, looking all the way down returns <code>89.9</code>.</p><h2 id="query-head-y-rotation" tabindex="-1">query.head_y_rotation <a class="header-anchor" href="#query-head-y-rotation" aria-hidden="true">#</a></h2><p>Formatted like: <code>query.head_y_rotation(x)</code></p><p>Where <code>x</code> specifies the head of the entity. It is not really relevant for any entity but the wither.</p><p>Returns yaw of the head from <code>-179.9</code> to <code>179.9</code>. the values wrap around so like if you are at <code>-179.9</code> and you turn just a little bit, it instantly goes to <code>179.9</code>.</p><h2 id="query-target-x-rotation-and-query-target-y-rotation" tabindex="-1">query.target_x_rotation and query.target_y_rotation <a class="header-anchor" href="#query-target-x-rotation-and-query-target-y-rotation" aria-hidden="true">#</a></h2><p>Identical to the respective <code>query.head_*_rotation</code>, however has no optional argument for selecting head.</p><h2 id="query-eye-target-x-rotation-and-query-eye-target-y-rotation" tabindex="-1">query.eye_target_x_rotation and query.eye_target_y_rotation <a class="header-anchor" href="#query-eye-target-x-rotation-and-query-eye-target-y-rotation" aria-hidden="true">#</a></h2><p>Not valid for player. not really sure what its good for.</p><h2 id="variable-short-arm-offset-right" tabindex="-1">variable.short_arm_offset_right <a class="header-anchor" href="#variable-short-arm-offset-right" aria-hidden="true">#</a></h2><p>Returns the offset factor for the player&#39;s rightarm bone compared to the default skin geometry. Slim-armed (3 pixel wide) skins will return <code>0.5</code> when equipped on the player. Normal (4 pixel wide) skins will return <code>0.0</code> when equipped on the player. Note: the player must go into 1st person perspective at least once for this variable to be initialized and usable elsewhere on the entity.</p><h2 id="variable-short-arm-offset-left" tabindex="-1">variable.short_arm_offset_left <a class="header-anchor" href="#variable-short-arm-offset-left" aria-hidden="true">#</a></h2><p>Identical behavior to <code>variable.short_arm_offset_right</code> except it references the player leftarm bone.</p><h2 id="query-movement-direction" tabindex="-1">query.movement_direction <a class="header-anchor" href="#query-movement-direction" aria-hidden="true">#</a></h2><p>Essentially, returns the ratio between speed in the specified argument, over the total speeds in all 3 axis combined. For example, you are moving 5 blocks/second in the x-axis, 0 blocks/second in the y-axis, and 3 blocks/second in the z-axis -&gt; <code>5 / ( 5 + 0 + 3 ) = 0.625</code>.</p><table><thead><tr><th>Argument</th><th>Axis</th></tr></thead><tbody><tr><td>0</td><td>X</td></tr><tr><td>1</td><td>Y</td></tr><tr><td>2</td><td>Z</td></tr></tbody></table><p>If stationary, the values will return as <code>0</code>. When you are moving along the positive X/Y/Z axis, the returned value is positive. If you are moving in the opposite direction, the returned value is negative. The return value should never exceed <code>1</code> or <code>-1</code>.</p><p>It&#39;s worth noting that the <code>Y</code> axis may not work as expected. When you stay in the same spot, and are not hovering, the query returns <code>-1</code>. When you stay on the same X and Z coordinates and move downwards on the Y axis, the query also returns <code>-1</code>. If you are hovering on a constant Y coordinate, it returns <code>0</code>.</p><h2 id="query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag" tabindex="-1">query.block_neighbor_has_any_tag and query.relative_block_has_any_tag <a class="header-anchor" href="#query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag" aria-hidden="true">#</a></h2><p>Requires <code>Experimental Molang Features</code> to use. From the docs <code>Takes a relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided</code>. This is useful for using connecting blocks or detecting entities.</p><p><code>query.block_neighbor_has_any_tag</code> - Takes block position <code>query.relative_block_has_any_tag</code> - Takes entity position</p><p>The syntax for it is <code>q.block_neighbor_has_any_tag(x,y,z,&#39;tag_name&#39;)</code> and <code>q.relative_block_has_any_tag(x,y,z,&#39;tag_name&#39;)</code>.</p><p>Example:</p><ul><li><code>q.relative_block_has_any_tag(0,-1,0,&#39;grass&#39;)</code> would try to detect a block with the grass tag one block under the entity.</li><li><code>q.block_neighbor_has_any_tag(0,-1,0,&#39;grass&#39;)</code> would try to detect a block with the grass tag one block under the block.</li></ul><p>To do multiple tags you would use <code>q.correct_query(0,-1,0,&#39;grass&#39;, &#39;plant&#39;)</code> with <code>correct_query</code> being replaced by the right query.</p><p>Note that this can also detect custom tags and <a href="/blocks/block-tags.html">vanilla tags</a></p>',112);function k(q,v,x,w,T,E){const r=o("CodeHeader"),s=o("Spoiler");return c(),d("div",null,[p,a(s,{title:"Show"},{default:n(()=>[a(r,null,{default:n(()=>[h]),_:1}),m]),_:1}),y,b,a(s,{title:"Show"},{default:n(()=>[a(r,null,{default:n(()=>[g]),_:1}),_]),_:1}),f])}var C=l(u,[["render",k]]);export{I as __pageData,C as default};
