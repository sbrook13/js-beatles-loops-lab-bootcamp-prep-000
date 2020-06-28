// add solution here


function theBeatlesPlay(a,b){
 var beatles = []
 for (let i=0;i<a.length;i++){
    var newString = `${a[i]} plays ${b[i]}`
    beatles.push(newString)
  }
  return beatles
}
 
  
function iLoveTheBeatles(n){
  var newArr = []
  do{
    newArr.push("I love the Beatles!");
    
  } while (n<15) ;
  return newArr
}

