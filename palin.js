const bdate = document.querySelector("#b-date");


const checkbutton = document.querySelector("#check-button");

const outputmsg = document.querySelector("#output-message");



function reversethestring()
{
    const bd = bdate.value 
    console.log(typeof bd);
    const listofchars = bd.split("");
    console.log(listofchars)
    const reversestring = listofchars.reverse();
    console.log(reversestring);
    const reversestringjoined = reversestring.join("");
    console.log(reversestringjoined);
    return 0;
    
}






function palincheck()
{
    console.log("Hello");
    
    const reversestr = reversethestring();
    console.log(reversestr)
}


checkbutton.addEventListener("click",palincheck);



