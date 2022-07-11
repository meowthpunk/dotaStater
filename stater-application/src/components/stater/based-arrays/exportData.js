import parser from './parser.js'
import durationNormalizer from './durationNormalizer.js'
import modeOfGame from './modeOfGame.js'
import typeOfLobby from './typeOfLobby.js'


async function userInfoDump(){
  const account_id = 101356886
  const num_matches = 5
  let games = await parser(account_id, num_matches)
  const matchesDump = []

  for (let i = 0; i < games.games.length; i++) {
    const res = games.games[i].result
    console.log(res)
    console.log(123)
    const players = res.players

    const playerFilter = players.filter(player => player.account_id ==account_id)

    if (playerFilter.length > 0) {
      let isRadiant = false
      for (let slot = 0; slot < 5; slot++){
        if (playerFilter[0].player_slot===slot){
          isRadiant = true
        }
      }

      matchesDump.push({
        matchInfo: {
          isWin: (isRadiant === res.radiant_win),
          settings:{
            type: typeOfLobby(res.lobby_type),
            mode: modeOfGame(res.game_mode),
            duration: durationNormalizer(res.duration),
          }
        },
        heroInfo: {
          id: playerFilter[0].hero_id,
          statistic: {
            kda: {
              kills: playerFilter[0].kills,
              deaths: playerFilter[0].deaths,
              assists: playerFilter[0].assists,
            },
          },
        },
      })
    }
  }



  const userInfoDump = {
    matches: matchesDump,
  };
  console.log(userInfoDump)
  return userInfoDump
}

export default userInfoDump();
