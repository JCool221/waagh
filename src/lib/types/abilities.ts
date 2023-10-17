export interface Ability {
    name: string;
    description: string;
    tooltip: string;
    extend: boolean;
    value: boolean;
  }
  
export interface AbilityCategory {
    weapon: Ability[];
    unit: Ability[];
  }

export interface WeaponListProps {
    abilities: AbilityCategory;
    category: 'weapon' | 'unit';
  }