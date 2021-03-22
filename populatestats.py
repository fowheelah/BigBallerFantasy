import requests
import json

url = "https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2020?key={APIKEY}"
post_url = "http://192.168.50.58:8000/stats"
data_structure = [] 
headers = {
  'Authorization': 'Bearer {KEY}'
}
response = requests.request("GET", url)
stat_data = json.loads(response.text)
for stat in stat_data:
    if stat["Games"] != 0:
        points = round((stat["Points"] / stat["Games"]), 1)
        asissts = round((stat["Assists"] / stat["Games"]), 1)
        rebounds = round((stat["Rebounds"] / stat["Games"]), 1)
        steals = round((stat["Steals"] / stat["Games"]), 1)
        blocks = round((stat["BlockedShots"] / stat["Games"]), 1)

        payload = {
            "ppg": points,
            "apg": asissts,
            "rpg": rebounds,
            "spg": steals,
            "bpg": blocks,
            "statid": stat_id,
            "athleteid": stat["PlayerID"]
        }
        response = requests.request("POST", post_url, headers=headers, data=payload)
        print(response)

