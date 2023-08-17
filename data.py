from pymongo import MongoClient
import json
from bson import ObjectId  # Import the ObjectId type

    # Connect to MongoDB
def collect_data():
    client = MongoClient("mongodb+srv://karthikm20:12345677@cluster0.qrb6qry.mongodb.net/?retryWrites=true&w=majority")
    db = client.answers
    collection = db.coding

    # Retrieve documents from the collection
    documents = collection.find()

    # Define a custom JSON encoder to handle ObjectId serialization
    class JSONEncoder(json.JSONEncoder):
        def default(self, obj):
            if isinstance(obj, ObjectId):
                return str(obj)
            return super().default(obj)

    # Create an array to store the JSON objects
    json_objects_array = []

    # Append retrieved documents as JSON objects to the array
    for document in documents:
        json_data = json.dumps(document, indent=4, cls=JSONEncoder)  # Use the custom JSON encoder
        json_object = json.loads(json_data)  # Convert JSON data string back to dictionary
        json_objects_array.append(json_object)

    # Print the array of JSON objects
    return json_objects_array
