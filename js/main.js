  document.querySelector('body').classList.remove('nojs');

  var bookingLink = document.querySelector(".search-hotel-link");
  var bookingForm = document.querySelector(".search-hotel"); 
  var dateIn = bookingForm.querySelector("[name=date-in]");
  var dateOut = bookingForm.querySelector("[name=date-out]");
  var childrenNumber = bookingForm.querySelector("[name=children-number]");
  var adultNumber = bookingForm.querySelector("[name=adults-number]");

  bookingLink.addEventListener("click", 
    function (evt) {
    evt.preventDefault();
    bookingForm.classList.remove("modal-error");
    bookingForm.classList.toggle("form-show");
  }
  );

  bookingForm.addEventListener("submit", function (evt) {
    if ( (dateIn.value == "" || dateOut.value == "") || ((childrenNumber.value == "0" || childrenNumber.value == "")) && (adultNumber.value == "0" || adultNumber.value == "")) {
      evt.preventDefault();
      bookingForm.classList.remove("modal-error");
      bookingForm.offsetWidth = bookingForm.offsetWidth;
      bookingForm.classList.add("modal-error");
    }
  });