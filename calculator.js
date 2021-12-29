function good(){
    var meal = document.getElementById("meal").value;

    var tip = meal * .20;
    document.getElementById('tip').value=tip.toFixed
}


 function tipAmount(billAmount,serviceLevel){
    let serviceLevels = {
        good: .20, 
        fair: .15,
        poor: .10,
    };
    return billAmount * serviceLevels[serviceLevel];
    
}
console.log(tipAmount(100,"poor"));*/