// Code your solution here 

const findMatching = (arr, string) => {
  return arr.filter(e => {
    return e.toLowerCase() === string.toLowerCase()
  })
}

const fuzzyMatch = (arr, string) => {
  return arr.filter(e => {
    if (e.slice(0,2) === string.slice(0,2)){
      return e
    }
  })
}

const matchName = (arr, string) => {
  return arr.filter(e => e.name === string)
}
