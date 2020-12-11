"use strict";

var dropdown = document.getElementById('dropdownMenu');

var imageHolderDivs = document.getElementsByClassName('imageHolder');

for (var numberOfFingers = 0; numberOfFingers < 7; numberOfFingers++) {
  var actualNumberOfFingers = numberOfFingers + 1;
  console.log("Patrick has " + actualNumberOfFingers + " fingers.");
}

for (var i = 0; i < dropdown.options.length; i++) {

  var optionName = dropdown.options[i].value;
  imageHolderDivs[i].id = optionName;
  imageHolderDivs[i].innerHTML = imageHolderDivs[i].innerHTML + '<p><a href="#myGallery">Back to top</a></p>';

}

dropdown.addEventListener('change', function() {
  var selectedSection = document.getElementById(dropdown.value);
  selectedSection.scrollIntoView({behavior: "smooth"});
});
