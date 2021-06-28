// updates text under amenities with all checked amenity names
amenities = {};
$('input').click(function () {
  $(':input').each(function () {
    if (this.checked == true) {
      amenities[this.dataset.id] = this.dataset.name;
    } else {
      delete amenities[this.dataset.id];
    }
  });
  arr = [];
  for (const key in amenities) {
    if (amenities.hasOwnProperty(key)) {
      arr.push(amenities[key]);
    }
  }
  $('.amenities h4').html(arr.join(', '));
});
