let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let second = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

function updateTime(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampms = "AM";
    
    if(h>12){
        ampms = "PM";
        h=h-12;
    }
    h = h<10?"0"+ h:h;
    m = m<10?"0"+ m:m;
    s = s<10?"0"+ s:s;

    hour.innerText = h;
    minutes.innerText = m;
    second.innerText = s;
    ampm.innerText = ampms;

    setTimeout(updateTime, 1000);
}
updateTime();