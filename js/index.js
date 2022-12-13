// 시작줄 시간 찍기
var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var AmPm = "AM";
  if (hours > 12) {
    var AmPm = "PM";
    hours %= 12;
  }

  Target.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  Target_apm.innerHTML = `${AmPm}`;

}
clock();
setInterval(clock, 1000); // 1초마다 실행



// 각 폴더명 모달창열기/닫기
function computer모달열기창() {
  document.querySelector('.computer').addEventListener('click', function () {
    document.querySelector('.computerModal').style.display = 'block'
  })
}

function computer모달닫기창() {
  document.querySelector('.computerClose').addEventListener('click', function () {
    document.querySelector('.computerModal').style.display = 'none'
  })
}

function about모달열기창() {
  document.querySelector('.about').addEventListener('click', function () {
    document.querySelector('.aboutModal').style.display = 'block'
  })
}

function about모달닫기창() {
  document.querySelector('.aboutClose').addEventListener('click', function () {
    document.querySelector('.aboutModal').style.display = 'none'
  })
}

function timeline모달열기창() {
  document.querySelector('.timeline').addEventListener('click', function () {
    document.querySelector('.timelineModal').style.display = 'block'
  })
}

function timeline모달닫기창() {
  document.querySelector('.timelineClose').addEventListener('click', function () {
    document.querySelector('.timelineModal').style.display = 'none'
  })
}
function portfolio모달열기창() {
  document.querySelector('.portfolio').addEventListener('click', function () {
    document.querySelector('.portfolioModal').style.display = 'block'
  })
}

function portfolio모달닫기창() {
  document.querySelector('.portfolioClose').addEventListener('click', function () {
    document.querySelector('.portfolioModal').style.display = 'none'
  })
}

function contact모달열기창() {
  document.querySelector('.contact').addEventListener('click', function () {
    document.querySelector('.contactModal').style.display = 'block'
  })
}

function contact모달닫기창() {
  document.querySelector('.contactClose').addEventListener('click', function () {
    document.querySelector('.contactModal').style.display = 'none'
  })
}

computer모달열기창();
computer모달닫기창();

about모달열기창();
about모달닫기창();

timeline모달열기창();
timeline모달닫기창();

portfolio모달열기창();
portfolio모달닫기창();

contact모달열기창();
contact모달닫기창();




// 시작줄 모달
function bottomComputer모달열기창() {
  document.querySelector('.bottomComputer').addEventListener('click', function () {
    document.querySelector('.computerModal').style.display = 'block'
  })
}
function bottomComputer모달닫기창() {
  document.querySelector('.contactClose').addEventListener('click', function () {
    document.querySelector('.computerModal').style.display = 'none'
  })
}
bottomComputer모달열기창();
bottomComputer모달닫기창();

function bottomContact모달열기창() {
  document.querySelector('.bottomContact').addEventListener('click', function () {
    document.querySelector('.contactModal').style.display = 'block'
  })
}
function bottomContact모달닫기창() {
  document.querySelector('.contactClose').addEventListener('click', function () {
    document.querySelector('.contactModal').style.display = 'none'
  })
}
bottomContact모달열기창();
bottomContact모달닫기창();

// 시작창 눌렀을 때 효과
// function 시작줄() {
//   var change = document.getElementsByClassName('bottomButton');

//   change.style.border.color = " rgb(153, 153, 153) rgb(255, 255, 255) rgb(255, 255, 255) rgb(153, 153, 153)";
// }

// 시작줄();