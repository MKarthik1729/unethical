from flask import Flask, jsonify
import data
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/data", methods=["GET"])
def get_example():
    k = data.collect_data()
    # data = {"message": "This is a GET request example"}
    return jsonify(k)

if __name__ == "__main__":
    app.run(debug=True)
