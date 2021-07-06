const result_blank = document.querySelector('.result_blank');
const result_push = document.querySelector('.result_push');
const bonus_blank = document.querySelector('.result_bonus_blank');
const bonus_push = document.querySelector('.result_bonus_push');

// 45까지 배열만들기
const balls = Array(45).fill().map(function(item, idx){
    return idx+1; // 0부터 이니깐
});
console.log(balls);

// 랜덤으로 숫자 가져오기
const mixed = [];

while(balls.length > 0){
    let moved = balls.splice(Math.floor(Math.random() * balls.length), 1)[0]; 
    //splice(시작번호, 갯수, 추가하는것)
    //[0]은 []를 없앤다
    mixed.push(moved);
}

const picked_number = mixed
                    .slice(0,6)
                    //6개 뽑을때 이걸 쓴다.(0~6까지 뽑음)
                    .sort(function(p,c){
                        return p-c;
                    //오름차순  c-p내림차순
                    });

const bonus = mixed[mixed.length-1];

//버튼을 눌렀을때 숫자가 나오도록
    //결과버튼
result_push.addEventListener("click", () => {
    const ball_color = (num) => {
        let ball = document.createElement('div');
        ball.classList.add('ball_color');
        ball.textContent = picked_number[num];

        let backgroundColor;
        if(picked_number[num] <= 10){
            backgroundColor = 'red';
        }else if(picked_number[num] <= 20){
            backgroundColor = 'orange';
        }else if(picked_number[num] <= 30){
            backgroundColor = 'blue';
        }else if(picked_number[num] <= 45){
            backgroundColor = 'yellow';
        }

        ball.style.background = backgroundColor;
        result_blank.appendChild(ball);
    }

    setTimeout(function(){
        ball_color(0);
    }, 500);
    setTimeout(function(){
        ball_color(1);
    }, 1000);
    setTimeout(function(){
        ball_color(2);
    }, 1500);
    setTimeout(function(){
        ball_color(3);
    }, 2000);
    setTimeout(function(){
        ball_color(4);
    }, 2500);
    setTimeout(function(){
        ball_color(5);
    }, 3000);
});

    //보너스버튼
// bonus_push.addEventListener("click", () => {
//     const ball_color = ()
// })

bonus_push.addEventListener("click", () => {
    const ball_color = (num) => {
        let ball = document.createElement('div');
        ball.classList.add('ball_color');
        ball.textContent = picked_number[num];

        let backgroundColor;
        
        if(picked_number[num] <= 10){
            backgroundColor = 'red';
        }else if(picked_number[num] <= 20){
            backgroundColor = 'orange';
        }else if(picked_number[num] <= 30){
            backgroundColor = 'blue';
        }else if(picked_number[num] <= 45){
            backgroundColor = 'yellow';
        }

        ball.style.background = backgroundColor;
        bonus_blank.appendChild(ball);
    }

    setTimeout(function(){
        ball_color(0);
    }, 500);
})