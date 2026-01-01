export type GameCardType = {
  title: string;
  img: string;
  maxWin?: string;
  player?: {
    name: string;
    money: string;
  } | null;
};
