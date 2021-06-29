const area = document.getElementById('area'),
	  contentWrapepr = document.getElementById('content'),
	  modalResult = document.getElementById('modal-result-wrapper'),
	  overlay = document.getElementById('overlay'),
	  btnClose = document.getElementById('btn-close');

let move = 0,
	result = '';

area.addEventListener('click', e => {
	if(e.target.className = 'box') {
		move % 2 == 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
		move++;
		check();
	}
})

const check = (e) => {
	const boxes = document.getElementsByClassName('box');
	let innerArr = [];

	for (let elem of boxes) {
		if (elem.innerHTML !== '') {
			innerArr.push(elem.innerHTML);
		}
	}

	const arr = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];
	for(i = 0; i <  arr.length; i++) {
		if(boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
			result = 'крестики';
			prepareResult(result);
		} else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O') {
			result = 'нолики';
			prepareResult(result);
		} else if (innerArr.length == 9) {
			drawResult();
		}
	}
}

const drawResult = () => {
	contentWrapepr.innerHTML = `Ничья!`;
	modalResult.style.display = 'block';
}

const prepareResult = winner => {
	contentWrapepr.innerHTML = `Победили ${winner}!`;
	modalResult.style.display = 'block';
}

const closeModal = () => {
	modalResult.style.display = 'none';
	location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);