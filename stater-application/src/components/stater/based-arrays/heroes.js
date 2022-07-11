const heroes = [
  {
    id: 3,
    name: "Bane",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
  },
  {
    id: 10,
    name: "Morphling",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png",
  },
  {
    id: 46,
    name: "Templar Assasin",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png",
  },
  {
    id: 94,
    name: "Medusa",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png",
  },
  {
    id: 19,
    name: "Tiny",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
  },
  {
    id: 101,
    name: "Skywrath Mage",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png",
  },
  {
    id: 60,
    name: "Night Stalker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png",
  },
  {
    id: 16,
    name: "Sand King",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png",
  },
  {
    id: 126,
    name: "Void Spirit",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png",
  },
  {
    id: 56,
    name: "Clinkz",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png",
  },
  {
    id: 64,
    name: "Jakiro",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png",
  },
  {
    id: 13,
    name: "Puck",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png",
  },
  {
    id: 404,
    name: "Not Found",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png",
  },
  {
    id: 135,
    name: "Dawnbreaker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png",
  },
  {
    id: 100,
    name: "Dawnbreaker",
    urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png",
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
      urlPath: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png",
    }
  }
}
