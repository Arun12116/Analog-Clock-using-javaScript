const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

setInterval(()=>{
    let date=new Date();
    let hr=date.getHours()*30;
    let min=date.getMinutes()*6;
    let sec=date.getSeconds()*6;
    

    hour.style.transform=`rotatez(${(hr)+(min/12)}deg)`;
    minute.style.transform=`rotatez(${min}deg)`;
    second.style.transform=`rotatez(${sec}deg)`;

})
