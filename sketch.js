let img;

var plx = 300;
var ply = 425;
var pWidth = 50;
var pHeight	= 70;
var pSpeed = 3;

var alx = 50;
var aly = 150;
var aWidth = 50;
var aHeight	= 50;

var a2x = 110;
var a2y = 150;
var a3x = 170;
var a3y = 150;
var a4x = 230;
var a4y = 150;
var a5x = 290;
var a5y = 150;
var a6x = 350;
var a6y = 150;
var a7x = 410;
var a7y = 150;
var a8x = 470;
var a8y = 150;
var a9x = 530;
var a9y = 150;

var rlx = plx;
var rly = ply;
var rWidth = 7;
var rHeight	= 20;
var rSpeed = 5;
var rlPosition = 0;
var fire = false;

var m1x = 100;
var m1y = 350;
var m1Size = 50;

var m2x = 300;
var m2y = 350;
var m2Size = 50;

var m3x = 500;
var m3y = 350;
var m3Size = 50;

var b1x = 250;
var b1y = 100;
var b1Width = 100;
var b1Height = 30;
var bSpeed = 5;
var bDirection = 1;
var bossLife = 100;
var br1x = b1x;
var br1y = b1y;
var br1Position = 1;

var score = 0;
var step = 0;
var stage = 0;
var totalTime;
var splashTime;
var gameTime;
var timeLimit = 90;

var lives = 3;

let playerImg;
let alienImg;
let gamefont;
let deathAlien;
let shootSound;
let bgMusic;
let flechaImg;
let winSound;
let meteorImage;
let loseSound;
let bossImage;
let damageSound;

function preload(){
	bgMusic = loadSound("src/bgM.wav");
	playerImg = loadImage("img/nave.png");
	alienImg = loadImage("img/alien.png");
	//gamefont = loadFont("fuente/fuente.ttf");
	deathAlien = loadSound("src/explosion.wav");
	shootSound = loadSound("src/shoot.wav");
	flechaImg = loadImage("img/flechas.png");
	winSound = loadSound("src/win.wav");
	meteorImage = loadImage("img/meteoro.png");
	loseSound = loadSound("src/lose.wav");
	bossImage = loadImage("img/boss.png");
	damageSound = loadSound("src/damage.wav");
}

function setup() {
	createCanvas(600, 500);
	img = loadImage("img/fondo.png");
	
	rectMode(CENTER);
	textAlign(CENTER);
	//imageMode(CENTER);
	bgMusic.play();
}

function draw(){
	totalTime = millis();
	if(stage == 0){
		splash();
	}

	if(stage == 1){
		game();
	}

	if(stage == 2){
		win();
	}	

	if(stage == 3){
		lose();
	}

	if(mouseIsPressed == true){
		stage = 1;
	}
}

function splash(){
	splashTime = totalTime;

	background(img);
	stroke(0, 255, 0);
	noFill();
	strokeWeight(3);
	rect(width/2, height/2, width, height);
	noStroke();
	fill(0, 255, 0);
	rect(width/2, 25, width, 50);

	fill(0, 255, 0);
	textSize(40);
	//textFont(gamefont);
	text("SPACE INVADERS", width/2, 100);
	textSize(15);
	//textFont(gamefont);
	text("UNIVERSIDAD AUTONOMA DE BAJA CALIFORNIA SUR", width/2, 130);
	textSize(30);
	//textFont(gamefont);
	text("COMO JUGAR", width/2, 180);
	textSize(15);
	//textFont(gamefont);
	text("USA LAS FLECHAS 'IZQUIERDA'", width/2, 215);
	text("Y 'DERECHA' PARA MOVER A TU PERSONAJE", width/2, 240);
	image(flechaImg, width/3, 260, 200, 100);
	textSize(15);
	//textFont(gamefont);
	text("USA LA TECLA 'S' PARA DISPARAR", width/2, 400);
	text("HAZ CLICK EN LA PANTALLA PARA INCIAR", width/2, 430);

}

function win(){
	background(img);
	stroke(0, 255, 0);
	noFill();
	strokeWeight(3);
	rect(width/2, height/2, width, height);
	noStroke();
	fill(0, 255, 0);
	rect(width/2, 25, width, 50);

	fill(0, 255, 0);
	textSize(40);
	//textFont(gamefont);
	text("GANASTE", width/2, 250);
	textSize(15);
	//textFont(gamefont);
	text("RECARGA LA PAGINA PARA VOLVER A JUGAR", width/2, 280);
}

function lose(){
	background(255, 0, 0);
	stroke(0, 255, 0);
	noFill();
	strokeWeight(3);
	rect(width/2, height/2, width, height);
	noStroke();
	fill(0, 255, 0);
	rect(width/2, 25, width, 50);

	fill("#fff");
	textSize(40);
	//textFont(gamefont);
	text("PERDISTE", width/2, 250);
	text("SOBREVIVISTE: ", width/2, 350);
	text(gameTime, width/2-150, 400);
	text("SEGUNDOS", width/2+40, 400);
	textSize(15);
	//textFont(gamefont);
	text("RECARGA LA PAGINA PARA VOLVER A JUGAR", width/2, 280);
}

function game() {
	keyPressed();
	keyTyped();
	//dibujo tablero
	background(img);
	stroke(0, 255, 0);
	noFill();
	strokeWeight(3);
	rect(width/2, height/2, width, height);
	noStroke();
	fill(0, 255, 0);
	rect(width/2, 25, width, 50);

	//dibujo jugador
	noStroke();
	fill(0, 0, 255);
	image(playerImg ,plx, ply, pWidth, pHeight);

	//dibujo alien
	fill(255);
	image(alienImg, alx, aly, aWidth, aHeight);
	image(alienImg, a2x, a2y, aWidth, aHeight);
	image(alienImg, a3x, a3y, aWidth, aHeight);
	image(alienImg, a4x, a4y, aWidth, aHeight);
	image(alienImg, a5x, a5y, aWidth, aHeight);
	image(alienImg, a6x, a6y, aWidth, aHeight);
	image(alienImg, a7x, a7y, aWidth, aHeight);
	image(alienImg, a8x, a8y, aWidth, aHeight);
	image(alienImg, a9x, a9y, aWidth, aHeight);

	rockets();

	aliens();

	meteoro();

	boss();

	splashTime = splashTime;
	gameTime = int((totalTime- splashTime)/1000);

	fill(0);	
	textSize(25);
	//textFont(gamefont);
	text("Vidas: ", 290, 35);
	text(lives, 350, 35);

	fill(0);	
	textSize(25);
	//textFont(gamefont);
	text("Puntos: ", 80, 35);
	text(score, 170, 35);

	fill(0);	
	textSize(25);
	//textFont(gamefont);
	text("Tiempo: ", 490, 35);
	text(timeLimit - gameTime, 570, 35);

	if(score>=1009){
		stage = 2;
		winSound.play();
	}

	if(lives<=0){
		stage = 3;
	}

	if(gameTime>= timeLimit){
		stage = 3;
		loseSound.play();
	}
}

function boss(){
	image(bossImage, b1x, b1y, b1Width, b1Height);
	textFont(gamefont);
	textSize(20);
	fill("#fff");
	text(bossLife, b1x+50, b1y-20);

	b1x = b1x + (bSpeed*bDirection);
	if(b1x >= 500){
		bDirection = bDirection * -1;
	}

	if(b1x <= 10){
		bDirection = bDirection * -1;
	}

	if(rlx >= b1x-b1Width/2 && rlx <= b1x+b1Width/2 && rly >= b1y-b1Width/2 && rly <= b1y+b1Width/2){
		if(bossLife>=10){
			score = score + 100;
			bossLife = bossLife-10;
			deathAlien.play();
			rlPosition = 2;
		}else{
			score = score + 100;
			deathAlien.play();
			bSpeed = 0;
			b1x = -1000;
			rlPosition = 2;
		}
	}

	fill(255,0 ,0);
	rect(br1x, br1y, rWidth, rHeight);
	if(br1Position == 1){
		br1x = br1x;
		br1y = br1y + rSpeed;
		if(br1y >= height){
			br1Position = 2;
		}
	}else{
		br1y = b1y;
		br1x = b1x;
	}

	if(br1Position == 2){
		br1y = b1y;
		br1x = b1x;
		br1Position = 1;
	}

	if(br1x >= plx-pWidth/2 && br1x <= plx + pWidth/2 && br1y >= ply-pHeight/2 && br1y <= ply + pHeight/2 ){
		lives = lives -1;
		damageSound.play();
		plx = width/2;
		br1Position = 2;
	}
}

function rockets(){
	fill(26, 175, 255);
	rect(rlx+10, rly, rWidth, rHeight);

	if(fire == true && rlPosition == 0){
		rlPosition = 1;
	}

	if(rlPosition == 1){
		rlx = rlx;
		rly = rly - rSpeed;
		if(rly<=50){
			rlPosition = 2;
		}
	}else{
		rly = ply;
		rlx = plx;
	}

	if(rlPosition == 2){
		rly = ply;
		rlx = plx;
		rlPosition = 0;
	}
}

function meteoro(){
	image(meteorImage, m1x, m1y, m1Size, m1Size);
	image(meteorImage, m2x, m2y, m2Size, m2Size);
	image(meteorImage, m3x, m3y, m3Size, m3Size);

	if(rlx >= m1x-m1Size/2 && rlx <= m1x+m1Size/2 && rly >= m1y-m1Size/2 && rly <= m1y+m1Size/2){
		if(m1Size>=20){
			m1Size = m1Size-10;
			rlPosition = 2;
		}else{
			m1x = -1000;
			rlPosition = 2;
		}
	}

	if(rlx >= m2x-m2Size/2 && rlx <= m2x+m2Size/2 && rly >= m2y-m2Size/2 && rly <= m2y+m2Size/2){
		if(m2Size>=20){
			m2Size = m2Size-10;
			rlPosition = 2;
		}else{
			m2x = -1000;
			rlPosition = 2;
		}
	}

	if(rlx >= m3x-m3Size/2 && rlx <= m3x+m3Size/2 && rly >= m3y-m3Size/2 && rly <= m3y+m3Size/2){
		if(m3Size>=20){
			m3Size = m3Size-10;
			rlPosition = 2;
		}else{
			m3x = -1000;
			rlPosition = 2;
		}
	}


	if(br1x >= m1x-m1Size/2 && br1x <= m1x+m1Size/2 && br1y >= m1y-m1Size/2 && br1y <= m1y+m1Size/2){
		if(m1Size>=20){
			m1Size = m1Size-10;
			br1Position = 2;
		}else{
			m1x = -1000;
			br1Position = 2;
		}
	}

	if(br1x >= m2x-m2Size/2 && br1x <= m2x+m2Size/2 && br1y >= m2y-m2Size/2 && br1y <= m2y+m2Size/2){
		if(m2Size>=20){
			m2Size = m2Size-10;
			br1Position = 2;
		}else{
			m2x = -1000;
			br1Position = 2;
		}
	}

	if(br1x >= m3x-m3Size/2 && br1x <= m3x+m3Size/2 && br1y >= m3y-m3Size/2 && br1y <= m3y+m3Size/2){
		if(m3Size>=20){
			m3Size = m3Size-10;
			br1Position = 2;
		}else{
			m3x = -1000;
			br1Position = 2;
		}
	}
}

function keyPressed(){
	if(keyCode == LEFT_ARROW && keyIsPressed){
		plx = plx-pSpeed;
		if(plx<=10){
			pSpeed = 0;
		}else{
			pSpeed = 3;
		}
	}
	if(keyCode == RIGHT_ARROW && keyIsPressed){
		plx = plx+pSpeed;
		if(plx>=540){
			pSpeed = 0;
		}else{
			pSpeed = 3;
		}
	}
}

function keyTyped(){
	if(key == "s" && keyIsPressed){
		fire = true;
		shootSound.play();
	}else{
		fire = false;
	}
}

function aliens(){
	if(rlx >= alx-aWidth/2 && rlx <= alx+aWidth/2 && rly >= aly-aHeight/2 && rly <= aly+aHeight/2){
		deathAlien.play();
		alx = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a2x-aWidth/2 && rlx <= a2x+aWidth/2 && rly >= a2y-aHeight/2 && rly <= a2y+aHeight/2){
		deathAlien.play();
		a2x = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a3x-aWidth/2 && rlx <= a3x+aWidth/2 && rly >= a3y-aHeight/2 && rly <= a3y+aHeight/2){
		deathAlien.play();
		a3x = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a4x-aWidth/2 && rlx <= a4x+aWidth/2 && rly >= a4y-aHeight/2 && rly <= a4y+aHeight/2){
		deathAlien.play();
		a4x = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a5x-aWidth/2 && rlx <= a5x+aWidth/2 && rly >= a5y-aHeight/2 && rly <= a5y+aHeight/2){
		deathAlien.play();
		a5x = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a6x-aWidth/2 && rlx <= a6x+aWidth/2 && rly >= a6y-aHeight/2 && rly <= a6y+aHeight/2){
		deathAlien.play();
		a6x = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a7x-aWidth/2 && rlx <= a7x+aWidth/2 && rly >= a7y-aHeight/2 && rly <= a7y+aHeight/2){
		deathAlien.play();
		a7x = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a8x-aWidth/2 && rlx <= a8x+aWidth/2 && rly >= a8y-aHeight/2 && rly <= a8y+aHeight/2){
		deathAlien.play();
		a8x = -1000;
		rlPosition = 2;
		score = score +1;
	}

	if(rlx >= a9x-aWidth/2 && rlx <= a9x+aWidth/2 && rly >= a9y-aHeight/2 && rly <= a9y+aHeight/2){
		deathAlien.play();
		a9x = -1000;
		rlPosition = 2;
		score = score +1;
	}
}
