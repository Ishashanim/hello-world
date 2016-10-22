var a;
var op;
setvalue=function(arg){
     document.getElementById("input").value+=arg;
    var a=$("input");
    a.value+=arg;
    document.getElementById("sound1").play()
};
setc=function(){
    document.getElementById("sound1").play();
    document.getElementById("input").value=null;
    document.getElementById("output").value=null
};
setop=function(arg){
    document.getElementById("sound1").play();
    a=document.getElementById("input").value;
    op=arg;
    setc();
    document.getElementById("input").value=arg;
    setc()
};
give=function(){
    document.getElementById("sound1").play();
    var b=document.getElementById("input").value;
    switch(op){
        case"*":document.getElementById("output").value=Math.round(a*b*100)/100;
            break;
        case"/":document.getElementById("output").value=Math.round(a/b*100)/100;
            break;
        case"+":document.getElementById("output").value=Math.round((Number(a)+Number(b))*100)/100;
            break;
        case"-":document.getElementById("output").value=Math.round((Number(a)-Number(b))*100)/100;
            break;
    }
};
