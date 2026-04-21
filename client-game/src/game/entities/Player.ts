export class Player {
  x = 625;
  y = 520;
  width = 36;
  height = 56;
  vx = 0;
  vy = 0;
  speed = 250;
  jumpStrength = -520;
  grounded = false;
  hp = 100;
  maxHp = 100;

  update(delta: number, moveLeft: boolean, moveRight: boolean, jump: boolean, worldWidth: number, floorY: number): void {
    this.vx = 0;
    if (moveLeft) this.vx = -this.speed;
    if (moveRight) this.vx = this.speed;
    if (jump && this.grounded) {
      this.vy = this.jumpStrength;
      this.grounded = false;
    }

    this.vy += 1200 * delta;
    this.x += this.vx * delta;
    this.y += this.vy * delta;

    if (this.y + this.height >= floorY) {
      this.y = floorY - this.height;
      this.vy = 0;
      this.grounded = true;
    }

    if (this.x < 0) this.x = 0;
    if (this.x + this.width > worldWidth) this.x = worldWidth - this.width;
  }

  damage(value: number): void {
    this.hp = Math.max(0, this.hp - value);
  }
}
