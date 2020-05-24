var fs = require('fs');

function suggestionTool(currentText){
    var text = fs.readFileSync('long.txt','utf8')
    let sve = []
    sve=text
    var formatirano = sve.split(" ")
    
    result = formatirano.reduce(function(a, e, i) {
        if (e === currentText)
            a.push(i);
        return a;
    }, []);
    let rezultati= []
    for (i=0;i<3;i++){
        
        rezultati.push(formatirano[result[i]] + " " +  formatirano[result[i]+1] + " " + formatirano[result[i]+2])
    }
    
    return rezultati 

    
}
console.log(suggestionTool("I"))

module.exports = suggestionTool;