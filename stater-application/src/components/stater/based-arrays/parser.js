async function parser(userId, numMatches){

  var data = { "userId" : userId , "numMatches": numMatches};
  console.log("123")
  const url = new URL("http://localhost:8080/shared")
  for (let k in data) { url.searchParams.append(k, data[k]); }
  const responce = await fetch(url,{
    // mode: 'no-cors'
    // useCredentails: true
  })
  // console.log(responce.json())
  return responce.json()
}

export default parser;
