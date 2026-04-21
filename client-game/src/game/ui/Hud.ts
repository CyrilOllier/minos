import { Game } from '../../core/Game';
import { Player } from '../entities/Player';

export class Hud {
  render(game: Game, player: Player): void {
    const ctx = game.renderer.context;

    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(20, 20, 260, 90);
    ctx.fillRect(20, 120, 320, 55);

    ctx.fillStyle = '#ffffff';
    ctx.font = '18px Arial';
    ctx.fillText('MINOS', 32, 48);
    ctx.fillText(`Vie: ${player.hp} / ${player.maxHp}`, 32, 78);

    ctx.fillStyle = '#5b0f0f';
    ctx.fillRect(120, 62, 130, 12);
    ctx.fillStyle = '#d64545';
    ctx.fillRect(120, 62, 130 * (player.hp / player.maxHp), 12);

    ctx.fillStyle = '#ffffff';
    ctx.fillText('Avancement de fabrication', 32, 145);
    ctx.fillStyle = '#2f2f2f';
    ctx.fillRect(32, 153, 260, 12);
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(32, 153, 2.6 * game.fabricationProgress, 12);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${game.fabricationProgress}%`, 302, 164);
  }
}
