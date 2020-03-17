
function Circle(x,y,radius,render) {
this.x = x;
this.y = y;
this.radius = radius;
this.render = render;
}

function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = 100;
    let circle = new Circle(10,10,radius,"#000000");
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.render;
    ctx.fill();
}

createCircle();