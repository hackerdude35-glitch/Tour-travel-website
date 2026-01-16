// HERO SLIDER
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// BOOKING SYSTEM
let selectedPkg = "";

function openBooking(pkg){
  selectedPkg = pkg;
  document.getElementById("selectedPackage").innerText = "Package: " + pkg;
  document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking(){
  document.getElementById("bookingModal").style.display = "none";
}

function sendBooking(){
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;

  if(!name || !phone || !date){
    alert("Please fill all details");
    return;
  }

  let msg = `Booking Request:%0AName: ${name}%0APhone: ${phone}%0APackage: ${selectedPkg}%0ATravel Date: ${date}`;
  window.open(`https://wa.me/917889333199?text=${msg}`, "_blank");
}
