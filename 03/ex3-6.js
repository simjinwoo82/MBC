let currentyear = 2026;
let birthyear;
console.log(currentyear);
console.log(`birthyear : ${birthyear}`);
let age;
birthyear=prompt ("출생연도를 입력하세요.[yyyy]",'')
age=currentyear - birthyear
document.write(`당신은 ${birthyear}년도 에 태어났어 맞지?<br>`);
document.write(`당신은 올해 ${currentyear - birthyear}살이구만 맞지?<br>`);
