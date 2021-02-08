class Formatter {
  //add static methods here
  static capitalize(string) {
    let arr = string.split("")
    return arr[0].toUpperCase() + arr.slice(1).join("")
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '')
  }

  static titleize(string) {
    let nope = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(" ")
    let result = []

    for(let i=0; i<arr.length; i++) {
      if (!nope.includes(arr[i]) || i===0){
        result.push(Formatter.capitalize(arr[i]))
      } else {
        result.push(arr[i])
      }
    }
    
    debugger
    return result.join(" ")
  }
}