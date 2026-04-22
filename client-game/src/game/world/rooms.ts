const startRoomSleepFoodBarrels = new URL(
  '../../assets/images/backgrounds/start-room-sleep-food-barrels.png',
  import.meta.url
).href;

const startRoomHole = new URL(
  '../../assets/images/backgrounds/start-room-hole.png',
  import.meta.url
).href;

const roomSpikes = new URL(
  '../../assets/images/backgrounds/room-spikes.png',
  import.meta.url
).href;

const roomPit = new URL(
  '../../assets/images/backgrounds/room-pit.png',
  import.meta.url
).href;

const roomTreasure = new URL(
  '../../assets/images/backgrounds/room-treasure.png',
  import.meta.url
).href;

const roomStatue = new URL(
  '../../assets/images/backgrounds/room-statue.png',
  import.meta.url
).href;

export const roomOrder = [
  { id: 'intro', image: startRoomSleepFoodBarrels },
  { id: 'start', image: startRoomHole },
  { id: 'spikes', image: roomSpikes },
  { id: 'pit', image: roomPit },
  { id: 'treasure', image: roomTreasure },
  { id: 'statue', image: roomStatue }
] as const;
