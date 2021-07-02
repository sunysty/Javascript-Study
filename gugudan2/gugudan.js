const formula = document.querySelector('.formula');
const userInput = document.querySelector('input');
const form = document.querySelector('form');

//컴퓨터 숫자는 0부터 시작
let num1 = Math.ceil( Math.random() * 9 ); //내림
let num2 = Math.floor( Math.random() * 9 ) + 1; //올림
let result = num1 * num2

//formula.textContent = num1 + 'X' + num2 + '=' ;
formula.textContent = `${num1} X ${num2} =`;

//innerHTML과의 차이점은?

console.log(result);

//worngAnswer 반복사용(떼고붙이고)를 위해서 setTimeout 사용
const animationOut = () => {
    userInput.classList.remove('.wrongAnswer');
}


//form에 엔터하면 제출이 자동으로 됨
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(result === Number(userInput.value)){
        //input은 value, 다른건 textcontent
        console.log('good')
        num1 = Math.ceil( Math.random() * 9 ); //내림
        num2 = Math.floor( Math.random() * 9 ) + 1; //올림
        result = num1 * num2;

        //const는 재할당불가, let은 재할당 가능
        formula.textContent = `${num1} X ${num2} =`;  
        userInput.value = '';
    }else{
        console.log('bad')
        userInput.value = '';
        userInput.classList.add('wrongAnswer');

        setTimeout(anmiationOut, 400);
    }
})
