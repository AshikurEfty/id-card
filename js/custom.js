
let eftyButton = document.querySelector('.btn');

   eftyButton.addEventListener('click', ()=>{
     
 let weightNumber = document.querySelector('.weight').value;
 let heightNumber = document.querySelector('.height').value;

    let bmi = (weightNumber) / (heightNumber * heightNumber);

    document.querySelector(".bmi-output").textContent=bmi;
    console.log(bmi);
});

