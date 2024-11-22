# Starbucks

#### 1차 때는 id나 class 명 작성 시 네이밍 규칙없이 진행을 했었는데 최종 프로젝트 진행 시 규칙을 정해서 진행하겠습니다.<br/><br/>

## 프론트 제작 규칙 (Update. 241122)<br/>
#### Q. 각자 맡은 페이지 작업 시 맡은 페이지 완료 후 다음 페이지를 넘어가서 진행합니다.<br/>
A. 프론트 제작에서 막히는 부분은 도움은 드릴 수 있으나 확인도 안된 여러 페이지 손을 대고 도움을 요청하면 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;전체 확인하는데 시간이 더 오래 걸립니다. 한 페이지를 완벽하게 끝내고 다음 페이지 진행하면서 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;도움이 필요할 때 요청을 하시면 빠르게 확인이 가능합니다.<br/>
#### Q. 가장 쉬운 페이지들 부터 작업을 진행합니다.<br/>
A. 프론트는 결국 보여지는 화면단이기 때문에 가장 쉽게 할 수 있는 페이지부터 빠르게 채우는 게 좋습니다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;쉬운 페이지를 채우고 남은 기간을 계산하여 남은 프로젝트 페이지 제작일을 계산해서 진행하시는게 좋습니다.<br/>
#### Q. 프론트 페이지는 현재 기능이안 되더라도 보여지는 화면은 출력되게 해야합니다.<br/>
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

#### 예시) 
- 저희 1차 기준으로 사이트맵 별 명칭이 있었는데 게시판 기준으로 설명을 드리면 공지사항 명칭이 notice 였습니다. <br/>
- 작성 방법은 [페이지 명칭__내용] 예를 들어 공지사항 기준 [notice__title] 이런 식으로 작성을 해주시면 됩니다. <br/>
- 항상 페이지 명칭을 앞에 작성 후 언더바(_) 2번 하고 그 뒤 작성할 css명칭을 작성해주세요. <br/>

###### [class 작성법 출처] <br/> (https://velog.io/@gogi7979/HTML-CSS-%EB%84%A4%EC%9D%B4%EB%B0%8D#q3-css%EB%B0%A9%EB%B2%95%EB%A1%A0-bem%EC%9D%B4%EB%9E%80)
