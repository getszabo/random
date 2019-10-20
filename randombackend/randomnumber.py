from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import secrets
app = Flask(__name__)
CORS(app)

secretsGenerator = secrets.SystemRandom()
@app.route("/random")
def random():
    random = secretsGenerator.randint(0,100)
    return jsonify(number=random)

if __name__ == "__main__":
    app.run()
