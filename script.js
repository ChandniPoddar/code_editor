var tl=gsap.timeline()
tl.from("h2",{
    y:-28,
    opacity:0,
    duration:1,
    delay:1
})
tl.from("h3",{
    y:-28,
    opacity:0,
    duration:1,
    delay:1
})
tl.from("h1",{
    y:-28,
    opacity:0,
    duration:2,
    delay:1
})
let output=document.querySelector("#output");
let allInput=document.querySelectorAll(".leftpart textarea");
console.log(allInput);
let htmlCode, cssCode, jsCode ='';
allInput.forEach((el, index)=>{
el.addEventListener("keyup", () => {
  if(index==0){
      htmlCode = el.value;
  }
  if(index==1){
      cssCode = el.value;
  }

  if(index==2){
     jsCode = el.value;
  }
output.contentDocument.body.innerHTML=    htmlCode ;
output.contentDocument.head.innerHTML= `<style> ${cssCode}</style>`;
output.contentWindow.eval(jsCode);


})
})