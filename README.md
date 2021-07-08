# Javascript mini project
Javascript를 이용한 토이프로젝트 입니다. 
결과물과 만들며 배운점을 기록합니다.



## Table of Contents

##### webAPI101
[1. coordinate(좌표) ](#1-coordinate좌표)  
[2. shopping_list(장보기목록)](#2-shopping_list장보기목록)

##### javascript game
[3. gugudan(구구단게임)](#3-gugudan구구단게임)<br>
[4. multiplication_table(끝말잇기)](#4-multiplication_table끝말잇기)<br>
[5. lotto(로또당첨게임)](#5-lotto로또당첨게임)<br>
[6. todolist(할일목록)](#6-todolist할일목록)



---

### 0. 공부한 것 노션정리
##### 21.05.14~</br>
- <a href="https://www.notion.so/101-a60bf628302b4296afb6bab6a7586f3b" style="background:#000; color:pink;">webAIP-101 기록</a></br>
- <a href="https://www.notion.so/JS-ES2020-3ff96ffc5022467c93c5879e18695b6d" style="background:#000; color:yellow;">자바스크립트-게임만들기 기록</a>

---

### 1. coordinate(좌표)
##### 21.05.24</br>
<img width="60%" src="https://user-images.githubusercontent.com/67423755/119437555-57572500-bd59-11eb-9d63-45fc3ef7817d.gif"/>

#### 변경사항
- top, left로 position을 줌
- 성능개선을 위해 layout을 transform으로 변경함

---

### 2. shopping_list(장보기목록)
#### 미해결
##### 21.05.28 05:12 </br>
선이 옆으로 오는 문제가 생김.</br>
<img width="30%" src="https://user-images.githubusercontent.com/67423755/119890253-8f858000-bf72-11eb-975e-78d0a8c8f9ac.gif"/>

---

### 3. gugudan(구구단게임)
##### 21.07.02
<img width="50%" src="https://user-images.githubusercontent.com/67423755/124345054-4da2c600-dc11-11eb-8469-c3efb139eb6a.gif"/>
- classList add로 animation효과를 주는 클래스 생성 --> settimeout을 이용, 몇초 후 애니메이션이 classList를 remove로 제거되도록 만듬</br>
- eventListener에서  form을 submit해주면 enter와 click이 모두 해결된다.

---

### 4. multiplication_table(끝말잇기)
##### 21.07.03
<img width="50%" src="https://user-images.githubusercontent.com/67423755/124345066-5e533c00-dc11-11eb-87e7-1434479349e0.gif"/>
- new Date()함수를 이용해서 year-month+1-date 을 표시하기
- '0'.slice(-2)를 이용해서 yyyy-mm-dd로 날짜 표시하기

---

### 5. lotto(로또당첨게임)
#### 21.07.04
<img width="50%" src="https://user-images.githubusercontent.com/67423755/124768295-83c6a980-df73-11eb-9d59-8e4355a29a25.gif"/>
- array().fill().map()을 이용해서 배열만들기
- splice(), Math.random()를 이용해서 랜덤한 공 뽑아내기
- push()로 랜덤한 숫자한개 뽑기
- slice()로 여러개의 공을 뽑기
- sort()로 오름차순으로 뽑힌 공을 나열하기
- 숫자의 범위마다 공의 색을 바꿔주는 클래스를 
- setTimeout으로 공이 차례대로 나타나게 만들기

---

### 6. todolist(할일목록)
#### 21.07.05
<img width="50%" src="https://user-images.githubusercontent.com/67423755/124918760-5db30f00-e030-11eb-86f9-c7d8c26d26ac.gif"/>
-document.createElement(태그), 부모.appendChild(자식), removeChild 를 이용해서 li class="list"를 떼고 붙임
