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
  weight: number;
  ability: Array<{ name: string; url: string }> | null;
  stats: Array<{
    base_stat: number;
    stat: { name: string; url: string };
  }> | null;
  types: Array<{ slot: number; type: { name: string; url: string } }> | null;
}
