export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface IPokemon {
  name: string;
}

export interface IPokemonIcon {
  sprites: { [sprite: string]: string };
}

interface IPokeObj {
  id: number;
  height: number;
  weigth: number;
  ability: [{ name: string; url: string }];
  stats: [{ base_stats: number; stats: { name: string; url: string } }];
}
