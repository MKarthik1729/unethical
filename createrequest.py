from flask import Flask, jsonify, request
import data
from flask_cors import CORS
from upload import upload
app = Flask(__name__)
CORS(app)
@app.route("/data", methods=["GET"])
def get_example():
    k = data.collect_data(request.args.get('ele'))
    # data = {"message": "This is a GET request example"}
    # ele = request.args.get('ele') 
    # print(ele)
    return jsonify(k)

@app.route('/add_data', methods=['POST'])
def add_data():
    try:
        data = request.json  # Assuming JSON data in the POST request body
        upload(data)
        # print(data)
        return jsonify({"message": "Data added successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
