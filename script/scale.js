// 변수생성 userHeight, userWeight, normal_w, scaleBtn
const userHeight = document.querySelector('#user_height');
const userWeight = document.querySelector('#user_weight');
const scaleBtn = document.querySelector('#scale_btn');
const result = document.querySelector('.result')
const over = document.querySelector('.over_weight')
let normal_w
// 변수확인
console.log(userHeight, userWeight, scaleBtn)
// 이벤트
//적정체중 = (본인신장-100)*0.9
scaleBtn.addEventListener('click', function (){
    normal_w = (userHeight.value - 100)*0.9
    // window.alert(`적정무게는 ${normal_w} kg 입니다. 초과되는 무게는 ${userWeight.value - normal_w} kg 입니다.`)
    result.innerHTML = `적정무게는 ${normal_w} kg 입니다.`
    over.innerHTML = `초과되는 무게는 ${userWeight.value - normal_w} kg 입니다.`
})