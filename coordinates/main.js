'use strict'

const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');


addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove', event => {
        const x = event.clientX
        const y = event.clientY
        
        //style의 left, top값을 동적으로 움직이게 만듬
        vertical.style.transform = `translateX(${x}px)`;
        horozontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x - targetHalfWidth}px,${y - targetHalfHeight}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
        tag.style.transform = `translate(${x+20}px,${y+20}px)`;
    })
});


