class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string){
    let words = string.split(' ');
    let set = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let titleizedArr = words.map(function(word){
      if(set.includes(word)){
        return word
      } else {
        return Formatter.capitalize(word)
      }
    })
    titleizedArr[0] = this.capitalize(titleizedArr[0])
    return titleizedArr.join(' ')
  }
}