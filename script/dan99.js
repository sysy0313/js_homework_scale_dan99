// top 변수생성 : input, dan2Btn
const dan2 = document.querySelector('#dan2');
const dan2Btn = document.querySelector('#dan2Btn');
const top_result = document.querySelector('#top_result')
const top_reset = document.querySelector('#top_reset')
let dan = 2
// 2단 목록 변수생성 dan2Btn_1~9
const dan2Btn_1 = document.querySelector('.dan2Btn_1')
const dan2Btn_2 = document.querySelector('.dan2Btn_2')
const dan2Btn_3 = document.querySelector('.dan2Btn_3')
const dan2Btn_4 = document.querySelector('.dan2Btn_4')
const dan2Btn_5 = document.querySelector('.dan2Btn_5')
const dan2Btn_6 = document.querySelector('.dan2Btn_6')
const dan2Btn_7 = document.querySelector('.dan2Btn_7')
const dan2Btn_8 = document.querySelector('.dan2Btn_8')
const dan2Btn_9 = document.querySelector('.dan2Btn_9')
const result_1 = document.querySelector('li:nth-child(1) .result')
const result_2 = document.querySelector('li:nth-child(2) .result')
const result_3 = document.querySelector('li:nth-child(3) .result')
const result_4 = document.querySelector('li:nth-child(4) .result')
const result_5 = document.querySelector('li:nth-child(5) .result')
const result_6 = document.querySelector('li:nth-child(6) .result')
const result_7 = document.querySelector('li:nth-child(7) .result')
const result_8 = document.querySelector('li:nth-child(8) .result')
const result_9 = document.querySelector('li:nth-child(9) .result')
//정답보기, 다시하기
const view = document.querySelector('#view')
const reset = document.querySelector('#reset')
//확인
console.log(dan2, dan2Btn, top_result, top_reset)
console.log(dan2Btn_1,dan2Btn_9, result_1, result_9)
console.log(view, reset)
// 이벤트
// top
dan2Btn.addEventListener('click', function(){
    top_result.innerHTML = dan2.value * dan
})
top_reset.addEventListener('click', function(){
    dan2.value ='';
    top_result.innerHTML = '';
})
// 목록
dan2Btn_1.addEventListener('click', function(){result_1.innerHTML = dan*1})//2*1
dan2Btn_2.addEventListener('click', function(){result_2.innerHTML = dan*2})//2*2
dan2Btn_3.addEventListener('click', function(){result_3.innerHTML = dan*3})//2*3
dan2Btn_4.addEventListener('click', function(){result_4.innerHTML = dan*4})//2*4
dan2Btn_5.addEventListener('click', function(){result_5.innerHTML = dan*5})//2*5
dan2Btn_6.addEventListener('click', function(){result_6.innerHTML = dan*6})//2*6
dan2Btn_7.addEventListener('click', function(){result_7.innerHTML = dan*7})//2*7
dan2Btn_8.addEventListener('click', function(){result_8.innerHTML = dan*8})//2*8
dan2Btn_9.addEventListener('click', function(){result_9.innerHTML = dan*9})//2*9
// 정답보기,다시하기
view.addEventListener('click', function(){
    result_1.innerHTML = dan*1
    result_2.innerHTML = dan*2
    result_3.innerHTML = dan*3
    result_4.innerHTML = dan*4
    result_5.innerHTML = dan*5
    result_6.innerHTML = dan*6
    result_7.innerHTML = dan*7
    result_8.innerHTML = dan*8
    result_9.innerHTML = dan*9
})
reset.addEventListener('click', function(){
    result_1.innerHTML = '';
    result_2.innerHTML = '';
    result_3.innerHTML = '';
    result_4.innerHTML = '';
    result_5.innerHTML = '';
    result_6.innerHTML = '';
    result_7.innerHTML = '';
    result_8.innerHTML = '';
    result_9.innerHTML = '';
})