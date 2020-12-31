class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

    let arrayOfWords = string.split(' ')
    
    let result = arrayOfWords.map( word => {
      if (word === arrayOfWords[0]){
        return this.capitalize(word)
      } else if(exceptions.includes(word)){
          return word
      } else {
          return this.capitalize(word)
      }
    }).join(' ')
    return result
  }
}