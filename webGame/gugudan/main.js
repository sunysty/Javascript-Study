const first_num = document.querySelector('.first_num')
const multi = document.querySelector('.multi')
const second_num = document.querySelector('.second_num')
const equal = document.querySelector('.equal')
const answer_input = document.querySelector('input')
const button = document.querySelector('button')

const num1 = Math.floor(Math.random()*9)+1
const num2 = Math.floor(Math.random()*9)+1

first_num.innerHTML = num1
second_num.innerHTML = num2

const answer = num1 * num2

button.addEventListener("click", () => {
    if(answer_input.value == ''){
        alert(`정답을 입력해주세요`)
    }else{
        if(answer_input.value == answer){
            alert(`${answer_input.value}은 정답입니다`)
        }else{
            alert(`${answer_input.value}은 오답입니다`)
        }
    }
})

//개선하고 싶은 부분
//1. alert창 뜨고 난 다음에 다시 input에 포커싱
//2. enter로 값 입력가능 