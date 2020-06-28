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
   while(i<facts.length){ 
     newFact = `${facts[i]}!!!`
     facts.splice(i,1,[newFact])
     i++
   }
   return facts
}
 var allFacts = []
 function johnLennonFacts(facts){
   while(i<facts.length){ 
     var newFact = `${facts[i]}!!!`
     allFacts.push(newFact)
     i++
   }
   return allFacts
}
  