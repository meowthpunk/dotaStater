from requests_html import HTMLSession
from bs4 import BeautifulSoup
import re

regex = r"\d+"


def getDBMatches(userId, hero_id=404, ranked=None):
    session = HTMLSession() 

    # option = Options()
    # option.add_argument("--disable-infobars")
    # browser = webdriver.Chrome('C:\webdr\chromedriver.exe',chrome_options=option)

    # headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'}
    url = f'https://www.dotabuff.com/players/{userId}/matches?'

    if hero_id != 404:
        hero_name = returnHeroViaId(hero_id)["name"]
        url += f"&hero={hero_name}"

    response = session.get(url, headers=headers,)
    print(url)
    print(response)



    soup = BeautifulSoup(response.content, 'html.parser')

    # regex = r"+\d"
    matches = []
    for el in soup.select('.cell-large'):
        a = el.select('a')
        href = a[0]['href']
        match_id = re.search(regex, href).group(0)
        matches.append(match_id)

    return matches


print(getDBMatches(230214679))
