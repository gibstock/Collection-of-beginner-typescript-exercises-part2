export function isPangram(sentence: string) {
  let sentenceRef = sentence.toLowerCase()
  return [..."abcdefghijklmnopqrstuvwxyz"].every(x => sentenceRef.includes(x))
}
