
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

// Base Salary Calculator
document.querySelectorAll('.input-field').forEach(item => {
    item.addEventListener('keyup', event => {
        BaseSalary.value = HourlySalary.value * Duration.value * HoursPerWeek.value;

        let BaseSalaryValue = BaseSalary.value;
        return BaseSalaryValue;
    })
  });

// Housing Calculator
HousingStipend.addEventListener("keyup", () => {
    Housing.value = HousingStipend.value * (Duration.value / 4);

    let HousingValue = Housing.value;
    return HousingValue;
});

// Total Compensation Calculator
document.querySelectorAll('.output-field').forEach(item => {
item.addEventListener('keyup', event => {
    TotalCompensaton.value = parseInt(BaseSalary.value) + parseInt(Housing.value) + parseInt(Bonus.value);

    let TotalCompensatonValue = TotalCompensaton.value;
    return TotalCompensatonValue;
})
});