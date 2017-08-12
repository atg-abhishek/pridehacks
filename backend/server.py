from flask import Flask
import simplejson, requests

app = Flask(__name__)

@app.route('/')
def hello():
    return "hello world"



if __name__ == "__main__":
    app.run(debug=True, threaded=True)