from flask import Flask
from travel.site.views import site


app = Flask(__name__)
app.config['SECRET_KEY'] = 'fdsfsfsddfs'
app.register_blueprint(site, url_prefix='/en')

import travel.models
import travel.views
