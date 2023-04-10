const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result')
const weightConditionEl = document.getElementById('weight-condition')

function calculateBMI(){
    const heightValue = document.getElementById('height').value /100;   // because its base on meter and we convert it into cm
    // for copy the same line and paste in next line then press alt+shift+arrow-down;
    const weightValue = document.getElementById('weight').value

    const bmiVlaue = weightValue / (heightValue * heightValue)

    bmiInputEl.value = bmiVlaue;

    console.log(bmiVlaue);

    if(bmiVlaue < 18.5){
        weightConditionEl.innerText = "Under Weight"
    }else if(bmiVlaue >= 18.5 && bmiVlaue <= 24.9 ){
        weightConditionEl.innerText = "Normal Weight"
    }else if(bmiVlaue >=25 && bmiVlaue <= 29.9 ){
        weightConditionEl.innerText = "Over Weight"

    }else if(bmiVlaue >= 30){
        weightConditionEl.innerText = 'Obesity'
    }
    }

btnEl.addEventListener('click', calculateBMI)