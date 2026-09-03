let userName = "grace";
let age = 18;
let text = "I am an adult!"
if(userName === "grace" || age >= 18) {
    text = "I am an adult!";
};
document.getElementById("message").innerHTML = text;

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = "Good morning";
});

let number = "";
for (let i = 0; i <= 5; i++) {
    number += "" + i ;
}
document.getElementById("display").innerHTML = number;


