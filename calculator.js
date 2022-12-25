
// Inputs / DOM Elements 

const HourlySalary  = document.getElementById("HourlySalary");
const Duration  = document.getElementById("Duration");
const HoursPerWeek  = document.getElementById("HoursPerWeek");
const BaseSalary = document.getElementById("BaseSalary");


const HousingStipend  = document.getElementById("HousingStipend");
const Housing  = document.getElementById("Housing");


const Bonus  = document.getElementById("Bonus");


const TotalCompensaton  = document.getElementById("TotalCompensaton");


const form  = document.getElementById("TotalComp");

//console.log(HourlySalary, Duration, HoursPerWeek, Housing, Bonus, TotalCompensaton);

document.querySelectorAll('.input-field').forEach(item => {
    item.addEventListener('keyup', event => {
        BaseSalary.value = HourlySalary.value * Duration.value * HoursPerWeek.value;

        let BaseSalaryValue = BaseSalary.value;
        return BaseSalaryValue;
    })
  });


// HoursPerWeek.addEventListener("keyup", () => {
//     BaseSalary.value = HourlySalary.value * Duration.value * HoursPerWeek.value;

//     let BaseSalaryValue = BaseSalary.value;
//     return BaseSalaryValue;
// });
