const display = document.getElementById("display");

function addToDisplay(input){
  display.value += input;
}

function allClear(){
  display.value = '';
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = 'Error';
  }
  
}