/*
1. 클릭했을때
    1-1. 숫자나 기호를 누르면, input 창에 값을 표시
    1-2. =버튼을 누르면 계산되는 메소드 사용
    1-3. AC버튼을 누르면 input 값을 비워줌

2. input 값을 계산(->메소드이용)
    2-1. result 함수 만들기 : input에 입력된 값을 계산하는 함수
    2-2. result를 html로 화면상에 표시

*/

const user_input = document.querySelector('.userinput_blank')
const result_blank = document.querySelector('.result');

const userInputHandler = (el) => {
    //input창에다가 받은 값을 넣어줌
    user_input.value += el;
}

const calculateResult = () => {
    //user_input 창에 있는 연산을 실행하고, 
    let result;
    result = eval(user_input.value);
    result_blank.innerHTML = result;

    //결과값을 결과창에 띄운다.
}

const reset = () => {
    user_input.value ="";
    result_blank.textContent="result";
}


/*

1. 계산기호 안뜨게 만들기
2. 기호 누르고 숫자 입력하면 새로
3. 천단위로 쉼표 넣기
4. 선얇게

*/
