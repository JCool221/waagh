'use client'

interface AbilitiesListProps {
    abilities: string[];
}

export default function AbiltitiesList({ abilities }: AbilitiesListProps) {
    console.log("list:", abilities)
  return (
    <div>
      <h2>selected abilites</h2>
      <ul>
        {abilities.map((ability: string, index: number) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}
