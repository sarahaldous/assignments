var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
              

              function arrToString(arr){
                  return arr.join(' ')
              }
              console.log(arrToString(lyrics))

              function myReverse(arr) {
                  return arr.reverse().join(' ')
              }
              console.log(myReverse(lyrics))

              function everyOtherWord(arr){
                    var str = ""
                    for(var i = 0; i < arr.length; i += 2){
                    str += arr[i] + " "
                    // str = str + arr[i] + " " This is exactly the same as the line above, jst longer and more descriptive.
                    }
                    return str   
              }
              
              console.log(everyOtherWord(lyrics))