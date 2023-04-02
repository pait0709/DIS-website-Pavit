console.log("hi")
const header=document.querySelector('.box')
window.onscroll=function(){
    var top=window.scrollY
    var my_name=document.getElementById("bhaha")

    if(top>header.clientHeight){
        my_name.innerHTML="Pavit Singh"
    }
    else{
        my_name.innerHTML=""
    }

}

const observer =new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
    
    });
    const hiddenElements = document.querySelectorAll('.hghg');
    hiddenElements.forEach((el) => observer.observe (el));

    const observer1 =new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
        entry.target.classList.add('matmaan');
        } else {
        entry.target.classList.remove('matmaan');
        }
        });
        
        });
        const hiddenElements1 = document.querySelectorAll('.aisakya');
        hiddenElements1.forEach((el) => observer1.observe (el));


        const gallery = document.getElementById("gallery");
const blocks = document.querySelectorAll(".block");

const maxScale = 2;
const radius = 300;
const radius2 = radius * radius;

window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const xDecimal = mouseX / window.innerWidth;
  const yDecimal = mouseY / window.innerHeight;
  const maxX = gallery.offsetWidth - window.innerWidth;
  const maxY = gallery.offsetHeight - window.innerHeight;
  const panX = -maxX * xDecimal;
  const panY = -maxY * yDecimal;
  gallery.style.transform = `translate(${panX}px, ${panY}px)`;
});

blocks.forEach((block) => {
  const rect = block.getBoundingClientRect();
  const cx = rect.left + rect.width / 2 + window.pageXOffset;
  const cy = rect.top + rect.height / 2 + window.pageYOffset;

  const tween = gsap
    .to(block, {
      scale: 1,
      ease: "power1.in",
      paused: true,
    })
    .progress(1)
    .progress(0);

  document.addEventListener("mousemove", (e) => {
    const dx = (cx - e.pageX) ** 2;
    const dy = (cy - e.pageY) ** 2;
    if (dx + dy < radius2) {
      const scale = 1 + (maxScale - 1) * (1 - (dx + dy) / radius2);
      tween.progress(1).kill().restart().to({ scale });
    } else {
      tween.progress(0);
    }
  });
});

// script.js
const text = document.getElementById('masti');
const audio = document.getElementById('audio');


function playAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
