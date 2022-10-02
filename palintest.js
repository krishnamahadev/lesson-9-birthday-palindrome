function reversestring(str)
{
return str.split("").reverse().join("")
// return str.split("").reverse().join("");

}


// console.log(reversestring("hello"));

function ispalindrome(str)
{
    var stringreverse=reversestring(str)

    if(stringreverse===str)
    {
        return true;
    }
    else
    {
        return false;
    }

    // return stringreverse===str;
}


console.log(ispalindrome("Hello"));
console.log(ispalindrome("Sharadhi"));
console.log(ispalindrome("lol"));