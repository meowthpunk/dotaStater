const heroes = [
  {
    id: 1,
    name: "Antimage",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
  },
  {
    id: 2,
    name: "Axe",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
  },
  {
    id: 3,
    name: "Bane",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
  },
  {
    id: 4,
    name: "Bloodseeker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png",
  },
  {
    id: 5,
    name: "Crystal Maiden",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
  },
  {
    id: 6,
    name: "Drow Ranger",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png",
  },
  {
    id: 7,
    name: "Earthshaker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png",
  },
  {
    id: 8,
    name: "Juggernaut",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png",
  },
  {
    id: 9,
    name: "Mirana",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png",
  },
  {
    id: 10,
    name: "Morphling",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png",
  },
  {
    id: 11,
    name: "Shadow Fiend",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png",
  },
  {
    id: 12,
    name: "Phantom Lancer",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png",
  },
  {
    id: 13,
    name: "Puck",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png",
  },
  {
    id: 14,
    name: "Pudge",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png",
  },
  {
    id: 15,
    name: "Razor",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png",
  },
  {
    id: 16,
    name: "Sand King",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png",
  },
  {
    id: 17,
    name: "Storm Spirit",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png",
  },
  {
    id: 18,
    name: "Sven",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png",
  },
  {
    id: 19,
    name: "Tiny",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
  },
  {
    id: 20,
    name: "Vengeful Spirit",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png",
  },
  {
    id: 21,
    name: "Windrunner",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png",
  },
  {
    id: 22,
    name: "Zeus",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png",
  },
  {
    id: 23,
    name: "Kunkka",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png",
  },
  {
    id: 25,
    name: "Lina",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png",
  },
  {
    id: 26,
    name: "Lion",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png",
  },
  {
    id: 27,
    name: "Shadow Shaman",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png",
  },
  {
    id: 28,
    name: "Slardar",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png",
  },
  {
    id: 29,
    name: "Tidehunter",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png",
  },
  {
    id: 30,
    name: "Witch Doctor",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png",
  },
  {
    id: 31,
    name: "Lich",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png",
  },
  {
    id: 32,
    name: "Riki",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png",
  },
  {
    id: 33,
    name: "Enigma",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png",
  },
  {
    id: 34,
    name: "Tinker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png",
  },
  {
    id: 35,
    name: "Sniper",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png",
  },
  {
    id: 36,
    name: "Necrophos",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png",
  },
  {
    id: 37,
    name: "Warlock",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png",
  },
  {
    id: 38,
    name: "Beastmaster",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png",
  },
  {
    id: 39,
    name: "Queen of Pain",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png",
  },
  {
    id: 40,
    name: "Venomancer",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png",
  },
  {
    id: 41,
    name: "Faceless Void",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png",
  },
  {
    id: 42,
    name: "Wraith King",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png",
  },
  {
    id: 43,
    name: "Death Prophet",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png",
  },
  {
    id: 44,
    name: "Phantom Assassin",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png",
  },
  {
    id: 45,
    name: "Pugna",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png",
  },
  {
    id: 46,
    name: "Templar Assasin",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png",
  },
  {
    id: 47,
    name: "Viper",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png",
  },
  {
    id: 48,
    name: "Luna",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png",
  },
  {
    id: 49,
    name: "Dragon Knight",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png",
  },
  {
    id: 50,
    name: "Dazzle",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png",
  },
  {
    id: 51,
    name: "Clockwerk",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png",
  },
  {
    id: 52,
    name: "Leshrac",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png",
  },
  {
    id: 53,
    name: "Natures Prophet",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png",
  },
  {
    id: 54,
    name: "Life Stealer",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png",
  },
  {
    id: 55,
    name: "Dark Seer",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png",
  },
  {
    id: 56,
    name: "Clinkz",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png",
  },
  {
    id: 57,
    name: "Omniknight",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png",
  },
  {
    id: 58,
    name: "Enchantress",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png",
  },
  {
    id: 59,
    name: "Huskar",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png",
  },
  {
    id: 60,
    name: "Night Stalker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png",
  },
  {
    id: 61,
    name: "Broodmother",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png",
  },
  {
    id: 62,
    name: "Bounty Hunter",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png",
  },
  {
    id: 63,
    name: "Weaver",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png",
  },
  {
    id: 64,
    name: "Jakiro",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png",
  },
  {
    id: 65,
    name: "Batrider",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png",
  },
  {
    id: 66,
    name: "Chen",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png",
  },
  {
    id: 67,
    name: "Spectre",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png",
  },
  {
    id: 68,
    name: "Ancient Apparition",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png",
  },
  {
    id: 70,
    name: "Ursa",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png",
  },
  {
    id: 71,
    name: "Spirit Breaker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png",
  },
  {
    id: 72,
    name: "Gyrocopter",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png",
  },
  {
    id: 73,
    name: "Alchemist",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png",
  },
  {
    id: 74,
    name: "Invoker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
  },
  {
    id: 75,
    name: "Silencer",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png",
  },
  {
    id: 76,
    name: "Outworld Destroyer",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png",
  },
  {
    id: 77,
    name: "Lycan",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png",
  },
  {
    id: 78,
    name: "Brewmaster",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png",
  },
  {
    id: 79,
    name: "Shadow Demon",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png",
  },
  {
    id: 80,
    name: "Lone Druid",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png",
  },
  {
    id: 81,
    name: "Chaos Knight",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png",
  },
  {
    id: 82,
    name: "Meepo",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png",
  },
  {
    id: 83,
    name: "Treant Protector",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png",
  },
  {
    id: 84,
    name: "Ogre Magi",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png",
  },
  {
    id: 85,
    name: "Undying",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png",
  },
  {
    id: 86,
    name: "Rubick",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
  },
  {
    id: 87,
    name: "Disruptor",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png",
  },
  {
    id: 88,
    name: "Nyx Assassin",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png",
  },
  {
    id: 89,
    name: "Naga Siren",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png",
  },
  {
    id: 90,
    name: "Keeper of the Light",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png",
  },
  {
    id: 91,
    name: "IO",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png",
  },
  {
    id: 92,
    name: "Visage",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png",
  },
  {
    id: 93,
    name: "Slark",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png",
  },
  {
    id: 94,
    name: "Medusa",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png",
  },
  {
    id: 95,
    name: "Troll Warlord",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png",
  },
  {
    id: 96,
    name: "Centaur Warruner",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png",
  },
  {
    id: 97,
    name: "Magnus",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png",
  },
  {
    id: 98,
    name: "Timber saw",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png",
  },
  {
    id: 99,
    name: "Bristleback",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png",
  },
  {
    id: 100,
    name: "Tusk",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png",
  },
  {
    id: 101,
    name: "Skywrath Mage",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png",
  },
  {
    id: 102,
    name: "Abaddon",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png",
  },
  {
    id: 103,
    name: "Elder Titan",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png",
  },
  {
    id: 106,
    name: "Ember Spirit",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png",
  },
  {
    id: 107,
    name: "Earth Spirit",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png",
  },
  {
    id: 109,
    name: "Terrorblade",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png",
  },
  {
    id: 110,
    name: "Phoenix",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png",
  },
  {
    id: 111,
    name: "Oracle",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png",
  },
  {
    id: 105,
    name: "Techies",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png",
  },
  {
    id: 112,
    name: "Winter Wyvern",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png",
  },
  {
    id: 113,
    name: "Arc Warden",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png",
  },
  {
    id: 114,
    name: "Monkey King",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png",
  },
  {
    id: 120,
    name: "Pangolier",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png",
  },
  {
    id: 119,
    name: "Dark Willow",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png",
  },
  {
    id: 121,
    name: "Grimstroke",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png",
  },
  {
    id: 129,
    name: "Mars",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png",
  },
  {
    id: 126,
    name: "Void Spirit",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png",
  },
  {
    id: 128,
    name: "Snapfire",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png",
  },
  {
    id: 123,
    name: "Hoodwink",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png",
  },
  {
    id: 135,
    name: "Dawnbreaker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png",
  },
  {
    id: 136,
    name: "Marci",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png",
  },
  {
    id: 137,
    name: "Primal Beast",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png",
  },
];

export default function(id){
  let filt = heroes.filter(hero => hero.id === id)
  if (filt.length > 0){
    return filt[0]
  } else {
    return {
      id: 404,
      name: "Not Found: " + id,
      urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png",
    }
  }
}

function sortedHeroList(){
  function SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
  }
  return heroes.sort(SortArray)
}

export {
  heroes,
  sortedHeroList,
}
