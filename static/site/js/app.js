$(document).foundation();

function getHeight(element){
    return $(element).height() + 20 +'px';
};
frmHeight = getHeight('.search-form');
$('.fit').css('height', frmHeight);

$(function(){
    $('.datepicker').datepicker({
        dateFormat: 'dd-mm-yy' 
    });
    $('#flightDepartureDate').datepicker('setDate', new Date());
    $('#flightReturnDate').datepicker('setDate', 'Now'+1);
    $('#busdeparture').datepicker('setDate', new Date());
    $('#busreturn').datepicker('setDate', 'Now'+1);

 });

$('#dropdown').click(function(){
	console.log('clicked');
});
/**************** Search form begins here **********************/
$('ul.menu li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    if($(this).attr('id') === 'one-way'){
        $('.flight-return-date').hide();
    }
    if($(this).attr('id') === 'round-trip'){
        $('.flight-return-date').show();
    }
});

  /* *********** passengers ************* */ 
$('#adult-plus').click(function(){
    var num = Number($('#adult-count').html());
    if(validNumberOfPassengers()){
        $('#adult-count').html(num+1);
        setPassengers();
    }

});
$('#adult-minus').click(function(){
    var num = Number($('#adult-count').html());
    if(num > 1){
       $('#adult-count').html(num-1); 
       setPassengers();
    }
});
$('#children-plus').click(function(){
    var num = Number($('#child-count').html());
    if(validNumberOfPassengers()){
        $('#child-count').html(num+1).html();
        setPassengers();
    }
});
$('#children-minus').click(function(){
    var num = Number($('#child-count').html());
    if(num > 0){
       $('#child-count').html(num-1).html(); 
       setPassengers();
    }
});
$('#infant-in-seat-plus').click(function(){
    var num = Number($('#infant-in-seat-count').html());
    if(validNumberOfPassengers()){
        $('#infant-in-seat-count').html(num+1).html();
        setPassengers();
    }
});
$('#infant-in-seat-minus').click(function(){
    var num = Number($('#infant-in-seat-count').html());
    if(num > 0){
       $('#infant-in-seat-count').html(num-1).html(); 
       setPassengers();
    }
});
$('#infant-on-lap-plus').click(function(){
    var num = Number($('#infant-on-lap-count').html());
    if(validNumberOfPassengers()){
        $('#infant-on-lap-count').html(num+1).html();
        setPassengers();
    }
});
$('#infant-on-lap-minus').click(function(){
    var num = Number($('#infant-on-lap-count').html());
    if(num > 0){
       $('#infant-on-lap-count').html(num-1).html(); 
       setPassengers();
    }
});

$('.ticket-class').click(function(){
    $('#class').html($(this).html().split(' ')[0]);
});
/* *********** passengers end here ********* */
/**************** Search form ends here **********************/

function setPassengers(){
    var adult_count = Number($('#adult-count').html()),
        child_count = Number($('#child-count').html()),
        infant_in_seat_count = Number($('#infant-in-seat-count').html()),
        infant_on_lap_count = Number($('#infant-on-lap-count').html()),
        passenger_count = $('#passenger-count');
    var number_of_passengers = adult_count+child_count+infant_in_seat_count+infant_on_lap_count;
    if(validNumberOfPassengers()){
            if(adult_count === 1)
                passenger_count.html(adult_count+' adult');
            else
                passenger_count.html(adult_count+' adults');
        if(child_count && infant_in_seat_count || child_count && infant_on_lap_count || infant_in_seat_count && infant_on_lap_count){
            passenger_count.html(number_of_passengers +' passengers')
        }else{

                if(child_count === 1)
                    passenger_count.append(', '+child_count+' child');
                else if(child_count > 1)
                    passenger_count.append(', '+child_count+' children');
                if(infant_in_seat_count === 1)
                    passenger_count.append(', '+infant_in_seat_count+' infant in seat');
                else if(infant_in_seat_count > 1)
                    passenger_count.append(', '+infant_in_seat_count+' infants in seat');
                if(infant_on_lap_count === 1)
                    passenger_count.append(', '+infant_on_lap_count+' infant on lap');
                else if(infant_on_lap_count > 1)
                    passenger_count.append(', '+infant_on_lap_count+' infants on lap');
        }
    } 
} 
function validNumberOfPassengers(){
    var adult_count = Number($('#adult-count').html()),
        child_count = Number($('#child-count').html()),
        infant_in_seat_count = Number($('#infant-in-seat-count').html()),
        infant_on_lap_count = Number($('#infant-on-lap-count').html());

        return (adult_count+child_count+infant_in_seat_count+infant_on_lap_count) <= 6;
}
