//console.log("Hello from java script");
//hide output
document.querySelector('#output').style.visibility="hidden";
document.querySelector('#inputvalue').addEventListener('input',convert);
function convert(e){
    console.log("function is run");

    //Get user input value
    //let input =  document.querySelector('#inputvalue').value
    let input = e.target.value
    //console.log(input);

    //show output
    document.querySelector('#output').style.visibility="visible";


    document.querySelector('#gram').innerHTML=input * 453.592;
    document.querySelector('#kg').innerHTML=input * 0.453592;
    document.querySelector('#oz').innerHTML=input * 16;
}
