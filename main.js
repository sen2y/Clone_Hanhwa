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

// throttle : 일정 시간 간격을 두고 이벤트가 연속해서 발생하는 것을 제한하는 기능
// 일정시간에 한번씩만 호출되도록 설정
// _.throttle(함수, 시간)
const header = document.querySelector("header");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 100) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }, 300)
); // 300ms 단위로 호출

// 카운트 다운 (1초마다 화면 출력 업데이트)
const countDay = document.querySelector(".count .day");
const countHour = document.querySelector(".count .hour");
const countMin = document.querySelector(".count .min");
const countSec = document.querySelector(".count .sec");

function updateCountdown() {
  const today = new Date();
  // '03/24/2024 2:59:59 PM'
  const dDay = new Date("03/24/2024 2:59:59 PM");
  // getTime() - 해당 날짜와 시간을 나타내는 밀리초 단위의 숫자를 반환
  const gap = dDay.getTime() - today.getTime();

  // 남은 시간 계산
  // floor - 소수점 반내림
  const gapDay = Math.floor(gap / (1000 * 60 * 60 * 24));
  const gapHour = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const gapMin = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
  const gapSec = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");

  // 남은 시간을 화면에 출력
  countDay.textContent = gapDay;
  countHour.textContent = gapHour;
  countMin.textContent = gapMin;
  countSec.textContent = gapSec;

  // 남은 시간이 0보다 작으면 clearInterval 함수를 호출하여 타이머 중지
  if (gap < 0) {
    clearInterval(dDayTimer);
  }
}

updateCountdown();
// 1초마다 updateCountdown 함수 호출
let dDayTimer = setInterval(updateCountdown, 1000);
