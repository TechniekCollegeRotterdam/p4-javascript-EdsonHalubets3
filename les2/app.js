/*const nameChanged = function(event){
    console.log(event.target.value);
}*/

let name ;
let country  ;
let p = document.getElementById("output") ; 
const nameChanged = function(event){
   name= event.target.value;
   changeInput()
};

const countryChanged = function(event){
    country= event.target.value;
    changeInput();
};
const changeInput = function(event){
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
};