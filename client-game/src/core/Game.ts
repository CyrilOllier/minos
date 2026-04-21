import { InputManager } from '../engine/input/InputManager';
import { Renderer } from '../engine/render/Renderer';
import { Scene } from '../engine/scene/Scene';

export class Game {
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;
  public readonly renderer: Renderer;
  public readonly input: InputManager;
  public fabricationProgress = 22;
  private currentScene: Scene | null = null;
  private lastTime = 0;

  constructor(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Contexte 2D indisponible');
    this.canvas = canvas;
    this.ctx = ctx;
    this.renderer = new Renderer(ctx, canvas);
    this.input = new InputManager();
  }

  start(scene: Scene): void {
    this.currentScene = scene;
    scene.enter();
    requestAnimationFrame(this.loop);
  }

  changeScene(scene: Scene): void {
    this.currentScene?.exit();
    this.currentScene = scene;
    scene.enter();
  }

  private loop = (timestamp: number): void => {
    const delta = Math.min((timestamp - this.lastTime) / 1000 || 0, 1 / 30);
    this.lastTime = timestamp;
    this.currentScene?.update(delta);
    this.currentScene?.render();
    requestAnimationFrame(this.loop);
  };
}
