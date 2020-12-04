class Formatter {
  static capitalize(string) {
    return string.replace(/^\w/, (c) => c.toUpperCase());
}

static sanitize(string) {
  return string.replace(/[^A-Za-z0-9 '-]/g, '')
}

static titleize(string) {
    let words = string.split(' ')
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    for (const word of words) {
        if (words[0] === word){  
          result.push(this.capitalize(word))
        }
        else if (exceptions.includes(word)) { 
          result.push(word) 
        } 
        else { 
          result.push(this.capitalize(word))
        }
      }
    
    return result.join(' ')

  }
}