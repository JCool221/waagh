export interface Faction {
    faction: string;
    id: string;
  }
  
  export interface TopLevelFaction {
    [key: string]: Faction[];
  }
  
  export interface FactionsData {
    factions: TopLevelFaction[];
  }