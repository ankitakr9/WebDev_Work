// A "good string " is a string that starts with the letter 'a' & has a length > 3 . write a program to find if a string is good or not.

let str = "apple";

if((str[0] === 'a') && (str.length > 3)){
    console.log("This is a good String.");
}
else{
    console.log("This is not a good string");
}