function rot13(str) { // LBH QVQ VG!
let newStr = "";
  for (let i = 0; i < str.length; i++){
    let char = str.charCodeAt(i);
    if (char < 65 || char > 90) {
      console.log(str.charAt(i))
      newStr += str.charAt(i);
    }else{
      if (char < 78){
        newStr += String.fromCharCode(char + 13);
      }else{
        newStr += String.fromCharCode(char - 13);
      }
    }
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");