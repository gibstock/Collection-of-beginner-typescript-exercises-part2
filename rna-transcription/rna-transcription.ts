export function toRna(dna: string): string {
  let transcription = [...dna].map((n) => {
    switch(n) {
      case 'G':
        return 'C'
        break;
      case 'C':
        return 'G'
        break;
      case 'T':
        return 'A'
        break;
      case 'A':
        return 'U'
        break;
      default:
        throw new Error('Invalid input DNA.')
    }
  }).join('')
  return transcription
}
