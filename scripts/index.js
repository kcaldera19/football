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
    // grabing button and form element from the html page by their ID
    let theButton = document.querySelector("#theButton");
    let footballForm = document.querySelector("#footballForm");
    // when the button is clicked it calls the displayFootTeam function
    theButton.addEventListener("click",displayFootballTeam);
    
    // Event listener for form submission
    footballForm.addEventListener("submit",function(event){
        
        // prevents the form being submitted
        event.preventDefault();

        // calls the displayFootballTeam Function
        displayFootballTeam();
        // to make sure the function returns at the end
        return false;
    });
    // 
    let theDropdown = document.querySelector("#footballSelect");
    // event listener for the dropdown change
    theDropdown.addEventListener("change",function(){
        // selecting the result pagraph element
        let resultsParagraph = document.querySelector("#results");
        // checking if the result paragraph has content and if the first option is selected
        if(resultsParagraph.textContent && theDropdown.selectedIndex === 0){
            // clear the text content of the paragraph
            resultsParagraph.textContent = "";
        }
    });

   
    
}
// displays the detail about the football team
function displayFootballTeam(){

    // gselects the dropdown element with the ID footballSelect and stores it in a variable
    let theDropdown = document.querySelector("#footballSelect");
    // gets the paragrah element where the results will be displayed
    let resultsParagraph = document.querySelector("#results");
    // get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex;
    // grabing the array nmaed teams 
    let selectedTeam = teams[selectedIndex];
    // displaying the results
    resultsParagraph.innerHTML = `you selected the ${selectedTeam.name} (${selectedTeam.code}) who will play ${selectedTeam.plays}`

}

function initDropdown(){
    // grabs the dropdown element from the page
    let theDropdown = document.querySelector("#footballSelect")

    // number of from the list of teams from the teams array
    let numberOfTeams = teams.length;
    // create a default "Select a team "option
    let selectOption = document.createElement("option");
    selectOption.textContent ="Select a team";
    selectOption.value ="";
    theDropdown.appendChild(selectOption);

        // looping through the teams array
    for(let i =0; i<numberOfTeams; i ++){

        // create a new option element for each team
        let newOption = document.createElement("option");

        // set the text content of the option to the teams name
        newOption.textContent = teams[i].name
        // sets the value attribute of the option to the teams code
        newOption.value = teams[i].code
        // appends the new option to the dropdown
        theDropdown.appendChild(newOption);


    }
}