const user_input = document.querySelector('input');
const button = document.querySelector('button')
const result = document.querySelector('.result');


button.addEventListener("click", ()=>{
    let list = document.createElement('li');//li태그를 생성하고 list라는 변수를 줌
    list.innerText = user_input.value;//list에 user_input에 입력된 값을 표시함
    result.appendChild(list);//result에 list를 자식요소로 추가해줌
    user_input.value = " ";//user_input값은 빈칸으로 만듬

    list.addEventListener('mouseover', () => {
        list.style.cursor = "pointer"
    })

    list.addEventListener('click', () => {
        list.style.textDecoration = "line-through"; //클릭시 중간줄을 그어주는 스타일 적용
        list.style.color = "red"
    })

    list.addEventListener('dblclick', ()=>{
        result.removeChild(list); //더블 클릭시 아예사라지도록
    })

})


