const movesData = [
    {
        "id": "001",
        "name": "Pound",
        "description": "The target is physically pounded with\na long tail, a foreleg, or the like.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "002",
        "name": "Karate Chop",
        "description": "The target is attacked with a sharp chop.\nCritical hits land more easily.",
        "type": "fighting",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "003",
        "name": "Double Slap",
        "description": "The target is slapped repeatedly, back\nand forth, two to five times in a row.",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "004",
        "name": "Comet Punch",
        "description": "The target is hit with a flurry of punches\nthat strike two to five times in a row.",
        "type": "normal",
        "category": "physical",
        "power": 18,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "005",
        "name": "Mega Punch",
        "description": "The target is slugged by a punch thrown\nwith muscle-packed power.",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 85,
        "pp": 20
    },
    {
        "id": "006",
        "name": "Pay Day",
        "description": "Numerous coins are hurled at the\ntarget to inflict damage.\nMoney is earned after the battle.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "007",
        "name": "Fire Punch",
        "description": "The target is punched with a fiery fist.\nThis may also leave the target with a burn.",
        "type": "fire",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "008",
        "name": "Ice Punch",
        "description": "The target is punched with an icy fist.\nThis may also leave the target frozen.",
        "type": "ice",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "009",
        "name": "Thunder Punch",
        "description": "The target is punched with an electrified\nfist. This may also leave the target\nwith paralysis.",
        "type": "electric",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "010",
        "name": "Scratch",
        "description": "Hard, pointed, sharp claws rake\nthe target to inflict damage.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "011",
        "name": "Vise Grip",
        "description": "The target is gripped and squeezed from\nboth sides to inflict damage.",
        "type": "normal",
        "category": "physical",
        "power": 55,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "012",
        "name": "Guillotine",
        "description": "A vicious, tearing attack with big pincers.\nThe target faints instantly if this attack hits.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5
    },
    {
        "id": "013",
        "name": "Razor Wind",
        "description": "A two-turn attack. Blades of wind hit\nopposing Pok\u00e9mon on the second turn.\nCritical hits land more easily.",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "014",
        "name": "Swords Dance",
        "description": "A frenetic dance to uplift the fighting\nspirit. This sharply raises the user\u2019s\nAttack stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "015",
        "name": "Cut",
        "description": "The target is cut with a scythe or claw.\nThis can also be used to cut down thin trees.",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 30
    },
    {
        "id": "016",
        "name": "Gust",
        "description": "A gust of wind is whipped up by wings and\nlaunched at the target to inflict damage.",
        "type": "flying",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "017",
        "name": "Wing Attack",
        "description": "The target is struck with large, imposing\nwings spread wide to inflict damage.",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "018",
        "name": "Whirlwind",
        "description": "The target is blown away, and a different\nPok\u00e9mon is dragged out. In the wild,\nthis ends a battle against a single Pok\u00e9mon.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "019",
        "name": "Fly",
        "description": "The user soars and then strikes\nits target on the next turn. This can\nalso be used to fly to any familiar town.",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "020",
        "name": "Bind",
        "description": "Things such as long bodies or tentacles\nare used to bind and squeeze\nthe target for four to five turns.",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20
    },
    {
        "id": "021",
        "name": "Slam",
        "description": "The target is slammed with a long tail,\nvines, or the like to inflict damage.",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 75,
        "pp": 20
    },
    {
        "id": "022",
        "name": "Vine Whip",
        "description": "The target is struck with slender,\nwhiplike vines to inflict damage.",
        "type": "grass",
        "category": "physical",
        "power": 45,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "023",
        "name": "Stomp",
        "description": "The target is stomped with a big foot.\nThis may also make the target flinch.",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "024",
        "name": "Double Kick",
        "description": "The target is quickly kicked twice in\nsuccession using both feet.",
        "type": "fighting",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "025",
        "name": "Mega Kick",
        "description": "The target is attacked by a kick launched\nwith muscle-packed power.",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 75,
        "pp": 5
    },
    {
        "id": "026",
        "name": "Jump Kick",
        "description": "The user jumps up high, then strikes\nwith a kick. If the kick misses, the\nuser hurts itself.",
        "type": "fighting",
        "category": "physical",
        "power": 100,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "027",
        "name": "Rolling Kick",
        "description": "The user lashes out with a quick, spinning\nkick. This may also make the target flinch.",
        "type": "fighting",
        "category": "physical",
        "power": 60,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "028",
        "name": "Sand Attack",
        "description": "Sand is hurled in the target\u2019s face,\nreducing the target\u2019s accuracy.",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "029",
        "name": "Headbutt",
        "description": "The user sticks out its head and attacks\nby charging straight into the target.\nThis may also make the target flinch.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "030",
        "name": "Horn Attack",
        "description": "The target is jabbed with a sharply\npointed horn to inflict damage.",
        "type": "normal",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "031",
        "name": "Fury Attack",
        "description": "The target is jabbed repeatedly with a\nhorn or beak two to five times in a row.",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20
    },
    {
        "id": "032",
        "name": "Horn Drill",
        "description": "The user stabs the target with a horn\nthat rotates like a drill. The target\nfaints instantly if this attack hits.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5
    },
    {
        "id": "033",
        "name": "Tackle",
        "description": "A physical attack in which the user\ncharges and slams into the target\nwith its whole body.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "034",
        "name": "Body Slam",
        "description": "The user drops onto the target\nwith its full body weight. This may also\nleave the target with paralysis.",
        "type": "normal",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "035",
        "name": "Wrap",
        "description": "A long body or vines are used to wrap and\nsqueeze the target for four to five turns.",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 90,
        "pp": 20
    },
    {
        "id": "036",
        "name": "Take Down",
        "description": "A reckless, full-body charge attack for\nslamming into the target.\nThis also damages the user a little.",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20
    },
    {
        "id": "037",
        "name": "Thrash",
        "description": "The user rampages and attacks\nfor two to three turns.\nThe user then becomes confused.",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "038",
        "name": "Double-Edge",
        "description": "A reckless, life-risking tackle.\nThis also damages the user\nquite a lot.",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "039",
        "name": "Tail Whip",
        "description": "The user wags its tail cutely, making\nopposing Pok\u00e9mon less wary and\nlowering their Defense stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "040",
        "name": "Poison Sting",
        "description": "The user stabs the target\nwith a poisonous stinger.\nThis may also poison the target.",
        "type": "poison",
        "category": "physical",
        "power": 15,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "041",
        "name": "Twineedle",
        "description": "The user damages the target twice in\nsuccession by jabbing it with two spikes.\nThis may also poison the target.",
        "type": "bug",
        "category": "physical",
        "power": 25,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "042",
        "name": "Pin Missile",
        "description": "Sharp spikes are shot at the target\nin rapid succession.\nThey hit two to five times in a row.",
        "type": "bug",
        "category": "physical",
        "power": 25,
        "accuracy": 95,
        "pp": 20
    },
    {
        "id": "043",
        "name": "Leer",
        "description": "The user gives opposing Pok\u00e9mon\nan intimidating leer that lowers the Defense stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "044",
        "name": "Bite",
        "description": "The target is bitten\nwith viciously sharp fangs.\nThis may also make the target flinch.",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "045",
        "name": "Growl",
        "description": "The user growls in an endearing way,\nmaking opposing Pok\u00e9mon less wary.\nThis lowers their Attack stats.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "046",
        "name": "Roar",
        "description": "The target is scared off, and a different\nPok\u00e9mon is dragged out. In the wild,\nthis ends a battle against a single Pok\u00e9mon.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "047",
        "name": "Sing",
        "description": "A soothing lullaby is sung in a calming\nvoice that puts the target into a\ndeep slumber.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 15
    },
    {
        "id": "048",
        "name": "Supersonic",
        "description": "The user generates odd sound waves from\nits body that confuse the target.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 20
    },
    {
        "id": "049",
        "name": "Sonic Boom",
        "description": "The target is hit with a destructive shock\nwave that always inflicts 20 HP damage.",
        "type": "normal",
        "category": "special",
        "power": null,
        "accuracy": 90,
        "pp": 20
    },
    {
        "id": "050",
        "name": "Disable",
        "description": "For four turns, this move prevents the\ntarget from using the move it last used.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "051",
        "name": "Acid",
        "description": "The opposing Pok\u00e9mon are attacked\nwith a spray of harsh acid. This may\nalso lower their Sp. Def stats.",
        "type": "poison",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "052",
        "name": "Ember",
        "description": "The target is attacked with small flames.\nThis may also leave the target with a burn.",
        "type": "fire",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "053",
        "name": "Flamethrower",
        "description": "The target is scorched with an intense\nblast of fire. This may also leave the target\nwith a burn.",
        "type": "fire",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "054",
        "name": "Mist",
        "description": "The user cloaks itself and its allies in a\nwhite mist that prevents any of their stats\nfrom being lowered for five turns.",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "055",
        "name": "Water Gun",
        "description": "The target is blasted with a\nforceful shot of water.",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "056",
        "name": "Hydro Pump",
        "description": "The target is blasted by a huge volume\nof water launched under great pressure.",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 80,
        "pp": 5
    },
    {
        "id": "057",
        "name": "Surf",
        "description": "The user attacks everything around it by\nswamping its surroundings with a giant wave.\nThis can also be used for crossing water.",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "058",
        "name": "Ice Beam",
        "description": "The target is struck with an icy-cold\nbeam of energy.\nThis may also leave the target frozen.",
        "type": "ice",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "059",
        "name": "Blizzard",
        "description": "A howling blizzard is summoned to strike\nopposing Pok\u00e9mon. This may also leave\nthe opposing Pok\u00e9mon frozen.",
        "type": "ice",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 5
    },
    {
        "id": "060",
        "name": "Psybeam",
        "description": "The target is attacked with a peculiar ray.\nThis may also leave the target confused.",
        "type": "psychic",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "061",
        "name": "Bubble Beam",
        "description": "A spray of bubbles is forcefully ejected\nat the target. This may also lower\nits Speed stat.",
        "type": "water",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "062",
        "name": "Aurora Beam",
        "description": "The target is hit with a rainbow-colored\nbeam. This may also lower the target\u2019s\nAttack stat.",
        "type": "ice",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "063",
        "name": "Hyper Beam",
        "description": "The target is attacked with a powerful\nbeam. The user can\u2019t move on the next turn.",
        "type": "normal",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "064",
        "name": "Peck",
        "description": "The target is jabbed with a sharply\npointed beak or horn.",
        "type": "flying",
        "category": "physical",
        "power": 35,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "065",
        "name": "Drill Peck",
        "description": "A corkscrewing attack with a\nsharp beak acting as a drill.",
        "type": "flying",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "066",
        "name": "Submission",
        "description": "The user grabs the target and recklessly\ndives for the ground. This also damages\nthe user a little.",
        "type": "fighting",
        "category": "physical",
        "power": 80,
        "accuracy": 80,
        "pp": 20
    },
    {
        "id": "067",
        "name": "Low Kick",
        "description": "A powerful low kick that makes the target\nfall over. The heavier the target,\nthe greater the move\u2019s power.",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "068",
        "name": "Counter",
        "description": "A retaliation move that counters any\nphysical attack, inflicting double the\ndamage taken.",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "069",
        "name": "Seismic Toss",
        "description": "The target is thrown using the power of\ngravity. It inflicts damage equal to\nthe user\u2019s level.",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "070",
        "name": "Strength",
        "description": "The target is slugged with a punch thrown\nat maximum power. This can also be used\nto move heavy boulders.",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "071",
        "name": "Absorb",
        "description": "A nutrient-draining attack. The user\u2019s\nHP is restored by half the damage taken\nby the target.",
        "type": "grass",
        "category": "special",
        "power": 20,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "072",
        "name": "Mega Drain",
        "description": "A nutrient-draining attack. The user\u2019s\nHP is restored by half the damage taken\nby the target.",
        "type": "grass",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "073",
        "name": "Leech Seed",
        "description": "A seed is planted on the target. It steals\nsome HP from the target every turn.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "074",
        "name": "Growth",
        "description": "The user\u2019s body grows all at once,\nraising the Attack and Sp. Atk stats.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "075",
        "name": "Razor Leaf",
        "description": "Sharp-edged leaves are launched\nto slash at the opposing Pok\u00e9mon.\nCritical hits land more easily.",
        "type": "grass",
        "category": "physical",
        "power": 55,
        "accuracy": 95,
        "pp": 25
    },
    {
        "id": "076",
        "name": "Solar Beam",
        "description": "A two-turn attack. The user gathers\nlight, then blasts a bundled beam on the\nnext turn.",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "077",
        "name": "Poison Powder",
        "description": "The user scatters a cloud of poisonous\ndust on the target. This may also poison\nthe target.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 35
    },
    {
        "id": "078",
        "name": "Stun Spore",
        "description": "The user scatters a cloud of numbing\npowder that paralyzes the target.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 30
    },
    {
        "id": "079",
        "name": "Sleep Powder",
        "description": "The user scatters a big cloud\nof sleep-inducing dust\naround the target.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 15
    },
    {
        "id": "080",
        "name": "Petal Dance",
        "description": "The user attacks the target by scattering\npetals for two to three turns.\nThe user then becomes confused.",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "081",
        "name": "String Shot",
        "description": "The opposing Pok\u00e9mon are bound\nwith silk blown from the user\u2019s mouth\nthat harshly lowers the Speed stat.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": 95,
        "pp": 40
    },
    {
        "id": "082",
        "name": "Dragon Rage",
        "description": "This attack hits the target with a shock\nwave of pure rage. This attack always\ninflicts 40 HP damage.",
        "type": "dragon",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "083",
        "name": "Fire Spin",
        "description": "The target becomes trapped within a\nfierce vortex of fire that rages for four\nto five turns.",
        "type": "fire",
        "category": "special",
        "power": 35,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "084",
        "name": "Thunder Shock",
        "description": "A jolt of electricity crashes down on\nthe target to inflict damage. This may\nalso leave the target with paralysis.",
        "type": "electric",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "085",
        "name": "Thunderbolt",
        "description": "A strong electric blast crashes down on the\ntarget. This may also leave the target\nwith paralysis.",
        "type": "electric",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "086",
        "name": "Thunder Wave",
        "description": "The user launches a weak jolt\nof electricity that paralyzes the target.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 20
    },
    {
        "id": "087",
        "name": "Thunder",
        "description": "A wicked thunderbolt is dropped\non the target to inflict damage.\nThis may also leave the target with paralysis.",
        "type": "electric",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10
    },
    {
        "id": "088",
        "name": "Rock Throw",
        "description": "The user picks up and throws a small\nrock at the target to attack.",
        "type": "rock",
        "category": "physical",
        "power": 50,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "089",
        "name": "Earthquake",
        "description": "The user sets off an earthquake that\nstrikes every Pok\u00e9mon around it.\n",
        "type": "ground",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "090",
        "name": "Fissure",
        "description": "The user opens up a fissure in the ground\nand drops the target in.\nThe target faints instantly if this attack hits.",
        "type": "ground",
        "category": "physical",
        "power": null,
        "accuracy": 30,
        "pp": 5
    },
    {
        "id": "091",
        "name": "Dig",
        "description": "The user burrows, then attacks\non the next turn.\nIt can also be used to exit dungeons.",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "092",
        "name": "Toxic",
        "description": "A move that leaves the target\nbadly poisoned.\nIts poison damage worsens every turn.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "093",
        "name": "Confusion",
        "description": "The target is hit by a weak telekinetic\nforce. This may also confuse the target.",
        "type": "psychic",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "094",
        "name": "Psychic",
        "description": "The target is hit by a strong telekinetic\nforce. This may also lower the target\u2019s\nSp. Def stat.",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "095",
        "name": "Hypnosis",
        "description": "The user employs hypnotic suggestion\nto make the target fall into a deep sleep.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": 60,
        "pp": 20
    },
    {
        "id": "096",
        "name": "Meditate",
        "description": "The user meditates to awaken the power\ndeep within its body and raise its\nAttack stat.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "097",
        "name": "Agility",
        "description": "The user relaxes and lightens its body to\nmove faster. This sharply raises the Speed stat.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "098",
        "name": "Quick Attack",
        "description": "The user lunges at the target at a speed\nthat makes it almost invisible.\nThis move always goes first.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "099",
        "name": "Rage",
        "description": "As long as this move is in use, the power\nof rage raises the Attack stat each\ntime the user is hit in battle.",
        "type": "normal",
        "category": "physical",
        "power": 20,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "100",
        "name": "Teleport",
        "description": "Use it to flee from any wild Pok\u00e9mon.\nIt can also warp to the last Pok\u00e9mon\nCenter visited.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "101",
        "name": "Night Shade",
        "description": "The user makes the target see a\nfrightening mirage. It inflicts damage\nequal to the user\u2019s level.",
        "type": "ghost",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "102",
        "name": "Mimic",
        "description": "The user copies the target\u2019s last move.\nThe move can be used during battle\nuntil the Pok\u00e9mon is switched out.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "103",
        "name": "Screech",
        "description": "An earsplitting screech harshly lowers\nthe target\u2019s Defense stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 85,
        "pp": 40
    },
    {
        "id": "104",
        "name": "Double Team",
        "description": "By moving rapidly, the user makes illusory\ncopies of itself to raise its evasiveness.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "105",
        "name": "Recover",
        "description": "Restoring its own cells, the user\nrestores its own HP by half of\nits max HP.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "106",
        "name": "Harden",
        "description": "The user stiffens all the muscles in its\nbody to raise its Defense stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "107",
        "name": "Minimize",
        "description": "The user compresses its body\nto make itself look smaller,\nwhich sharply raises its evasiveness.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "108",
        "name": "Smokescreen",
        "description": "The user releases an obscuring cloud\nof smoke or ink. This lowers the\ntarget\u2019s accuracy.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "109",
        "name": "Confuse Ray",
        "description": "The target is exposed to a sinister\nray that triggers confusion.",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "110",
        "name": "Withdraw",
        "description": "The user withdraws its body into its hard\nshell, raising its Defense stat.",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "111",
        "name": "Defense Curl",
        "description": "The user curls up to conceal weak spots\nand raise its Defense stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "112",
        "name": "Barrier",
        "description": "The user throws up a sturdy wall that\nsharply raises its Defense stat.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "113",
        "name": "Light Screen",
        "description": "A wondrous wall of light is put up to\nreduce damage from special attacks\nfor five turns.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "114",
        "name": "Haze",
        "description": "The user creates a haze that eliminates\nevery stat change among all the Pok\u00e9mon\nengaged in battle.",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "115",
        "name": "Reflect",
        "description": "A wondrous wall of light is put up to\nreduce damage from physical attacks\nfor five turns.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "116",
        "name": "Focus Energy",
        "description": "The user takes a deep breath and\nfocuses so that critical hits land\nmore easily.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "117",
        "name": "Bide",
        "description": "The user endures attacks for two\nturns, then strikes back to cause\ndouble the damage taken.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "118",
        "name": "Metronome",
        "description": "The user waggles a finger and stimulates\nits brain into randomly using nearly\nany move.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "119",
        "name": "Mirror Move",
        "description": "The user counters the target by mimicking\nthe target\u2019s last move.",
        "type": "flying",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "120",
        "name": "Self-Destruct",
        "description": "The user attacks everything around it\nby causing an explosion.\nThe user faints upon using this move.",
        "type": "normal",
        "category": "physical",
        "power": 200,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "121",
        "name": "Egg Bomb",
        "description": "A large egg is hurled at the target\nwith maximum force to inflict damage.",
        "type": "normal",
        "category": "physical",
        "power": 100,
        "accuracy": 75,
        "pp": 10
    },
    {
        "id": "122",
        "name": "Lick",
        "description": "The target is licked with a long tongue,\ncausing damage. This may also leave\nthe target with paralysis.",
        "type": "ghost",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "123",
        "name": "Smog",
        "description": "The target is attacked with a\ndischarge of filthy gases.\nThis may also poison the target.",
        "type": "poison",
        "category": "special",
        "power": 30,
        "accuracy": 70,
        "pp": 20
    },
    {
        "id": "124",
        "name": "Sludge",
        "description": "Unsanitary sludge is hurled at the target.\nThis may also poison the target.",
        "type": "poison",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "125",
        "name": "Bone Club",
        "description": "The user clubs the target with a bone.\nThis may also make the target flinch.",
        "type": "ground",
        "category": "physical",
        "power": 65,
        "accuracy": 85,
        "pp": 20
    },
    {
        "id": "126",
        "name": "Fire Blast",
        "description": "The target is attacked with an intense\nblast of all-consuming fire.\nThis may also leave the target with a burn.",
        "type": "fire",
        "category": "special",
        "power": 110,
        "accuracy": 85,
        "pp": 5
    },
    {
        "id": "127",
        "name": "Waterfall",
        "description": "The user charges at the target and may make it\nflinch. This can also be used to climb a waterfall.",
        "type": "water",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "128",
        "name": "Clamp",
        "description": "The target is clamped and squeezed by\nthe user\u2019s very thick and sturdy shell for\nfour to five turns.",
        "type": "water",
        "category": "physical",
        "power": 35,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "129",
        "name": "Swift",
        "description": "Star-shaped rays are shot at the opposing\nPok\u00e9mon. This attack never misses.",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "130",
        "name": "Skull Bash",
        "description": "The user tucks in its head to raise its\nDefense in the first turn, then\nrams the target on the next turn.",
        "type": "normal",
        "category": "physical",
        "power": 130,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "131",
        "name": "Spike Cannon",
        "description": "Sharp spikes are shot at the target\nin rapid succession.\nThey hit two to five times in a row.",
        "type": "normal",
        "category": "physical",
        "power": 20,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "132",
        "name": "Constrict",
        "description": "The target is attacked with long, creeping\ntentacles or vines.\nThis may also lower the target\u2019s Speed stat.",
        "type": "normal",
        "category": "physical",
        "power": 10,
        "accuracy": 100,
        "pp": 35
    },
    {
        "id": "133",
        "name": "Amnesia",
        "description": "The user temporarily empties its mind to\nforget its concerns.\nThis sharply raises the user\u2019s Sp. Def stat.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "134",
        "name": "Kinesis",
        "description": "The user distracts the target\nby bending a spoon.\nThis lowers the target\u2019s accuracy.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": 80,
        "pp": 15
    },
    {
        "id": "135",
        "name": "Soft-Boiled",
        "description": "The user restores its own HP\nby up to half of its max HP.\nMay also be used in the field to heal HP.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "136",
        "name": "High Jump Kick",
        "description": "The target is attacked with a knee kick\nfrom a jump. If it misses, the user is\nhurt instead.",
        "type": "fighting",
        "category": "physical",
        "power": 130,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "137",
        "name": "Glare",
        "description": "The user intimidates the target with the\npattern on its belly to cause paralysis.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "138",
        "name": "Dream Eater",
        "description": "The user eats the dreams of a sleeping\ntarget. It absorbs half the damage\ncaused to heal its own HP.",
        "type": "psychic",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "139",
        "name": "Poison Gas",
        "description": "A cloud of poison gas is sprayed\nin the face of opposing Pok\u00e9mon.\nThis may also poison those hit.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 90,
        "pp": 40
    },
    {
        "id": "140",
        "name": "Barrage",
        "description": "Round objects are hurled at the target\nto strike two to five times in a row.",
        "type": "normal",
        "category": "physical",
        "power": 15,
        "accuracy": 85,
        "pp": 20
    },
    {
        "id": "141",
        "name": "Leech Life",
        "description": "The user drains the target\u2019s blood.\nThe user\u2019s HP is restored by half the\ndamage taken by the target.",
        "type": "bug",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "142",
        "name": "Lovely Kiss",
        "description": "With a scary face, the user tries to\nforce a kiss on the target. If it\nsucceeds, the target falls asleep.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 10
    },
    {
        "id": "143",
        "name": "Sky Attack",
        "description": "A second-turn attack move where\ncritical hits land more easily.\nThis may also make the target flinch.",
        "type": "flying",
        "category": "physical",
        "power": 140,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "144",
        "name": "Transform",
        "description": "The user transforms into a copy of the\ntarget right down to having\nthe same move set.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "145",
        "name": "Bubble",
        "description": "A spray of countless bubbles is jetted at\nthe opposing Pok\u00e9mon.\nThis may also lower their Speed stats.",
        "type": "water",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "146",
        "name": "Dizzy Punch",
        "description": "The target is hit with rhythmically\nlaunched punches. This may also\nleave the target confused.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "147",
        "name": "Spore",
        "description": "The user scatters bursts of spores\nthat induce sleep.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "148",
        "name": "Flash",
        "description": "The user flashes a bright light that cuts\nthe target\u2019s accuracy.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "149",
        "name": "Psywave",
        "description": "The target is attacked with an odd\npsychic wave.\nThe attack varies in intensity.",
        "type": "psychic",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "150",
        "name": "Splash",
        "description": "The user just flops and splashes around\nto no effect at all...",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "151",
        "name": "Acid Armor",
        "description": "The user alters its cellular structure to\nliquefy itself, sharply raising its\nDefense stat.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "152",
        "name": "Crabhammer",
        "description": "The target is hammered with a large pincer.\nCritical hits land more easily.",
        "type": "water",
        "category": "physical",
        "power": 100,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "153",
        "name": "Explosion",
        "description": "The user attacks everything around it\nby causing a tremendous explosion.\nThe user faints upon using this move.",
        "type": "normal",
        "category": "physical",
        "power": 250,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "154",
        "name": "Fury Swipes",
        "description": "The target is raked with sharp claws or\nscythes quickly two to five times in a row.",
        "type": "normal",
        "category": "physical",
        "power": 18,
        "accuracy": 80,
        "pp": 15
    },
    {
        "id": "155",
        "name": "Bonemerang",
        "description": "The user throws the bone it holds. The\nbone loops to hit the target twice,\ncoming and going.",
        "type": "ground",
        "category": "physical",
        "power": 50,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "156",
        "name": "Rest",
        "description": "The user goes to sleep for two turns.\nThis fully restores the user\u2019s HP and\nheals any status conditions.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "157",
        "name": "Rock Slide",
        "description": "Large boulders are hurled at the opposing\nPok\u00e9mon to inflict damage. This may also make\nthe opposing Pok\u00e9mon flinch.",
        "type": "rock",
        "category": "physical",
        "power": 75,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "158",
        "name": "Hyper Fang",
        "description": "The user bites hard on the target\nwith its sharp front fangs.\nThis may also make the target flinch.",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "159",
        "name": "Sharpen",
        "description": "The user lowers its polygon count to\nmake itself more jagged, raising the\nAttack stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "160",
        "name": "Conversion",
        "description": "The user changes its type to become the\nsame type as the move at the top of the\nlist of moves it knows.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "161",
        "name": "Tri Attack",
        "description": "The user strikes with a simultaneous\nthree-beam attack. May also burn, freeze,\nor leave the target with paralysis.",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "162",
        "name": "Super Fang",
        "description": "The user chomps hard on the\ntarget with its sharp front fangs.\nThis cuts the target\u2019s HP in half.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "163",
        "name": "Slash",
        "description": "The target is attacked with a slash\nof claws or blades.\nCritical hits land more easily.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "164",
        "name": "Substitute",
        "description": "The user makes a copy of itself using\nsome of its HP.\nThe copy serves as the user\u2019s decoy.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "165",
        "name": "Struggle",
        "description": "An attack that is used in desperation\nonly if the user has no PP. This also\ndamages the user a little.",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "166",
        "name": "Sketch",
        "description": "It enables the user to permanently learn\nthe move last used by the target.\nOnce used, Sketch disappears.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "167",
        "name": "Triple Kick",
        "description": "A consecutive three-kick attack that\nbecomes more powerful with each\nsuccessive hit.",
        "type": "fighting",
        "category": "physical",
        "power": 10,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "168",
        "name": "Thief",
        "description": "The user attacks and steals the target\u2019s\nheld item simultaneously. The user can\u2019t\nsteal anything if it already holds an item.",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "169",
        "name": "Spider Web",
        "description": "The user ensnares the target with thin,\ngooey silk so it can\u2019t flee from battle.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "170",
        "name": "Mind Reader",
        "description": "The user senses the target\u2019s movements\nwith its mind to ensure its next\nattack does not miss the target.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "171",
        "name": "Nightmare",
        "description": "A sleeping target sees a nightmare\nthat inflicts some damage every turn.",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "172",
        "name": "Flame Wheel",
        "description": "The user cloaks itself in fire and\ncharges at the target.\nThis may also leave the target with a burn.",
        "type": "fire",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "173",
        "name": "Snore",
        "description": "An attack that can be used only if the\nuser is asleep. The harsh noise may also\nmake the target flinch.",
        "type": "normal",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "174",
        "name": "Curse",
        "description": "A move that works differently for the\nGhost type than for all other types.",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "175",
        "name": "Flail",
        "description": "The user flails about aimlessly to attack.\nThe less HP the user has,\nthe greater the move\u2019s power.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "176",
        "name": "Conversion 2",
        "description": "The user changes its type to make itself\nresistant to the type of the attack the\nopponent used last.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "177",
        "name": "Aeroblast",
        "description": "A vortex of air is shot at the target to\ninflict damage.\nCritical hits land more easily.",
        "type": "flying",
        "category": "special",
        "power": 100,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "178",
        "name": "Cotton Spore",
        "description": "The user releases cotton-like spores\nthat cling to the opposing Pok\u00e9mon,\nwhich harshly lowers their Speed stats.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "179",
        "name": "Reversal",
        "description": "An all-out attack that becomes more\npowerful the less HP the user has.",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "180",
        "name": "Spite",
        "description": "The user unleashes its grudge on the move\nlast used by the target by cutting 4 PP\nfrom it.",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "181",
        "name": "Powder Snow",
        "description": "The user attacks with a chilling gust\nof powdery snow.\nThis may also freeze the opposing Pok\u00e9mon.",
        "type": "ice",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "182",
        "name": "Protect",
        "description": "Enables the user to evade all attacks.\nIts chance of failing rises if it is used\nin succession.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "183",
        "name": "Mach Punch",
        "description": "The user throws a punch at blinding\nspeed. This move always goes first.",
        "type": "fighting",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "184",
        "name": "Scary Face",
        "description": "The user frightens the target with a scary\nface to harshly lower its Speed stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "185",
        "name": "Feint Attack",
        "description": "The user approaches the target\ndisarmingly, then throws a sucker punch.\nThis attack never misses.",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "186",
        "name": "Sweet Kiss",
        "description": "The user kisses the target with a sweet,\nangelic cuteness that causes confusion.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": 75,
        "pp": 10
    },
    {
        "id": "187",
        "name": "Belly Drum",
        "description": "The user maximizes its Attack stat in\nexchange for HP equal to half its max HP.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "188",
        "name": "Sludge Bomb",
        "description": "Unsanitary sludge is hurled at the target.\nThis may also poison the target.",
        "type": "poison",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "189",
        "name": "Mud-Slap",
        "description": "The user hurls mud in the target\u2019s face to\ninflict damage and lower its accuracy.",
        "type": "ground",
        "category": "special",
        "power": 20,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "190",
        "name": "Octazooka",
        "description": "The user attacks by spraying ink in the\ntarget\u2019s face or eyes.\nThis may also lower the target\u2019s accuracy.",
        "type": "water",
        "category": "special",
        "power": 65,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "191",
        "name": "Spikes",
        "description": "The user lays a trap of spikes at the\nopposing team\u2019s feet. The trap hurts\nPok\u00e9mon that switch into battle.",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "192",
        "name": "Zap Cannon",
        "description": "The user fires an electric blast like a\ncannon to inflict damage and\ncause paralysis.",
        "type": "electric",
        "category": "special",
        "power": 120,
        "accuracy": 50,
        "pp": 5
    },
    {
        "id": "193",
        "name": "Foresight",
        "description": "Enables a Ghost-type target to be hit by\nNormal- and Fighting-type attacks. This also\nenables an evasive target to be hit.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "194",
        "name": "Destiny Bond",
        "description": "When this move is used, if the user faints,\nthe Pok\u00e9mon that landed the knockout\nhit also faints.",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "195",
        "name": "Perish Song",
        "description": "Any Pok\u00e9mon that hears this song\nfaints in three turns, unless it switches\nout of battle.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "196",
        "name": "Icy Wind",
        "description": "The user attacks with a gust of chilled air.\nThis also lowers the opposing Pok\u00e9mon\u2019s\nSpeed stats.",
        "type": "ice",
        "category": "special",
        "power": 55,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "197",
        "name": "Detect",
        "description": "Enables the user to evade all attacks.\nIts chance of failing rises if it is used\nin succession.",
        "type": "fighting",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "198",
        "name": "Bone Rush",
        "description": "The user strikes the target with a hard\nbone two to five times in a row.",
        "type": "ground",
        "category": "physical",
        "power": 25,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "199",
        "name": "Lock-On",
        "description": "The user takes sure aim at the target.\nThis ensures the next attack does not\nmiss the target.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "200",
        "name": "Outrage",
        "description": "The user rampages and attacks for two\nto three turns.\nThe user then becomes confused.",
        "type": "dragon",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "201",
        "name": "Sandstorm",
        "description": "A five-turn sandstorm is summoned\nto hurt all combatants except the\nRock, Ground, and Steel types.",
        "type": "rock",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "202",
        "name": "Giga Drain",
        "description": "A nutrient-draining attack. The user\u2019s\nHP is restored by half the damage\ntaken by the target.",
        "type": "grass",
        "category": "special",
        "power": 75,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "203",
        "name": "Endure",
        "description": "The user endures any attack with at least\n1 HP. Its chance of failing rises if it is\nused in succession.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "204",
        "name": "Charm",
        "description": "The user gazes at the target rather\ncharmingly, making it less wary.\nThis harshly lowers its Attack stat.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "205",
        "name": "Rollout",
        "description": "The user continually rolls into the target\nover five turns. It becomes more powerful\neach time it hits.",
        "type": "rock",
        "category": "physical",
        "power": 30,
        "accuracy": 90,
        "pp": 20
    },
    {
        "id": "206",
        "name": "False Swipe",
        "description": "A restrained attack that prevents the\ntarget from fainting.\nThe target is left with at least 1 HP.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "207",
        "name": "Swagger",
        "description": "The user enrages and confuses the target.\nHowever, this also sharply raises the\ntarget\u2019s Attack stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "208",
        "name": "Milk Drink",
        "description": "The user restores its own HP\nby up to half of its max HP.\nMay also be used in the field to heal HP.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "209",
        "name": "Spark",
        "description": "The user throws an electrically charged\ntackle at the target. This may also leave\nthe target with paralysis.",
        "type": "electric",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "210",
        "name": "Fury Cutter",
        "description": "The target is slashed with scythes or\nclaws. This attack becomes more powerful\nif it hits in succession.",
        "type": "bug",
        "category": "physical",
        "power": 40,
        "accuracy": 95,
        "pp": 20
    },
    {
        "id": "211",
        "name": "Steel Wing",
        "description": "The target is hit with wings of steel.\nThis may also raise the user\u2019s Defense stat.",
        "type": "steel",
        "category": "physical",
        "power": 70,
        "accuracy": 90,
        "pp": 25
    },
    {
        "id": "212",
        "name": "Mean Look",
        "description": "The user pins the target with a dark,\narresting look.\nThe target becomes unable to flee.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "213",
        "name": "Attract",
        "description": "If it is the opposite gender of the user,\nthe target becomes infatuated and less\nlikely to attack.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "214",
        "name": "Sleep Talk",
        "description": "While it is asleep, the user randomly uses\none of the moves it knows.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "215",
        "name": "Heal Bell",
        "description": "The user makes a soothing bell chime\nto heal the status conditions of all the\nparty Pok\u00e9mon.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "216",
        "name": "Return",
        "description": "A full-power attack that grows more\npowerful the more the user likes\nits Trainer.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "217",
        "name": "Present",
        "description": "The user attacks by giving the target a\ngift with a hidden trap. It restores\nHP sometimes, however.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "218",
        "name": "Frustration",
        "description": "A full-power attack that grows more\npowerful the less the user likes\nits Trainer.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "219",
        "name": "Safeguard",
        "description": "The user creates a protective field\nthat prevents status conditions\nfor five turns.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 25
    },
    {
        "id": "220",
        "name": "Pain Split",
        "description": "The user adds its HP to the target\u2019s HP,\nthen equally shares the combined HP\nwith the target.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "221",
        "name": "Sacred Fire",
        "description": "The target is razed with a mystical fire\nof great intensity. This may also leave the\ntarget with a burn.",
        "type": "fire",
        "category": "physical",
        "power": 100,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "222",
        "name": "Magnitude",
        "description": "The user attacks everything around it\nwith a ground-shaking quake.\nIts power varies.",
        "type": "ground",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "223",
        "name": "Dynamic Punch",
        "description": "The user punches the target with full,\nconcentrated power.\nThis confuses the target if it hits.",
        "type": "fighting",
        "category": "physical",
        "power": 100,
        "accuracy": 50,
        "pp": 5
    },
    {
        "id": "224",
        "name": "Megahorn",
        "description": "Using its tough and impressive horn,\nthe user rams into the target\nwith no letup.",
        "type": "bug",
        "category": "physical",
        "power": 120,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "225",
        "name": "Dragon Breath",
        "description": "The user exhales a mighty gust that\ninflicts damage. This may also leave the\ntarget with paralysis.",
        "type": "dragon",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "226",
        "name": "Baton Pass",
        "description": "The user switches places with a party\nPok\u00e9mon in waiting and passes along\nany stat changes.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "227",
        "name": "Encore",
        "description": "The user compels the target\nto keep using only the move\nit last used for three turns.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "228",
        "name": "Pursuit",
        "description": "An attack move that inflicts double damage\nif used on a target that is switching out\nof battle.",
        "type": "dark",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "229",
        "name": "Rapid Spin",
        "description": "A spin attack that can also eliminate\nsuch moves as Bind, Wrap, Leech Seed,\nand Spikes.",
        "type": "normal",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "230",
        "name": "Sweet Scent",
        "description": "A sweet scent that harshly lowers opposing\nPok\u00e9mon\u2019s evasiveness. This also lures wild\nPok\u00e9mon if used in places such as tall grass.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "231",
        "name": "Iron Tail",
        "description": "The target is slammed with a steel-hard\ntail. This may also lower the target\u2019s\nDefense stat.",
        "type": "steel",
        "category": "physical",
        "power": 100,
        "accuracy": 75,
        "pp": 15
    },
    {
        "id": "232",
        "name": "Metal Claw",
        "description": "The target is raked with steel claws.\nThis may also raise the user\u2019s Attack stat.",
        "type": "steel",
        "category": "physical",
        "power": 50,
        "accuracy": 95,
        "pp": 35
    },
    {
        "id": "233",
        "name": "Vital Throw",
        "description": "The user attacks last. In return, this throw\nmove never misses.",
        "type": "fighting",
        "category": "physical",
        "power": 70,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "234",
        "name": "Morning Sun",
        "description": "The user restores its own HP.\nThe amount of HP regained varies\nwith the weather.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "235",
        "name": "Synthesis",
        "description": "The user restores its own HP.\nThe amount of HP regained varies\nwith the weather.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "236",
        "name": "Moonlight",
        "description": "The user restores its own HP.\nThe amount of HP regained varies\nwith the weather.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "237",
        "name": "Hidden Power",
        "description": "A unique attack that varies in type\ndepending on the Pok\u00e9mon using it.\n",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "238",
        "name": "Cross Chop",
        "description": "The user delivers a double chop with its\nforearms crossed.\nCritical hits land more easily.",
        "type": "fighting",
        "category": "physical",
        "power": 100,
        "accuracy": 80,
        "pp": 5
    },
    {
        "id": "239",
        "name": "Twister",
        "description": "The user whips up a vicious tornado\nto tear at the opposing Pok\u00e9mon.\nThis may also make them flinch.",
        "type": "dragon",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "240",
        "name": "Rain Dance",
        "description": "The user summons a heavy rain\nthat falls for five turns,\npowering up Water-type moves.",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "241",
        "name": "Sunny Day",
        "description": "The user intensifies the sun\nfor five turns, powering up\nFire-type moves.",
        "type": "fire",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "242",
        "name": "Crunch",
        "description": "The user crunches up the target\nwith sharp fangs. This may also lower\nthe target\u2019s Defense stat.",
        "type": "dark",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "243",
        "name": "Mirror Coat",
        "description": "A retaliation move that counters any\nspecial attack, inflicting double the\ndamage taken.",
        "type": "psychic",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "244",
        "name": "Psych Up",
        "description": "The user hypnotizes itself into\ncopying any stat change made\nby the target.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "245",
        "name": "Extreme Speed",
        "description": "The user charges the target at blinding\nspeed. This move always goes first.",
        "type": "normal",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "246",
        "name": "Ancient Power",
        "description": "The user attacks with a prehistoric power.\nThis may also raise all the user\u2019s stats\nat once.",
        "type": "rock",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "247",
        "name": "Shadow Ball",
        "description": "The user hurls a shadowy blob at the\ntarget. This may also lower the target\u2019s\nSp. Def stat.",
        "type": "ghost",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "248",
        "name": "Future Sight",
        "description": "Two turns after this move is used,\na hunk of psychic energy\nattacks the target.",
        "type": "psychic",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "249",
        "name": "Rock Smash",
        "description": "The user attacks with a punch.\nThis may also lower the target\u2019s Defense stat.\nThis move can also shatter rocks in the field.",
        "type": "fighting",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "250",
        "name": "Whirlpool",
        "description": "The user traps the target in a violent swirling\nwhirlpool for four to five turns.",
        "type": "water",
        "category": "special",
        "power": 35,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "251",
        "name": "Beat Up",
        "description": "The user gets all party Pok\u00e9mon to attack\nthe target. The more party Pok\u00e9mon,\nthe greater the number of attacks.",
        "type": "dark",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "252",
        "name": "Fake Out",
        "description": "An attack that hits first and makes the\ntarget flinch. It only works the first turn\nthe user is in battle.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "253",
        "name": "Uproar",
        "description": "The user attacks in an uproar for\nthree turns. During that time,\nno one can fall asleep.",
        "type": "normal",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "254",
        "name": "Stockpile",
        "description": "The user charges up power and raises\nboth its Defense and Sp. Def stats.\nThe move can be used three times.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "255",
        "name": "Spit Up",
        "description": "The power stored using the move Stockpile\nis released at once in an attack. The more\npower is stored, the greater the move\u2019s power.",
        "type": "normal",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "256",
        "name": "Swallow",
        "description": "The power stored using the move Stockpile\nis absorbed by the user to heal its HP.\nStoring more power heals more HP.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "257",
        "name": "Heat Wave",
        "description": "The user attacks by exhaling hot breath\non the opposing Pok\u00e9mon. This may also leave\nthose Pok\u00e9mon with a burn.",
        "type": "fire",
        "category": "special",
        "power": 95,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "258",
        "name": "Hail",
        "description": "The user summons a hailstorm lasting five\nturns. It damages all Pok\u00e9mon except the\nIce type.",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "259",
        "name": "Torment",
        "description": "The user torments and enrages the\ntarget, making it incapable of using\nthe same move twice in a row.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "260",
        "name": "Flatter",
        "description": "Flattery is used to confuse the target.\nHowever, this also raises the target\u2019s\nSp. Atk stat.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "261",
        "name": "Will-O-Wisp",
        "description": "The user shoots a sinister, bluish-white\nflame at the target to inflict a burn.",
        "type": "fire",
        "category": "status",
        "power": null,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "262",
        "name": "Memento",
        "description": "The user faints when using this move.\nIn return, this harshly lowers the target\u2019s\nAttack and Sp. Atk stats.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "263",
        "name": "Facade",
        "description": "An attack move that doubles its power if\nthe user is poisoned, burned, or\nhas paralysis.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "264",
        "name": "Focus Punch",
        "description": "The user focuses its mind before\nlaunching a punch. This move fails\nif the user is hit before it is used.",
        "type": "fighting",
        "category": "physical",
        "power": 150,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "265",
        "name": "Smelling Salts",
        "description": "This attack inflicts double damage on a\ntarget with paralysis. This also cures the\ntarget\u2019s paralysis, however.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "266",
        "name": "Follow Me",
        "description": "The user draws attention to itself,\nmaking all targets take aim\nonly at the user.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "267",
        "name": "Nature Power",
        "description": "An attack that makes use of nature\u2019s\npower. Its effects vary depending on the\nuser\u2019s environment.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "268",
        "name": "Charge",
        "description": "The user boosts the power of the Electric\nmove it uses on the next turn. This also\nraises the user\u2019s Sp. Def stat.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "269",
        "name": "Taunt",
        "description": "The target is taunted into a rage that\nallows it to use only attack moves\nfor three turns.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "270",
        "name": "Helping Hand",
        "description": "The user assists an ally by boosting\nthe power of that ally\u2019s attack.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "271",
        "name": "Trick",
        "description": "The user catches the target off guard\nand swaps its held item with its own.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "272",
        "name": "Role Play",
        "description": "The user mimics the target completely,\ncopying the target\u2019s natural Ability.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "273",
        "name": "Wish",
        "description": "One turn after this move is used,\nthe target\u2019s HP is restored by\nhalf the user\u2019s max HP.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "274",
        "name": "Assist",
        "description": "The user hurriedly and randomly\nuses a move among those known\nby other Pok\u00e9mon in the party.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "275",
        "name": "Ingrain",
        "description": "The user lays roots that restore\nits HP on every turn. Because it is\nrooted, it can\u2019t switch out.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "276",
        "name": "Superpower",
        "description": "The user attacks the target with great\npower. However, this also lowers the\nuser\u2019s Attack and Defense stats.",
        "type": "fighting",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "277",
        "name": "Magic Coat",
        "description": "A barrier reflects back to the target\nmoves like Leech Seed and moves\nthat damage status.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "278",
        "name": "Recycle",
        "description": "The user recycles a held item that\nhas been used in battle so it can be\nused again.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "279",
        "name": "Revenge",
        "description": "An attack move that inflicts double the\ndamage if the user has been hurt by the\nopponent in the same turn.",
        "type": "fighting",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "280",
        "name": "Brick Break",
        "description": "The user attacks with a swift chop. It\ncan also break barriers, such as Light\nScreen and Reflect.",
        "type": "fighting",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "281",
        "name": "Yawn",
        "description": "The user lets loose a huge yawn that\nlulls the target into falling asleep\non the next turn.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "282",
        "name": "Knock Off",
        "description": "The user slaps down the target\u2019s held item, and\nthat item can\u2019t be used in that battle. The move\ndoes more damage if the target has a held item.",
        "type": "dark",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "283",
        "name": "Endeavor",
        "description": "An attack move that cuts down the\ntarget\u2019s HP to equal the user\u2019s HP.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "284",
        "name": "Eruption",
        "description": "The user attacks opposing Pok\u00e9mon with\nexplosive fury. The lower the user\u2019s HP,\nthe lower the move\u2019s power.",
        "type": "fire",
        "category": "special",
        "power": 150,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "285",
        "name": "Skill Swap",
        "description": "The user employs its psychic power to\nexchange Abilities with the target.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "286",
        "name": "Imprison",
        "description": "If opposing Pok\u00e9mon know any move\nalso known by the user,\nthey are prevented from using it.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "287",
        "name": "Refresh",
        "description": "The user rests to cure itself of a\npoisoning, burn, or paralysis.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "288",
        "name": "Grudge",
        "description": "If the user faints, the user\u2019s grudge\nfully depletes the PP of the opponent\u2019s\nmove that knocked it out.",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "289",
        "name": "Snatch",
        "description": "The user steals the effects of any attempts\nto use a healing or stat-changing move.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "290",
        "name": "Secret Power",
        "description": "The user attacks the target with a\nsecret power. Its additional effects vary\ndepending on the user\u2019s environment.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "291",
        "name": "Dive",
        "description": "Diving on the first turn, the user floats\nup and attacks on the next turn.",
        "type": "water",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "292",
        "name": "Arm Thrust",
        "description": "The user lets loose a flurry of open-palmed\narm thrusts that hit two to five times in\na row.",
        "type": "fighting",
        "category": "physical",
        "power": 15,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "293",
        "name": "Camouflage",
        "description": "The user\u2019s type is changed depending on\nits environment, such as at water\u2019s edge,\nin grass, or in a cave.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "294",
        "name": "Tail Glow",
        "description": "The user stares at flashing lights to\nfocus its mind, drastically raising its\nSp. Atk stat.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "295",
        "name": "Luster Purge",
        "description": "The user lets loose a damaging burst\nof light. This may also lower the target\u2019s\nSp. Def stat.",
        "type": "psychic",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "296",
        "name": "Mist Ball",
        "description": "A mist-like flurry of down envelops and\ndamages the target. This may also lower\nthe target\u2019s Sp. Atk stat.",
        "type": "psychic",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "297",
        "name": "Feather Dance",
        "description": "The user covers the target\u2019s body with a\nmass of down that harshly lowers its\nAttack stat.",
        "type": "flying",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "298",
        "name": "Teeter Dance",
        "description": "The user performs a wobbly dance that\nconfuses the Pok\u00e9mon around it.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "299",
        "name": "Blaze Kick",
        "description": "The user launches a kick that lands a\ncritical hit more easily.\nThis may also leave the target with a burn.",
        "type": "fire",
        "category": "physical",
        "power": 85,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "300",
        "name": "Mud Sport",
        "description": "The user covers itself with mud.\nThis weakens Electric-type moves\nfor five turns.",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "301",
        "name": "Ice Ball",
        "description": "The user continually rolls into the target\nover five turns. It becomes stronger\neach time it hits.",
        "type": "ice",
        "category": "physical",
        "power": 30,
        "accuracy": 90,
        "pp": 20
    },
    {
        "id": "302",
        "name": "Needle Arm",
        "description": "The user attacks by wildly swinging its\nthorny arms. This may also make the\ntarget flinch.",
        "type": "grass",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "303",
        "name": "Slack Off",
        "description": "The user slacks off, restoring its own HP\nby up to half of its max HP.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "304",
        "name": "Hyper Voice",
        "description": "The user lets loose a horribly echoing\nshout with the power to inflict damage.",
        "type": "normal",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "305",
        "name": "Poison Fang",
        "description": "The user bites the target with toxic\nfangs. This may also leave the target\nbadly poisoned.",
        "type": "poison",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "306",
        "name": "Crush Claw",
        "description": "The user slashes the target with hard\nand sharp claws. This may also lower\nthe target\u2019s Defense stat.",
        "type": "normal",
        "category": "physical",
        "power": 75,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "307",
        "name": "Blast Burn",
        "description": "The target is razed by a fiery explosion.\nThe user can\u2019t move on the next turn.",
        "type": "fire",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "308",
        "name": "Hydro Cannon",
        "description": "The target is hit with a watery blast.\nThe user can\u2019t move on the next turn.",
        "type": "water",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "309",
        "name": "Meteor Mash",
        "description": "The target is hit with a hard punch fired\nlike a meteor. This may also raise\nthe user\u2019s Attack stat.",
        "type": "steel",
        "category": "physical",
        "power": 90,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "310",
        "name": "Astonish",
        "description": "The user attacks the target while shouting\nin a startling fashion.\nThis may also make the target flinch.",
        "type": "ghost",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "311",
        "name": "Weather Ball",
        "description": "An attack move that varies in power and\ntype depending on the weather.",
        "type": "normal",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "312",
        "name": "Aromatherapy",
        "description": "The user releases a soothing scent that\nheals all status conditions affecting\nthe user\u2019s party.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "313",
        "name": "Fake Tears",
        "description": "The user feigns crying to fluster\nthe target, harshly lowering its\nSp. Def stat.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "314",
        "name": "Air Cutter",
        "description": "The user launches razor-like wind\nto slash the opposing Pok\u00e9mon.\nCritical hits land more easily.",
        "type": "flying",
        "category": "special",
        "power": 60,
        "accuracy": 95,
        "pp": 25
    },
    {
        "id": "315",
        "name": "Overheat",
        "description": "The user attacks the target at full power.\nThe attack\u2019s recoil harshly lowers the\nuser\u2019s Sp. Atk stat.",
        "type": "fire",
        "category": "special",
        "power": 130,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "316",
        "name": "Odor Sleuth",
        "description": "Enables a Ghost-type target to be hit by\nNormal- and Fighting-type attacks. This also\nenables an evasive target to be hit.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "317",
        "name": "Rock Tomb",
        "description": "Boulders are hurled at the target. This also\nlowers the target\u2019s Speed stat by preventing\nits movement.",
        "type": "rock",
        "category": "physical",
        "power": 60,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "318",
        "name": "Silver Wind",
        "description": "The target is attacked with powdery\nscales blown by wind.\nThis may also raise all the user\u2019s stats.",
        "type": "bug",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "319",
        "name": "Metal Sound",
        "description": "A horrible sound like scraping metal\nharshly lowers the target\u2019s\nSp. Def stat.",
        "type": "steel",
        "category": "status",
        "power": null,
        "accuracy": 85,
        "pp": 40
    },
    {
        "id": "320",
        "name": "Grass Whistle",
        "description": "The user plays a pleasant melody that\nlulls the target into a deep sleep.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 55,
        "pp": 15
    },
    {
        "id": "321",
        "name": "Tickle",
        "description": "The user tickles the target into laughing,\nreducing its Attack and Defense stats.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "322",
        "name": "Cosmic Power",
        "description": "The user absorbs a mystical power from\nspace to raise its Defense and\nSp. Def stats.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "323",
        "name": "Water Spout",
        "description": "The user spouts water to damage opposing\nPok\u00e9mon. The lower the user\u2019s HP,\nthe lower the move\u2019s power.",
        "type": "water",
        "category": "special",
        "power": 150,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "324",
        "name": "Signal Beam",
        "description": "The user attacks with a sinister beam of\nlight. This may also confuse the target.",
        "type": "bug",
        "category": "special",
        "power": 75,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "325",
        "name": "Shadow Punch",
        "description": "The user throws a punch from the shadows.\nThis attack never misses.",
        "type": "ghost",
        "category": "physical",
        "power": 60,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "326",
        "name": "Extrasensory",
        "description": "The user attacks with an odd,\nunseeable power.\nThis may also make the target flinch.",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "327",
        "name": "Sky Uppercut",
        "description": "The user attacks the target with an\nuppercut thrown skyward with force.",
        "type": "fighting",
        "category": "physical",
        "power": 85,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "328",
        "name": "Sand Tomb",
        "description": "The user traps the target inside a harshly\nraging sandstorm for four to five turns.",
        "type": "ground",
        "category": "physical",
        "power": 35,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "329",
        "name": "Sheer Cold",
        "description": "The target is attacked with a blast of\nabsolute-zero cold. The target faints\ninstantly if this attack hits.",
        "type": "ice",
        "category": "special",
        "power": null,
        "accuracy": 30,
        "pp": 5
    },
    {
        "id": "330",
        "name": "Muddy Water",
        "description": "The user attacks by shooting muddy water\nat the opposing Pok\u00e9mon.\nThis may also lower their accuracy.",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "331",
        "name": "Bullet Seed",
        "description": "The user forcefully shoots seeds at the\ntarget two to five times in a row.",
        "type": "grass",
        "category": "physical",
        "power": 25,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "332",
        "name": "Aerial Ace",
        "description": "The user confounds the target with speed,\nthen slashes.\nThis attack never misses.",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "333",
        "name": "Icicle Spear",
        "description": "The user launches sharp icicles at the\ntarget two to five times in a row.",
        "type": "ice",
        "category": "physical",
        "power": 25,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "334",
        "name": "Iron Defense",
        "description": "The user hardens its body\u2019s surface\nlike iron, sharply raising its\nDefense stat.",
        "type": "steel",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "335",
        "name": "Block",
        "description": "The user blocks the target\u2019s way with arms\nspread wide to prevent escape.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "336",
        "name": "Howl",
        "description": "The user howls loudly to raise its spirit,\nwhich raises its Attack stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "337",
        "name": "Dragon Claw",
        "description": "The user slashes the target with huge,\nsharp claws.",
        "type": "dragon",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "338",
        "name": "Frenzy Plant",
        "description": "The user slams the target with\nan enormous tree.\nThe user can\u2019t move on the next turn.",
        "type": "grass",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "339",
        "name": "Bulk Up",
        "description": "The user tenses its muscles to bulk up\nits body, raising both its Attack and\nDefense stats.",
        "type": "fighting",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "340",
        "name": "Bounce",
        "description": "The user bounces up high, then drops on\nthe target on the second turn. This may\nalso leave the target with paralysis.",
        "type": "flying",
        "category": "physical",
        "power": 85,
        "accuracy": 85,
        "pp": 5
    },
    {
        "id": "341",
        "name": "Mud Shot",
        "description": "The user attacks by hurling a blob of mud\nat the target.\nThis also lowers the target\u2019s Speed stat.",
        "type": "ground",
        "category": "special",
        "power": 55,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "342",
        "name": "Poison Tail",
        "description": "The user hits the target with its tail.\nThis may also poison the target.\nCritical hits land more easily.",
        "type": "poison",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "343",
        "name": "Covet",
        "description": "The user endearingly approaches\nthe target, then steals the target\u2019s\nheld item.",
        "type": "normal",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "344",
        "name": "Volt Tackle",
        "description": "The user electrifies itself, then charges.\nThis also damages the user quite a lot.\nThis may leave the target with paralysis.",
        "type": "electric",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "345",
        "name": "Magical Leaf",
        "description": "The user scatters curious leaves\nthat chase the target.\nThis attack never misses.",
        "type": "grass",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "346",
        "name": "Water Sport",
        "description": "The user soaks itself with water.\nThis weakens Fire-type moves\nfor five turns.",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "347",
        "name": "Calm Mind",
        "description": "The user quietly focuses its mind and\ncalms its spirit to raise its Sp. Atk and\nSp. Def stats.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "348",
        "name": "Leaf Blade",
        "description": "The user handles a sharp leaf like a\nsword and attacks by cutting its target.\nCritical hits land more easily.",
        "type": "grass",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "349",
        "name": "Dragon Dance",
        "description": "The user vigorously performs a mystic,\npowerful dance that raises its Attack and\nSpeed stats.",
        "type": "dragon",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "350",
        "name": "Rock Blast",
        "description": "The user hurls hard rocks at the target.\nTwo to five rocks are launched in a row.",
        "type": "rock",
        "category": "physical",
        "power": 25,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "351",
        "name": "Shock Wave",
        "description": "The user strikes the target with a quick\njolt of electricity.\nThis attack never misses.",
        "type": "electric",
        "category": "special",
        "power": 60,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "352",
        "name": "Water Pulse",
        "description": "The user attacks the target with\na pulsing blast of water.\nThis may also confuse the target.",
        "type": "water",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "353",
        "name": "Doom Desire",
        "description": "Two turns after this move is used, the\nuser blasts the target with a\nconcentrated bundle of light.",
        "type": "steel",
        "category": "special",
        "power": 140,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "354",
        "name": "Psycho Boost",
        "description": "The user attacks the target at full power.\nThe attack\u2019s recoil harshly lowers the\nuser\u2019s Sp. Atk stat.",
        "type": "psychic",
        "category": "special",
        "power": 140,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "355",
        "name": "Roost",
        "description": "The user lands and rests its body.\nIt restores the user\u2019s HP by up to\nhalf of its max HP.",
        "type": "flying",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "356",
        "name": "Gravity",
        "description": "Gravity is intensified for five turns,\nmaking moves involving flying unusable\nand negating Levitate.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "357",
        "name": "Miracle Eye",
        "description": "Enables a Dark-type target to be hit by\nPsychic-type attacks. This also enables\nan evasive target to be hit.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "358",
        "name": "Wake-Up Slap",
        "description": "This attack inflicts big damage on a\nsleeping target. This also wakes the target\nup, however.",
        "type": "fighting",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "359",
        "name": "Hammer Arm",
        "description": "The user swings and hits with its strong\nand heavy fist.\nIt lowers the user\u2019s Speed, however.",
        "type": "fighting",
        "category": "physical",
        "power": 100,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "360",
        "name": "Gyro Ball",
        "description": "The user tackles the target with a high-speed\nspin. The slower the user compared to the\ntarget, the greater the move\u2019s power.",
        "type": "steel",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "361",
        "name": "Healing Wish",
        "description": "The user faints. In return, the Pok\u00e9mon\ntaking its place will have its HP restored\nand status conditions cured.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "362",
        "name": "Brine",
        "description": "If the target\u2019s HP is half or less,\nthis attack will hit with double\nthe power.",
        "type": "water",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "363",
        "name": "Natural Gift",
        "description": "The user draws power to attack by using\nits held Berry.\nThe Berry determines the move\u2019s type and power.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "364",
        "name": "Feint",
        "description": "An attack that hits a target using\nProtect or Detect. This also lifts\nthe effects of those moves.",
        "type": "normal",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "365",
        "name": "Pluck",
        "description": "The user pecks the target. If the target\nis holding a Berry, the user eats it and\ngains its effect.",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "366",
        "name": "Tailwind",
        "description": "The user whips up a turbulent whirlwind\nthat ups the Speed stat of the user and\nits allies for four turns.",
        "type": "flying",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "367",
        "name": "Acupressure",
        "description": "The user applies pressure to stress\npoints, sharply boosting one of its or\nits allies\u2019 stats.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "368",
        "name": "Metal Burst",
        "description": "The user retaliates with much greater\npower against the target\nthat last inflicted damage on it.",
        "type": "steel",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "369",
        "name": "U-turn",
        "description": "After making its attack, the user\nrushes back to switch places with\na party Pok\u00e9mon in waiting.",
        "type": "bug",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "370",
        "name": "Close Combat",
        "description": "The user fights the target up close\nwithout guarding itself. This also lowers\nthe user\u2019s Defense and Sp. Def stats.",
        "type": "fighting",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "371",
        "name": "Payback",
        "description": "The user stores power, then attacks.\nIf the user moves after the target,\nthis attack\u2019s power will be doubled.",
        "type": "dark",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "372",
        "name": "Assurance",
        "description": "If the target has already taken some\ndamage in the same turn, this attack\u2019s\npower is doubled.",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "373",
        "name": "Embargo",
        "description": "This move prevents the target from\nusing its held item. Its Trainer is\nalso prevented from using items on it.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "374",
        "name": "Fling",
        "description": "The user flings its held item at the target\nto attack. This move\u2019s power and effects\ndepend on the item.",
        "type": "dark",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "375",
        "name": "Psycho Shift",
        "description": "Using its psychic power of suggestion,\nthe user transfers its status conditions\nto the target.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "376",
        "name": "Trump Card",
        "description": "The fewer PP this move has,\nthe greater its power.",
        "type": "normal",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "377",
        "name": "Heal Block",
        "description": "For five turns, the user prevents the\nopposing team from using any moves,\nAbilities, or held items that recover HP.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "378",
        "name": "Wring Out",
        "description": "The user powerfully wrings the target.\nThe more HP the target has, the greater\nthe move\u2019s power.",
        "type": "normal",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "379",
        "name": "Power Trick",
        "description": "The user employs its psychic power to\nswitch its Attack with its Defense stat.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "380",
        "name": "Gastro Acid",
        "description": "The user hurls up its stomach acids on\nthe target. The fluid eliminates the effect\nof the target\u2019s Ability.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "381",
        "name": "Lucky Chant",
        "description": "The user chants an incantation toward\nthe sky, preventing opposing Pok\u00e9mon\nfrom landing critical hits.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "382",
        "name": "Me First",
        "description": "The user cuts ahead of the target to steal and\nuse the target\u2019s intended move with greater power.\nThis move fails if it isn\u2019t used first.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "383",
        "name": "Copycat",
        "description": "The user mimics the move used immediately\nbefore it. The move fails if no other move\nhas been used yet.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "384",
        "name": "Power Swap",
        "description": "The user employs its psychic power to\nswitch changes to its Attack and\nSp. Atk stats with the target.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "385",
        "name": "Guard Swap",
        "description": "The user employs its psychic power to\nswitch changes to its Defense and\nSp. Def stats with the target.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "386",
        "name": "Punishment",
        "description": "The more the target has powered\nup with stat changes, the greater\nthe move\u2019s power.",
        "type": "dark",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "387",
        "name": "Last Resort",
        "description": "This move can be used only after the user\nhas used all the other moves it knows\nin the battle.",
        "type": "normal",
        "category": "physical",
        "power": 140,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "388",
        "name": "Worry Seed",
        "description": "A seed that causes worry is planted on\nthe target. It prevents sleep by making\nthe target\u2019s Ability Insomnia.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "389",
        "name": "Sucker Punch",
        "description": "This move enables the user to attack\nfirst. This move fails if the target is not\nreadying an attack.",
        "type": "dark",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "390",
        "name": "Toxic Spikes",
        "description": "The user lays a trap of poison spikes at the\nopposing team\u2019s feet. They poison\nopposing Pok\u00e9mon that switch into battle.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "391",
        "name": "Heart Swap",
        "description": "The user employs its psychic power to\nswitch stat changes with the target.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "392",
        "name": "Aqua Ring",
        "description": "The user envelops itself in a veil made\nof water. It regains some HP every turn.",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "393",
        "name": "Magnet Rise",
        "description": "The user levitates using electrically\ngenerated magnetism for five turns.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "394",
        "name": "Flare Blitz",
        "description": "The user cloaks itself in fire and charges the target.\nThis also damages the user quite a lot.\nThis may leave the target with a burn.",
        "type": "fire",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "395",
        "name": "Force Palm",
        "description": "The target is attacked with a shock wave.\nThis may also leave the target\nwith paralysis.",
        "type": "fighting",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "396",
        "name": "Aura Sphere",
        "description": "The user lets loose a blast of aura power\nfrom deep within its body at the target.\nThis attack never misses.",
        "type": "fighting",
        "category": "special",
        "power": 80,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "397",
        "name": "Rock Polish",
        "description": "The user polishes its body to reduce drag.\nThis can sharply raise the Speed stat.",
        "type": "rock",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "398",
        "name": "Poison Jab",
        "description": "The target is stabbed with a tentacle or\narm steeped in poison. This may also\npoison the target.",
        "type": "poison",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "399",
        "name": "Dark Pulse",
        "description": "The user releases a horrible aura imbued\nwith dark thoughts.\nThis may also make the target flinch.",
        "type": "dark",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "400",
        "name": "Night Slash",
        "description": "The user slashes the target\nthe instant an opportunity arises.\nCritical hits land more easily.",
        "type": "dark",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "401",
        "name": "Aqua Tail",
        "description": "The user attacks by swinging its tail as if\nit were a vicious wave in a raging storm.",
        "type": "water",
        "category": "physical",
        "power": 90,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "402",
        "name": "Seed Bomb",
        "description": "The user slams a barrage of hard-shelled\nseeds down on the target from above.",
        "type": "grass",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "403",
        "name": "Air Slash",
        "description": "The user attacks with a blade of air that\nslices even the sky. This may also make the\ntarget flinch.",
        "type": "flying",
        "category": "special",
        "power": 75,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "404",
        "name": "X-Scissor",
        "description": "The user slashes at the target by\ncrossing its scythes or claws as if\nthey were a pair of scissors.",
        "type": "bug",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "405",
        "name": "Bug Buzz",
        "description": "The user vibrates its wings to generate a\ndamaging sound wave. This may also lower\nthe target\u2019s Sp. Def stat.",
        "type": "bug",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "406",
        "name": "Dragon Pulse",
        "description": "The target is attacked with a shock wave\ngenerated by the user\u2019s gaping mouth.",
        "type": "dragon",
        "category": "special",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "407",
        "name": "Dragon Rush",
        "description": "The user tackles the target while\nexhibiting overwhelming menace.\nThis may also make the target flinch.",
        "type": "dragon",
        "category": "physical",
        "power": 100,
        "accuracy": 75,
        "pp": 10
    },
    {
        "id": "408",
        "name": "Power Gem",
        "description": "The user attacks with a ray of light that\nsparkles as if it were made of gemstones.",
        "type": "rock",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "409",
        "name": "Drain Punch",
        "description": "An energy-draining punch. The user\u2019s\nHP is restored by half the damage taken\nby the target.",
        "type": "fighting",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "410",
        "name": "Vacuum Wave",
        "description": "The user whirls its fists to send a wave\nof pure vacuum at the target.\nThis move always goes first.",
        "type": "fighting",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "411",
        "name": "Focus Blast",
        "description": "The user heightens its mental focus and\nunleashes its power.\nThis may also lower the target\u2019s Sp. Def.",
        "type": "fighting",
        "category": "special",
        "power": 120,
        "accuracy": 70,
        "pp": 5
    },
    {
        "id": "412",
        "name": "Energy Ball",
        "description": "The user draws power from nature and\nfires it at the target.\nThis may also lower the target\u2019s Sp. Def.",
        "type": "grass",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "413",
        "name": "Brave Bird",
        "description": "The user tucks in its wings and charges\nfrom a low altitude.\nThis also damages the user quite a lot.",
        "type": "flying",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "414",
        "name": "Earth Power",
        "description": "The user makes the ground under\nthe target erupt with power.\nThis may also lower the target\u2019s Sp. Def.",
        "type": "ground",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "415",
        "name": "Switcheroo",
        "description": "The user trades held items with the target\nfaster than the eye can follow.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "416",
        "name": "Giga Impact",
        "description": "The user charges at the target using\nevery bit of its power.\nThe user can\u2019t move on the next turn.",
        "type": "normal",
        "category": "physical",
        "power": 150,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "417",
        "name": "Nasty Plot",
        "description": "The user stimulates its brain by thinking\nbad thoughts.\nThis sharply raises the user\u2019s Sp. Atk.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "418",
        "name": "Bullet Punch",
        "description": "The user strikes the target\nwith tough punches as fast as bullets.\nThis move always goes first.",
        "type": "steel",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "419",
        "name": "Avalanche",
        "description": "An attack move that inflicts double the\ndamage if the user has been hurt by the\ntarget in the same turn.",
        "type": "ice",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "420",
        "name": "Ice Shard",
        "description": "The user flash-freezes chunks of\nice and hurls them at the target.\nThis move always goes first.",
        "type": "ice",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "421",
        "name": "Shadow Claw",
        "description": "The user slashes with a sharp claw made\nfrom shadows.\nCritical hits land more easily.",
        "type": "ghost",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "422",
        "name": "Thunder Fang",
        "description": "The user bites with electrified fangs.\nThis may also make the target flinch or\nleave it with paralysis.",
        "type": "electric",
        "category": "physical",
        "power": 65,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "423",
        "name": "Ice Fang",
        "description": "The user bites with cold-infused fangs.\nThis may also make the target flinch or\nleave it frozen.",
        "type": "ice",
        "category": "physical",
        "power": 65,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "424",
        "name": "Fire Fang",
        "description": "The user bites with flame-cloaked fangs.\nThis may also make the target flinch or leave\nit with a burn.",
        "type": "fire",
        "category": "physical",
        "power": 65,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "425",
        "name": "Shadow Sneak",
        "description": "The user extends its shadow and attacks\nthe target from behind.\nThis move always goes first.",
        "type": "ghost",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "426",
        "name": "Mud Bomb",
        "description": "The user launches a hard-packed\nmud ball to attack.\nThis may also lower the target\u2019s accuracy.",
        "type": "ground",
        "category": "special",
        "power": 65,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "427",
        "name": "Psycho Cut",
        "description": "The user tears at the target with blades\nformed by psychic power.\nCritical hits land more easily.",
        "type": "psychic",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "428",
        "name": "Zen Headbutt",
        "description": "The user focuses its willpower to its head\nand attacks the target.\nThis may also make the target flinch.",
        "type": "psychic",
        "category": "physical",
        "power": 80,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "429",
        "name": "Mirror Shot",
        "description": "The user lets loose a flash of energy at\nthe target from its polished body.\nThis may also lower the target\u2019s accuracy.",
        "type": "steel",
        "category": "special",
        "power": 65,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "430",
        "name": "Flash Cannon",
        "description": "The user gathers all its light energy and\nreleases it at once. This may also lower the\ntarget\u2019s Sp. Def stat.",
        "type": "steel",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "431",
        "name": "Rock Climb",
        "description": "The user attacks the target by smashing\ninto it with incredible force.\nThis may also confuse the target.",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 85,
        "pp": 20
    },
    {
        "id": "432",
        "name": "Defog",
        "description": "A strong wind blows away the target\u2019s\nbarriers such as Reflect or Light Screen.\nThis also lowers the target\u2019s evasiveness.",
        "type": "flying",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "433",
        "name": "Trick Room",
        "description": "The user creates a bizarre area in which\nslower Pok\u00e9mon get to move first for\nfive turns.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "434",
        "name": "Draco Meteor",
        "description": "Comets are summoned down from the sky\nonto the target. The attack\u2019s recoil\nharshly lowers the user\u2019s Sp. Atk stat.",
        "type": "dragon",
        "category": "special",
        "power": 130,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "435",
        "name": "Discharge",
        "description": "The user strikes everything around it\nby letting loose a flare of electricity.\nThis may also cause paralysis.",
        "type": "electric",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "436",
        "name": "Lava Plume",
        "description": "The user torches everything around it\nwith an inferno of scarlet flames.\nThis may also leave those hit with a burn.",
        "type": "fire",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "437",
        "name": "Leaf Storm",
        "description": "The user whips up a storm of leaves around\nthe target. The attack\u2019s recoil harshly\nlowers the user\u2019s Sp. Atk stat.",
        "type": "grass",
        "category": "special",
        "power": 130,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "438",
        "name": "Power Whip",
        "description": "The user violently whirls its vines or\ntentacles to harshly lash the target.",
        "type": "grass",
        "category": "physical",
        "power": 120,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "439",
        "name": "Rock Wrecker",
        "description": "The user launches a huge boulder at the\ntarget to attack.\nThe user can\u2019t move on the next turn.",
        "type": "rock",
        "category": "physical",
        "power": 150,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "440",
        "name": "Cross Poison",
        "description": "A slashing attack with a poisonous blade\nthat may also poison the target.\nCritical hits land more easily.",
        "type": "poison",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "441",
        "name": "Gunk Shot",
        "description": "The user shoots filthy garbage\nat the target to attack.\nThis may also poison the target.",
        "type": "poison",
        "category": "physical",
        "power": 120,
        "accuracy": 80,
        "pp": 5
    },
    {
        "id": "442",
        "name": "Iron Head",
        "description": "The user slams the target\nwith its steel-hard head.\nThis may also make the target flinch.",
        "type": "steel",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "443",
        "name": "Magnet Bomb",
        "description": "The user launches steel bombs that\nstick to the target.\nThis attack never misses.",
        "type": "steel",
        "category": "physical",
        "power": 60,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "444",
        "name": "Stone Edge",
        "description": "The user stabs the target with\nsharpened stones from below.\nCritical hits land more easily.",
        "type": "rock",
        "category": "physical",
        "power": 100,
        "accuracy": 80,
        "pp": 5
    },
    {
        "id": "445",
        "name": "Captivate",
        "description": "If any opposing Pok\u00e9mon is the opposite\ngender of the user, it is charmed, which\nharshly lowers its Sp. Atk stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "446",
        "name": "Stealth Rock",
        "description": "The user lays a trap of levitating stones\naround the opposing team. The trap hurts\nopposing Pok\u00e9mon that switch into battle.",
        "type": "rock",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "447",
        "name": "Grass Knot",
        "description": "The user snares the target with grass and\ntrips it. The heavier the target,\nthe greater the move\u2019s power.",
        "type": "grass",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "448",
        "name": "Chatter",
        "description": "The user attacks using a sound wave\nbased on words it has learned.\nThis confuses the target.",
        "type": "flying",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "449",
        "name": "Judgment",
        "description": "The user releases countless shots of\nlight at the target. This move\u2019s type varies\ndepending on the kind of Plate the user is holding.",
        "type": "normal",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "450",
        "name": "Bug Bite",
        "description": "The user bites the target. If the target\nis holding a Berry, the user eats it and\ngains its effect.",
        "type": "bug",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "451",
        "name": "Charge Beam",
        "description": "The user attacks with an electric\ncharge. The user may use any remaining\nelectricity to raise its Sp. Atk stat.",
        "type": "electric",
        "category": "special",
        "power": 50,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "452",
        "name": "Wood Hammer",
        "description": "The user slams its rugged body into the\ntarget to attack. This also damages\nthe user quite a lot.",
        "type": "grass",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "453",
        "name": "Aqua Jet",
        "description": "The user lunges at the target at a speed\nthat makes it almost invisible.\nThis move always goes first.",
        "type": "water",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "454",
        "name": "Attack Order",
        "description": "The user calls out its underlings to\npummel the target.\nCritical hits land more easily.",
        "type": "bug",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "455",
        "name": "Defend Order",
        "description": "The user calls out its underlings to\nshield its body, raising its Defense\nand Sp. Def stats.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "456",
        "name": "Heal Order",
        "description": "The user calls out its underlings to\nheal it. The user regains up to half of its\nmax HP.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "457",
        "name": "Head Smash",
        "description": "The user attacks the target with a\nhazardous, full-power headbutt.\nThis also damages the user terribly.",
        "type": "rock",
        "category": "physical",
        "power": 150,
        "accuracy": 80,
        "pp": 5
    },
    {
        "id": "458",
        "name": "Double Hit",
        "description": "The user slams the target with a long tail,\nvines, or a tentacle.\nThe target is hit twice in a row.",
        "type": "normal",
        "category": "physical",
        "power": 35,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "459",
        "name": "Roar of Time",
        "description": "The user blasts the target with power\nthat distorts even time.\nThe user can\u2019t move on the next turn.",
        "type": "dragon",
        "category": "special",
        "power": 150,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "460",
        "name": "Spacial Rend",
        "description": "The user tears the target along with the\nspace around it.\nCritical hits land more easily.",
        "type": "dragon",
        "category": "special",
        "power": 100,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "461",
        "name": "Lunar Dance",
        "description": "The user faints. In return, the Pok\u00e9mon\ntaking its place will have its status and\nHP fully restored.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "462",
        "name": "Crush Grip",
        "description": "The target is crushed with great force.\nThe more HP the target has left,\nthe greater this move\u2019s power.",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "463",
        "name": "Magma Storm",
        "description": "The target becomes trapped\nwithin a maelstrom of fire that rages\nfor four to five turns.",
        "type": "fire",
        "category": "special",
        "power": 100,
        "accuracy": 75,
        "pp": 5
    },
    {
        "id": "464",
        "name": "Dark Void",
        "description": "Opposing Pok\u00e9mon are dragged into\na world of total darkness that makes\nthem sleep.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 50,
        "pp": 10
    },
    {
        "id": "465",
        "name": "Seed Flare",
        "description": "The user emits a shock wave from\nits body to attack its target. This may\nalso harshly lower the target\u2019s Sp. Def.",
        "type": "grass",
        "category": "special",
        "power": 120,
        "accuracy": 85,
        "pp": 5
    },
    {
        "id": "466",
        "name": "Ominous Wind",
        "description": "The user blasts the target with a gust of\nrepulsive wind. This may also raise all the\nuser\u2019s stats at once.",
        "type": "ghost",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "467",
        "name": "Shadow Force",
        "description": "The user disappears, then strikes the\ntarget on the next turn.\nThis move hits even if the target protects itself.",
        "type": "ghost",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "468",
        "name": "Hone Claws",
        "description": "The user sharpens its claws to\nboost its Attack stat and accuracy.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "469",
        "name": "Wide Guard",
        "description": "The user and its allies are protected from\nwide-ranging attacks for one turn.",
        "type": "rock",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "470",
        "name": "Guard Split",
        "description": "The user employs its psychic power to\naverage its Defense and Sp. Def stats\nwith those of the target.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "471",
        "name": "Power Split",
        "description": "The user employs its psychic power to\naverage its Attack and Sp. Atk stats\nwith those of the target.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "472",
        "name": "Wonder Room",
        "description": "The user creates a bizarre area in which\nPok\u00e9mon\u2019s Defense and Sp. Def\nstats are swapped for five turns.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "473",
        "name": "Psyshock",
        "description": "The user materializes an odd\npsychic wave to attack the target.\nThis attack does physical damage.",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "474",
        "name": "Venoshock",
        "description": "The user drenches the target in a special\npoisonous liquid. This move\u2019s power is doubled\nif the target is poisoned.",
        "type": "poison",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "475",
        "name": "Autotomize",
        "description": "The user sheds part of its body\nto make itself lighter and sharply\nraise its Speed stat.",
        "type": "steel",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "476",
        "name": "Rage Powder",
        "description": "The user scatters a cloud of irritating\npowder to draw attention to itself.\nOpponents aim only at the user.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "477",
        "name": "Telekinesis",
        "description": "The user makes the target float with its\npsychic power. The target is easier to\nhit for three turns.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "478",
        "name": "Magic Room",
        "description": "The user creates a bizarre area\nin which Pok\u00e9mon\u2019s held items\nlose their effects for five turns.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "479",
        "name": "Smack Down",
        "description": "The user throws a stone or similar projectile\nto attack an opponent. A flying Pok\u00e9mon\nwill fall to the ground when it\u2019s hit.",
        "type": "rock",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "480",
        "name": "Storm Throw",
        "description": "The user strikes the target with a fierce\nblow. This attack always results in a\ncritical hit.",
        "type": "fighting",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "481",
        "name": "Flame Burst",
        "description": "The user attacks the target with a\nbursting flame. The bursting flame damages\nPok\u00e9mon next to the target as well.",
        "type": "fire",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "482",
        "name": "Sludge Wave",
        "description": "The user strikes everything around it\nby swamping the area with a giant sludge wave.\nThis may also poison those hit.",
        "type": "poison",
        "category": "special",
        "power": 95,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "483",
        "name": "Quiver Dance",
        "description": "The user lightly performs a beautiful,\nmystic dance. This boosts the user\u2019s\nSp. Atk, Sp. Def, and Speed stats.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "484",
        "name": "Heavy Slam",
        "description": "The user slams into the target with its\nheavy body. The more the user outweighs\nthe target, the greater the move\u2019s power.",
        "type": "steel",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "485",
        "name": "Synchronoise",
        "description": "Using an odd shock wave, the user\ninflicts damage on any Pok\u00e9mon of the same\ntype in the area around it.",
        "type": "psychic",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "486",
        "name": "Electro Ball",
        "description": "The user hurls an electric orb\nat the target. The faster the user is\nthan the target, the greater the move\u2019s power.",
        "type": "electric",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "487",
        "name": "Soak",
        "description": "The user shoots a torrent of water\nat the target and changes\nthe target\u2019s type to Water.",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "488",
        "name": "Flame Charge",
        "description": "Cloaking itself in flame, the user attacks.\nThen, building up more power,\nthe user raises its Speed stat.",
        "type": "fire",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "489",
        "name": "Coil",
        "description": "The user coils up and concentrates.\nThis raises its Attack and Defense stats\nas well as its accuracy.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "490",
        "name": "Low Sweep",
        "description": "The user makes a swift attack on the target\u2019s legs,\nwhich lowers the target\u2019s Speed stat.",
        "type": "fighting",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "491",
        "name": "Acid Spray",
        "description": "The user spits fluid that works to melt\nthe target. This harshly lowers\nthe target\u2019s Sp. Def stat.",
        "type": "poison",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "492",
        "name": "Foul Play",
        "description": "The user turns the target\u2019s power\nagainst it. The higher the target\u2019s Attack stat,\nthe greater the move\u2019s power.",
        "type": "dark",
        "category": "physical",
        "power": 95,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "493",
        "name": "Simple Beam",
        "description": "The user\u2019s mysterious psychic wave\nchanges the target\u2019s Ability to Simple.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "494",
        "name": "Entrainment",
        "description": "The user dances with an odd rhythm that\ncompels the target to mimic it, making the\ntarget\u2019s Ability the same as the user\u2019s.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "495",
        "name": "After You",
        "description": "The user helps the target and makes it\nuse its move right after the user.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "496",
        "name": "Round",
        "description": "The user attacks the target with a song.\nOthers can join in the Round and make\nthe attack do greater damage.",
        "type": "normal",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "497",
        "name": "Echoed Voice",
        "description": "The user attacks the target with an\nechoing voice. If this move is used\nevery turn, it does greater damage.",
        "type": "normal",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "498",
        "name": "Chip Away",
        "description": "Looking for an opening, the user strikes\nconsistently. The target\u2019s stat changes\ndon\u2019t affect this attack\u2019s damage.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "499",
        "name": "Clear Smog",
        "description": "The user attacks by throwing a clump of\nspecial mud. All stat changes are\nreturned to normal.",
        "type": "poison",
        "category": "special",
        "power": 50,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "500",
        "name": "Stored Power",
        "description": "The user attacks the target with stored\npower. The more the user\u2019s stats are\nraised, the greater the move\u2019s power.",
        "type": "psychic",
        "category": "special",
        "power": 20,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "501",
        "name": "Quick Guard",
        "description": "The user protects itself and its allies\nfrom priority moves.",
        "type": "fighting",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "502",
        "name": "Ally Switch",
        "description": "The user teleports using a strange\npower and switches places with one of\nits allies.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "503",
        "name": "Scald",
        "description": "The user shoots boiling hot water at\nits target. This may also leave the target\nwith a burn.",
        "type": "water",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "504",
        "name": "Shell Smash",
        "description": "The user breaks its shell, which lowers\nDefense and Sp. Def stats but sharply\nraises its Attack, Sp. Atk, and Speed stats.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "505",
        "name": "Heal Pulse",
        "description": "The user emits a healing pulse which\nrestores the target\u2019s HP by up to\nhalf of its max HP.",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "506",
        "name": "Hex",
        "description": "This relentless attack does massive\ndamage to a target affected\nby status conditions.",
        "type": "ghost",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "507",
        "name": "Sky Drop",
        "description": "The user takes the target into the sky,\nthen drops it during the next turn.\nThe target cannot attack while in the sky.",
        "type": "flying",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "508",
        "name": "Shift Gear",
        "description": "The user rotates its gears, raising its\nAttack and sharply raising its Speed.",
        "type": "steel",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "509",
        "name": "Circle Throw",
        "description": "The target is thrown, and a different\nPok\u00e9mon is dragged out. In the wild,\nthis ends a battle against a single Pok\u00e9mon.",
        "type": "fighting",
        "category": "physical",
        "power": 60,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "510",
        "name": "Incinerate",
        "description": "The user attacks opposing Pok\u00e9mon with fire.\nIf a Pok\u00e9mon is holding a certain item, such as a\nBerry, the item becomes burned up and unusable.",
        "type": "fire",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "511",
        "name": "Quash",
        "description": "The user suppresses the target and\nmakes its move go last.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "512",
        "name": "Acrobatics",
        "description": "The user nimbly strikes the target.\nIf the user is not holding an item,\nthis attack inflicts massive damage.",
        "type": "flying",
        "category": "physical",
        "power": 55,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "513",
        "name": "Reflect Type",
        "description": "The user reflects the target\u2019s type,\nmaking it the same type as the target.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "514",
        "name": "Retaliate",
        "description": "The user gets revenge for a fainted ally.\nIf an ally fainted in the previous turn,\nthis move becomes more powerful.",
        "type": "normal",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "515",
        "name": "Final Gambit",
        "description": "The user risks everything to attack its\ntarget. The user faints but does damage\nequal to its HP.",
        "type": "fighting",
        "category": "special",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "516",
        "name": "Bestow",
        "description": "The user passes its held item to the\ntarget when the target isn\u2019t holding\nan item.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "517",
        "name": "Inferno",
        "description": "The user attacks by engulfing the target\nin an intense fire. This leaves the target\nwith a burn.",
        "type": "fire",
        "category": "special",
        "power": 100,
        "accuracy": 50,
        "pp": 5
    },
    {
        "id": "518",
        "name": "Water Pledge",
        "description": "A column of water strikes the target. When\ncombined with its fire equivalent, the\ndamage increases and a rainbow appears.",
        "type": "water",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "519",
        "name": "Fire Pledge",
        "description": "A column of fire hits the target. When used with\nits grass equivalent, its damage increases and\na vast sea of fire appears.",
        "type": "fire",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "520",
        "name": "Grass Pledge",
        "description": "A column of grass hits the target. When used with\nits water equivalent, its damage increases and\na vast swamp appears.",
        "type": "grass",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "521",
        "name": "Volt Switch",
        "description": "After making its attack, the user\nrushes back to switch places with\na party Pok\u00e9mon in waiting.",
        "type": "electric",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "522",
        "name": "Struggle Bug",
        "description": "While resisting, the user attacks the\nopposing Pok\u00e9mon. This lowers the\nSp. Atk stat of those hit.",
        "type": "bug",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "523",
        "name": "Bulldoze",
        "description": "The user strikes everything around it\nby stomping down on the ground.\nThis lowers the Speed stat of those hit.",
        "type": "ground",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "524",
        "name": "Frost Breath",
        "description": "The user blows its cold breath on the\ntarget. This attack always results in\na critical hit.",
        "type": "ice",
        "category": "special",
        "power": 60,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "525",
        "name": "Dragon Tail",
        "description": "The target is knocked away, and a different\nPok\u00e9mon is dragged out. In the wild,\nthis ends a battle against a single Pok\u00e9mon.",
        "type": "dragon",
        "category": "physical",
        "power": 60,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "526",
        "name": "Work Up",
        "description": "The user is roused, and its Attack\nand Sp. Atk stats increase.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "527",
        "name": "Electroweb",
        "description": "The user attacks and captures opposing\nPok\u00e9mon using an electric net.\nThis lowers their Speed stat.",
        "type": "electric",
        "category": "special",
        "power": 55,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "528",
        "name": "Wild Charge",
        "description": "The user shrouds itself in electricity\nand smashes into its target.\nThis also damages the user a little.",
        "type": "electric",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "529",
        "name": "Drill Run",
        "description": "The user crashes into its target while\nrotating its body like a drill.\nCritical hits land more easily.",
        "type": "ground",
        "category": "physical",
        "power": 80,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "530",
        "name": "Dual Chop",
        "description": "The user attacks its target by hitting\nit with brutal strikes.\nThe target is hit twice in a row.",
        "type": "dragon",
        "category": "physical",
        "power": 40,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "531",
        "name": "Heart Stamp",
        "description": "The user unleashes a vicious blow after\nits cute act makes the target less wary.\nThis may also make the target flinch.",
        "type": "psychic",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "532",
        "name": "Horn Leech",
        "description": "The user drains the target\u2019s energy with\nits horns. The user\u2019s HP is restored\nby half the damage taken by the target.",
        "type": "grass",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "533",
        "name": "Sacred Sword",
        "description": "The user attacks by slicing with a long\nhorn. The target\u2019s stat changes\ndon\u2019t affect this attack\u2019s damage.",
        "type": "fighting",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "534",
        "name": "Razor Shell",
        "description": "The user cuts its target with sharp\nshells. This may also lower\nthe target\u2019s Defense stat.",
        "type": "water",
        "category": "physical",
        "power": 75,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "535",
        "name": "Heat Crash",
        "description": "The user slams its target with its flame-\ncovered body. The more the user outweighs\nthe target, the greater the move\u2019s power.",
        "type": "fire",
        "category": "physical",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "536",
        "name": "Leaf Tornado",
        "description": "The user attacks its target by\nencircling it in sharp leaves. This attack\nmay also lower the target\u2019s accuracy.",
        "type": "grass",
        "category": "special",
        "power": 65,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "537",
        "name": "Steamroller",
        "description": "The user crushes its targets by rolling\nover them with its rolled-up body.\nThis may also make the target flinch.",
        "type": "bug",
        "category": "physical",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "538",
        "name": "Cotton Guard",
        "description": "The user protects itself by wrapping\nits body in soft cotton, which drastically\nraises the user\u2019s Defense stat.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "539",
        "name": "Night Daze",
        "description": "The user lets loose a pitch-black shock\nwave at its target. This may also lower the\ntarget\u2019s accuracy.",
        "type": "dark",
        "category": "special",
        "power": 85,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "540",
        "name": "Psystrike",
        "description": "The user materializes an odd\npsychic wave to attack the target.\nThis attack does physical damage.",
        "type": "psychic",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "541",
        "name": "Tail Slap",
        "description": "The user attacks by striking the target\nwith its hard tail. It hits the target two\nto five times in a row.",
        "type": "normal",
        "category": "physical",
        "power": 25,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "542",
        "name": "Hurricane",
        "description": "The user attacks by wrapping its opponent\nin a fierce wind that flies up into the sky.\nThis may also confuse the target.",
        "type": "flying",
        "category": "special",
        "power": 110,
        "accuracy": 70,
        "pp": 10
    },
    {
        "id": "543",
        "name": "Head Charge",
        "description": "The user charges its head into its\ntarget, using its powerful guard hair.\nThis also damages the user a little.",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "544",
        "name": "Gear Grind",
        "description": "The user attacks by throwing\nsteel gears at its target twice.",
        "type": "steel",
        "category": "physical",
        "power": 50,
        "accuracy": 85,
        "pp": 15
    },
    {
        "id": "545",
        "name": "Searing Shot",
        "description": "The user torches everything around it\nwith an inferno of scarlet flames.\nThis may also leave those hit with a burn.",
        "type": "fire",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "546",
        "name": "Techno Blast",
        "description": "The user fires a beam of light at\nits target. The move\u2019s type changes\ndepending on the Drive the user holds.",
        "type": "normal",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "547",
        "name": "Relic Song",
        "description": "The user sings an ancient song and attacks\nby appealing to the hearts of the listening\nopposing Pok\u00e9mon. This may also induce sleep.",
        "type": "normal",
        "category": "special",
        "power": 75,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "548",
        "name": "Secret Sword",
        "description": "The user cuts with its long horn. The odd\npower contained in the horn does physical\ndamage to the target.",
        "type": "fighting",
        "category": "special",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "549",
        "name": "Glaciate",
        "description": "The user attacks by blowing freezing\ncold air at opposing Pok\u00e9mon.\nThis lowers their Speed stat.",
        "type": "ice",
        "category": "special",
        "power": 65,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "550",
        "name": "Bolt Strike",
        "description": "The user surrounds itself with a great amount\nof electricity and charges its target.\nThis may also leave the target with paralysis.",
        "type": "electric",
        "category": "physical",
        "power": 130,
        "accuracy": 85,
        "pp": 5
    },
    {
        "id": "551",
        "name": "Blue Flare",
        "description": "The user attacks by engulfing the target\nin an intense, yet beautiful, blue flame.\nThis may also leave the target with a burn.",
        "type": "fire",
        "category": "special",
        "power": 130,
        "accuracy": 85,
        "pp": 5
    },
    {
        "id": "552",
        "name": "Fiery Dance",
        "description": "Cloaked in flames, the user dances\nand flaps its wings. This may also\nraise the user\u2019s Sp. Atk stat.",
        "type": "fire",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "553",
        "name": "Freeze Shock",
        "description": "On the second turn, the user hits the\ntarget with electrically charged ice.\nThis may also leave the target with paralysis.",
        "type": "ice",
        "category": "physical",
        "power": 140,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "554",
        "name": "Ice Burn",
        "description": "On the second turn, an ultracold,\nfreezing wind surrounds the target.\nThis may leave the target with a burn.",
        "type": "ice",
        "category": "special",
        "power": 140,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "555",
        "name": "Snarl",
        "description": "The user yells as if it\u2019s ranting about\nsomething, which lowers the Sp. Atk stat\nof opposing Pok\u00e9mon.",
        "type": "dark",
        "category": "special",
        "power": 55,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "556",
        "name": "Icicle Crash",
        "description": "The user attacks by harshly dropping\nlarge icicles onto the target.\nThis may also make the target flinch.",
        "type": "ice",
        "category": "physical",
        "power": 85,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "557",
        "name": "V-create",
        "description": "With a hot flame on its forehead, the user\nhurls itself at its target. This lowers the\nuser\u2019s Defense, Sp. Def, and Speed stats.",
        "type": "fire",
        "category": "physical",
        "power": 180,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "558",
        "name": "Fusion Flare",
        "description": "The user brings down a giant flame.\nThis move is more powerful when\ninfluenced by an enormous thunderbolt.",
        "type": "fire",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "559",
        "name": "Fusion Bolt",
        "description": "The user throws down a giant thunderbolt.\nThis move is more powerful when\ninfluenced by an enormous flame.",
        "type": "electric",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "560",
        "name": "Flying Press",
        "description": "The user dives down onto the target\nfrom the sky. This move is Fighting\nand Flying type simultaneously.",
        "type": "fighting",
        "category": "physical",
        "power": 100,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "561",
        "name": "Mat Block",
        "description": "Using a pulled-up mat as a shield, the user\nprotects itself and its allies from damaging moves.\nThis does not stop status moves.",
        "type": "fighting",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "562",
        "name": "Belch",
        "description": "The user lets out a damaging belch\nat the target. The user must eat a held\nBerry to use this move.",
        "type": "poison",
        "category": "special",
        "power": 120,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "563",
        "name": "Rototiller",
        "description": "Tilling the soil, the user makes it easier\nfor plants to grow. This raises the Attack\nand Sp. Atk stats of Grass-type Pok\u00e9mon.",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "564",
        "name": "Sticky Web",
        "description": "The user weaves a sticky net around\nthe opposing team, which lowers their\nSpeed stat upon switching into battle.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "565",
        "name": "Fell Stinger",
        "description": "When the user knocks out a target\nwith this move, the user\u2019s Attack stat\nrises sharply.",
        "type": "bug",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 25
    },
    {
        "id": "566",
        "name": "Phantom Force",
        "description": "The user vanishes somewhere, then strikes\nthe target on the next turn.\nThis move hits even if the target protects itself.",
        "type": "ghost",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "567",
        "name": "Trick-or-Treat",
        "description": "The user takes the target trick-or-treating.\nThis adds Ghost type to the target\u2019s type.",
        "type": "ghost",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "568",
        "name": "Noble Roar",
        "description": "Letting out a noble roar, the user\nintimidates the target and lowers\nits Attack and Sp. Atk stats.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "569",
        "name": "Ion Deluge",
        "description": "The user disperses electrically charged\nparticles, which changes Normal-type\nmoves to Electric-type moves.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 25
    },
    {
        "id": "570",
        "name": "Parabolic Charge",
        "description": "The user attacks everything around it.\nThe user\u2019s HP is restored by half\nthe damage taken by those hit.",
        "type": "electric",
        "category": "special",
        "power": 65,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "571",
        "name": "Forest\u2019s Curse",
        "description": "The user puts a forest curse on the target.\nAfflicted targets are now Grass type as well.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "572",
        "name": "Petal Blizzard",
        "description": "The user stirs up a violent petal blizzard\nand attacks everything around it.",
        "type": "grass",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "573",
        "name": "Freeze-Dry",
        "description": "The user rapidly cools the target.\nThis may also leave the target frozen.\nThis move is super effective on Water types.",
        "type": "ice",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "574",
        "name": "Disarming Voice",
        "description": "Letting out a charming cry, the user does\nemotional damage to opposing Pok\u00e9mon.\nThis attack never misses.",
        "type": "fairy",
        "category": "special",
        "power": 40,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "575",
        "name": "Parting Shot",
        "description": "With a parting threat, the user lowers\nthe target\u2019s Attack and Sp. Atk stats.\nThen it switches with a party Pok\u00e9mon.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "576",
        "name": "Topsy-Turvy",
        "description": "All stat changes affecting the target\nturn topsy-turvy and become the\nopposite of what they were.",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "577",
        "name": "Draining Kiss",
        "description": "The user steals the target\u2019s energy with a kiss.\nThe user\u2019s HP is restored by over half\nof the damage taken by the target.",
        "type": "fairy",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "578",
        "name": "Crafty Shield",
        "description": "The user protects itself and its allies from\nstatus moves with a mysterious power.\nThis does not stop moves that do damage.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "579",
        "name": "Flower Shield",
        "description": "The user raises the Defense stat\nof all Grass-type Pok\u00e9mon in battle\nwith a mysterious power.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "580",
        "name": "Grassy Terrain",
        "description": "The user turns the ground under everyone\u2019s feet\nto grass for five turns. This restores the HP of\nPok\u00e9mon on the ground a little every turn.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "581",
        "name": "Misty Terrain",
        "description": "The user covers the ground under everyone\u2019s feet\nwith mist for five turns. This protects Pok\u00e9mon\non the ground from status conditions.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "582",
        "name": "Electrify",
        "description": "If the target is electrified before it uses\na move during that turn, the target\u2019s\nmove becomes Electric type.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "583",
        "name": "Play Rough",
        "description": "The user plays rough with the target\nand attacks it. This may also lower\nthe target\u2019s Attack stat.",
        "type": "fairy",
        "category": "physical",
        "power": 90,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "584",
        "name": "Fairy Wind",
        "description": "The user stirs up a fairy wind\nand strikes the target with it.",
        "type": "fairy",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "585",
        "name": "Moonblast",
        "description": "Borrowing the power of the moon,\nthe user attacks the target.\nThis may also lower the target\u2019s Sp. Atk stat.",
        "type": "fairy",
        "category": "special",
        "power": 95,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "586",
        "name": "Boomburst",
        "description": "The user attacks everything around it\nwith the destructive power of a terrible,\nexplosive sound.",
        "type": "normal",
        "category": "special",
        "power": 140,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "587",
        "name": "Fairy Lock",
        "description": "By locking down the battlefield,\nthe user keeps all Pok\u00e9mon from\nfleeing during the next turn.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "588",
        "name": "King\u2019s Shield",
        "description": "The user takes a defensive stance while it protects\nitself from damage. It also harshly lowers the Attack\nstat of any attacker who makes direct contact.",
        "type": "steel",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "589",
        "name": "Play Nice",
        "description": "The user and the target become friends,\nand the target loses its will to fight.\nThis lowers the target\u2019s Attack stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "590",
        "name": "Confide",
        "description": "The user tells the target a secret, and the target\nloses its ability to concentrate. This lowers\nthe target\u2019s Sp. Atk stat.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "591",
        "name": "Diamond Storm",
        "description": "The user whips up a storm of diamonds\nto damage opposing Pok\u00e9mon. This may\nalso raise the user\u2019s Defense stat.",
        "type": "rock",
        "category": "physical",
        "power": 100,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "592",
        "name": "Steam Eruption",
        "description": "The user immerses the target in superheated steam.\nThis may also leave the target with a burn.",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "593",
        "name": "Hyperspace Hole",
        "description": "Using a hyperspace hole, the user appears\nright next to the target and strikes. This\nalso hits a target using Protect or Detect.",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "594",
        "name": "Water Shuriken",
        "description": "The user hits the target with throwing\nstars two to five times in a row.\nThis move always goes first.",
        "type": "water",
        "category": "special",
        "power": 15,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "595",
        "name": "Mystical Fire",
        "description": "The user attacks by breathing\na special, hot fire. This also\nlowers the target\u2019s Sp. Atk stat.",
        "type": "fire",
        "category": "special",
        "power": 75,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "596",
        "name": "Spiky Shield",
        "description": "In addition to protecting the user from attacks,\nthis move also damages any attacker who\nmakes direct contact.",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "597",
        "name": "Aromatic Mist",
        "description": "The user raises the Sp. Def stat of an ally\nPok\u00e9mon by using a mysterious aroma.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "598",
        "name": "Eerie Impulse",
        "description": "The user\u2019s body generates an eerie impulse.\nExposing the target to it harshly lowers\nthe target\u2019s Sp. Atk stat.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "599",
        "name": "Venom Drench",
        "description": "Opposing Pok\u00e9mon are drenched in an odd\npoisonous liquid. This lowers the Attack,\nSp. Atk, and Speed stats of a poisoned target.",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "600",
        "name": "Powder",
        "description": "The user covers the target in a powder\nthat explodes and damages the target\nif it uses a Fire-type move.",
        "type": "bug",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "601",
        "name": "Geomancy",
        "description": "The user absorbs energy and sharply raises\nits Sp. Atk, Sp. Def, and Speed stats\non the next turn.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "602",
        "name": "Magnetic Flux",
        "description": "The user manipulates magnetic fields,\nwhich raises the Defense and Sp. Def stats\nof ally Pok\u00e9mon with the Plus or Minus Ability.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "603",
        "name": "Happy Hour",
        "description": "Using Happy Hour doubles\nthe amount of prize money\nreceived after battle.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "604",
        "name": "Electric Terrain",
        "description": "The user electrifies the ground under\neveryone\u2019s feet for five turns.\nPok\u00e9mon on the ground no longer fall asleep.",
        "type": "electric",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "605",
        "name": "Dazzling Gleam",
        "description": "The user damages opposing Pok\u00e9mon\nby emitting a powerful flash.",
        "type": "fairy",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "606",
        "name": "Celebrate",
        "description": "The Pok\u00e9mon congratulates\nyou on your special day!",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "607",
        "name": "Hold Hands",
        "description": "The user and an ally hold hands.\nThis makes them very happy.",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 40
    },
    {
        "id": "608",
        "name": "Baby-Doll Eyes",
        "description": "The user stares at the target with its baby-doll\neyes, which lowers its Attack stat. This move\nalways goes first.",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 30
    },
    {
        "id": "609",
        "name": "Nuzzle",
        "description": "The user attacks by nuzzling its electrified\ncheeks against the target. This also leaves\nthe target with paralysis.",
        "type": "electric",
        "category": "physical",
        "power": 20,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "610",
        "name": "Hold Back",
        "description": "The user holds back when it attacks\nand the target is left with at least 1 HP.",
        "type": "normal",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "611",
        "name": "Infestation",
        "description": "The target is infested and attacked for\nfour to five turns.\nThe target can\u2019t flee during this time.",
        "type": "bug",
        "category": "special",
        "power": 20,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "612",
        "name": "Power-Up Punch",
        "description": "Striking opponents over and over makes\nthe user\u2019s fists harder.\nHitting a target raises the Attack stat.",
        "type": "fighting",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "613",
        "name": "Oblivion Wing",
        "description": "The user absorbs its target\u2019s HP.\nThe user\u2019s HP is restored by over half\nof the damage taken by the target.",
        "type": "flying",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "614",
        "name": "Thousand Arrows",
        "description": "This move also hits opposing Pok\u00e9mon\nthat are in the air. Those Pok\u00e9mon are\nknocked down to the ground.",
        "type": "ground",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "615",
        "name": "Thousand Waves",
        "description": "The user attacks with a wave\nthat crawls along the ground.\nThose hit can\u2019t flee from battle.",
        "type": "ground",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "616",
        "name": "Land\u2019s Wrath",
        "description": "The user gathers the energy of the land\nand focuses that power on opposing\nPok\u00e9mon to damage them.",
        "type": "ground",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "617",
        "name": "Light of Ruin",
        "description": "Drawing power from the Eternal Flower,\nthe user fires a powerful beam of light.\nThis also damages the user quite a lot.",
        "type": "fairy",
        "category": "special",
        "power": 140,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "618",
        "name": "Origin Pulse",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 110,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "619",
        "name": "Precipice Blades",
        "description": "Description not available",
        "type": "ground",
        "category": "physical",
        "power": 120,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "620",
        "name": "Dragon Ascent",
        "description": "Description not available",
        "type": "flying",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "621",
        "name": "Hyperspace Fury",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 100,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "622",
        "name": "Breakneck Blitz",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "623",
        "name": "Breakneck Blitz",
        "description": "Description not available",
        "type": "normal",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "624",
        "name": "All-Out Pummeling",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "625",
        "name": "All-Out Pummeling",
        "description": "Description not available",
        "type": "fighting",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "626",
        "name": "Supersonic Skystrike",
        "description": "Description not available",
        "type": "flying",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "627",
        "name": "Supersonic Skystrike",
        "description": "Description not available",
        "type": "flying",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "628",
        "name": "Acid Downpour",
        "description": "Description not available",
        "type": "poison",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "629",
        "name": "Acid Downpour",
        "description": "Description not available",
        "type": "poison",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "630",
        "name": "Tectonic Rage",
        "description": "Description not available",
        "type": "ground",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "631",
        "name": "Tectonic Rage",
        "description": "Description not available",
        "type": "ground",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "632",
        "name": "Continental Crush",
        "description": "Description not available",
        "type": "rock",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "633",
        "name": "Continental Crush",
        "description": "Description not available",
        "type": "rock",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "634",
        "name": "Savage Spin-Out",
        "description": "Description not available",
        "type": "bug",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "635",
        "name": "Savage Spin-Out",
        "description": "Description not available",
        "type": "bug",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "636",
        "name": "Never-Ending Nightmare",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "637",
        "name": "Never-Ending Nightmare",
        "description": "Description not available",
        "type": "ghost",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "638",
        "name": "Corkscrew Crash",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "639",
        "name": "Corkscrew Crash",
        "description": "Description not available",
        "type": "steel",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "640",
        "name": "Inferno Overdrive",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "641",
        "name": "Inferno Overdrive",
        "description": "Description not available",
        "type": "fire",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "642",
        "name": "Hydro Vortex",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "643",
        "name": "Hydro Vortex",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "644",
        "name": "Bloom Doom",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "645",
        "name": "Bloom Doom",
        "description": "Description not available",
        "type": "grass",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "646",
        "name": "Gigavolt Havoc",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "647",
        "name": "Gigavolt Havoc",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "648",
        "name": "Shattered Psyche",
        "description": "Description not available",
        "type": "psychic",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "649",
        "name": "Shattered Psyche",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "650",
        "name": "Subzero Slammer",
        "description": "Description not available",
        "type": "ice",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "651",
        "name": "Subzero Slammer",
        "description": "Description not available",
        "type": "ice",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "652",
        "name": "Devastating Drake",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "653",
        "name": "Devastating Drake",
        "description": "Description not available",
        "type": "dragon",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "654",
        "name": "Black Hole Eclipse",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "655",
        "name": "Black Hole Eclipse",
        "description": "Description not available",
        "type": "dark",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "656",
        "name": "Twinkle Tackle",
        "description": "Description not available",
        "type": "fairy",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "657",
        "name": "Twinkle Tackle",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "658",
        "name": "Catastropika",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 210,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "659",
        "name": "Shore Up",
        "description": "Description not available",
        "type": "ground",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "660",
        "name": "First Impression",
        "description": "Description not available",
        "type": "bug",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "661",
        "name": "Baneful Bunker",
        "description": "Description not available",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "662",
        "name": "Spirit Shackle",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "663",
        "name": "Darkest Lariat",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "664",
        "name": "Sparkling Aria",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "665",
        "name": "Ice Hammer",
        "description": "Description not available",
        "type": "ice",
        "category": "physical",
        "power": 100,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "666",
        "name": "Floral Healing",
        "description": "Description not available",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "667",
        "name": "High Horsepower",
        "description": "Description not available",
        "type": "ground",
        "category": "physical",
        "power": 95,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "668",
        "name": "Strength Sap",
        "description": "Description not available",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "669",
        "name": "Solar Blade",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 125,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "670",
        "name": "Leafage",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "671",
        "name": "Spotlight",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "672",
        "name": "Toxic Thread",
        "description": "Description not available",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "673",
        "name": "Laser Focus",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 30
    },
    {
        "id": "674",
        "name": "Gear Up",
        "description": "Description not available",
        "type": "steel",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "675",
        "name": "Throat Chop",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "676",
        "name": "Pollen Puff",
        "description": "Description not available",
        "type": "bug",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "677",
        "name": "Anchor Shot",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "678",
        "name": "Psychic Terrain",
        "description": "Description not available",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "679",
        "name": "Lunge",
        "description": "Description not available",
        "type": "bug",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "680",
        "name": "Fire Lash",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "681",
        "name": "Power Trip",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 20,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "682",
        "name": "Burn Up",
        "description": "Description not available",
        "type": "fire",
        "category": "special",
        "power": 130,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "683",
        "name": "Speed Swap",
        "description": "Description not available",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "684",
        "name": "Smart Strike",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 70,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "685",
        "name": "Purify",
        "description": "Description not available",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "686",
        "name": "Revelation Dance",
        "description": "Description not available",
        "type": "normal",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "687",
        "name": "Core Enforcer",
        "description": "Description not available",
        "type": "dragon",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "688",
        "name": "Trop Kick",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "689",
        "name": "Instruct",
        "description": "Description not available",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "690",
        "name": "Beak Blast",
        "description": "Description not available",
        "type": "flying",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "691",
        "name": "Clanging Scales",
        "description": "Description not available",
        "type": "dragon",
        "category": "special",
        "power": 110,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "692",
        "name": "Dragon Hammer",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "693",
        "name": "Brutal Swing",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "694",
        "name": "Aurora Veil",
        "description": "Description not available",
        "type": "ice",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "695",
        "name": "Sinister Arrow Raid",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 180,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "696",
        "name": "Malicious Moonsault",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 180,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "697",
        "name": "Oceanic Operetta",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 195,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "698",
        "name": "Guardian of Alola",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "699",
        "name": "Soul-Stealing 7-Star Strike",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 195,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "700",
        "name": "Stoked Sparksurfer",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 175,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "701",
        "name": "Pulverizing Pancake",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": 210,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "702",
        "name": "Extreme Evoboost",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "703",
        "name": "Genesis Supernova",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 185,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "704",
        "name": "Shell Trap",
        "description": "Description not available",
        "type": "fire",
        "category": "special",
        "power": 150,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "705",
        "name": "Fleur Cannon",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": 130,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "706",
        "name": "Psychic Fangs",
        "description": "Description not available",
        "type": "psychic",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "707",
        "name": "Stomping Tantrum",
        "description": "Description not available",
        "type": "ground",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "708",
        "name": "Shadow Bone",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "709",
        "name": "Accelerock",
        "description": "Description not available",
        "type": "rock",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "710",
        "name": "Liquidation",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "711",
        "name": "Prismatic Laser",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 160,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "712",
        "name": "Spectral Thief",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "713",
        "name": "Sunsteel Strike",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "714",
        "name": "Moongeist Beam",
        "description": "Description not available",
        "type": "ghost",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "715",
        "name": "Tearful Look",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "716",
        "name": "Zing Zap",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "717",
        "name": "Nature\u2019s Madness",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": null,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "718",
        "name": "Multi-Attack",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "719",
        "name": "10,000,000 Volt Thunderbolt",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 195,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "720",
        "name": "Mind Blown",
        "description": "Description not available",
        "type": "fire",
        "category": "special",
        "power": 150,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "721",
        "name": "Plasma Fists",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "722",
        "name": "Photon Geyser",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "723",
        "name": "Light That Burns the Sky",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 200,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "724",
        "name": "Searing Sunraze Smash",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 200,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "725",
        "name": "Menacing Moonraze Maelstrom",
        "description": "Description not available",
        "type": "ghost",
        "category": "special",
        "power": 200,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "726",
        "name": "Let\u2019s Snuggle Forever",
        "description": "Description not available",
        "type": "fairy",
        "category": "physical",
        "power": 190,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "727",
        "name": "Splintered Stormshards",
        "description": "Description not available",
        "type": "rock",
        "category": "physical",
        "power": 190,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "728",
        "name": "Clangorous Soulblaze",
        "description": "Description not available",
        "type": "dragon",
        "category": "special",
        "power": 185,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "729",
        "name": "Zippy Zap",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "730",
        "name": "Splishy Splash",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "731",
        "name": "Floaty Fall",
        "description": "Description not available",
        "type": "flying",
        "category": "physical",
        "power": 90,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "732",
        "name": "Pika Papow",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "733",
        "name": "Bouncy Bubble",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "734",
        "name": "Buzzy Buzz",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "735",
        "name": "Sizzly Slide",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "736",
        "name": "Glitzy Glow",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "737",
        "name": "Baddy Bad",
        "description": "Description not available",
        "type": "dark",
        "category": "special",
        "power": 80,
        "accuracy": 95,
        "pp": 15
    },
    {
        "id": "738",
        "name": "Sappy Seed",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 100,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "739",
        "name": "Freezy Frost",
        "description": "Description not available",
        "type": "ice",
        "category": "special",
        "power": 100,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "740",
        "name": "Sparkly Swirl",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": 120,
        "accuracy": 85,
        "pp": 5
    },
    {
        "id": "741",
        "name": "Veevee Volley",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": null,
        "accuracy": null,
        "pp": 20
    },
    {
        "id": "742",
        "name": "Double Iron Bash",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "743",
        "name": "Max Guard",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "744",
        "name": "Dynamax Cannon",
        "description": "Description not available",
        "type": "dragon",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "745",
        "name": "Snipe Shot",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "746",
        "name": "Jaw Lock",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "747",
        "name": "Stuff Cheeks",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "748",
        "name": "No Retreat",
        "description": "Description not available",
        "type": "fighting",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "749",
        "name": "Tar Shot",
        "description": "Description not available",
        "type": "rock",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "750",
        "name": "Magic Powder",
        "description": "Description not available",
        "type": "psychic",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "751",
        "name": "Dragon Darts",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "752",
        "name": "Teatime",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "753",
        "name": "Octolock",
        "description": "Description not available",
        "type": "fighting",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "754",
        "name": "Bolt Beak",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "755",
        "name": "Fishious Rend",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 85,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "756",
        "name": "Court Change",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "757",
        "name": "Max Flare",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": 100,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "758",
        "name": "Max Flutterby",
        "description": "Description not available",
        "type": "bug",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "759",
        "name": "Max Lightning",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "760",
        "name": "Max Strike",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "761",
        "name": "Max Knuckle",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "762",
        "name": "Max Phantasm",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "763",
        "name": "Max Hailstorm",
        "description": "Description not available",
        "type": "ice",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "764",
        "name": "Max Ooze",
        "description": "Description not available",
        "type": "poison",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "765",
        "name": "Max Geyser",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "766",
        "name": "Max Airstream",
        "description": "Description not available",
        "type": "flying",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "767",
        "name": "Max Starfall",
        "description": "Description not available",
        "type": "fairy",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "768",
        "name": "Max Wyrmwind",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "769",
        "name": "Max Mindstorm",
        "description": "Description not available",
        "type": "psychic",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "770",
        "name": "Max Rockfall",
        "description": "Description not available",
        "type": "rock",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "771",
        "name": "Max Quake",
        "description": "Description not available",
        "type": "ground",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "772",
        "name": "Max Darkness",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "773",
        "name": "Max Overgrowth",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "774",
        "name": "Max Steelspike",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 10,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "775",
        "name": "Clangorous Soul",
        "description": "Description not available",
        "type": "dragon",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "776",
        "name": "Body Press",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "777",
        "name": "Decorate",
        "description": "Description not available",
        "type": "fairy",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "778",
        "name": "Drum Beating",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "779",
        "name": "Snap Trap",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 35,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "780",
        "name": "Pyro Ball",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": 120,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "781",
        "name": "Behemoth Blade",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "782",
        "name": "Behemoth Bash",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "783",
        "name": "Aura Wheel",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 110,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "784",
        "name": "Breaking Swipe",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "785",
        "name": "Branch Poke",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "786",
        "name": "Overdrive",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "787",
        "name": "Apple Acid",
        "description": "Description not available",
        "type": "grass",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "788",
        "name": "Grav Apple",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "789",
        "name": "Spirit Break",
        "description": "Description not available",
        "type": "fairy",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "790",
        "name": "Strange Steam",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": 90,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "791",
        "name": "Life Dew",
        "description": "Description not available",
        "type": "water",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "792",
        "name": "Obstruct",
        "description": "Description not available",
        "type": "dark",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "793",
        "name": "False Surrender",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 80,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "794",
        "name": "Meteor Assault",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 150,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "795",
        "name": "Eternabeam",
        "description": "Description not available",
        "type": "dragon",
        "category": "special",
        "power": 160,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "796",
        "name": "Steel Beam",
        "description": "Description not available",
        "type": "steel",
        "category": "special",
        "power": 140,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "797",
        "name": "Expanding Force",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "798",
        "name": "Steel Roller",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 130,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "799",
        "name": "Scale Shot",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": 25,
        "accuracy": 90,
        "pp": 20
    },
    {
        "id": "800",
        "name": "Meteor Beam",
        "description": "Description not available",
        "type": "rock",
        "category": "special",
        "power": 120,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "801",
        "name": "Shell Side Arm",
        "description": "Description not available",
        "type": "poison",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "802",
        "name": "Misty Explosion",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "803",
        "name": "Grassy Glide",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "804",
        "name": "Rising Voltage",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "805",
        "name": "Terrain Pulse",
        "description": "Description not available",
        "type": "normal",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "806",
        "name": "Skitter Smack",
        "description": "Description not available",
        "type": "bug",
        "category": "physical",
        "power": 70,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "807",
        "name": "Burning Jealousy",
        "description": "Description not available",
        "type": "fire",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "808",
        "name": "Lash Out",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 75,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "809",
        "name": "Poltergeist",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 110,
        "accuracy": 90,
        "pp": 5
    },
    {
        "id": "810",
        "name": "Corrosive Gas",
        "description": "Description not available",
        "type": "poison",
        "category": "status",
        "power": null,
        "accuracy": 100,
        "pp": 40
    },
    {
        "id": "811",
        "name": "Coaching",
        "description": "Description not available",
        "type": "fighting",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "812",
        "name": "Flip Turn",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "813",
        "name": "Triple Axel",
        "description": "Description not available",
        "type": "ice",
        "category": "physical",
        "power": 20,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "814",
        "name": "Dual Wingbeat",
        "description": "Description not available",
        "type": "flying",
        "category": "physical",
        "power": 40,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "815",
        "name": "Scorching Sands",
        "description": "Description not available",
        "type": "ground",
        "category": "special",
        "power": 70,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "816",
        "name": "Jungle Healing",
        "description": "Description not available",
        "type": "grass",
        "category": "status",
        "power": null,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "817",
        "name": "Wicked Blow",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "818",
        "name": "Surging Strikes",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 25,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "819",
        "name": "Thunder Cage",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 80,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "820",
        "name": "Dragon Energy",
        "description": "Description not available",
        "type": "dragon",
        "category": "special",
        "power": 150,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "821",
        "name": "Freezing Glare",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "822",
        "name": "Fiery Wrath",
        "description": "Description not available",
        "type": "dark",
        "category": "special",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "823",
        "name": "Thunderous Kick",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "824",
        "name": "Glacial Lance",
        "description": "Description not available",
        "type": "ice",
        "category": "physical",
        "power": 130,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "825",
        "name": "Astral Barrage",
        "description": "Description not available",
        "type": "ghost",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "826",
        "name": "Eerie Spell",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "827",
        "name": "Dire Claw",
        "description": "Description not available",
        "type": "poison",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "828",
        "name": "Psyshield Bash",
        "description": "Description not available",
        "type": "psychic",
        "category": "physical",
        "power": 70,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "829",
        "name": "Power Shift",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "830",
        "name": "Stone Axe",
        "description": "Description not available",
        "type": "rock",
        "category": "physical",
        "power": 65,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "831",
        "name": "Springtide Storm",
        "description": "Description not available",
        "type": "fairy",
        "category": "special",
        "power": 100,
        "accuracy": 80,
        "pp": 5
    },
    {
        "id": "832",
        "name": "Mystical Power",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 70,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "833",
        "name": "Raging Fury",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "834",
        "name": "Wave Crash",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "835",
        "name": "Chloroblast",
        "description": "Description not available",
        "type": "grass",
        "category": "special",
        "power": 150,
        "accuracy": 95,
        "pp": 5
    },
    {
        "id": "836",
        "name": "Mountain Gale",
        "description": "Description not available",
        "type": "ice",
        "category": "physical",
        "power": 100,
        "accuracy": 85,
        "pp": 10
    },
    {
        "id": "837",
        "name": "Victory Dance",
        "description": "Description not available",
        "type": "fighting",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "838",
        "name": "Headlong Rush",
        "description": "Description not available",
        "type": "ground",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "839",
        "name": "Barb Barrage",
        "description": "Description not available",
        "type": "poison",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "840",
        "name": "Esper Wing",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "841",
        "name": "Bitter Malice",
        "description": "Description not available",
        "type": "ghost",
        "category": "special",
        "power": 75,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "842",
        "name": "Shelter",
        "description": "Description not available",
        "type": "steel",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "843",
        "name": "Triple Arrows",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "844",
        "name": "Infernal Parade",
        "description": "Description not available",
        "type": "ghost",
        "category": "special",
        "power": 60,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "845",
        "name": "Ceaseless Edge",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 65,
        "accuracy": 90,
        "pp": 15
    },
    {
        "id": "846",
        "name": "Bleakwind Storm",
        "description": "Description not available",
        "type": "flying",
        "category": "special",
        "power": 100,
        "accuracy": 80,
        "pp": 10
    },
    {
        "id": "847",
        "name": "Wildbolt Storm",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 100,
        "accuracy": 80,
        "pp": 10
    },
    {
        "id": "848",
        "name": "Sandsear Storm",
        "description": "Description not available",
        "type": "ground",
        "category": "special",
        "power": 100,
        "accuracy": 80,
        "pp": 10
    },
    {
        "id": "849",
        "name": "Lunar Blessing",
        "description": "Description not available",
        "type": "psychic",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 5
    },
    {
        "id": "850",
        "name": "Take Heart",
        "description": "Description not available",
        "type": "psychic",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "851",
        "name": "Tera Blast",
        "description": "Description not available",
        "type": "normal",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "852",
        "name": "Silk Trap",
        "description": "Description not available",
        "type": "bug",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "853",
        "name": "Axe Kick",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 120,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "854",
        "name": "Last Respects",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "855",
        "name": "Lumina Crash",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "856",
        "name": "Order Up",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "857",
        "name": "Jet Punch",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 60,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "858",
        "name": "Spicy Extract",
        "description": "Description not available",
        "type": "grass",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 15
    },
    {
        "id": "859",
        "name": "Spin Out",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "860",
        "name": "Population Bomb",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": 20,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "861",
        "name": "Ice Spinner",
        "description": "Description not available",
        "type": "ice",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "862",
        "name": "Glaive Rush",
        "description": "Description not available",
        "type": "dragon",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "863",
        "name": "Revival Blessing",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 1
    },
    {
        "id": "864",
        "name": "Salt Cure",
        "description": "Description not available",
        "type": "rock",
        "category": "physical",
        "power": 40,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "865",
        "name": "Triple Dive",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 30,
        "accuracy": 95,
        "pp": 10
    },
    {
        "id": "866",
        "name": "Mortal Spin",
        "description": "Description not available",
        "type": "poison",
        "category": "physical",
        "power": 30,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "867",
        "name": "Doodle",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": 0,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "868",
        "name": "Fillet Away",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "869",
        "name": "Kowtow Cleave",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 85,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "870",
        "name": "Flower Trick",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 70,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "871",
        "name": "Torch Song",
        "description": "Description not available",
        "type": "fire",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "872",
        "name": "Aqua Step",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "873",
        "name": "Raging Bull",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "874",
        "name": "Make It Rain",
        "description": "Description not available",
        "type": "steel",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "875",
        "name": "Psyblade",
        "description": "Description not available",
        "type": "psychic",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "876",
        "name": "Hydro Steam",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 80,
        "accuracy": 100,
        "pp": 15
    },
    {
        "id": "877",
        "name": "Ruination",
        "description": "Description not available",
        "type": "dark",
        "category": "special",
        "power": 1,
        "accuracy": 90,
        "pp": 10
    },
    {
        "id": "878",
        "name": "Collision Course",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "879",
        "name": "Electro Drift",
        "description": "Description not available",
        "type": "electric",
        "category": "special",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "880",
        "name": "Shed Tail",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "881",
        "name": "Chilly Reception",
        "description": "Description not available",
        "type": "ice",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "882",
        "name": "Tidy Up",
        "description": "Description not available",
        "type": "normal",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "883",
        "name": "Snowscape",
        "description": "Description not available",
        "type": "ice",
        "category": "status",
        "power": 0,
        "accuracy": null,
        "pp": 10
    },
    {
        "id": "884",
        "name": "Pounce",
        "description": "Description not available",
        "type": "bug",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "885",
        "name": "Trailblaze",
        "description": "Description not available",
        "type": "grass",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "886",
        "name": "Chilling Water",
        "description": "Description not available",
        "type": "water",
        "category": "special",
        "power": 50,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "887",
        "name": "Hyper Drill",
        "description": "Description not available",
        "type": "normal",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "888",
        "name": "Twin Beam",
        "description": "Description not available",
        "type": "psychic",
        "category": "special",
        "power": 40,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "889",
        "name": "Rage Fist",
        "description": "Description not available",
        "type": "ghost",
        "category": "physical",
        "power": 50,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "890",
        "name": "Armor Cannon",
        "description": "Description not available",
        "type": "fire",
        "category": "special",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "891",
        "name": "Bitter Blade",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": 90,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "892",
        "name": "Double Shock",
        "description": "Description not available",
        "type": "electric",
        "category": "physical",
        "power": 120,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "893",
        "name": "Gigaton Hammer",
        "description": "Description not available",
        "type": "steel",
        "category": "physical",
        "power": 160,
        "accuracy": 100,
        "pp": 5
    },
    {
        "id": "894",
        "name": "Comeuppance",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 1,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "895",
        "name": "Aqua Cutter",
        "description": "Description not available",
        "type": "water",
        "category": "physical",
        "power": 70,
        "accuracy": 100,
        "pp": 20
    },
    {
        "id": "896",
        "name": "Blazing Torque",
        "description": "Description not available",
        "type": "fire",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "897",
        "name": "Wicked Torque",
        "description": "Description not available",
        "type": "dark",
        "category": "physical",
        "power": 80,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "898",
        "name": "Noxious Torque",
        "description": "Description not available",
        "type": "poison",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "899",
        "name": "Combat Torque",
        "description": "Description not available",
        "type": "fighting",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10
    },
    {
        "id": "900",
        "name": "Magical Torque",
        "description": "Description not available",
        "type": "fairy",
        "category": "physical",
        "power": 100,
        "accuracy": 100,
        "pp": 10
    }
];