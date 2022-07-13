async function parser(userId, numMatches, heroId, gameModeId){

  var data = {
    "userId" : userId,
    "numMatches": numMatches,
    "heroId": heroId,
    "gameModeId": gameModeId,
  };
  console.log("123")
  const url = new URL("http://localhost:8080/shared")
  for (let k in data) { url.searchParams.append(k, data[k]); }
  const responce = await fetch(url,{
    // mode: 'no-cors'
    // useCredentails: true
  })

  return responce.json()
}

export default parser;
