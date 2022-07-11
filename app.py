from flask import Flask, render_template, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import requests
import json
import datetime
from steamMatches import sendGames

app = Flask(__name__)

@app.route("/shared")
def home():
    if request.method == "GET":
        return {"ok": True, "games": sendGames(request.args.get('userId'), int(request.args.get('numMatches')))}

if __name__ == "__main__":
    app.run()
