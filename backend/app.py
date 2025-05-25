from flask import Flask, jsonify
import json
import os

app = Flask(__name__)
@app.route('/favicon.ico')
def favicon():
    return '', 204
@app.route('/designers')
def get_designers():
    with open('data.json') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
