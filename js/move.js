window.onload = () => {
	FirstMove();
	SecondMove();
	ThirdMove();
};


function FirstMove() {
  const refreshRate = 1000 / 60;
  const maxYPosition = 15;
  let cube = document.getElementsByClassName('cube-2');
  let speedY = 0.2;
  let positionY= 10;

  window.setInterval(() => {
    positionY = positionY + speedY;
    if (positionY > maxYPosition || positionY < 0) {
      speedY = speedY * (-1);
    }
	 for (var i = 0; i < 2; i++)
		 {
			 cube[i].style.bottom = positionY + 'px';		 }
    
  }, refreshRate);
}


function SecondMove() {
  const refreshRate = 1000 / 60;
  const maxYPosition = 10;
  let cube = document.getElementsByClassName('cube-4');
  let speedY = 0.2;
  let positionY= 5;

  window.setInterval(() => {
    positionY = positionY + speedY;
    if (positionY > maxYPosition || positionY < 0) {
      speedY = speedY * (-1);
    }
	 for (var i = 0; i < 2; i++)
		 {
			 cube[i].style.bottom = positionY + 'px';		 }
    
  }, refreshRate);
}
