## 한화시스템 채용 사이트 클론 코딩

### 👆 기존 사이트와의 차이

###### jQuery 내 코드 js코드로 변경 및 기존 css 코드에 적용 안되는 css 재적용하기 / html구조 동일,

기존 사이트 : [한화시스템 채용공고](https://www.hanwhasystems-recruit.co.kr/?utm_source=saramin&utm_medium=cpc&utm_campaign=systems_saramin&utm_id=systemsm "한화시스템 채용공고 페이지로 이동!")

DEMO : [클론 코딩 - 한화시스템 채용공고](https://clone-hanhwasystems-recruit.netlify.app/ "클론코딩 페이지로 이동!")

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
