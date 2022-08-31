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

export function decodedValue(colors: Array<string>) {
  return Number(colors.map((c,i) => {
    if(i < 2) {
      if(c.toLowerCase() === 'black') return Colors.Black
      if(c.toLowerCase() === 'brown') return Colors.Brown
      if(c.toLowerCase() === 'red') return Colors.Red
      if(c.toLowerCase() === 'orange') return Colors.Orange
      if(c.toLowerCase() === 'yellow') return Colors.Yellow
      if(c.toLowerCase() === 'green') return Colors.Green
      if(c.toLowerCase() === 'blue') return Colors.Blue
      if(c.toLowerCase() === 'violet') return Colors.Violet
      if(c.toLowerCase() === 'grey') return Colors.Grey
      if(c.toLowerCase() === 'white') return Colors.White
    }
  }).join(''))
}
