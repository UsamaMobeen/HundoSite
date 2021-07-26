

//get the values from the Page
//starts or controller function
function getValues()
{
    //get the values from the Page
    let startValue =  document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //We need to validate our inputs
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    let generatedNumbers = [];
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
         //call generateNumbers
         generatedNumbers = generateNumbers(startValue,endValue);
      
    }else{
        alert("You must enter an Integer");
    }   

    //call displayNumbers
    displayNumbers(generatedNumbers);
}

//logic function
//generate numbers from startValue to the endValue
function generateNumbers(sValue, eValue){

    let numbers = [];

    //we want to get numbers from start to end
    for (let index = sValue; index <= eValue; index++) {
        //this will execute in a loop until index = eValue
       numbers.push(index);
        
    }

    return numbers;
}

//display or view numbers
//display the numbers and mark even numbers bold
function displayNumbers(generatedNumbers){
    let templateRows = "";
    for (let index = 0; index < generatedNumbers.length; index++) {
     let number = generatedNumbers[index];
     let className = "even";
     if(number % 2 == 0){
        className = "even";
     }else{
        className = "odd";
     }

     templateRows += `<tr><td class = "${className}">${number}</td></tr>`;
        
    }

    document.getElementById("results").innerHTML= templateRows;
}