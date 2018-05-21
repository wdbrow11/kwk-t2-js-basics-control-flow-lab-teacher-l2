function scuberGreetingForFeet(numFeet) {
  if ( numFeet <= 400 ) {
    document.write( "Enjoy your free sample!" )  }
  else if ( numFeet > 2000 ) {
    document.write( "That costs an extra $30." )
  }
  else if ( numFeet > 2500 ) {
  document.write( "We do not allow rides over 2500 feet" )
  }
}

function ternaryCheckCity(city) {
  if (city === "NYC"){
    return ("Ok, sounds good")
  } else if ( city !== "NYC") {
    return ("No go.")
  }
}

function switchOnCharmFromTip(tip){
  if (tip >= 10){
    return ("Thank you so much.")
  } else if (tip >= 5) {
    return ("Thank you.")
  } else {
    return ("Bye.")
  }
}

scuberGreetingForFeet(500);
ternaryCheckCity("Boston");
switchOnCharmFromTip(4);
