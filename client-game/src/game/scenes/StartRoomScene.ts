import { Game } from '../../core/Game';
import { Scene } from '../../engine/scene/Scene';
import { Player } from '../entities/Player';
import { Hud } from '../ui/Hud';
import { roomOrder } from '../world/rooms';

export class StartRoomScene extends Scene {
  private readonly player = new Player();
  private readonly hud = new Hud();
  private roomIndex = 1;
  private roomImage = new Image();
  private guardX = 1000;
  private guardDirection = -1;

  constructor(private readonly game: Game) {
    super();
    this.loadRoom();
  }

  private loadRoom(): void {
    this.roomImage.src = roomOrder[this.roomIndex].image;
  }

  update(delta: number): void {
    const input = this.game.input;
    this.player.update(
      delta,
      input.isDown('ArrowLeft') || input.isDown('KeyQ'),
      input.isDown('ArrowRight') || input.isDown('KeyD'),
      input.isDown('Space') || input.isDown('ArrowUp') || input.isDown('KeyZ'),
      this.game.canvas.width,
      680
    );

    this.guardX += this.guardDirection * 100 * delta;
    if (this.guardX < 900 || this.guardX > 1150) this.guardDirection *= -1;

    const touchingTrap = this.player.x > 350 && this.player.x < 420 && this.roomIndex >= 2;
    const touchingGuard = this.player.x + this.player.width > this.guardX && this.player.x < this.guardX + 42 && this.player.y + this.player.height > 624;

    if (touchingTrap) this.player.damage(10 * delta);
    if (touchingGuard) this.player.damage(18 * delta);

    if (this.player.hp <= 0) {
      this.player.hp = this.player.maxHp;
      this.player.x = 625;
      this.player.y = 520;
      this.roomIndex = 1;
      this.loadRoom();
    }

    if (this.player.x <= 0 && this.roomIndex > 1) {
      this.roomIndex -= 1;
      this.player.x = this.game.canvas.width - this.player.width - 5;
      this.loadRoom();
    }

    if (this.player.x + this.player.width >= this.game.canvas.width && this.roomIndex < roomOrder.length - 1) {
      this.roomIndex += 1;
      this.player.x = 5;
      this.loadRoom();
      this.game.fabricationProgress = Math.min(100, this.game.fabricationProgress + 12);
    }
  }

  render(): void {
    const { renderer, canvas } = this.game;
    renderer.clear();
    renderer.image(this.roomImage, 0, 0, canvas.width, canvas.height);

    renderer.rect(this.player.x, this.player.y, this.player.width, this.player.height, '#7dd3fc');
    renderer.rect(this.guardX, 624, 42, 56, '#7a1f1f');

    renderer.rect(0, 230, 18, 120, 'rgba(255,145,0,0.55)');
    renderer.rect(canvas.width - 18, 230, 18, 120, 'rgba(255,145,0,0.55)');

    renderer.text(`Salle : ${roomOrder[this.roomIndex].id}`, 1030, 40, '#ffffff');
    renderer.text('Flèches/ZQSD + Espace', 1000, 68, '#ffffff');
    renderer.text('Passe par les portes latérales pour avancer', 840, 96, '#ffffff');

    this.hud.render(this.game, this.player);
  }
}
