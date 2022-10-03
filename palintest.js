const birthdaydate = document.querySelector("#b-date");


const checkbutton = document.querySelector("#check-button");

const outputmsg = document.querySelector("#output-message");








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

function convertdatetostring(bdate)
{
    var cbdate = 
    {
        day : "",
        month : "",
        year : ""
    }

    if(bdate.day < 10)
    {
        cbdate.day='0'+bdate.day
    }
    else
    {
        cbdate.day=bdate.day.toString();
    }
    if(bdate.month < 10)
    {
        cbdate.month='0'+bdate.month
    }
    else
    {
        cbdate.month=bdate.month.toString();
    }

    cbdate.year=bdate.year.toString();
    return cbdate;
}


function getalldateformats(bdate)
{
    var getdate = convertdatetostring(bdate);

    var ddmmyyyy = getdate.day+getdate.month+getdate.year;

    var mmddyyyy = getdate.month+getdate.day+getdate.year;

    var yyyymmdd = getdate.year+getdate.month+getdate.day;

    var ddmmyy = getdate.day+getdate.month+getdate.year.slice(-2);

    var mmddyy = getdate.month+getdate.day+getdate.year.slice(-2);

    var yymmdd = getdate.year.slice(-2)+getdate.month+getdate.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function whichoneisapalindrome(bdate)
{
    var list_poss = getalldateformats(bdate)
    var flag = false;
    for (i=0;i<list_poss.length;i++)
    {
        flag = ispalindrome(list_poss[i]);
        if(flag===true)
        {
            break;
        }
    }
    return flag;
}




function isleapyear(bdate)
{
    if(bdate % 400 ===0)
    {
        return true;
    }
    if(bdate % 100 ===0)
    {
        return false;
    }
    if(bdate%4 ===0)
    {
        return true;
    }
    return false;
}



function getnextdate(bdate)
{
var day = bdate.day+1;
var month=bdate.month;
var year = bdate.year;


var daysinamonth = [31,28,31,30,31,30,31,31,30,31,30,31]

    if(month===2)
    {
            if(isleapyear(year))
            {
                if(day>29)
                {
                    day=1;
                    month=month+1;
                }
            }
            else
            {
                if(day>28)
                {
                    day=1;
                    month=month+1;
                }
                
            } 
    }  
    else
    {

        if(day>daysinamonth[month-1])
        {
            day=1;
            month=month+1
        }
            
    }

    if(month>12)
    {
        month=1;
        year=year+1;
    }

    return {
        day : day,
        month : month,
        year : year
    }
}


function getnextpalindromedate(bdate)
{
    var counter = 0;
    nextdate = getnextdate(bdate);

    while(1)
    {
        counter = counter+1;
        if(whichoneisapalindrome(nextdate))
        {
            break;
        }
        
            nextdate=getnextdate(nextdate);
            
    }

    return [counter,nextdate];
}
   



function getprevnextdate(bdate)
{
var day = bdate.day-1;
var month=bdate.month;
var year = bdate.year;


var daysinamonth = [31,28,31,30,31,30,31,31,30,31,30,31]

    if(month===3)
    {
            if(isleapyear(year))
            {
                if(day===0)
                {
                    day=29;
                    month=month-1;
                }
            }
            else
            {
                day=day-1;
                month=month-1;
                
            } 
    }  
    else
    {

        if(day===0)
        {
            day=daysinamonth[month-1];
            month=month-1
        }
            
    }

    if(month==0)
    {
        month=12;
        year=year-1;
    }

    return {
        day : day,
        month : month,
        year : year
    }
}



function getprevnextpalindromedate(bdate)
{
    var counter = 0;
    prevnextdate = getprevnextdate(bdate);

    while(1)
    {
        counter = counter+1;
        if(whichoneisapalindrome(prevnextdate))
        {
            break;
        }
        
            prevnextdate=getprevnextdate(prevnextdate);
            
    }

    return [counter,prevnextdate];
}
var bdate = 
{
    day : 2,
    month : 11,
    year : 2020
}

// console.log(ispalindrome("Hello"));
console.log(ispalindrome("Sharadhi"));
// console.log(ispalindrome("lol"));


// console.log(convertdatetostring(bdate));

// console.log(getalldateformats(bdate));

// console.log(whichoneisapalindrome(bdate));

// console.log(getnextdate(bdate));


// console.log(getnextpalindromedate(bdate));


console.log(getprevnextdate(bdate));

// console.log(getprevnextpalindromedate(bdate));

// console.log(isleapyear(bdate))


// function palindrome()
// {
//     const bdate = birthdaydate.value;
//     var bdatearr = 
//     {
//         day : bdate.slice(-2),
//         month : bdate.slice(5,-3),
//         year : bdate.slice(0,-6)

//     }

//     // console.log(typeof bdate, bdate);
//     console.log(bdatearr)
//     // return whichoneisapalindrome()
//     if(whichoneisapalindrome(bdatearr))
//     {
//         outputmsg.innerText="Entered birthdate is a palindrome! Cheers!"

//     }
//     else
//     {
        

//         outputmsg.innerText="Sorry entered birthdate is not a palindrome!"
//         console.log(getnextpalindromedate(bdatearr));

//     }
// }
// checkbutton.addEventListener("click",palindrome);