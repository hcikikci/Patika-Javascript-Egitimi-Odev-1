let inputName = prompt("Please enter your name.");
let variable = document.querySelector("#myName");

while(!(inputName)){
    inputName = prompt("Please enter your name.")
}

if(inputName){
    variable.innerHTML = `${inputName}`
}
