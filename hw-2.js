let words = ['hello', 'My', 'NAME', 'is', 'aLPeR']


Array.prototype.includesCi = function(value){
    let i = 0;
    let len = this.length
    found = false;  
    while((i<len) && (!found)){
        if(this[i].toUpperCase() === value.toUpperCase()){
            found = true; 
        }
        else{
            i++;
        } 
    }
    if(found === true){
        return true;
    }
    else{
        return false;
    }
}

console.log(words.includesCi('nAmE'))
