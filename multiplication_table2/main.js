/*
title
1. 오늘의 날짜 표시되도록

main
1. 이벤트리스너로 submit시 제출되도록

2. input.value 값이 question의 마지막 글자와 같으면
    3. 하단에 good 출력
    4. question에 input.value 표시

5. input.value 값이 question의 마지막 글자와 다르면
    6. 하단에 try again 출력
    7. settimeout으로 애니메이션 효과 
*/

//html 가져오기
let today = document.querySelector('.today')

let question = document.querySelector('.question')

let form = document.querySelector('form')
let input = document.querySelector('input')
let result = document.querySelector('.result')



//날짜 구하기
let date = new Date();
let year = date.getFullYear();
let month = ('0'+ (date.getMonth()+1)).slice(-2) ; //왜 -1된 값이 나오지?
let day = ('0' + date.getDate()).slice(-2);

//날짜 표시하기
today.textContent = `${year}-${month}-${day}`


//wrongAnswer 클래스를 add, remove를 반복하기 위해 setTimeout을 사용
const animationOut = () => {
    result.classList.remove('resultAnimation')
}



//form 제출시 정답이면 good, 오답이면 tryagain 출력
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(question.textContent[question.textContent.length-1] === input.value[0]){
        question.textContent = input.value; 
        result.textContent = 'GOOD!'
        input.value = '';
    }else{
        result.textContent = 'TRY AGAIN!'
        input.value = '';
        result.classList.add('resultAnimation')
        setTimeout(animationOut, 400)
    }
})
