

function Compression(realText){
    var compressedString = "";
    var count = 0;
    for(let i = 0; i < realText.length; i ++){
        if(realText[i] === realText[i + 1]){
            count++;
        }
        else{
            compressedString += realText[i] + count;
            count = 1;
        }
    }
    return compressedString.length < realText.length ? compressedString : realText;
}

console.log(Compression("aabbbcccccaaa"));