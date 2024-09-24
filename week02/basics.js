/*호이스팅(hoisting) 
: 함수 선언 코드가 함수 호출 코드보다 아래에 있지만,
마치 선언 코드가 위에 있는 것처럼 동작*/
calc(10,printNum); 

//Q1.가고싶은 여행지를 정하는 객체 생성(객체 리터럴)
let travel = {
    destination : "France",
    season : "summer"
};

//객체를 순회할 때 for...in문 사용(배열을 순회할 때는 for...of문 사용)
for (key in travel){ 

     //괄호 표기법으로 현재 key 프로퍼티의 value를 하나씩 불러오기-
    let value = travel[key];   
    console.log(key,":",value);
}

//Q2. callback 함수를 사용해 홀수만 출력하기
function calc (num,callback){
    for(let i=1; i<=num; i+=2){
        callback(i);
    }
}
function printNum (num){
    console.log(num)
}