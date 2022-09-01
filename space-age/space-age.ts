

const planetAge = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 31557600,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}
export function age(planet: keyof typeof planetAge, seconds: number): number {
  if(planet === 'earth') return Number((seconds / planetAge[planet]).toFixed(2))
  else
    return Number(((seconds / (planetAge.earth)) / planetAge[planet]).toFixed(2))
}
