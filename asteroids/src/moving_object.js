class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = `${this.color}`
        ctx.strokeStyle = `${this.color}`
    }

    move() {
        this.pos[0] = this.pos[0] + this.vel[0];
        this.pos[1] = this.pos[1] + this.vel[1];
    }
}

module.exports = MovingObject;