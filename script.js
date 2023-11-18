let current_time=document.querySelector('h1');
let content=document.querySelector('.content');
const selectmenu=document.querySelectorAll("select");
let set_alarm=document.querySelector('.set');
let alarm_Time,time,disabledAlarm;
let ring=new Audio("assets/ringtone.wav");
for(let i=11;i>=0;i--){
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=59;i>=0;i--){
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval(() => {
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ampm="AM";
    if(h>=12){
        h=h-12;
        ampm="PM";
    }
    //h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    current_time.innerHTML=`${h}:${m}:${s} ${ampm}`;
    time=`${h}:${m} ${ampm}`;
    if(alarm_Time==time){
        ring.play();
        ring.loop=true;
    }
}, 1000);

function alarmSet(){
    if(!disabledAlarm){
        alarm_Time="";
        ring.pause();
        disabledAlarm=true;
        content.classList.remove('disabled');
        return set_alarm.innerHTML="Set Alarm";
    }
    alarm_Time=`${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;
    if (alarm_Time.includes("hr") || alarm_Time.includes("min")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    content.classList.add('disabled');
    set_alarm.innerHTML="Reset Alarm";
    disabledAlarm=false;
}
set_alarm.addEventListener('click',alarmSet);