# Starbucks

#### 1차 때는 id나 class 명 작성 시 네이밍 규칙없이 진행을 했었는데 최종 프로젝트 진행 시 규칙을 정해서 진행하겠습니다.<br/><br/>

## 프론트 제작 규칙 (Update. 241125)<br/>
#### Q. 각자 맡은 페이지 작업 시 맡은 페이지 1Page 완료 후 다음 페이지를 넘어가서 진행합니다.<br/>
A. 프론트 제작에서 막히는 부분은 도움은 드릴 수 있으나 확인도 안된 여러 페이지 손을 대고 도움을 요청하면 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;전체 확인하는데 시간이 더 오래 걸립니다. 한 페이지를 완벽하게 끝내고 다음 페이지 진행하면서 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;도움이 필요할 때 요청을 하시면 빠르게 확인이 가능합니다.<br/>
#### Q. 가장 쉬운 페이지들 부터 작업을 진행합니다.<br/>
A. 프론트는 결국 보여지는 화면단이기 때문에 가장 쉽게 할 수 있는 페이지부터 빠르게 채우는 게 좋습니다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;쉬운 페이지를 채우고 남은 기간을 계산하여 남은 프로젝트 페이지 제작일을 계산해서 진행하시는게 좋습니다.<br/>
#### Q. 프론트 페이지는 현재 기능이 안되더라도 보여지는 화면은 출력되게 해야합니다.<br/>
A. 2번 내용과 비슷한 내용인데 1차 때 기능에 집중하느라 페이지를 못 채운 부분들이 존재했습니다. <br/>
&nbsp;&nbsp;&nbsp;&nbsp;기능도 중요하지만 우선 클릭 시 페이지가 보여야 되기 때문에 맡으신 페이지는 출력되게 해주셔야 합니다.<br/><br/>
   
## 프론트 작업 순서<br/>
1. 페이지 생성 (header, footer는 우선 제외합니다.) <br/>
2. 임의 버튼을 만들어서 링크를 눌렀을 때 Controller를 거쳐서 페이지가 나오게 만듭니다. <b>(link 이동 방식은 onclick으로 지정합니다.)</b> <br/>
<b>[2-1 예시]</b> <br/>
   &lt;header&gt; <br/>
   &nbsp;&nbsp;&nbsp; &lt;div onclick="move_noticeList()"&gt;페이지명&lt;/div&gt; <br/>
   &lt;/header &gt; <br/>
3. oclick 시 통합 이동 파일로 이동해서 controller 를 거쳐서 파일이 출력되는 부분을 확인헤주세요.<br/>
4. 담당하시는 모든 페이지를 출력되게 먼저 하신 후 그 다음 컨텐츠 영역 작업을 진행 해주세요.<br/>
5. 시안이 완성되고 본인이 작업할 페이지 받았을 시 본인이 완료가 가능한 일정을 1차적으로 Slack을 통해 공유를 합니다.<br/>
본인이 지정한 일정은 지키며 작업을 진행해주셔야 하며 해당 기간내에 끝내지 못한다면 반드시 Slack을 통해 일정을 공유해야 하며<br/>
도움이 필요할 경우 적어도 도움을 줄 수 있는 사람이 작업할 시간이 있게 2~3알 전에는 미리 일정을 공유해야 합니다.<br/>

###### * 현재 명칭 정리 중이라 통합 이동 파일명과 onclick 이동명 규칙이 정해지면 업데이트 후 안내드리겠습니다.<br/><br/><br/>

#### [규칙에 대한 참고 자료]
[사이트1 바로가기](http://211.218.150.121:7001/guide/menual.html) <br/>
[사이트2 바로가기](https://velog.io/@gogi7979/HTML-CSS-%EB%84%A4%EC%9D%B4%EB%B0%8D#q3-css%EB%B0%A9%EB%B2%95%EB%A1%A0-bem%EC%9D%B4%EB%9E%80)<br/><br/>

## id 작성법
- 사이트1의 내용을 근거하여 id는 하단 표 기준으로 작성을 해주시면 됩니다.

|잘못된 예|올바른 예|
|------------|------------|
| control_center | controlCenter |
| control_center | controlCenter |
<br/>
- 시작의 이름은 영문 소문자를 사용하되 두 번째 단어부터 첫 번째 문자를 대문자로 처리하는 기법(카멜 케이스)을 사용한다.<br/>
- 동일한 이름의 id는 문서에서 한번만 사용이 가능하다.<br/>
- 지정된 레이아웃 및 폼객체를 제외한 스타일 지정을 위하여 id를 사용하지 않는다.<br/>

###### [id 작성법 출처] <br/> (http://211.218.150.121:7001/guide/menual.html)<br/><br/>

## class 작성법 ★<br/>
- 사이트2의 내용을 근거하여 class는 CSS방법론, BEM 작성법을 활용해서 진행합니다. <br/>
- B Blcok : 블록 E Element : 요소 M Modifier : 수식어 의 약자 <br/>
- CSS방법론 중 가장 많이 쓰이고 있다. 클래스 이름만 보고도 쉽게 이해할 수 있다는 것이 큰 장점. 선택자를 보고 무엇을 하는지, 어디서 사용하는지, class들의 관계를 알 수 있다. <br/>

#### [class 예시]
- 저희 1차 기준으로 사이트맵 별 명칭이 있었는데 게시판 기준으로 설명을 드리면 공지사항 명칭이 notice 였습니다. <br/>
- 작성 방법은 <b>[페이지 명칭__내용]</b> 예를 들어 공지사항 기준 <b>[notice__title]</b> 이런 식으로 작성을 해주시면 됩니다. <br/>
- 항상 페이지 명칭을 앞에 작성 후 언더바(_) 2번 하고 그 뒤 작성할 css명칭을 작성해주세요. <br/>

![101552](https://github.com/user-attachments/assets/7ef8564d-c529-4ef5-9b4e-14cfa29b9876)

#### [class 통합 사용방법 예시]  
- 현재 시안이 없지만 1차 프로젝트 기준으로 포인되는 녹색컬러 다들 기억하실거라고 생각합니다. <br/>
이번 프로젝트에서는 전체적으로 공통된 css 해당 이미지에 적힌 것 처럼 사용하려고 합니다. <br/>
공통된 컬러나 명칭은 제가 지정을 해서 추후에 업로드 하겠습니다.  <br/>

- 사용 방법은 <b>:root {}</b> css를 만들어주고  <b>--cssName : 속성 ;</b> 이렇게 지정을 해주시면 됩니다. <br/>
그리고 본인이 필요한 css 영역에 가서 예를 들어 배경색을 바꾸고 싶다면 이미지에 16번째 줄 처럼 <br/>
<b>background: var(--secondColor);</b> 이렇게 작성 해주시면 상단에서 지정한 색상을 그대로 불러와서 적용시킬 수 있습니다. <br/>

###### [class 작성법 출처] <br/> (https://velog.io/@gogi7979/HTML-CSS-%EB%84%A4%EC%9D%B4%EB%B0%8D#q3-css%EB%B0%A9%EB%B2%95%EB%A1%A0-bem%EC%9D%B4%EB%9E%80)<br/><br/>

## React 파일명 작성법<br/>
- 리액트에서는 jsx 파일명에 _ (언더바) 가 들어갈 경우 인식이 안되는 것은 아니지만 오류가 난다고 나옵니다. <br/>
저희가 1차 작업 시 작업을 하다가 막히면 새로 작업을 진행하는 경우에 _날짜를 쓰거나 _숫자로 다르게 표시를 했었는데 <br/>
리액트에서는 그렇게 했을 시 파일 불러올 때 안불러지는 것은 아니지만 오류라고 인식을 하기 떄문에 새로운 네이밍이 필요헙나다.<br/>

#### [React 파일명 네이밍 예시] 
- 위의 문제 때문에 저도 퍼블리셔 시절 파일을 backup 시 대부분 _날짜로 많이 사용했기 때문에 _ 를 사용을 못한다고 했을 때 참 난감했는데 <br/>
새로운 방법을 1개 제시합니다. 사실 backup용도로 사용한다면 _날짜를 사용해도 문제는 없는데 작업 파일로 쓰고 싶다면  <br/>
<b>파일명V숫자.jsx</b> or <b>파일명Ver숫자.jsx</b>로 작성을 해서 사용을 해주시면 됩니다. V = Version을 뜻하며 작업 시 기존 파일은 백업하고 다시 사용하고 싶다면  <br/>
말씀드린대로 네이밍을 해서 사용하시면 될 거 같습니다. <br/>
최종적으로 예시 정리해드리면 <b>파일명V숫자.jsx</b> or <b>파일명Ver숫자.jsx</b> 이런 형태입니다. <br/>
공지사항 리스트일 경우 <b>noticeListV01.jsx</b> or <b>noticeListVer01.jsx</b> 이렇게 해주시고  <br/>
import 해주시면 오류 없이 불러올 수 있습니다.
