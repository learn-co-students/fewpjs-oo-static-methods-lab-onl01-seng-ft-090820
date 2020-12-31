class Formatter {
  static capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence) { 
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let final = [] 
    let sentenceArray = sentence.split(' ')
    for(let i = 0; i < sentenceArray.length; i++){
      if (i === 0){
        final.push(this.capitalize(sentenceArray[i]))
      } else { 
          if (words.includes(sentenceArray[i])) {
            final.push(sentenceArray[i])
          } else { 
            final.push(this.capitalize(sentenceArray[i]))
          }
        }
    }
    return final.join(' ')
  }
  
}