import{_ as c}from"./chunks/3.035a77e6.js";import{_ as i,c as d,a,w as t,e as s,b as e,d as n,r as l,o as p}from"./404.md.cea2587e.js";const P=JSON.parse('{"title":"Entity Counter","description":"","frontmatter":{"title":"Entity Counter","category":"Scoreboard Systems","mentions":["BedrockCommands","zheaEvyline"],"nav_order":3,"tags":["system"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":2,"title":"Tick JSON","slug":"tick-json","link":"#tick-json","children":[]}],"relativePath":"commands/entity-counter.md"}'),u={name:"commands/entity-counter.md"},m=s('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>This system allows you to track how many players/entities are there on your world and run your desired commands based on the values obtained.</p><blockquote><p>Note: you cannot track entities in unloaded chunks though players can still be tracked regardless.</p></blockquote><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><p><em>To be typed in Chat:</em></p><p><code>/scoreboard objectives add total dummy</code></p><p>If you prefer to have the objective added automatically on world initialisation, follow the process outlined in <a href="/docs/commands/on-first-world-load.html">On First World Load.</a></p><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-hidden="true">#</a></h2>',9),y=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">scoreboard players set onlinePlayers total 0</span></span>
<span class="line"><span style="color:#C3E88D;">execute as @e [type=player] run scoreboard players add onlinePlayers total 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (examples)</span></span>
<span class="line"><span style="color:#C3E88D;">execute if score onlinePlayers total matches 4.. run title @a actionbar Enough players to start game.</span></span>
<span class="line"><span style="color:#C3E88D;">execute if score onlinePlayers total matches ..3 run title @a actionbar Not enough players.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+c+'" alt="commandBlockChain3"></p><p>Here we have used a FakePlayer name <code>onlinePlayers</code> and targeting <code>@e [type=player]</code> to track how many players are currently on the world. However you may use any FakePlayer name and target any entity you might need. Such as <code>@e [type=creeper]</code></p><p>Similarly we&#39;re running a <code>/title</code> command as an example:</p><ul><li>a) when there are 4 or more players <code>4..</code></li><li>b) when there are 3 players or less <code>..3</code></li></ul><p>You can edit this as well to suit your need.</p><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h2><ul><li>The first two commands in the system sets the FakePlayer name&#39;s score to 0 (here <code>onlinePlayers</code>) and from each loaded entity we want to track (here <code>type=player</code>) it will add a score to the specified FakePlayer name (here <code>onlinePlayers</code>)</li></ul><p>Now based on the values obtained we can use the <code>/execute if score</code> command to run our desired commands when certain values are met.</p><ul><li><strong><code>n</code></strong> any number n</li><li><strong><code>n..</code></strong> any number n and above</li><li><strong><code>..n</code></strong> any number n and below</li><li><strong><code>n1..n2</code></strong> any number n1 to any number n2.</li></ul><h2 id="tick-json" tabindex="-1">Tick JSON <a class="header-anchor" href="#tick-json" aria-hidden="true">#</a></h2><p>If you are using functions instead of command blocks, the <code>entity_counter</code> function must be added to the <code>tick.json</code> in order to loop and run it continuously. Multiple files can be added to the <code>tick.json</code> by placing a comma after each string. Refer to <a href="/commands/mcfunctions.html#tick-json">Functions</a> documentation for further info.</p>',12),h=s(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">values</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">entity_counter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If using functions, your pack folder structure will be be as follows:</p>`,2),b=e("blockquote",null,[e("p",null,[e("strong",null,"Note:"),n(" the scoreboard names (in this case: 'total') may end up being used by other people. Appending "),e("code",null,"_"),n(" and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the "),e("code",null,".mcfunction"),n(" filenames. Ex:")]),e("ul",null,[e("li",null,[e("code",null,"total_0fe678")]),e("li",null,[e("code",null,"entity_counter_0fe678.mcfunction")])])],-1);function _(f,g,k,C,D,w){const o=l("CodeHeader"),r=l("FolderView");return p(),d("div",null,[m,a(o,null,{default:t(()=>[n("BP/functions/entity_counter.mcfunction")]),_:1}),y,a(o,null,{default:t(()=>[n("BP/functions/tick.json")]),_:1}),h,a(r,{paths:["BP","BP/functions","BP/pack_icon.png","BP/manifest.json","BP/functions/entity_counter.mcfunction","BP/functions/tick.json"]},null,8,["paths"]),b])}const T=i(u,[["render",_]]);export{P as __pageData,T as default};