from requests_html import HTMLSession
import requests
from bs4 import BeautifulSoup as BS
import re
import json
# from hui import getMatches
# from random_proxies import random_proxy
# import random
from random_user_agent.user_agent import UserAgent
from random_user_agent.params import SoftwareName, OperatingSystem
from db_matches import getDBMatches

def sendGames(playerId, numMatches, heroId):
    steamApiKey = "1352C13082943B1B20DB841C2034BB4D"



    asession = HTMLSession()
    # xsession = AsyncHTMLSession()
    # print(1)
    # response = asession.get(f'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key={steamApiKey}&account_id={playerId}&matches_requested=100')
    # html = BS(response.content, "html.parser")
    # print(html)
    # print(2)
    games = getDBMatches(playerId,heroId)
    print("games")
    print(games)
    # deleter =[]
    # if heroId != 404:
    #     print(heroId)
    #     print(len(games))
    #
    #     for i in range(len(games)):
    #         # print(games[i]["players"])
    #         print(len(games[i]["players"]))
    #         for z in range(len(games[i]["players"])):
    #             # print(games[i]["players"][z])
    #             # print(games[i]["players"][z]["account_id"]== playerId)
    #             if games[i]["players"][z]["account_id"] == playerId:
    #
    #                 if games[i]["players"][z]["hero_id"] != heroId:
    #                     deleter.append(i)
    # print(deleter)
    #
    # for i in range(len(deleter)):
    #     print(deleter[i])
    #     del games[deleter[i]]
    #     if i < len(deleter)-1:
    #
    #         deleter[i+1] = deleter[i+1] - 1*(i+1)
    #
    dumpDict = []



    for i in range(numMatches):
        try:
            game_url = f"https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id={games[i]}&key={steamApiKey}"
            # print(game_url)
            steam_response = asession.get(game_url)
            # print(steam_response.json())

            dumpDict.append(steam_response.json())
        except:
            print("erop")
    #
    # if __name__ == "__main__":
    #     print(dumpDict)
    print(len(dumpDict))
    return dumpDict

# if __name__ == "__main__":
#     # print("DENDI")
#     # sendGames(70388657, 5)
#     # print("RTZ")
#     # sendGames(86745912, 5)56351509
#     print("DM")
#     sendGames(70388657, 5, 46)
