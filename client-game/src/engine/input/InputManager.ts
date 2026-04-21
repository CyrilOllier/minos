export class InputManager {
  private keys = new Set<string>();

  constructor() {
    window.addEventListener('keydown', (event) => this.keys.add(event.code));
    window.addEventListener('keyup', (event) => this.keys.delete(event.code));
  }

  isDown(code: string): boolean {
    return this.keys.has(code);
  }
}
