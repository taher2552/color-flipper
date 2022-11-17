const btn1=document.getElementById('btn1');

btn1.addEventListener('click', function(){
    let red1=Math.floor(Math.random()*256);
    let red2=Math.floor(Math.random()*256);
    let green1=Math.floor(Math.random()*256);
    let green2=Math.floor(Math.random()*256);
    let blue1=Math.floor(Math.random()*256);
    let blue2=Math.floor(Math.random()*256);
    document.body.style.background='linear-gradient(to right, rgb('+red1+','+green1+','+blue1+') , rgb('+red2+','+green2+','+blue2+'))';

    document.getElementById('btn1').innerText='rgb('+red1+','+green1+','+blue1+') , rgb('+red2+','+green2+','+blue2+')';
})
btn2.addEventListener('click', function(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    
    document.body.style.background='rgb('+r+','+g+','+b+')';

    document.getElementById('btn2').innerText='rgb('+r+','+g+','+b+')';


})