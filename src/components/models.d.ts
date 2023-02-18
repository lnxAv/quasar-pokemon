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

export type Sprite = { [sprite: string]: string };

export interface IPokemonIcon {
  sprites: Sprite & { other: { home: Sprite } };
}

export interface IPokeObj {
  id: number;
  height: number;
  weight: number;
  ability: Array<{ name: string; url: string }> | null;
  stats: Array<{
    base_stat: number;
    stat: { name: string; url: string };
  }> | null;
  types: Array<{ slot: number; type: { name: string; url: string } }> | null;
}
