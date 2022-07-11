const gameModes = [
  {
    id:22,
    name:"All Pick",
  },
  {
    id:4,
    name:"Single Draft",
  },
  {
    id:23,
    name:"Turbo",
  },
  {
    id:404,
    name:"None",
  },
];



export default function(id){
  try{
    return gameModes.filter(mode => mode.id === id)[0].name
  } catch(e){
    console.log({
      text: "game-mode-not-found-error",
      error_text: e.message,
      id: id,
    })
    return gameModes.filter(mode => mode.id === 404)[0].name  + ": " + id
  }
}
