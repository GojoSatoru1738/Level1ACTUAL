function Ball() {
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.color = "#00ff00";
    this.vx = 7;
    this.vy = 7;
//ye
    this.draw = function() {
        context.save();
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.width/2, 0, 360 * Math.PI/180, true);
        context.closePath();
        context.fill();
        context.restore();
    };
    //YUH
    this.move = function() {
        this.x += this.vx;
        this.y += this.vy;
    };
}