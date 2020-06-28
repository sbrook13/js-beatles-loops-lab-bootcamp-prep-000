// add solution here


function theBeatlesPlay(a,b){
 var beatles = []
 for (let i=0;i<a.length;i++){
    var newString = `${a[i]} plays ${b[i]}`
    beatles.push(newString)
  }
  return beatles
}
 let i=1
 var allFacts = []
 function johnLennonFacts(facts){
   while(i<facts.length){ 
     var newFact = `${facts[i-1]}!!!`
     allFacts.push(newFact)
     i++
   }
   return allFacts
}
  