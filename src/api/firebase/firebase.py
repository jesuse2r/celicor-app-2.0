from firebase_admin import credentials, initialize_app, firestore, storage

cred = credentials.Certificate("firebase.json")
default_app = initialize_app(
    cred,
    {
        "storageBucket": "celicorimagen.appspot.com",
    },
)

class FirebaseBucket:
    def __init__(self):
        self.bucket = storage.bucket()

    def upload_file(self, file, filename):
        blob = self.bucket.blob(filename)
        blob.upload_from_file(file)
        blob.make_public()
        return blob.public_url

    def delete_file(self, filename):
        blob = self.bucket.blob(filename)
        blob.delete()
        return True


Bucket = FirebaseBucket()