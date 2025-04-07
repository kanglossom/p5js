function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);
  
  //뒷머리카락
  fill("#fa8796");
  quad(250,500,230,700,670,700,650,500);
  arc(450,500,450,540,PI,0);
  arc(400,320,240,120,PI,PI+PI/4);

 
  
  noStroke();
  fill("#fcf4f0");
  arc(280,500,120,120,PI/2,PI); // 좌측 귀
  arc(620,500,120,120,0,PI/2); // 우측 귀
  ellipse(450,450,400,400); // 얼굴
  
  //눈
  stroke("#000000");
  fill("#9d3331");
  ellipse(390,510,40,60); // 좌측 눈
  ellipse(510,510,40,60); // 우측 눈
  noStroke();
  fill("#e04d4a");
  ellipse(390,520,32,36); // 좌측 눈 안
  ellipse(510,520,32,36); // 우측 눈 안
  fill("#F3908E");
  ellipse(390,526,25,25); // 좌측 눈 안
  ellipse(510,526,25,25); // 우측 눈 안
  stroke("#000000");
  fill("#ffffff");
  ellipse(390,510,8,18); // 좌측 눈 동공
  ellipse(510,510,8,18); // 우측 눈 동공
  
  noStroke();
  fill("#381110");
  ellipse(375,480,60,5); // 좌측 속눈썹
  ellipse(525,480,60,5); // 우측 속눈썹
  fill("#F9E0D4");
  triangle(450,500,450,540,460,535); // 코
  // triangle(450,550,440,565,460,565); // 입
  
  fill("#fa8796");
  ellipse(335,540,40,20); // 좌측 홍조
  ellipse(565,540,40,20); // 좌측 홍조
  
  //머리카락
  fill("#fa8796");
  arc(450,420,400,370,PI,0);
  quad(300,380,320,470,440,460,470,380);
  quad(440,380,460,460,520,470,560,380);
  quad(530,380,540,470,620,480,640,380);
  quad(626,417,610,470,635,525,657,410);
  quad(260,415,279,521,293,475,307,411);
  quad(242,415,242,488,280,467,272,411);
  fill("#FDB2BC");
  ellipse(382,320,40,20);
  ellipse(432,322,20,20);
  

  /*
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    fill(0);
    textSize(16);
    text(`X: ${mouseX}, Y: ${mouseY}`, mouseX + 10, mouseY - 10);
  }
  */
  
}