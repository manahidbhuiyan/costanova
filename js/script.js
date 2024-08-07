document.addEventListener("click", function (event) {
    var propertyTypeToggle = document.getElementById("propertyTypeToggle");
    var propertyTypeDropdown = document.getElementById("propertyTypeDropdown");
    var radiusTypeToggle = document.getElementById("radiusTypeToggle");
    var radiusTypeToggleDropdown = document.getElementById(
      "radiusTypeToggleDropdown"
    );
  
    if (
      !propertyTypeToggle.contains(event.target) &&
      !propertyTypeDropdown.contains(event.target)
    ) {
      propertyTypeDropdown.classList.add("hidden");
    }
  
    if (
      !radiusTypeToggle.contains(event.target) &&
      !radiusTypeToggleDropdown.contains(event.target)
    ) {
      radiusTypeToggleDropdown.classList.add("hidden");
    }
  });
  
  document
    .getElementById("propertyTypeToggle")
    .addEventListener("click", function (event) {
      var propertyTypeDropdown = document.getElementById("propertyTypeDropdown");
      propertyTypeDropdown.classList.toggle("hidden");
      radiusTypeToggleDropdown.classList.add("hidden");
      document.getElementById("searchToggleDropdown").classList.add("hidden");
      event.stopPropagation();
    });
  
  document
    .getElementById("radiusTypeToggle")
    .addEventListener("click", function (event) {
      var radiusTypeToggleDropdown = document.getElementById(
        "radiusTypeToggleDropdown"
      );
      radiusTypeToggleDropdown.classList.toggle("hidden");
      propertyTypeDropdown.classList.add("hidden");
      document.getElementById("searchToggleDropdown").classList.add("hidden");
      event.stopPropagation();
    });
  
  document
    .querySelectorAll("#propertyTypeDropdown .cursor-pointer")
    .forEach(function (item) {
      item.addEventListener("click", function (event) {
        item.classList.toggle("selected");
  
        var checkbox = item.querySelector("input[type='checkbox']");
        checkbox.checked = !checkbox.checked;
  
        event.stopPropagation();
      });
  
      var input = item.querySelector("input[type='checkbox']");
      if (input) {
        input.addEventListener("click", function (event) {
          item.classList.toggle("selected");
          var checkbox = item.querySelector("input[type='checkbox']");
          checkbox.checked = !checkbox.checked;
  
          event.stopPropagation();
        });
      }
  
      var label = item.querySelector("label");
      if (label) {
        label.addEventListener("click", function (event) {
          event.preventDefault();
        });
      }
    });
  
  document
    .querySelectorAll("#radiusTypeToggleDropdown .cursor-pointer")
    .forEach(function (item) {
      item.addEventListener("click", function (event) {
        document
          .querySelectorAll("#radiusTypeToggleDropdown .cursor-pointer")
          .forEach(function (otherItem) {
            otherItem.classList.remove("selected");
          });
  
        item.classList.add("selected");
  
        event.stopPropagation();
      });
    });
  
  function showSuggestions() {
    console.log("hello")
    const dropdown = document.getElementById("searchToggleDropdown");
    dropdown.classList.remove("hidden");
    document.addEventListener("click", hideSuggestionsOutside);
  }
  
  function hideSuggestionsOutside(event) {
    const dropdown = document.getElementById("searchToggleDropdown");
    const input = document.getElementById("searchInput");
    if (!dropdown.contains(event.target) && event.target !== input) {
      dropdown.classList.add("hidden");
      document.removeEventListener("click", hideSuggestionsOutside);
    }
  }
  
  function selectSuggestion(value) {
    const input = document.getElementById("searchInput");
    input.value = value;
    const dropdown = document.getElementById("searchToggleDropdown");
    dropdown.classList.add("hidden");
  }
  
  const navbar = document.querySelector(".navbar");
  const mobile = document.querySelector(".toggle");
  const logo = document.getElementById("logo");
  const barIcon = document.getElementById("bar-icon");
  const languagearrow = document.getElementById("languagearrow");
  const navbarHeight = navbar.offsetHeight;
  
  function toggleNavbarBackground() {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add("scrolled");
      logo.src = "./images/banner/logo-black.png";
      barIcon.classList.remove("text-white");
      navbar.classList.remove("text-white");
      languagearrow.classList.add("text-black");
    } else {
      navbar.classList.remove("scrolled");
      logo.src = "./images/banner/logo-white.png";
      barIcon.classList.add("text-white");
      navbar.classList.add("text-white");
      languagearrow.classList.remove("text-black");
    }
    if (window.scrollY > 350) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  }
  
  toggleNavbarBackground();
  
  window.addEventListener("scroll", toggleNavbarBackground);
  
  barIcon.addEventListener("click", function () {
    mobile.classList.toggle("hidden");
  });
  
  const languageSelector = document.getElementById("languageSelector");
  const languageOptions = document.getElementById("languageOptions");
  
  languageSelector.addEventListener("click", function () {
    languageOptions.classList.toggle("hidden");
  });
  
  const languageOptionItems = document.querySelectorAll(".languageOption");
  languageOptionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      const languageDisplay = document.querySelector(".language");
  
      languageDisplay.textContent = selectedLang;
  
      languageOptionItems.forEach(function (option) {
        option.classList.remove("bg-[#ffd63149]");
      });
      this.classList.add("bg-[#ffd63149]");
  
      languageOptions.classList.add("hidden");
    });
  });
  
  // filter span
  document.addEventListener('DOMContentLoaded', () => {
    const filterSpans = document.querySelectorAll('.filter-span');
    
    filterSpans.forEach(span => {
      span.addEventListener('click', () => {
        // Remove 'checked' class from all spans
        filterSpans.forEach(s => s.classList.remove('checked'));
        // Add 'checked' class to the clicked span
        span.classList.add('checked');
      });
    });
  });