export interface Country {
  name: {
    common: string;
    official: string;
  }
  area: number;
  population: number;
  flags: {
    svg?: string;
  }
}
