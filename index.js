// add solution here


function theBeatlesPlay(a,b){
 var beatles = []
 for (let i=0;i<a.length;i++){
    var newString = `${a[i]} plays ${b[i]}`
    beatles.push(newString)
  }
  return beatles
}
 let i=0
 
 function johnLennonFacts(facts){
   var allFacts = []
   while(i<facts.length){ 
     var newFact = `${facts[i]}!!!`
     allFacts.push(newFact)
     i++
   }
   return allFacts
}
  