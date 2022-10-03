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

function whichoneisapalindrome()
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
    if(bdate.year % 400 ===0)
    {
        return true;
    }
    if(bdate.year % 100 ===0)
    {
        return false;
    }
    if(bdate.year%4 ===0)
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

   




var bdate = 
{
    day : 28,
    month : 2,
    year : 2019
}

console.log(ispalindrome("Hello"));
console.log(ispalindrome("Sharadhi"));
console.log(ispalindrome("lol"));


console.log(convertdatetostring(bdate));

console.log(getalldateformats(bdate));

console.log(whichoneisapalindrome(bdate));

console.log(getnextdate(bdate));