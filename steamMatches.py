from requests_html import HTMLSession
import requests
from bs4 import BeautifulSoup as BS
import re

def sendGames(playerId, numMatches):
    steamApiKey = "1352C13082943B1B20DB841C2034BB4D"

    session = HTMLSession()

    response = session.get(f'https://www.dotabuff.com/players/{playerId}/matches')

    html = BS(response.content, "html.parser")

    games = []

    for el in html.select(".cell-large > a"):

        num = el.get('href')
        reg = re.search(r"(\d+)", num).group(0)
        games.append(int(reg))

    dumpDict = []

    for i in range(numMatches):
        try:
            steam_response = session.get(f"https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id={games[i]}&key={steamApiKey}")
            dumpDict.append(steam_response.json())
        except:
            ...

    return dumpDict
