const faqUl = document.querySelector(".faq-list");
const faq = document.querySelectorAll(".faqWrap .faq-list li");
faq.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      faqUl.style.paddingBottom = 0 + "px";
      return;
    }
    faq.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    e.currentTarget.classList.toggle("active");

    // 'ul' 태그의 padding-bottom 설정
    faqUl.style.paddingBottom = 180 + "px";
  });
});
