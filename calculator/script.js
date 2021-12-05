let screen = document.getElementById('display');
let onScreen = " ";
btn = document.getElementsByClassName('cal-button');
for ( item of btn ) {
    item.addEventListener('click',  (t)=> {
       let buttonText = t.target.value;
        // console.log(buttonText);
        if (buttonText == "C") {
            onScreen = " ";
            screen.value = onScreen;
        }
        else if (buttonText == "=") {
            screen.value = eval(onScreen);
        }
        else if (buttonText == "÷") {
            onScreen += "/";
            screen.value = onScreen;
        }
      
            
        else {
            onScreen += buttonText;
            screen.value = onScreen;
    
        }
    })
   
}