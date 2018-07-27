var database = [
    {
        username: "jyoti",
        password: "1234"
    },
    {
        username: "abc",
        password: "12345"
    },
    {
        username: "pqr",
        password: "123456"
    }
];

var newsfeed = [
    {
        username: "bobby",
        timeline: "sp tired from all that learning"
    },
    {
        username: "sally",
        timeline: "Javascript is soooo cool!"
    }
];

var userNamePrompt = prompt("What's uour username?");
var passwordPrompt =prompt("what's your password");

signIn(userNamePrompt,passwordPrompt);

function signIn(uname, pwd)
{   
        if(isValid(uname,pwd))
        {
            console.log(newsfeed);            
        }
        else{
            alert("Sorry, wrong username and password");            
        }
   
}

function isValid(uname, pwd)
{
    for(var i=0; i< database.length; i++)
    {
        if(database[i].username === uname && database[i].password === pwd)
        {
            return true;
        }
    }
    return false;
}