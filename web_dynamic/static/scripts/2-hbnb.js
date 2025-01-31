// updates text under aDict with all checked amenity names
const aDict = {};
$('input').click(function () {
  $(':input').each(function () {
    if (this.checked === true) {
      aDict[$(this).data('name')] = $(this).data('id');
    } else {
      delete aDict[$(this).data('name')];
    }
  });
  const arr = [];
  for (const key in aDict) {
    arr.push(key);
  }
  $('.amenities h4').html(arr.sort().join(', '));
});

$.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
