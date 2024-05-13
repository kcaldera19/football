"use strict"

console.log("I am working here");

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];
// waits for the window to be loaded 
window.onload = function(){
    
    initDropdown();
    // grabing thebutton from html page from its id 
    let theButton = document.querySelector("#theButton");
    let footballForm = document.querySelector("#footballForm");
    // when the button is clicked it calls the displayFootTeam
    theButton.addEventListener("click",displayFootballTeam);
    
    footballForm.addEventListener("submit",function(event){
        
        // prevents the form to be submitted
        event.preventDefault();
        displayFootballTeam();
        // to make sure the function returns at the end
        return false;
    });
    let theDropdown = document.querySelector("#footballSelect");
    theDropdown.addEventListener("change",function(){
        let resultsParagraph = document.querySelector("#results");
        if(resultsParagraph.textContent && theDropdown.selectedIndex === 0){
            resultsParagraph.textContent = "";
        }
    });

   
    
}
// displays the detail about thr football team
function displayFootballTeam(){

    // get the dropdown from the page
    let theDropdown = document.querySelector("#footballSelect");

    let resultsParagraph = document.querySelector("#results");

    let selectedIndex = theDropdown.selectedIndex;

    let selectedTeam = teams[selectedIndex];

    resultsParagraph.innerHTML = `you selected the ${selectedTeam.name} (${selectedTeam.code}) who will play ${selectedTeam.plays}`

}

function initDropdown(){
    let theDropdown = document.querySelector("#footballSelect")

    // number of from the list of teams
    let numberOfTeams = teams.length;
    let selectOption = document.createElement("option");
    selectOption.textContent ="Select a team";
    selectOption.value ="";
    theDropdown.appendChild(selectOption);

        // creating loops
    for(let i =0; i<numberOfTeams; i ++){

        // create a new option
        let newOption = document.createElement("option");

        // 
        newOption.textContent = teams[i].name

        newOption.value = teams[i].code

        theDropdown.appendChild(newOption);


    }
}