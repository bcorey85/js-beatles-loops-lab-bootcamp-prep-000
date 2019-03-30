function iLoveTheBeatles(number){
  var array = []
  do{array.unshift(`I love the Beatles!`)
    number++
  }while(number < 15)
  return (array)
  }


function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i = 0; i < 4; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  var i = 0
  var array = []
  while(i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(num){
  var arr = []
  do{arr.push(`I love the Beatles!`)
  num++
  }while(num < 15)
  return arr
}