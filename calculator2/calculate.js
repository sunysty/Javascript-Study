/*
    1. result창과 input창 만들기

    2. 계산부호 함수 만들기
        - reset -> input.value = ""
        - positive_nagative_num -> result = result*(-1)
        - percent -> result = result*(0.01)
        
    3. 숫자 입력시 resu-ㄹlt창에 실시간으로 표시하기
    4. 연산기호 입력시 input창 초기화하기
*/

const result = document.querySelector('.result');
const form = document.querySelector('form');
const user_input = document.querySelector('.userInput');
const button = document.querySelector('td');


const calculate = () => {
    // 리셋함수
    const result = () => {
        result.value = '';
    }

    // 양수음수 바꾸는 함수
    const positive_nagative_num = () => {

    }

    // %함수
    const percent = () => {

    }

    //number, ., %, +/- 눌렀을때 result값 업데이트
    const userInput = (el) => {
        user_input.value += el;
    }


    // 연산자를 클릭할때마다 result값 화면상에 reset되도록
    button.addEventListener("click", () => {

    })

    // 숫자 입력시 result창에 실시간으로 표시하기
    result.innerHTML = '';

    // 연산기호 입력시 input창 초기화하기

}



form.addEventLister('submit', (e)=>{
    e.preventDefault();

    calculate;
})

