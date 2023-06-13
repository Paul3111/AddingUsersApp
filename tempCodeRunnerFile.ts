function remove (string) {
  new_string = ''
  for (letter in string) {
    if (letter === "!") {
      letter = ""
      new_string += letter;
      console.log(letter);
      console.log(new_string);
    }
    
  }

  return string;
}