
function randomOtp(){
    const clearArterDotNumber = Math.round(Math.random()*1000000)+"";

    if(clearArterDotNumber.length >= 6){

        const inputId = document.getElementById('genaratgeInput');

          inputId.value = clearArterDotNumber;

    }else{
        return randomOtp();  
    }
}

function compareInputValue(inputId1, inputId2){

    const id1 = document.getElementById(inputId1);
    const id1Value = id1.value;

    const id2 = document.getElementById(inputId2);
    const id2Value = id2.value;

    const match1 = document.getElementById('match');
    console.log(match1);
    const match2 = document.getElementById('notMatch');

    if(id1Value === id2Value){
       match1.style.display = 'block';
       match2.style.display = 'none';
        
    }else if(id1Value !== id2Value){
        match2.style.display = 'block';
       match1.style.display = 'none';
    }

}



document.getElementById('genaratePin').addEventListener('click', function(){
    randomOtp();
});

document.getElementById('calculetor').addEventListener('click', function(evant){

     const targetValue = (evant.target).innerText;

     if(isNaN(targetValue)){
       
    }else{
        const confirmPin = document.getElementById('confirmPin');
        const setValue = confirmPin.value;

        const insertValue = setValue + targetValue;
        confirmPin.value =insertValue;
    }
});


document.getElementById('clear').addEventListener('click', function(){
    const confirmPinClear = document.getElementById('confirmPin');
    confirmPinClear.value = "";
});

document.getElementById('clear-last').addEventListener('click', function(){

    const getInput = document.getElementById('confirmPin');

    const getInputValue = getInput.value.split('');

    const removeLast = getInputValue.pop();
    
    const join = getInputValue.join('');
   
    getInput.value = join;
   
});


document.getElementById('submit-chack').addEventListener('click', function(){

    compareInputValue('genaratgeInput', 'confirmPin');
    const emptys = document.getElementById('confirmPin');
    emptys.value = "";
});