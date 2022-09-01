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

const addZeros = (size: number): string => {
  let zeros: string = '0';
  if(size === 0) return '';
  return zeros.repeat(size)
}

export function decodedResistorValue(colors: Array<string>) {

  let voltage = colors.map((c,i) => {
    if(i > 1) {
      if(c.toLowerCase() === 'black') return addZeros(Colors.Black)
      if(c.toLowerCase() === 'brown') return addZeros(Colors.Brown)
      if(c.toLowerCase() === 'red') return addZeros(Colors.Red)
      if(c.toLowerCase() === 'orange') return addZeros(Colors.Orange)
      if(c.toLowerCase() === 'yellow') return addZeros(Colors.Yellow)
      if(c.toLowerCase() === 'green') return addZeros(Colors.Green)
      if(c.toLowerCase() === 'blue') return addZeros(Colors.Blue)
      if(c.toLowerCase() === 'violet') return addZeros(Colors.Violet)
      if(c.toLowerCase() === 'grey') return addZeros(Colors.Grey)
      if(c.toLowerCase() === 'white') return addZeros(Colors.White)
    }else {
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
  }).join('')

  let voltageToNumber = Number(voltage)
  
  if(voltageToNumber / 1000 >= 1) {
    return `${voltage.substring(0,(voltage.length - 3))} kiloohms`
  } else {
    return `${voltage.substring(0,3)} ohms`
  }
}
