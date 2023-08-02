function getCount(str) {
    const arrayOne = str.split("");
    const vowelArray = ["a","e","i","o","u"] ;
    var vowelCount = 0;
    for( var i = 0 ; i < arrayOne.length; i++ ) {
      const char = arrayOne[i].toLowerCase();
      console.log("Went through loop")
      if (vowelArray.includes(char)) {
        vowelCount++;
      }
      
    }
      return (vowelCount)
   }