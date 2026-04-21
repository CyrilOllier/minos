export type Difficulty = 'easy' | 'normal' | 'hard' | 'nightmare';

export interface PlayerState {
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  roomId: string;
}

export interface RoomDefinition {
  id: string;
  title: string;
  background: string;
  doors: Array<{ id: string; x: number; y: number; width: number; height: number; targetRoomId: string }>;
  traps?: Array<{ x: number; y: number; width: number; height: number; damage: number }>;
}
