# 한화시스템 채용 사이트 클론 코딩

### 👆 기존 사이트와의 차이

###### jQuery 내 코드 js코드로 변경 및 기존 css 코드에 적용 안되는 css 재적용하기 / html구조 동일,

기존 사이트 : [한화시스템 채용공고](https://www.hanwhasystems-recruit.co.kr/?utm_source=saramin&utm_medium=cpc&utm_campaign=systems_saramin&utm_id=systemsm "한화시스템 채용공고 페이지로 이동!")

DEMO : [클론 코딩 - 한화시스템 채용공고](https://clone-hanhwasystems-recruit.netlify.app/ "클론코딩 페이지로 이동!")

### ▪️ 실시간 D-Day 출력 update

## 날짜 기준 : '03/24/2024 2:59:59 PM' 까지의 D-Day 실시간 출력

<img width="506" alt="image" src="https://github.com/sen2y/Clone_Hanhwa/assets/83276834/f667e14a-a72f-4f1d-953b-d590d7ef7e36">

```html
<div class="count">
  <em></em>
  <span class="day" data-text="일">00</span>
  <span class="hour">00</span>
  <span class="min">00</span>
  <span class="sec">00</span>
  남음
</div>
```

### 시간당 update ` setInterval(updateCountdown, 1000);` => 1초마다 반복

1초 = 1000초
1분 = 60초
1시간 = 60초
1일 = 24시간

```javascript
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
}

updateCountdown();
// 1초마다 updateCountdown 함수 호출
let dDayTimer = setInterval(updateCountdown, 1000);
```

### ▪️ animation

`animation: shadow 1s infinite alternate;`

@keyframes 이용

```css
.headingWrap .keyvisual-wrap .shadow {
  animation: shadow 1s infinite alternate;
}

@keyframes shadow {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(10px) scale(1.1);
  }
}
```

### ▪️ Header 스크롤 효과 (스크롤 시, .fixed 추가 / 색상 변경)

```javascript
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
```

### ▪️ 그림자 효과

`mix-blend-mode: multiply;`

기존 이미지=> 효과적용

<img src="image-2.png" alt="alt text" width="70"/> =>
<img src="image.png" alt="alt text" width="70"/>

```css
.headingWrap .keyvisual-wrap .shadow {
  top: 17.75rem;
  left: calc(50% - 3.45rem);
  width: 7.2rem;
  height: 1.65rem;
  animation: shadow 1s infinite alternate;
  mix-blend-mode: multiply;
}
```
