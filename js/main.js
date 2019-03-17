  var bookingLink = document.querySelector(".search-hotel-link");

  var bookingForm = document.querySelector(".search-hotel");  
  bookingLink.addEventListener("click", 
    function (evt) {
    evt.preventDefault();
    bookingForm.classList.toggle("form-show");
  }
  );