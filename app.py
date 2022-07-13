from flask import Flask, render_template, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import requests
import json
import datetime
from steamMatches import sendGames

app = Flask(__name__)

@app.route("/shared")
async def home():
    if request.method == "GET":
        userId = request.args.get('userId')
        numMatches = request.args.get('numMatches')
        heroId = request.args.get('heroId')
        gameModeId = request.args.get('gameModeId')
        games = sendGames(int(userId), int(numMatches), int(heroId))
        return {"ok": True, "games": games}

if __name__ == "__main__":
    app.run()
