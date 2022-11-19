const faqOne = document.querySelectorAll(".faq-one");

faqOne.forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("faq-answer-show");
    faq.classList.toggle("faq-icon-rotate-up");
  });
});
