import { Game } from '../../core/Game';
import { Scene } from '../../engine/scene/Scene';
import { Player } from '../entities/Player';
import { Hud } from '../ui/Hud';
import { StartRoomScene } from './StartRoomScene';

export class IntroSleepScene extends Scene {
  private background = new Image();
  private ready = false;
  private timer = 0;
  private readonly player = new Player();
  private readonly hud = new Hud();

  constructor(private readonly game: Game) {
    super();
    this.background.src = new URL(
      '../../assets/images/backgrounds/start-room-sleep-food-barrels.png',
      import.meta.url
    ).href;
    this.background.onload = () => (this.ready = true);
    this.player.x = 622;
    this.player.y = 520;
  }

  update(delta: number): void {
    this.timer += delta;
    if (this.game.input.isDown('Enter') || this.timer > 4.5) {
      this.game.changeScene(new StartRoomScene(this.game));
    }
  }

  render(): void {
    const { renderer, canvas } = this.game;
    renderer.clear();
    if (this.ready) renderer.image(this.background, 0, 0, canvas.width, canvas.height);

    renderer.rect(this.player.x, this.player.y, this.player.width, this.player.height, '#87c7ff');
    renderer.text("Le héros reprend conscience sous le trou d'arrivée...", 360, 40, '#f3e6b3');
    renderer.text('Appuie sur Entrée pour commencer', 470, 680, '#ffffff');
    this.hud.render(this.game, this.player);
  }
}
