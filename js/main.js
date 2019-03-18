  var bookingLink = document.querySelector(".search-hotel-link");

  var bookingForm = document.querySelector(".search-hotel");  
  bookingLink.addEventListener("click", 
    function (evt) {
    evt.preventDefault();
    bookingForm.classList.toggle("form-show");
  }
  );

  var formBooking = document.querySelector(".search-hotel");
  var dateIn = formBooking.querySelector("[name=date-in]");
  var dateOut = formBooking.querySelector("[name=date-out]");

  formBooking.addEventListener("submit", function (evt) {
    if ( dateIn.value == '' || dateOut.value == '' ) {
      evt.preventDefault();
      formBooking.classList.remove("modal-error");
      formBooking.offsetWidth = formBooking.offsetWidth;
      formBooking.classList.add("modal-error");
    }
  });