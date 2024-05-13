"use strict"
// just to check if its working
console.log("I am working here");

// objects with in the array. they are put outside the window.log functon
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

// waits for the window to be loaded 
window.onload = function () {
    // call the function that loads the team into the dropdown ist we created
    initDropdown();

    // grabing button and form element from the html page by their ID
    // let theButton = document.querySelector("#theButton");
    let footballForm = document.querySelector("#footballForm");

    // when the button is clicked it calls the displayFootTeam function
    // theButton.addEventListener("click",displayFootballTeam);

    // Event listener for form submission // calls the displayFootballTeam Function
    footballForm.addEventListener("submit", displayFootballTeam);
    


}
// displays the detail about the football team.
function displayFootballTeam(event) {

    // prevents the form being submitted
    event.preventDefault();

    // gselects the dropdown element with the ID footballSelect and stores it in a variable
    let theDropdown = document.querySelector("#footballSelect");

    // gets the paragrah element where the results will be displayed
    let resultsParagraph = document.querySelector("#results");

    // get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex - 1;

    if(theDropdown.value === ""){
        resultsParagraph.innerHTML ="";
    }else{
        let selectedTeam = teams[selectedIndex];

     // displaying the results
        resultsParagraph.innerHTML = `you selected the ${selectedTeam.name} (${selectedTeam.code}) who will play ${selectedTeam.plays}`
    }

}

// this function builds the options for the dropdown from our array of objects(teams)
function initDropdown() {
    // grabs the dropdown element from the page
    let theDropdown = document.querySelector("#footballSelect");

    // create a default "Select a team "option"

    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a team";
    defaultOption.value = "";

    // number of from the list of teams from the teams array
   





    theDropdown.appendChild(defaultOption);
    let numberOfTeams = teams.length;

    
    // looping through the teams array I started with 1 because I wanted to skip the first one
    for (let i = 1; i < numberOfTeams; i++) {

        // create a new option element for each team using document.createElement
        let newOption = document.createElement("option");

        // set the text content of the option to the teams name, what the user sees
        newOption.textContent = teams[i].name

        // sets the value attribute of the option to the teams code is what we see
        newOption.value = teams[i].code

        // appends the newOption to the dropdown
        theDropdown.appendChild(newOption);


    }
}