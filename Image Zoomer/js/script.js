var zoom1=document.getElementById("zoomin");
var zoom2=document.getElementById("zoomout");
var img=document.getElementById("see");
var swidth=img.clientWidth;  //initial
var shight=img.clientHeight;
zoomin.addEventListener("click",function(){
    var cwidth=img.clientWidth;  //current
    var chight=img.clientHeight;
    if(cwidth>=swidth+100){
        alert("Image cannot be zoom");
    }
    else{
        img.style.width=(cwidth+40)+"px";
        img.style.height=(chight+40)+"px";
    
    }
});
zoom2.addEventListener("click",function(){
    var cwidth=img.clientWidth;
    var chight=img.clientHeight;
    if(cwidth<=swidth-100){
        alert("Image cannot be zoom")
    }
    else{
        img.style.width=(cwidth-40)+"px";
        img.style.height=(chight-40)+"px";
    
    }
})