export abstract class Scene {
  enter(): void {}
  exit(): void {}
  abstract update(delta: number): void;
  abstract render(): void;
}
