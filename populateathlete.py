import requests
import json

url = "https://api.sportsdata.io/v3/nba/scores/json/Players?key={APIKEY}"
data_structure = [] 
headers = {
  'Authorization': 'Bearer {KEY}'
}
post_url = "http://192.168.50.58:8000/athlete"
response = requests.request("GET", url)
player_data = json.loads(response.text)
player_id = 1

for player in player_data:
    ath_stats = {
        "athleteid": player["PlayerID"],
        "athfirstname": player["FirstName"],
        "athlastname": player["LastName"],
        "teamname": player["Team"]
    }
    data_structure.append(ath_stats)
    payload = ath_stats
    response = requests.request("POST", post_url, headers=headers, data=payload)
    print(response)


