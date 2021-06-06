let name = prompt("what is your name?") ;
alert( 'welcome  ' + name +'  to our web site ') ;

console.log( "your name is  " +name)

let country = prompt("Our website is about to take you on an introductory tour of Jordan, but first where are you from ?" ) ;

console.log( " you are from  "+country) ;

let eat = prompt( "have you ever try to eat mansaf our local dish ^_* ?")

 console.log("have you ever try to eat mansaf?  " +eat) ;


if(eat === "yes"){
  alert(' great wish you like it .') ;
} else{
  alert(" I advise you to taste it as soon as you arrive in Jordan, you will not regret it, believe me") 
}

let come = prompt("do you want to come to jordan ? ") ;

if(come === "yes"){
  alert("you are welcome "+name) ;

} else{
  alert("wish you cange your mind come visit us  "+name) ;
}
 console.log("do you want to come to jordan? "+come) ;

 document.write('you are ' +name+  'from ' +country+  'would you eat mansaf? ' +eat+  'do you want to come to jordan? ' +come);

