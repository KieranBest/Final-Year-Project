let canvas;
window.onload = function(){
    canvas = document.getElementById("canvas");
    canvas.style.backgroundColor = "red";
    prepareDocument();
    resizeCanvas();
    drawRect();
}

window.onresize = function(){
    resizeCanvas();
    drawRect();
}

function resizeCanvas(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function prepareDocument(){
    document.body.style.padding = "0px";
    document.body.style.margin = "0px";
}

function drawRect(){
    let ctx = canvas.getContext("2d");
    let width = canvas.width*0.2;
    let height = canvas.height*0.2;
    let xpos = canvas.width/2 - width/2;
    let ypos = canvas.height/2 - height/2;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(xpos,ypos,width,height);
}
