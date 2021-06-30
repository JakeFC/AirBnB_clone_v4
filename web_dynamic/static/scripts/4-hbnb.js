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
function getPlaces (amenities) {
  if (amenities === undefined) {
    amenities = {};
  }
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: JSON.stringify(amenities),
    method: 'POST',
    dataType: 'json',
    processData: false,
    contentType: 'application/json',
    success: function (places) {
      $('.places').html('');
      for (const n in places) {
        const place = places[n];
        let article = `<article>\
          <div class="title_box">\
          <h2>${place.name}</h2>\
          <div class="price_by_night">$${place.price_by_night}</div>\
          </div>\
          <div class="information">\
          <div class="max_guest">${place.max_guest} Guest`;
        if (place.max_guest !== 1) {
          article += 's';
        }
        article += `</div><div class="number_rooms">${place.number_rooms} Bedroom`;
        if (place.number_rooms !== 1) {
          article += 's';
        }
        article += `</div><div class="number_bathrooms">${place.number_bathrooms} Bathroom`;
        if (place.number_bathrooms !== 1) {
          article += 's';
        }
        article += `</div></div><div class="description">${place.description}</div></article>`;
        $('.places').append(article);
      }
    }
  });
}
$(document).ready(getPlaces());
$('button').click(function () {
  const arr = [];
  for (const key in aDict) {
    arr.push(aDict[key]);
  }
  getPlaces({ amenities: arr });
});
