class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1) 
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let finished = []
    let array = string.split(' ')
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        finished.push(this.capitalize(array[i]))
      } else {
          if (words.includes(array[i])) {
            finished.push(array[i])
          } else {
            finished.push(this.capitalize(array[i]))
          }
      }
    }
    return finished.join(' ')
  }
}