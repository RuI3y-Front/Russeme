(function () {
  let doc = document.documentElement;
  let w = window;
  let curScroll;
  let prevScroll = w.scrollY || doc.scrollTop;
  let curDirection = 0;
  let prevDirection = 0;

  let header = document.querySelector(".navbar");
  let toggled;
  let threshold = 140;

  let checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;

    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };



  let toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add("hide");
      header.classList.remove("bgColor");
    } else if (curDirection === 1) {
      header.classList.remove("hide");
      header.classList.add("bgColor");
    } else {
      toggled = false;
    }

    return toggled;
  };
  window.addEventListener("scroll", checkScroll);
})();


// __________________MENU______________

toggle= document.querySelector('.toggle-btn')
overlay=document.querySelector('.overlay')
mainHeader=document.querySelector('.main-header')
profile=document.querySelector('.profile')

toggle.addEventListener('click',function(){
  toggle.classList.toggle('open')
  overlay.classList.toggle('open')
  mainHeader.classList.toggle('open')
  profile.classList.toggle('open')
})

document.addEventListener('click',function(e){
  
 if(e.target.className =='overlay open'){
  toggle.classList.remove('open')
  overlay.classList.remove('open')
  mainHeader.classList.remove('open')
  profile.classList.remove('open')
 }
})
//  ___________________Observer____________________

//     let option={
//     threshold:0.7,
// }

// let observer=new IntersectionObserver(createObs,option)


//  ____________________Scroll Anamite________________


page_pic_two = 200;
page_pic_three = 900;

const img = document.querySelectorAll(".pic img");
const hTwo=document.querySelector('.h2-title')
const paragraph=document.querySelector('.paragraph')
document.addEventListener("scroll", function (e) {
  let scrolloffset = window.pageYOffset;
console.log(scrolloffset);
  if (scrolloffset <= page_pic_two) {
    img.forEach((e) => {
      e.classList.remove("go");
    });
  } 
   else {
    img.forEach((e) => {
      e.classList.add("go");
     
    });    
  }
  if(scrolloffset>page_pic_three){
    hTwo.classList.add('go');
    paragraph.classList.add('go')
    
  }
});

let imgs = document.querySelectorAll(".big-man-curser img");
let slide = document.querySelectorAll(".slide");

imgs.forEach((e) => {
  e.addEventListener("click", function () {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove("opacity-img");
    }
    e.classList.add("opacity-img");
    const id = e.getAttribute("data-id");
    for (let k = 0; k < slide.length; k++) {
      slide[k].classList.remove("active");
    }

    slide[id].classList.add("active");
  });
});



// _________________MESAGE_________________
const iconMessage=document.querySelector('.icon-message')
const iconMessageOpen=document.querySelector('.icon-message-open')
const tabBottomTwo = document.querySelector('.tab-bottom-two')
const tabBottomOne = document.querySelector('.tab-bottom-one')
const tabTwoTop =document.querySelector('.message-top-tab')
const messageTab=document.querySelector('.message-tab')


const message=document.querySelector('.message')
message.addEventListener('click',function(e){
  iconMessage.classList.toggle("block");
  messageTab.classList.toggle('message-tab-flex')
  iconMessageOpen.classList.toggle('opacity')
  tabBottomTwo.classList.add('go');
  tabBottomOne.classList.add('go');
  tabTwoTop.classList.add('go')
})
