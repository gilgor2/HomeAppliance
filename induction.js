// setTimeout으로 로딩 후 1.5초에 무너지기 func

//dom 받아오기
var introText1;
var textbox;
document.addEventListener('DOMContentLoaded', function (event) {
	introText1 = document.querySelector('.text1');
	textbox = document.querySelector('.textbox');

	//span으로 떼어놓기
	var spanned = '';
	var i = 1;
	const introText = introText1.textContent;
	for (let letter of introText) {
		if (letter !== ' ') {
			spanned += `<span class = "i${i++}">${letter}</span>`;
		} else {
			spanned += '<br>';
		}
	}
	textbox.innerHTML = spanned;

	//collapse실행
	setTimeout(() => {
		collapse();
	}, 2000);
});
const collapse = () => {
	let i = 1;
	//글자마다 속성 바꾸기
	for (let spn of textbox.children) {
		setTimeout(() => {
			spn.classList.add('move');
		}, 100 * i++);
		console.log(i);
	}
	setTimeout(() => {
		endIntro();
	}, 180 * i);
};
const endIntro = () => {
	intro = document.querySelector('.intro');
	content = document.querySelector('.content');
	intro.style.display = 'none';
	content.style.opacity = '1';
};

var powered = false
const powerOn = () => {
	var liner = document.querySelectorAll('.liner');
	const light = document.querySelector(".light");
	if (powered ) {
		liner[0].style.opacity = '0';
		liner[1].style.opacity = '0';
		powered = false;
		heatlevel(1);
		heatlevel(2);
		heatlevel(3);
		// 잔열등 켜기	
		light.style.opacity="0.6"

		// 잔열등 끄기settimeout
		setTimeout(()=>light.style.opacity="0",12000)
	} else {
		liner[0].style.opacity = '1';
		liner[1].style.opacity = '1';
		powered = true;
	}

	//소리 추가할 자리
};

const heatlevel = (num) => {
	const firstline = document.querySelector(".firstline");
	const thirdline = document.querySelector(".thirdline");
	const secondline = document.querySelector(".secondline");
	const circleCon1 = document.querySelector(".CircleCon1")
	const circleCon2 = document.querySelector(".CircleCon2")
	const circleCon3 = document.querySelector(".CircleCon3")

	var numOfCon = num===1?firstline:num===2?secondline:thirdline ;
	var val = powered===false?0:numOfCon.value;
	var whichToFire = num===1?circleCon1:num===2?circleCon2:circleCon3;
	console.log(val, powered)
	// 불키기
	if(val <1 ){
		whichToFire.children[0].style.borderColor = "var(--gray)";
		whichToFire.children[0].children[0].style.borderColor = "var(--gray)";
		whichToFire.children[0].children[0].children[0].style.borderColor = "var(--gray)";

	}
	else if(1 <= val && val <= 3){
		whichToFire.children[0].style.borderColor = "var(--gray)";
		whichToFire.children[0].children[0].style.borderColor = "var(--gray)";
		whichToFire.children[0].children[0].children[0].style.borderColor = "var(--red)";
	}else if(4 <= val && val <= 7){
		whichToFire.children[0].style.borderColor = "var(--gray)";
		whichToFire.children[0].children[0].style.borderColor = "var(--red)";
		whichToFire.children[0].children[0].children[0].style.borderColor = "var(--red)";
	}else {
		whichToFire.children[0].style.borderColor = "var(--red)";
		whichToFire.children[0].children[0].style.borderColor = "var(--red)";
		whichToFire.children[0].children[0].children[0].style.borderColor = "var(--red)";
	}
	// 전원 꺼지면 밸류 초기화
	if (!powered){
		firstline.value = 0;
		secondline.value = 0;
		thirdline.value = 0;

	}
}	
;

const heatUp = (val, num)=>{
	console.log(val ,num);
}
