const faqOne = document.querySelectorAll(".faq-one");

faqOne.forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("faq-answer-show");
    faq.classList.toggle("faq-icon-rotate-up");
  });
});

//
// MOBILE NAV FUNCTION PROGRAMMING
const btn = document.querySelector(".hamburger");
const btn2 = document.querySelector(".hamburger-close");
const btn3 = document.querySelector(".nav-links");
const btn4 = document.querySelectorAll(".nav-links a");
btn.addEventListener("click", function (e) {
  btn3.style.top = "0";
});
btn2.addEventListener("click", function (e) {
  btn3.style.top = "-300%";
});
// making the links to go back up onclick
btn4.forEach((links) => {
  links.addEventListener("click", function (e) {
    btn3.style.top = "-300%";
  });
});
// scroll to top btn function
function scrollToTop() {
  window.scrollTo(0, 0);
}
//
//
//
const tabBtns = document.querySelectorAll(".features-second-paragraph p");
const tabFeatures = document.querySelectorAll(".features-2-col");
tabBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener("click", function () {
    tabFeatures.forEach((tabFeature) => {
      tabFeature.classList.remove("active-tab-element");
    });
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active-tab");
    });
    tabBtns[index].classList.add("active-tab");
    tabFeatures[index].classList.add("active-tab-element");
  });
});
