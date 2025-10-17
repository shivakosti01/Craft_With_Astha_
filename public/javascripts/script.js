document.addEventListener("DOMContentLoaded", () => {
  if (window.success_msg && window.success_msg.length > 0) {
    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: window.success_msg
    });
  }

  if (window.error_msg && window.error_msg.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: window.error_msg
    });
  }
});



  window.addEventListener("load", () => {
    const cpPopup = document.getElementById("cpCallPopup");

    // Show popup after 1.5 seconds
    setTimeout(() => {
      cpPopup.classList.add("cp-show");
    }, 1500);

    // Auto hide after 12 seconds (optional)
    setTimeout(() => {
      cpPopup.classList.remove("cp-show");
    }, 10000);

    // Close button click
    closeBtn.addEventListener("click", () => {
      cpPopup.classList.remove("cp-show");
    });
  });






  // ////////////////////////////////////////////////////

  // public/js/offer-banner.js
// document.addEventListener("DOMContentLoaded", function () {
//   const banner = document.getElementById("site-offer-banner");
//   const closeBtn = document.getElementById("offerCloseBtn");
//   const laterBtn = document.getElementById("offerLaterBtn");

//   if (!banner) return;

//   // Prevent re-showing if already closed
//   if (localStorage.getItem("hideOfferBanner") === "true") return;

//   // Show banner after small delay
//   setTimeout(() => banner.classList.add("show"), 500);

//   // Close banner permanently
//   closeBtn.addEventListener("click", () => {
//     banner.classList.remove("show");
//     banner.style.display = "none";
//     localStorage.setItem("hideOfferBanner", "true");
//   });

//   // Hide temporarily
//   laterBtn.addEventListener("click", () => {
//     banner.classList.remove("show");
//     banner.style.display = "none";
//   });
// });
