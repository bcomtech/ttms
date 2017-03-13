from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired


class FlightSearchForm(FlaskForm):
    flyfrom = StringField('fly From', validators=[DataRequired()])
    flyto = StringField('fly To', validators=[DataRequired()])
    ticketClass = SelectField('Ticket Class',
                              choices=[('Economy','Economy'), ('Premium Economy', 'Premium Economy'), ('Business', 'Business'), ('First Class', 'First Class')],
                              validators=[DataRequired()])
    flightDepartureDate = StringField('flightDepartureDate',
                                  validators=[DataRequired()])
    flightReturnDate = StringField('flightReturnDate', validators=[DataRequired()])
    children = SelectField('Children',
                           choices=[('0', '0'), ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6')],
                           validators=[DataRequired()])
    infants = SelectField('Infants',
                          choices=[('0', '0'), ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6')],
                          validators=[DataRequired()])
    adults = SelectField('Adults', choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6')],
                         validators=[DataRequired()])


