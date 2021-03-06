function updateClock(){
    var now=new Date();
    var dname=now.getDay(),
        mo=now.getMonth(),
        dnum=now.getDate(),
        yr=now.getFullYear(),
        hou=now.getHours(),
        min=now.getMinutes(),
        sec=now.getSeconds(),
    pe="AM";

    if(hou >= 12){
            pe = "PM";
    }
    if(hou == 0){
            hou = 12;
    }
    if(hou > 12){
            hou = hou - 12;
    }

    Number.prototype.padd=function(digits){
        for(var n=this.toString(); n.length<digits; n=0+n);
        return n;
    }

    var months=["January", "Febryary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids=["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values=[week[dname], months[mo], dnum.padd(2), yr, hou.padd(2), min.padd(2), sec.padd(2), pe];

    for(var i=0;i<ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}
