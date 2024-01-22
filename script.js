let btn=document.querySelector(".btn");
let text=document.querySelector(".text");
let colors = ["red","blue","yellow","pink","violet"];
let i=0;
btn.addEventListener("click",()=>{
    if(i>4)
    {
        i=0;
    }
    document.body.style.backgroundColor = colors[i];
    text.textContent =colors[i];
    i++;
});
