from flask import Blueprint, render_template, request, redirect
from amadeus import Flights
import json
import os

from travel.site.forms import FlightSearchForm
from travel.site.models import formatSearchData

flights = Flights(os.environ.get('SANDBOX_API'))

site = Blueprint('site', __name__)


@site.route('/')
def home():
    # return "This is my home page.", 200
    form = FlightSearchForm()
    return render_template('site/index.html', form=form)


@site.route('/airportsearch/<term>', methods=['POST', 'GET'])
def airportsearch(term):
    return json.dumps([item['label'] for item in
                      json.loads(json.dumps(flights.auto_complete(term=term)))])


@site.route('/extensivesearch', methods=['GET', 'POST'])
def extensiveSearch():
    if request.method == 'POST':
        data = request.get_json() or request.form
        formatedData = formatSearchData(data)

        resp = flights.low_fare_search(
            origin=formatedData['flyfrom'],
            destination=formatedData['flyto'],
            departure_date=formatedData['departureDate'] + '--' + formatedData['returnDate'],
            duration='4--10')
        itineraries = [items for items in resp['results']]
        fares = []
        # itineraries = resp['results'][0]['itineraries'][0]['outbound']
        # fare = resp['results'][0]['fare']
        return   render_template('site/flight.html')

    return render_template('site/flight.html')
