import { Game } from '../core/Game';
import { IntroSleepScene } from '../game/scenes/IntroSleepScene';

export function bootstrap(): void {
  const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement | null;
  if (!canvas) throw new Error('Canvas introuvable');

  const game = new Game(canvas);
  game.start(new IntroSleepScene(game));
}
