export const DIFFICULTIES = {
  easy: { rooms: 4, trapDamage: 5, enemySpeed: 1 },
  normal: { rooms: 6, trapDamage: 10, enemySpeed: 1.3 },
  hard: { rooms: 8, trapDamage: 15, enemySpeed: 1.7 },
  nightmare: { rooms: 10, trapDamage: 25, enemySpeed: 2.1 }
} as const;
