const lobbyTypes = [
  {
    id: 7,
    name: "Ranked",
  },
  {
    id: 0,
    name: "Normal",
  },
  {
    id: 404,
    name: "Not Found",
  },
]

export default function(id){
  try{
    return lobbyTypes.filter(type => type.id === id)[0].name
  } catch(e){
    console.log({
      text: "lobby-type-not-found-error",
      error_text: e.message,
      id: id,
    })
    return lobbyTypes.filter(type => type.id === 404)[0].name + ": " +id
  }
}
