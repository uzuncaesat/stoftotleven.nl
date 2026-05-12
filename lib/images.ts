/**
 * Mock imagery — curated Unsplash photographs used as stand-ins until the
 * real Stof tot Leven photoshoot is available. Swap these URLs for local
 * files in /public when the actual photos arrive.
 */
const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  // — Hatish / atelier / handwork
  atelierPortrait: U("1605518216938-7c31b7b14ad0"),
  sewingHands: U("1528459801416-a9e53bbf4e17"),
  threadSpools: U("1542042161784-26ab9e041e89"),
  fabricStacks: U("1452860606245-08befc0ff44b"),
  fabricSamples: U("1558618666-fcd25c85cd64"),
  fabricFolded: U("1604147706283-d7119b5b822c"),
  fabricRolls: U("1618220179428-22790b461013"),
  colourSwatches: U("1617791160505-6f00504e3519"),

  // — Raamdecoratie
  curtainsLight: U("1513694203232-719a280e022f"),
  curtainsBedroom: U("1505693416388-ac5ce068fe85"),
  curtainsCozy: U("1522708323590-d24dbb6b0267"),
  curtainsLiving: U("1616594039964-ae9021a400a0"),
  windowSeat: U("1493663284031-b7e3aefcae8e"),
  interiorBright: U("1586023492125-27b2c045efd7"),

  // — Stofferen
  armchairYellow: U("1567016432779-094069958ea5"),
  armchairDetail: U("1567538096630-e0c55bd6374c"),
  sofaClassic: U("1555041469-a586c61ea9bc"),
  sofaCushioned: U("1540574163026-643ea20ade25"),
  diningChairs: U("1503602642458-232111445657"),
  loungeChair: U("1493809842364-78817add7ffb"),
  livingRoomSofa: U("1513519245088-0e12902e5a38"),
  footstool: U("1538688525198-9b88f6f53126"),

  // — Kussens op maat
  cushionsSofa: U("1556228453-efd6c1ff04f6"),
  cushionsStack: U("1556228720-195a672e8a03"),
  cushionsBright: U("1531835551805-16d864c8d311"),
  cushionsOutdoor: U("1416879595882-3373a0480b5b"),
  cushionsBench: U("1550581190-9c1c48d21d6c"),

  // — Maritieme bekleding
  boatInterior: U("1567899378494-47b22a2ae96a"),
  yachtDeck: U("1605281317010-fe5ffe798166"),
  boatHarbour: U("1540946485063-a40da27545f8"),
  sailboat: U("1502209524164-acea936639a2"),
  boatCushions: U("1542902093-d55926049754"),

  // — Zakelijke partners / interieur
  interiorStudio: U("1583847268964-b28dc8f51f92"),
} as const;

export type ImageKey = keyof typeof IMAGES;
