scuberGreetingForFeet() {
  let numFeet = 400
  if ( numFeet <= 400 ) {
    document.write( "Enjoy your free sample!" )  }
  else if ( numFeet > 2000 ) {
    document.write( "That costs an extra $30." )
  }
  else if ( numFeet > 2500 ) {
  document.write( "We do not allow rides over 2500 feet" )
  }
}

scuberGreetingForFeet();
