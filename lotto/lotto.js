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
                    //6개뽑을때 이걸 쓴다.
                    .sort(function(p,c){
                        return p-c;//오름차순  c-p내림차순
                    });

const bonus = mixed[mixed.length-1];


//버튼을 눌렀을때 숫자가 나오도록

result_push.addEventListener("click", () => {
    const ball_color = (num) => {
        let ball = document.createElement('div');
        
        ball.textContent = picked_number[num];
        ball.style.display = 'inline-block';
        ball.style.border = '1px solid black';
        ball.style.borderRadius = '50%';
        ball.style.width = '30px';
        ball.style.height = '30px';
        ball.style.textAlign = 'center';
        ball.style.marginRight = '15px';
        ball.style.marginTop = '5px';
        ball.style.marginRight = '5px';
        ball.style.marginLeft = '15px';
        ball.style.lineHeight = '30px';

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
    }, 1000);
    setTimeout(function(){
        ball_color(1);
    }, 2000);
    setTimeout(function(){
        ball_color(2);
    }, 3000);
    setTimeout(function(){
        ball_color(3);
    }, 4000);
    setTimeout(function(){
        ball_color(4);
    }, 5000);
    setTimeout(function(){
        ball_color(5);
    }, 6000);

});

