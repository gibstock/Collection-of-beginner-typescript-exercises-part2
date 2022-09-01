enum Colors {
  Black,
  Brown,
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Violet,
  Grey,
  White
}

export const colorCode = (color: string): number => {
    let s = `${color.charAt(0).toUpperCase()}${color.substring(1)}`
    return Colors[s as keyof typeof Colors]
}

export const COLORS = Object.keys(Colors).filter((value) => isNaN(Number(value))).map((color) => color.toLowerCase())
