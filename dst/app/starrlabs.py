"""StarR Labs -  Star Realms deck builder and analyzer"""

import flask

app = flask.Flask(__name__)


# App routes
@app.route('/', methods=['GET'])
def index():
    return flask.render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
