document.querySelector(".div1").style.backgroundColor="black";
document.querySelector(".btn1").style.color="white";

document.querySelector(".one").addEventListener("mouseover",function(){
    document.querySelector(".box-gif").setAttribute("src","13.gif");
},false)
document.querySelector(".one").addEventListener("mouseout",function(){
    document.querySelector(".box-gif").setAttribute("src","12.gif");
})
document.querySelector(".three").addEventListener("mouseover",function(){
    document.querySelector(".box-gif").setAttribute("src","17.gif");
},false)
document.querySelector(".three").addEventListener("mouseout",function(){
    document.querySelector(".box-gif").setAttribute("src","12.gif");
})
document.querySelector(".two").addEventListener("mouseover",function(){
    document.querySelector(".box-gif").setAttribute("src","16.gif");
},false)
document.querySelector(".two").addEventListener("mouseout",function(){
    document.querySelector(".box-gif").setAttribute("src","12.gif");
})
document.querySelector(".btn1").addEventListener("click",function()
{
    document.querySelector(".btn1").classList.add("pressed");
    document.querySelector(".btn2").classList.remove("pressed");
    document.querySelector(".btn3").classList.remove("pressed");
    document.querySelector(".btn4").classList.remove("pressed");
    document.querySelector(".div1").style.backgroundColor="black";
    document.querySelector(".btn1").style.color="white";
    document.querySelector(".div2").style.backgroundColor="white";
    document.querySelector(".btn2").style.color="black";
    document.querySelector(".div3").style.backgroundColor="white";
    document.querySelector(".btn3").style.color="black";
    document.querySelector(".div4").style.backgroundColor="white";
    document.querySelector(".btn4").style.color="black";
    document.querySelector(".top-div1").style.display="flex";
    document.querySelector(".top-div2").style.display="flex";
    document.querySelector(".top-div3").style.display="block";
    document.querySelector(".top-div4").style.display="flex";
    document.querySelector(".top-div5").style.display="flex";
    document.querySelector(".top-div6").style.display="block";
    document.querySelector(".top-div7").style.display="flex";
    document.querySelector(".top-div8").style.display="block";
    



  // setTimeout(function() {
  //   document.querySelector(".btn1").classList.remove("pressed");
  // }, 100);
})
document.querySelector(".btn2").addEventListener("click",function()
{
    document.querySelector(".btn2").classList.add("pressed");
    document.querySelector(".btn1").classList.remove("pressed");
    document.querySelector(".btn3").classList.remove("pressed");
    document.querySelector(".btn4").classList.remove("pressed");
    document.querySelector(".div2").style.backgroundColor="black";
    document.querySelector(".btn2").style.color="white";
    document.querySelector(".div1").style.backgroundColor="white";
    document.querySelector(".btn1").style.color="black";
    document.querySelector(".div3").style.backgroundColor="white";
    document.querySelector(".btn3").style.color="black";
    document.querySelector(".div4").style.backgroundColor="white";
    document.querySelector(".btn4").style.color="black";
    document.querySelector(".top-div1").style.display="none";
    document.querySelector(".top-div2").style.display="none";
    document.querySelector(".top-div3").style.display="none";
    document.querySelector(".top-div4").style.display="none";
    document.querySelector(".top-div5").style.display="none";
    document.querySelector(".top-div6").style.display="block";
    document.querySelector(".top-div7").style.display="none";
    document.querySelector(".top-div8").style.display="block";
  // setTimeout(function() {
  //   document.querySelector(".btn2").classList.remove("pressed");
  // }, 100);
})
document.querySelector(".btn3").addEventListener("click",function()
{
    document.querySelector(".btn3").classList.add("pressed");
    document.querySelector(".btn2").classList.remove("pressed");
    document.querySelector(".btn1").classList.remove("pressed");
    document.querySelector(".btn4").classList.remove("pressed");
    document.querySelector(".div3").style.backgroundColor="black";
    document.querySelector(".btn3").style.color="white";
    document.querySelector(".div2").style.backgroundColor="white";
    document.querySelector(".btn2").style.color="black";
    document.querySelector(".div1").style.backgroundColor="white";
    document.querySelector(".btn1").style.color="black";
    document.querySelector(".div4").style.backgroundColor="white";
    document.querySelector(".btn4").style.color="black";
    document.querySelector(".top-div1").style.display="flex";
    document.querySelector(".top-div2").style.display="flex";
    document.querySelector(".top-div3").style.display="none";
    document.querySelector(".top-div4").style.display="flex";
    document.querySelector(".top-div5").style.display="flex";
    document.querySelector(".top-div6").style.display="none";
    document.querySelector(".top-div7").style.display="none";
    document.querySelector(".top-div8").style.display="none";
  // setTimeout(function() {
  //   document.querySelector(".btn3").classList.remove("pressed");
  // }, 100);
})
document.querySelector(".btn4").addEventListener("click",function()
{
    document.querySelector(".btn4").classList.add("pressed");
    document.querySelector(".btn2").classList.remove("pressed");
    document.querySelector(".btn3").classList.remove("pressed");
    document.querySelector(".btn1").classList.remove("pressed");
    document.querySelector(".div4").style.backgroundColor="black";
    document.querySelector(".btn4").style.color="white";
    document.querySelector(".div2").style.backgroundColor="white";
    document.querySelector(".btn2").style.color="black";
    document.querySelector(".div3").style.backgroundColor="white";
    document.querySelector(".btn3").style.color="black";
    document.querySelector(".div1").style.backgroundColor="white";
    document.querySelector(".btn1").style.color="black";
    document.querySelector(".top-div1").style.display="none";
    document.querySelector(".top-div2").style.display="none";
    document.querySelector(".top-div3").style.display="block";
    document.querySelector(".top-div4").style.display="none";
    document.querySelector(".top-div5").style.display="none";
    document.querySelector(".top-div6").style.display="none";
    document.querySelector(".top-div7").style.display="block";
    document.querySelector(".top-div8").style.display="none";
  // setTimeout(function() {
  //   document.querySelector(".btn4").classList.remove("pressed");
  // }, 100);
})
document.querySelector(".img1").addEventListener("mouseover",function(){
  document.querySelector(".sub-title").style.display="block";
})
document.querySelector(".img1").addEventListener("mouseout",function(){
  document.querySelector(".sub-title").style.display="none";
})
document.querySelector(".img2").addEventListener("mouseover",function(){
  document.querySelector(".sub-title2").style.display="block";
})
document.querySelector(".img2").addEventListener("mouseout",function(){
  document.querySelector(".sub-title2").style.display="none";
})
document.querySelector(".img3").addEventListener("mouseover",function(){
  document.querySelector(".sub-title3").style.display="block";
})
document.querySelector(".img3").addEventListener("mouseout",function(){
  document.querySelector(".sub-title3").style.display="none";
})
document.querySelector(".img4").addEventListener("mouseover",function(){
  document.querySelector(".sub-title4").style.display="block";
})
document.querySelector(".img4").addEventListener("mouseout",function(){
  document.querySelector(".sub-title4").style.display="none";
})
document.querySelector(".img5").addEventListener("mouseover",function(){
  document.querySelector(".sub-title5").style.display="block";
})
document.querySelector(".img5").addEventListener("mouseout",function(){
  document.querySelector(".sub-title5").style.display="none";
})

document.querySelector(".img6").addEventListener("mouseover",function(){
  document.querySelector(".sub-title6").style.display="block";
})
document.querySelector(".img6").addEventListener("mouseout",function(){
  document.querySelector(".sub-title6").style.display="none";
})

document.querySelector(".img7").addEventListener("mouseover",function(){
  document.querySelector(".sub-title7").style.display="block";
})
document.querySelector(".img7").addEventListener("mouseout",function(){
  document.querySelector(".sub-title7").style.display="none";
})

document.querySelector(".img8").addEventListener("mouseover",function(){
  document.querySelector(".sub-title8").style.display="block";
})
document.querySelector(".img8").addEventListener("mouseout",function(){
  document.querySelector(".sub-title8").style.display="none";
})
document.querySelector(".img9").addEventListener("mouseover",function(){
  document.querySelector(".sub-title9").style.display="block";
})
document.querySelector(".img9").addEventListener("mouseout",function(){
  document.querySelector(".sub-title9").style.display="none";
})
document.querySelector(".img10").addEventListener("mouseover",function(){
  document.querySelector(".sub-title10").style.display="block";
})
document.querySelector(".img10").addEventListener("mouseout",function(){
  document.querySelector(".sub-title10").style.display="none";
})
document.querySelector(".img11").addEventListener("mouseover",function(){
  document.querySelector(".sub-title11").style.display="block";
})
document.querySelector(".img11").addEventListener("mouseout",function(){
  document.querySelector(".sub-title11").style.display="none";
})


document.querySelector(".call").addEventListener("mouseover",function(){
  document.querySelector(".phone").style.color="white";
})
document.querySelector(".call").addEventListener("mouseout",function(){
  document.querySelector(".phone").style.color="black";
})
document.querySelector(".gmail").addEventListener("mouseover",function(){
  document.querySelector(".ojadhav").style.color="white";
})
document.querySelector(".gmail").addEventListener("mouseout",function(){
  document.querySelector(".ojadhav").style.color="black";
})
document.querySelector(".logos1").addEventListener("mouseover",function(){
  document.querySelector(".i1").style.color="white";
})
document.querySelector(".logos1").addEventListener("mouseout",function(){
  document.querySelector(".i1").style.color="black";
})
document.querySelector(".logos2").addEventListener("mouseover",function(){
  document.querySelector(".i2").style.color="white";
})
document.querySelector(".logos2").addEventListener("mouseout",function(){
  document.querySelector(".i2").style.color="black";
})
document.querySelector(".logos3").addEventListener("mouseover",function(){
  document.querySelector(".i3").style.color="white";
})
document.querySelector(".logos3").addEventListener("mouseout",function(){
  document.querySelector(".i3").style.color="black";
})
document.querySelector(".logos4").addEventListener("mouseover",function(){
  document.querySelector(".i4").style.color="white";
})
document.querySelector(".logos4").addEventListener("mouseout",function(){
  document.querySelector(".i4").style.color="black";
})
document.querySelector(".logos5").addEventListener("mouseover",function(){
  document.querySelector(".i5").style.color="white";
})
document.querySelector(".logos5").addEventListener("mouseout",function(){
  document.querySelector(".i5").style.color="black";
})
document.querySelector(".logos6").addEventListener("mouseover",function(){
  document.querySelector(".i6").style.color="white";
})
document.querySelector(".logos6").addEventListener("mouseout",function(){
  document.querySelector(".i6").style.color="black";
})
document.querySelector(".logos7").addEventListener("mouseover",function(){
  document.querySelector(".i7").style.color="white";
})
document.querySelector(".logos7").addEventListener("mouseout",function(){
  document.querySelector(".i7").style.color="black";
})



