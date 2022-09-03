const bobResponses = {
  everythingElse: 'Whatever.', // Everything else
  noChill: 'Whoa, chill out!', // All Caps
  question: 'Sure.', // All questions - Including numbers - Qmark must be at end
  forcefulQ: "Calm down, I know what I'm doing!", // Question with !
  silence: "Fine. Be that way!" // Empty message
}

export function hey(message: string): string {
  let reChars = /[a-zA-Z0-9]/g;
  let trimmedMessage = message.trim();
  if(message.search(reChars) < 0) return bobResponses.silence;
  if(message.search(/^(?=.*[A-Z])[A-Z %^*@#$(),.!0-9]*$/) > -1) return bobResponses.noChill
  if(trimmedMessage.charAt(trimmedMessage.length - 1) === '?' && ( message.search(/[a-z0-9]/g)) !== -1) return bobResponses.question;
  if(message.toUpperCase() === message && message.includes("?")) return bobResponses.forcefulQ;
  else return bobResponses.everythingElse;
}
