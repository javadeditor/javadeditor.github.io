const h1 = document.querySelector("h1");
const showSteps = document.querySelector("#show_steps");
let aInp = document.querySelector("#a");
let bInp = document.querySelector("#b");
let cInp = document.querySelector("#c");
let dInp = document.querySelector("#d");
let eInp = document.querySelector("#e");
let gInp = document.querySelector("#g");
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let g = 0;
let x1 = document.querySelector("#x1");
let x2 = document.querySelector("#x2");
let epsilon = document.querySelector("#epsilon");
let submitButton = document.querySelector("#submit");
function f(x) {
    return a * x ** 5 + b * x ** 4 + c * x ** 3 + d * x ** 2 + e * x + g;
}
function bisection(a, b, epsilon) {
    if (f(a) * f(b) > 0) {
        h1.innerText = "wrong x1 or x2 choose";
        h1.classList.remove("opacity-25");
    } else if (f(a) * f(b) < 0) {
        let finalAns;
        let i = 1;
        while(Math.abs(a - b) > epsilon){
            finalAns = (a + b) / 2;
            if (f(a) > f(b)) {
                if (f(finalAns) > 0) a = finalAns;
                else b = finalAns;
            } else if (f(finalAns) > 0) b = finalAns;
            else a = finalAns;
            if (showSteps.checked) {
                const li = document.createElement("li");
                li.innerText = `step ${i}: ${finalAns}`;
                li.classList.add("list-group-item");
                document.querySelector(".list-group").appendChild(li);
            }
            i += 1;
        }
        h1.innerText = `your final answer is ${finalAns}`;
        h1.classList.remove("opacity-25");
    }
}
submitButton.addEventListener("click", ()=>{
    a = parseFloat(aInp.value);
    b = parseFloat(bInp.value);
    c = parseFloat(cInp.value);
    d = parseFloat(dInp.value);
    e = parseFloat(eInp.value);
    g = parseFloat(gInp.value);
    let x1Val = parseFloat(x1.value);
    let x2Val = parseFloat(x2.value);
    let epsilonVal = parseFloat(epsilon.value);
    bisection(x1Val, x2Val, epsilonVal);
});

//# sourceMappingURL=index.4f492e9b.js.map
