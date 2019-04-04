$('#alertButton').on('click', function() {
	alert('Chris Whong');
});

$('#red-button').on('click', function() {
  $('body').css('background', 'red');
});

$('#green-button').on('click', function() {
  $('body').css('background', 'green');
});

$('#blue-button').on('click', function() {
  $('body').css('background', 'blue');
});

$('.joes-pizza').on('click', function() {
  $('#pizza-shop-info').text('Joes Pizza is the best in NYC');
});

$('.dominos-pizza').on('click', function() {
  $('#pizza-shop-info').text('Dominos is delicious');
});

$('.papa-johns').on('click', function() {
  $('#pizza-shop-info').text('Papa Johns is mediocre');
});
