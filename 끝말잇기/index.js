const body = document.querySelector("body");
const question = document.querySelector(".question_blank");
const answer = document.querySelector(".answer_blank");
const submit = document.querySelector(".submit");

question.innerHTML = "돈가스";

submit.addEventListener("click", ()=>{
    let 제시어 = question.innerHTML;
    let 정답 = answer.value;
    
    if(제시어[제시어.length-1] === 정답[0]){
        alert("정답입니다.");
        question.innerHTML = 정답;
    }else{
        alert("오답입니다.")
    }
});



