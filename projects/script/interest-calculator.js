

function calculate(){

    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const total = document.getElementById("total");
    const amount = document.getElementById("amount");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years =Number(yearsInput.value);

    const result = principal * Math.pow((1 + rate / 1), 1 * years);

    amount.textContent = result.toLocaleString("ua-UA", {style: "currency", currency: "UAN"});
}