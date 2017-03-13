

def formatSearchData(data):
    return {
        "flyfrom":  data['flyfrom'].split()[-1][1:4],
        "flyto":  data['flyto'].split()[-1][1:4],
        "ticketClass":  data['ticketClass'],
        "departureDate": '-'.join(reversed(data['flightDepartureDate'].split('-'))),
        "returnDate":  '-'.join(reversed(data['flightReturnDate'].split('-'))),
        "children":  data['children'],
        "infants":  data['infants'],
        "adults":  data['adults']
    }
