
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
        BaseSalary.value = parseFloat(HourlySalary.value) * Duration.value * HoursPerWeek.value;

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



form.onsubmit = (e) => {
    e.preventDefault();
    validate();

    let BaseSalary = HourlySalary.value * Duration.value * HoursPerWeek.value;

    let MonthlySalary = parseFloat((4.29565217391 * HourlySalary.value * HoursPerWeek.value).toFixed(2));
    console.log(MonthlySalary)

    //Monthly Salary
    document.getElementById("MonthlySalary").innerHTML = `$${MonthlySalary}`;
};


function validate() {
    if (
        HourlySalary.value === "" || Duration.value === "" || HoursPerWeek.value === "" || HousingStipend.value === "" || Bonus.value === ""
    ) {

        let alert = document.createElement("div");
        alert.className = "btn red btn-large";
        alert.innerHTML = `<span> Complete all fields </span>`;
        alert.style.margin = ".5rem 35%";
        form.parentNode.insertBefore(alert,form);

        alert.onclick = () => alert.remove();

        setTimeout(() => alert.remove(), "3000");
    }
}