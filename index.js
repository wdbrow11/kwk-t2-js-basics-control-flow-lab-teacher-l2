scuberGreetingForFeet(numFeet) {
  let numFeet = 3000
  if ( numFeet > 2500 ) {
    document.write( "We do not allow rides over 2500 feet" )
  }
  else if ( numFeet > 2000 ) {
    document.write( "That costs an extra $30.")
  }
  else if ( numFeet <= 400 ) {
    document.write( "Enjoy your free sample!")
  }  
}