from flask import Flask, jsonify, send_from_directory
import json
import os

# Serve files from the 'frontend' folder
app = Flask(__name__, static_folder='frontend', static_url_path='')

# Route for the homepage
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Route for JSON data
@app.route('/designers')
def get_designers():
    with open('data.json') as f:
        data = json.load(f)
    return jsonify(data)

# Optional favicon route (to prevent 404)
@app.route('/favicon.ico')
def favicon():
    return '', 204

# Start the app
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
