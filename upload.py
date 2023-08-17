from pymongo import MongoClient

client = MongoClient("mongodb+srv://karthikm20:12345677@cluster0.qrb6qry.mongodb.net/?retryWrites=true&w=majority")
db = client.answers  # Replace with your database name
collection = db.coding  # Replace with your collection name

inserted_document = collection.insert_one({
    "question":"i am ok",
    "answer":"first option 23"

})
print("Document inserted with ID:", inserted_document.inserted_id)
