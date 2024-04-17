# 🥽 팀&프로젝트

LG_HelloVision의 VOD 추천 서비스

## 📝 개요

이 섹션에는 프로젝트의 간략한 소개와 목적을 기술합니다.

## 👥 Member   

| <img src='https://github.com/Lets-SportsBroadcast-Hosting-Platform/FE/assets/95211829/f42192b7-4028-46ea-9b45-438ac292911d' width='120px' height='120px' alt='avatar'/><br/><b>[문채원](https://github.com/YachaeMoon)</b> |  <img src='https://github.com/sdfjkj/CodingTest-Study/assets/95211829/8db3754c-4923-4834-afdd-cf60bd6e0334' width='120px' height='120px' alt='avatar'/><br/><b>[김재석](https://github.com/duoni-o)</b>  |  <img src='https://github.com/Lets-SportsBroadcast-Hosting-Platform/FE/assets/95211829/adad7b14-897c-42de-a900-5b2fbfb4cf25' width='120px' height='120px' alt='avatar'/><br/><b>[박세민](https://github.com/wjdghks9292)</b>  | <img src='https://i.namu.wiki/i/AzBBoyawsmnw6ZS_rUo6a6fgvCRwrd6wuaecq6O3hGTuYdFz6NRB_k32VXgmOseF5ihOQ2xI2LWn43ZTZYQ7lw.webp' width='120px' height='120px' alt='avatar'/><br/><b>[윤영서](https://github.com/sdfjkj)</b> |  
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: 
## 🚀 기능

이 섹션에는 프로젝트의 주요 기능 목록을 작성합니다.

- 기능 1
- 기능 2
- 기능 3

## 🌳 브랜치 전략

<img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/39183eca-1fd7-4853-bfa4-d23c18df933a">

Main과 development 브랜치는 생성되어 있고 dev_개인식별ID 브랜치만 각자 생성


# ☁️ How to start

1. Github Desktop 설치


      링크 : https://desktop.github.com/  -> sign into github.com
      
      <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/1a21826d-a7fa-4811-8e3b-fb00cc0b0693">
      
      clone a repository from the internet  -> URL
      
      url :
         
      <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/6d69fb07-341c-41f4-aba9-f1b64a8e4391">
      
      Local Path => visual studio에서 이 파일 경로로 열기 
      
      clone을 받으면 처음 default  브랜치는 main
   

2. 개인 브랜치 생성


   Development가 부모가 되는 브랜치를 만들어야 하므로 current branch가 development인 상태에서 dev_000이런식으로 브랜치 이름을 정하고 new branch버튼을 클릭

   <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/a05521ef-bca5-44e4-ae47-abfb98127a04">


   ** new branch 생성 룰
   
   dev_yoon처럼 dev_식별이름(별명 가능)으로 설정 > 안 겹치게해주세요 ^^
   
   ex) dev_young, dev_kim, dev_ppgrn

   
## 🐾 github desktop 사용법


3. development를 dev_00에 merge

      작업 전 developmentf를 dev_000에 merge하기 (git checkout dev_yoon, git pull origin development)
   
      development로 가서 fetch origin, pull origin을 해줘서 최신 상태의 development로 업데이트를 해준다.
   
      그 이후 dev_00 개인 브랜치로 이동해서 merge into current branch을 클릭해서 development의 커밋을 dev_00 개인 브랜치로 merge commit을 해준다.

      <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/7a449070-d983-418f-beea-3a6f4f4ceaea">
      
      <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/7018e872-2b7e-489e-9fa9-5679ab878a93">


5. dev_00에서 개발

   **항상 dev_00 개인 브랜치에서 작업하기**
   
   visual studio terminal창에서 git bash 열면 dev_000브랜치로 세팅된 상태에서 작업

   <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/427970c9-b7fd-476c-806d-5989fc8c0628">


   dev_000 브랜치가 아니라면 꼭!! dev_000으로 checkout (클릭하면 checkout, 그 브랜치로 이동하는 것)
         
       <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/26c43a2f-e570-436e-9ca1-6559287df737">

        

6. dev_00 local을 dev_00 remote로 푸쉬
   
    작업을 하면 github desktop에 changes에 변경사항이 업데이트 됨
   
      이 작업을 local dev_yoon에서 remote dev_yoon으로 푸쉬 (git add . / git commit -m “”)
   
      ** 아래 🌺 커밋 메시지 작성방법 참고** 하여

      <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/16d531e4-0542-4433-ad4d-6b620c772945">

      push origin(local dev_yoon 에서 remote dev_yoon으로 push)까지 하면 그럼 dev_00의 상태가 development 브랜치의 상태가 똑같아짐
   

7. 매일 코드 리뷰 시간 오후 10시

      코드 리뷰 시간에 각자 어떤 작업을 했는지 설명을 하고
   
      담장자 (윤영서)가 개인 dev_00브랜치를 merge, 충돌나면 회의
   

## 🌺 커밋 메시지 작성방법

Feat: 새로운 기능 추가

Fix: 버그 수정

Docs: 문서수정

Style: 스타일관련 기능 (코드 포맷팅, 세미콜론 누락 등)

Refactor: 코드 리팩토링

Test: 테스트코드, 리팩토링 테스트 코드 추가

Chore: 빌드업무 수정, 패키지 매니저 수정(.gitignore 수정)

ex) Chore : readme 수정



## 🍄 About Code Review - milestone & issue

Github의 issue와 milestone을 사용

issue : milestone = 1:n 

< Issue > 

: 프로젝트에 새로운 기능 제안 / 버그를 찾아 제보하는 

< Milestone >

: 이정표 역할 / issue를 그룹화하는데 사용 / Milestone에 연결된  issue가 종료되면 Milestone마다 진행 상황이 업데이트

연관된 이슈의 추적과 진행 상황을 한눈에 파악하기 위함

사용방법 예시)

- Issue 작성 : 만들어둔 탬플릿에 맞춰 작성 / 꼭 추가 기능 하니여도 됨

 <img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/ae884ba1-b9ed-475b-8c59-643e6ecbbc50">

우측 설명 )

Assignees : 위탁인, 검토인으로 이슈를 관리할 사람, 봐줬으면 하는 사람을 지정한다.
Lebels : 해당 이슈에 해당하는 Tags를 지정한다. 개발분야(server/client), 목적, 중요도 등
Projects : 해당 이슈를 담을 Project를 지정한다.
Milestone : “이정표”라는 뜻으로 해당 이슈를 담을 마일스톤을 선택한다. 한 이슈당 최대 하나의 마일스톤만 지정이 가능하다. (1:n 관계)

- Milestone 작성 : issue를 이루는 작은 작업 단위

<img width="600" alt="image" src="https://github.com/LG-hellovision-Final-Project/FrontEnd/assets/95211829/e90fbd22-2345-4bfe-a390-f8cf52e21f8f">

issue에 여러개의 milestone이 있다

milestone을 하나씩 끝낼때마다 milestone close를 하고 issue의 모든 milestone이 완료되면 issue가 완료되어 close된다.



##  🐙 About FontEnd repo


[![figma](https://github.com/Lets-SportsBroadcast-Hosting-Platform/FE/assets/95211829/f28552e4-616c-4593-9573-bb38c235705b)
](https://www.figma.com/file/C7bXka7dS1J7QOdUIq3UY6/Let's-%EB%A0%88%EC%B8%A0-team-library?type=design&node-id=0-1&mode=design&t=HRBYENyLf1LdU1IX-0)
