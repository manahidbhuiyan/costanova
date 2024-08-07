// navbar 
document.addEventListener('DOMContentLoaded', () => {
  const barIcon = document.getElementById('bar-icon');
  const menu = document.getElementById('menu');
  const languageSelector = document.getElementById('languageSelector');
  const languageOptions = document.getElementById('languageOptions');
  const profileSelector = document.getElementById('profileSelector');
  const profileOptions = document.getElementById('profileOptions');

  // Toggle menu on small devices
  barIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Toggle language dropdown
  languageSelector.addEventListener('click', () => {
    languageOptions.classList.toggle('hidden');
  });

  // Toggle profile dropdown
  profileSelector.addEventListener('click', () => {
    profileOptions.classList.toggle('hidden');
  });
});

// radius dropdown in propertylist page
document.addEventListener("click", function (event) {
  var radiusTypeToggle1 = document.getElementById("radiusTypeToggle1");
  var radiusTypeToggleDropdown1 = document.getElementById(
    "radiusTypeToggleDropdown1"
  );
  if (
    !radiusTypeToggle1.contains(event.target) &&
    !radiusTypeToggleDropdown1.contains(event.target)
  ) {
    radiusTypeToggleDropdown1.classList.add("hidden");
  }
});

// radius dropdown in propertylist page
document
  .getElementById("radiusTypeToggle1")
  .addEventListener("click", function (event) {
    var radiusTypeToggleDropdown1 = document.getElementById("radiusTypeToggleDropdown1");
    radiusTypeToggleDropdown1.classList.toggle("hidden");
    document.getElementById("searchToggleDropdown").classList.add("hidden");
    event.stopPropagation();
  });


//  property dropdown in propertylist page
document
  .querySelectorAll("#radiusTypeToggleDropdown1 .cursor-pointer")
  .forEach(function (item) {
    item.addEventListener("click", function (event) {
      document
        .querySelectorAll("#radiusTypeToggleDropdown1 .cursor-pointer")
        .forEach(function (otherItem) {
          otherItem.classList.remove("selected");
        });

      item.classList.add("selected");

      event.stopPropagation();
    });
  });

// search area

function showSuggestionsProperty() {
  const dropdown = document.getElementById("searchToggleDropdown");
  dropdown.classList.remove("hidden");
  document.addEventListener("click", hideSuggestionsOutsideProperty);
}

function hideSuggestionsOutsideProperty(event) {
  const dropdown = document.getElementById("searchToggleDropdown");
  const input = document.getElementById("searchInput");
  if (!dropdown.contains(event.target) && event.target !== input) {
    dropdown.classList.add("hidden");
    document.removeEventListener("click", hideSuggestionsOutsideProperty);
  }
}

function selectSuggestionProperty(value) {
  const input = document.getElementById("searchInput");
  input.value = value;
  const dropdown = document.getElementById("searchToggleDropdown");
  dropdown.classList.add("hidden");
}

// sort by dropdown
document.getElementById("sortDropdownButton").addEventListener("click", function () {
  var dropdown = document.getElementById("sortDropdown");
  dropdown.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  var dropdown = document.getElementById("sortDropdown");
  var button = document.getElementById("sortDropdownButton");
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

// sort by dropdown 2
document.getElementById("sortDropdownButtonSmall").addEventListener("click", function () {
  console.log("clicked!")
  var dropdown2 = document.getElementById("sortDropdownSmall");
  dropdown2.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  var dropdown2 = document.getElementById("sortDropdownSmall");
  var button = document.getElementById("sortDropdownButtonSmall");
  if (!button.contains(event.target) && !dropdown2.contains(event.target)) {
    dropdown2.classList.add("hidden");
  }
});

// carousel

let currentSlide = 0;
let currentSlide_2 = 0;
let currentSlide_3 = 0;
let currentSlide_4 = 0;

const slides = document.querySelectorAll('.ci-1');
const slides_2 = document.querySelectorAll('.ci-2');
const slides_3 = document.querySelectorAll('.ci-3');
const slides_4 = document.querySelectorAll('.ci-4');

const totalSlides = slides.length;
const totalSlides2 = slides_2.length;
const totalSlides3 = slides_3.length;
const totalSlides4 = slides_4.length;

// first carousel slide
function showSlide1(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });
  document.getElementById('currentSlide_1').textContent = index + 1;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide1(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide1(currentSlide);
}

// second carouswel slide
function showSlide2(index) {
  slides_2.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });
  document.getElementById('currentSlide_2').textContent = index + 1;
}

function nextSlide2() {
  currentSlide_2 = (currentSlide_2 + 1) % totalSlides2;
  showSlide2(currentSlide_2);
}

function prevSlide2() {
  currentSlide_2 = (currentSlide_2 - 1 + totalSlides2) % totalSlides2;
  showSlide2(currentSlide_2);
}

// third carouswel slide
function showSlide3(index) {
  slides_3.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });
  document.getElementById('currentSlide_3').textContent = index + 1;
}

function nextSlide3() {
  currentSlide_3 = (currentSlide_3 + 1) % totalSlides3;
  showSlide3(currentSlide_3);
}

function prevSlide3() {
  currentSlide_3 = (currentSlide_3 - 1 + totalSlides3) % totalSlides3;
  showSlide3(currentSlide_3);
}

// Forth carouswel slide
function showSlide4(index) {
  slides_4.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });
  document.getElementById('currentSlide_4').textContent = index + 1;
}

function nextSlide4() {
  currentSlide_4 = (currentSlide_4 + 1) % totalSlides4;
  showSlide4(currentSlide_4);
}

function prevSlide4() {
  currentSlide_4 = (currentSlide_4 - 1 + totalSlides4) % totalSlides4;
  showSlide4(currentSlide_4);
}

showSlide1(currentSlide);
showSlide2(currentSlide_2);
showSlide3(currentSlide_3);
showSlide4(currentSlide_4);


// sidebar

// JavaScript to toggle the sidebar
const sidebar = document.getElementById('sidebar');
const filterButton = document.getElementById('filterButton');
const overlay = document.getElementById('clearSidebar');

filterButton.addEventListener('click', (event) => {
  event.stopPropagation();  // Prevent click event from propagating to the document
  sidebar.classList.toggle('hidden');
});

overlay.addEventListener('click', () => {
  sidebar.classList.add('hidden');
});

document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !filterButton.contains(event.target)) {
    sidebar.classList.add('hidden');
  }
});

// build sidebar
function rangeSlider() {
  return {
    open: false,
    minSize: 0,
    maxSize: 5000,
    validateInput(type) {
      if (type === 'min') {
        if (this.minSize < 0) this.minSize = 0;
        if (this.minSize > this.maxSize) this.minSize = this.maxSize;
      } else if (type === 'max') {
        if (this.maxSize > 10000) this.maxSize = 10000;
        if (this.maxSize < this.minSize) this.maxSize = this.minSize;
      }
    }
  }
}
// plot sidebar
function plotSizeSlider() {
  return {
    open: false,
    minPlotSize: 0,
    maxPlotSize: 10000,
    validatePlotInput(type) {
      if (type === 'min') {
        if (this.minPlotSize < 0) this.minPlotSize = 0;
        if (this.minPlotSize > this.maxPlotSize) this.minPlotSize = this.maxPlotSize;
      } else if (type === 'max') {
        if (this.maxPlotSize > 10000) this.maxPlotSize = 10000;
        if (this.maxPlotSize < this.minPlotSize) this.maxPlotSize = this.minPlotSize;
      }
    }
  }
}