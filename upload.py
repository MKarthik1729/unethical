from mongoConnection import db
collection = db.aptitude  # Replace with your collection name
def upload(data):
    collection.insert_one(data)
    # print("Document inserted with ID:", inserted_document.inserted_id)
    return True


if __name__ == "__main__":
    upload({
        "question":"vkdsv nkvj25",
        "answer":"3lkwrgjk"
    })