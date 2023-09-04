const itemsData = [
    {
        "id": "000",
        "name": "Select an Item",
        "description": "No description"
    },
    {
        "id": "017",
        "name": "Potion",
        "description": "A spray-type medicine for treating\nwounds. It can be used to restore\n20 HP to an injured Pok\u00e9mon."
    },
    {
        "id": "028",
        "name": "Revive",
        "description": "A medicine that can revive fainted\nPok\u00e9mon. It also restores half of\na fainted Pok\u00e9mon\u2019s maximum HP."
    },
    {
        "id": "029",
        "name": "Max Revive",
        "description": "A medicine that can revive fainted\nPok\u00e9mon. It also fully restores a\nfainted Pok\u00e9mon\u2019s maximum HP."
    },
    {
        "id": "033",
        "name": "Moomoo Milk",
        "description": "A bottle of highly nutritious milk.\nWhen consumed, it restores\n100 HP to an injured Pok\u00e9mon."
    },
    {
        "id": "043",
        "name": "Berry Juice",
        "description": "A 100 percent pure juice made of Berries.\nWhen consumed, it restores\n20 HP to an injured Pok\u00e9mon."
    },
    {
        "id": "044",
        "name": "Sacred Ash",
        "description": "This rare ash can revive all fainted\nPok\u00e9mon in a party. In doing so, it\nalso fully restores their maximum HP."
    },
    {
        "id": "072",
        "name": "Red Shard",
        "description": "A small red shard. It appears\nto be a fragment of some sort\nof implement made long ago."
    },
    {
        "id": "073",
        "name": "Blue Shard",
        "description": "A small blue shard. It appears\nto be a fragment of some sort\nof implement made long ago."
    },
    {
        "id": "074",
        "name": "Yellow Shard",
        "description": "A small yellow shard. It appears\nto be a fragment of some sort\nof implement made long ago."
    },
    {
        "id": "075",
        "name": "Green Shard",
        "description": "A small green shard. It appears\nto be a fragment of some sort\nof implement made long ago."
    },
    {
        "id": "080",
        "name": "Sun Stone",
        "description": "A peculiar stone that can make\ncertain species of Pok\u00e9mon evolve.\nIt burns as red as the evening sun."
    },
    {
        "id": "081",
        "name": "Moon Stone",
        "description": "A peculiar stone that can make\ncertain species of Pok\u00e9mon evolve.\nIt is as black as the night sky."
    },
    {
        "id": "086",
        "name": "Tiny Mushroom",
        "description": "A very small and rare mushroom.\nIt\u2019s popular with a certain class of\ncollectors and sought out by them."
    },
    {
        "id": "087",
        "name": "Big Mushroom",
        "description": "A very large and rare mushroom.\nIt\u2019s popular with a certain class of\ncollectors and sought out by them."
    },
    {
        "id": "088",
        "name": "Pearl",
        "description": "A rather small pearl that has a\nvery nice silvery sheen to it.\nIt can be sold cheaply to shops."
    },
    {
        "id": "089",
        "name": "Big Pearl",
        "description": "A rather large pearl that has a very nice silvery\nsheen. It can be sold to shops for a high price."
    },
    {
        "id": "090",
        "name": "Stardust",
        "description": "Lovely, red sand that flows between\nthe fingers with a loose, silky feel.\nIt can be sold at a high price to shops."
    },
    {
        "id": "091",
        "name": "Star Piece",
        "description": "A small shard of a beautiful gem that\ndemonstrates a distinctly red sparkle.\nIt can be sold at a high price to shops."
    },
    {
        "id": "092",
        "name": "Nugget",
        "description": "A nugget of the purest gold that gives\noff a lustrous gleam in direct light.\nIt can be sold at a high price to shops."
    },
    {
        "id": "093",
        "name": "Heart Scale",
        "description": "A pretty, heart-shaped scale that is\nextremely rare. It glows faintly with\nall of the colors of the rainbow."
    },
    {
        "id": "094",
        "name": "Honey",
        "description": "A sweet honey with a lush aroma that\nattracts wild Pok\u00e9mon when it is used\nin tall grass, in caves, or on special trees."
    },
    {
        "id": "106",
        "name": "Rare Bone",
        "description": "A rare bone that is extremely valuable\nfor the study of Pok\u00e9mon archeology.\nIt can be sold for a high price to shops."
    },
    {
        "id": "110",
        "name": "Oval Stone",
        "description": "A peculiar stone that can make\ncertain species of Pok\u00e9mon evolve.\nIt\u2019s as round as a Pok\u00e9mon Egg."
    },
    {
        "id": "126",
        "name": "Cheri Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can recover\nfrom paralysis on its own in battle."
    },
    {
        "id": "127",
        "name": "Chesto Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can recover\nfrom sleep on its own in battle."
    },
    {
        "id": "128",
        "name": "Pecha Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can recover\nfrom poisoning on its own in battle."
    },
    {
        "id": "129",
        "name": "Rawst Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can recover\nfrom a burn on its own in battle."
    },
    {
        "id": "130",
        "name": "Aspear Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can recover\nfrom being frozen on its own in battle."
    },
    {
        "id": "131",
        "name": "Leppa Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can restore\n10 PP to a depleted move during battle."
    },
    {
        "id": "132",
        "name": "Oran Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can restore its\nown HP by 10 points during battle."
    },
    {
        "id": "133",
        "name": "Persim Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can recover\nfrom confusion on its own in battle."
    },
    {
        "id": "134",
        "name": "Lum Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can recover\nfrom any status condition during battle."
    },
    {
        "id": "135",
        "name": "Sitrus Berry",
        "description": "A Berry to be consumed by Pok\u00e9mon.\nIf a Pok\u00e9mon holds one, it can restore its\nown HP by a small amount during battle."
    },
    {
        "id": "161",
        "name": "Occa Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Fire-type attack."
    },
    {
        "id": "162",
        "name": "Passho Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Water-type attack."
    },
    {
        "id": "163",
        "name": "Wacan Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Electric-type attack."
    },
    {
        "id": "164",
        "name": "Rindo Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Grass-type attack."
    },
    {
        "id": "165",
        "name": "Yache Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Ice-type attack."
    },
    {
        "id": "166",
        "name": "Chople Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Fighting-type attack."
    },
    {
        "id": "167",
        "name": "Kebia Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Poison-type attack."
    },
    {
        "id": "168",
        "name": "Shuca Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Ground-type attack."
    },
    {
        "id": "169",
        "name": "Coba Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Flying-type attack."
    },
    {
        "id": "170",
        "name": "Payapa Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Psychic-type attack."
    },
    {
        "id": "171",
        "name": "Tanga Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Bug-type attack."
    },
    {
        "id": "172",
        "name": "Charti Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Rock-type attack."
    },
    {
        "id": "173",
        "name": "Kasib Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Ghost-type attack."
    },
    {
        "id": "174",
        "name": "Haban Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Dragon-type attack."
    },
    {
        "id": "175",
        "name": "Colbur Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Dark-type attack."
    },
    {
        "id": "176",
        "name": "Babiri Berry",
        "description": "If held by a Pok\u00e9mon, this Berry will\nlessen the damage taken from one\nsupereffective Steel-type attack."
    },
    {
        "id": "177",
        "name": "Chilan Berry",
        "description": "If held by a Pok\u00e9mon, this Berry\nwill lessen the damage taken\nfrom one Normal-type attack."
    },
    {
        "id": "190",
        "name": "Bright Powder",
        "description": "An item to be held by a Pok\u00e9mon.\nIt casts a tricky glare that lowers\nthe opposing Pok\u00e9mon\u2019s accuracy."
    },
    {
        "id": "194",
        "name": "Quick Claw",
        "description": "An item to be held by a Pok\u00e9mon.\nThis light, sharp claw lets the\nbearer move first occasionally."
    },
    {
        "id": "196",
        "name": "Mental Herb",
        "description": "An item to be held by a Pok\u00e9mon.\nIt snaps the holder out of infatuation.\nIt can be used only once."
    },
    {
        "id": "198",
        "name": "King\u2019s Rock",
        "description": "An item to be held by a Pok\u00e9mon.\nWhen the holder successfully inflicts\ndamage, the target may also flinch."
    },
    {
        "id": "199",
        "name": "Silver Powder",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a shiny, silver powder that will\nboost the power of Bug-type moves."
    },
    {
        "id": "201",
        "name": "Cleanse Tag",
        "description": "An item to be held by a Pok\u00e9mon.\nIt helps keep wild Pok\u00e9mon away if\nthe holder is the head of the party."
    },
    {
        "id": "203",
        "name": "Deep Sea Tooth",
        "description": "An item to be held by Clamperl.\nThis fang gleams a sharp silver and\nraises the holder\u2019s Sp. Atk stat."
    },
    {
        "id": "204",
        "name": "Deep Sea Scale",
        "description": "An item to be held by Clamperl.\nThis scale shines with a faint pink and\nraises the holder\u2019s Sp. Def stat."
    },
    {
        "id": "205",
        "name": "Smoke Ball",
        "description": "An item to be held by a Pok\u00e9mon.\nIt enables the holder to flee from any\nwild Pok\u00e9mon encounter without fail."
    },
    {
        "id": "206",
        "name": "Everstone",
        "description": "An item to be held by a Pok\u00e9mon.\nA Pok\u00e9mon holding this peculiar\nstone is prevented from evolving."
    },
    {
        "id": "207",
        "name": "Focus Band",
        "description": "An item to be held by a Pok\u00e9mon.\nThe holder may endure a potential\nKO attack, leaving it with just 1 HP."
    },
    {
        "id": "208",
        "name": "Lucky Egg",
        "description": "An item to be held by a Pok\u00e9mon.\nIt\u2019s an egg filled with happiness that\nearns extra Exp. Points in battle."
    },
    {
        "id": "210",
        "name": "Metal Coat",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a special metallic film that can\nboost the power of Steel-type moves."
    },
    {
        "id": "211",
        "name": "Leftovers",
        "description": "An item to be held by a Pok\u00e9mon.\nThe holder\u2019s HP is slowly but steadily\nrestored throughout every battle."
    },
    {
        "id": "212",
        "name": "Dragon Scale",
        "description": "A very tough and inflexible scale.\nDragon-type Pok\u00e9mon may be\nholding this item when caught."
    },
    {
        "id": "213",
        "name": "Light Ball",
        "description": "An item to be held by Pikachu.\nIt\u2019s a puzzling orb that boosts\nits Attack and Sp. Atk stats."
    },
    {
        "id": "214",
        "name": "Soft Sand",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a loose, silky sand that boosts\nthe power of Ground-type moves."
    },
    {
        "id": "215",
        "name": "Hard Stone",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a durable stone that boosts\nthe power of Rock-type moves."
    },
    {
        "id": "216",
        "name": "Miracle Seed",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a seed imbued with life force that\nboosts the power of Grass-type moves."
    },
    {
        "id": "217",
        "name": "Black Glasses",
        "description": "An item to be held by a Pok\u00e9mon.\nA pair of shady-looking glasses that\nboost the power of Dark-type moves."
    },
    {
        "id": "218",
        "name": "Black Belt",
        "description": "An item to be held by a Pok\u00e9mon.\nThis belt helps the wearer to focus and\nboosts the power of Fighting-type moves."
    },
    {
        "id": "219",
        "name": "Magnet",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a powerful magnet that boosts\nthe power of Electric-type moves."
    },
    {
        "id": "220",
        "name": "Mystic Water",
        "description": "An item to be held by a Pok\u00e9mon.\nThis teardrop-shaped gem boosts\nthe power of Water-type moves."
    },
    {
        "id": "221",
        "name": "Sharp Beak",
        "description": "An item to be held by a Pok\u00e9mon.\nIt\u2019s a long, sharp beak that boosts\nthe power of Flying-type moves."
    },
    {
        "id": "222",
        "name": "Poison Barb",
        "description": "An item to be held by a Pok\u00e9mon.\nThis small, poisonous barb boosts\nthe power of Poison-type moves."
    },
    {
        "id": "223",
        "name": "Never-Melt Ice",
        "description": "An item to be held by a Pok\u00e9mon.\nIt\u2019s a piece of ice that repels heat\neffects and boosts Ice-type moves."
    },
    {
        "id": "224",
        "name": "Spell Tag",
        "description": "An item to be held by a Pok\u00e9mon.\nIt\u2019s a sinister, eerie tag that boosts\nthe power of Ghost-type moves."
    },
    {
        "id": "225",
        "name": "Twisted Spoon",
        "description": "An item to be held by a Pok\u00e9mon.\nThis spoon is imbued with telekinetic\npower and boosts Psychic-type moves."
    },
    {
        "id": "226",
        "name": "Charcoal",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a combustible fuel that boosts\nthe power of Fire-type moves."
    },
    {
        "id": "227",
        "name": "Dragon Fang",
        "description": "An item to be held by a Pok\u00e9mon.\nThis hard and sharp fang boosts\nthe power of Dragon-type moves."
    },
    {
        "id": "228",
        "name": "Silk Scarf",
        "description": "An item to be held by a Pok\u00e9mon.\nIt\u2019s a sumptuous scarf that boosts\nthe power of Normal-type moves."
    },
    {
        "id": "229",
        "name": "Upgrade",
        "description": "A transparent device somehow\nfilled with all sorts of data.\nIt was produced by Silph Co."
    },
    {
        "id": "233",
        "name": "Lucky Punch",
        "description": "An item to be held by Chansey.\nThis pair of lucky boxing gloves will\nboost Chansey\u2019s critical-hit ratio."
    },
    {
        "id": "234",
        "name": "Metal Powder",
        "description": "An item to be held by Ditto.\nExtremely fine yet hard, this odd\npowder boosts the Defense stat."
    },
    {
        "id": "235",
        "name": "Thick Club",
        "description": "An item to be held by Cubone or\nMarowak. It is a hard bone of some\nsort that boosts the Attack stat."
    },
    {
        "id": "236",
        "name": "Leek",
        "description": "An item to be held by Farfetch\u2019d.\nThis very long and stiff stalk of\nleek boosts its critical-hit ratio."
    },
    {
        "id": "242",
        "name": "Wide Lens",
        "description": "An item to be held by a Pok\u00e9mon.\nIt\u2019s a magnifying lens that slightly\nboosts the accuracy of moves."
    },
    {
        "id": "245",
        "name": "Expert Belt",
        "description": "An item to be held by a Pok\u00e9mon.\nIt\u2019s a well-worn belt that slightly boosts\nthe power of supereffective moves."
    },
    {
        "id": "246",
        "name": "Light Clay",
        "description": "An item to be held by a Pok\u00e9mon.\nProtective moves like Light Screen\nand Reflect will be effective longer."
    },
    {
        "id": "247",
        "name": "Life Orb",
        "description": "An item to be held by a Pok\u00e9mon.\nIt boosts the power of moves, but\nat the cost of some HP on each hit."
    },
    {
        "id": "248",
        "name": "Power Herb",
        "description": "A single-use item to be held by a Pok\u00e9mon.\nIt allows the holder to immediately use a\nmove that normally requires a turn to charge."
    },
    {
        "id": "249",
        "name": "Toxic Orb",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a bizarre orb that will badly\npoison the holder during battle."
    },
    {
        "id": "250",
        "name": "Flame Orb",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is a bizarre orb that will afflict the\nholder with a burn during battle."
    },
    {
        "id": "251",
        "name": "Quick Powder",
        "description": "An item to be held by Ditto.\nExtremely fine yet hard, this odd\npowder boosts the Speed stat."
    },
    {
        "id": "254",
        "name": "Metronome",
        "description": "An item to be held by a Pok\u00e9mon.\nIt boosts moves used consecutively,\nbut only until a different move is used."
    },
    {
        "id": "255",
        "name": "Iron Ball",
        "description": "An item to be held by a Pok\u00e9mon.\nIt lowers Speed and allows Ground-type\nmoves to hit Flying-type and levitating holders."
    },
    {
        "id": "256",
        "name": "Lagging Tail",
        "description": "An item to be held by a Pok\u00e9mon.\nIt is tremendously heavy and makes\nthe holder move slower than usual."
    },
    {
        "id": "258",
        "name": "Black Sludge",
        "description": "An item to be held by a Pok\u00e9mon.\nIt gradually restores HP to Poison-type\nPok\u00e9mon. It damages any other type."
    },
    {
        "id": "263",
        "name": "Grip Claw",
        "description": "An item to be held by a Pok\u00e9mon.\nIt extends the duration of multi-turn\nattacks like Bind and Wrap."
    },
    {
        "id": "265",
        "name": "Sticky Barb",
        "description": "An item to be held by a Pok\u00e9mon.\nIt damages the holder every turn and may\nlatch on to Pok\u00e9mon that touch the holder."
    },
    {
        "id": "272",
        "name": "Shed Shell",
        "description": "An item to be held by a Pok\u00e9mon.\nThis discarded carapace enables the\nholder to switch out of battle without fail."
    },
    {
        "id": "273",
        "name": "Big Root",
        "description": "An item to be held by a Pok\u00e9mon.\nIt boosts the power of HP-stealing\nmoves so the holder recovers more HP."
    },
    {
        "id": "299",
        "name": "Electirizer",
        "description": "A box packed with a tremendous\namount of electric energy.\nIt\u2019s loved by a certain Pok\u00e9mon."
    },
    {
        "id": "300",
        "name": "Magmarizer",
        "description": "A box packed with a tremendous\namount of magma energy.\nIt\u2019s loved by a certain Pok\u00e9mon."
    },
    {
        "id": "303",
        "name": "Razor Claw",
        "description": "An item to be held by a Pok\u00e9mon.\nThis sharply hooked claw increases\nthe holder\u2019s critical-hit ratio."
    },
    {
        "id": "304",
        "name": "Razor Fang",
        "description": "An item to be held by a Pok\u00e9mon.\nWhen the holder successfully inflicts\ndamage, the target may also flinch."
    },
    {
        "id": "584",
        "name": "Air Balloon",
        "description": "An item to be held by a Pok\u00e9mon.\nThe holder will float in the air until hit.\nOnce hit, this item will burst."
    },
    {
        "id": "588",
        "name": "Absorb Bulb",
        "description": "An item to be held by a Pok\u00e9mon.\nIt boosts Sp. Atk if hit with a Water-\ntype attack. It can only be used once."
    },
    {
        "id": "589",
        "name": "Cell Battery",
        "description": "An item to be held by a Pok\u00e9mon.\nIt boosts Attack if hit with an Electric-\ntype attack. It can only be used once."
    },
    {
        "id": "612",
        "name": "Pretty Feather",
        "description": "Though this feather is beautiful,\nit\u2019s just a regular feather and\nhas no effect on Pok\u00e9mon."
    },
    {
        "id": "621",
        "name": "Balm Mushroom",
        "description": "A rare mushroom that gives off\na nice fragrance. It can be sold at\na high price to shops."
    },
    {
        "id": "622",
        "name": "Big Nugget",
        "description": "A big nugget of pure gold that gives\noff a lustrous gleam. It can be sold\nat a high price to shops."
    },
    {
        "id": "624",
        "name": "Comet Shard",
        "description": "A shard that fell to the ground\nwhen a comet approached. It can\nbe sold at a high price to shops."
    },
    {
        "id": "688",
        "name": "Luminous Moss",
        "description": "An item to be held by a Pok\u00e9mon.\nIt boosts Sp. Def if hit with a Water-\ntype attack. It can only be used once."
    },
    {
        "id": "689",
        "name": "Snowball",
        "description": "An item to be held by a Pok\u00e9mon.\nIt boosts Attack if hit with an Ice-type\nattack. It can only be used once."
    },
    {
        "id": "898",
        "name": "Electric Seed",
        "description": null
    },
    {
        "id": "899",
        "name": "Psychic Seed",
        "description": null
    },
    {
        "id": "900",
        "name": "Misty Seed",
        "description": null
    },
    {
        "id": "901",
        "name": "Grassy Seed",
        "description": null
    }
];