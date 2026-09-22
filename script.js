//selecting the event boxes in the html
const events = document.querySelectorAll(".events");     //finding all the events in .events and not just one 



//Saved Events div 
const savedSection = document.createElement("div");  //<div></div>

//giving the div section an id to identify it with 
savedSection.id = "saved-events"; 

//Heading 
const headingText = document.createElement("h2");  //<h2></h2>

//writing the heading 
headingText.textContent= "Saved Events";    //<h2> Saved Events </h2>

//making the list to put your saved events 
const savedEventsList = document.createElement("ul");   //<ul></ul>

//when their is no saved events 
const emptyMessage = document.createElement("p");  //<p></p>


//Putting everything inside of div!!!! 

//putting message inside p
emptyMessage.textContent = "No Saved Events";  //<p>No Saved Events</p>

//heading in div
savedSection.appendChild(headingText);

//p inside of div
savedSection.appendChild(emptyMessage);

//list in div
savedSection.appendChild(savedEventsList);

//Put that div in the bottom of main(sandwhich between the about section and the footer)
const main = document.querySelector("main");  //finding main in html
main.appendChild(savedSection);     //Saved Events at the bottom of the page 






//the array:
//Fall Festival
//Homecoming Game
//Halloween Movie night
//Volleyball Game
//Career Fair
//Silent Disco

//for loop to go through each event card 
for(let event of events){

    //add a save button to every event
    const button = document.createElement("button");    //on html, we made <button></button>

    //putting the text in the actual button
    button.textContent = "Save Event";    //what the button will say <button> Save Event </button>

    button.classList.add("save-button");    //buttons class = save button

    //make your button answer to clicks 
    button.addEventListener("click", saveEvent);     //write saveEvent!!!!!!!

    //putting button onto the actual page
    event.appendChild(button);

}

//finding the button class
const buttons = document.querySelectorAll(".save-button");

//the array ^ :
//Fall Festival button
//Homecoming Game button 
//Halloween Movie night button 
//Volleyball Game button 
//Career Fair button
//Silent Disco button

//create saveEvent
function saveEvent(event){    //event = "click"

    const button = event.currentTarget;  //which button was clicked 

    for(let i = 0; i < buttons.length; i++){

        //is the event i is currently on the one that was clicked?
        // button = the button that was clicked
        //button is the class of all the buttons!!!
        if(button == buttons[i]){

            //highlighting the event
            events[i].classList.add("saved");

            //change button
            button.textContent = "Remove Event";
        }
    }
}

