let cards=document.querySelectorAll(".card img")
let overlay=document.querySelector(".overlay")
let overlayCard=document.getElementById("overlay__card")
let close=document.querySelector(".close")
let next=document.querySelector(".next")
let prev=document.querySelector(".prev")
let index

//show image

cards.forEach(function(ele,i){
  ele.addEventListener("click",function(e){
    index=i
    let source=e.target.getAttribute("src")
    let sr=e.target.src
    overlay.style.display="flex"
    overlayCard.style.animationName="showImage"
    overlayCard.style.backgroundImage=`url(${source})`
    
  })
})
 // close image
close.addEventListener("click",closeImage)

function closeImage(){
  overlay.style.display="none"
}
// next image
next.addEventListener("click",nextImage)

function nextImage(){
  if(index>=cards.length-1){
    index=0
  }
  index++  
  let source=cards[index].getAttribute("src")
  overlayCard.style.backgroundImage=`url(${source})`
}
// previous image
prev.addEventListener("click",prevImage)

function prevImage(){
  if(index==0){
    index=cards.length-1
  }
  index--
  let source=cards[index].getAttribute("src")
  overlayCard.style.backgroundImage=`url(${source})`
}
// using keyboard
document.addEventListener("keydown",function(e){
  if(e.keyCode==39){
    nextImage()
  }else if(e.keyCode==37){
  prevImage()
  }else if(e.keyCode==27){
  closeImage()
  }
 

})

console.log(30+30+"ggg")