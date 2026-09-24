"use strict";


//selecting the event boxes in the html
const events = document.querySelectorAll(".events");     //finding all the events in .index and not just one 



//Saved Events div 
const savedSection = document.createElement("div");  //<div></div>

//giving the div section an id to identify it with 
savedSection.id = "saved-events";

//Heading 
const headingText = document.createElement("h2");  //<h2></h2>

//writing the heading 
headingText.textContent = "Saved Events";    //<h2> Saved Events </h2>

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
for (let event of events) {

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
function saveEvent(event) {    //event = "click"

    const button = event.currentTarget;  //which button was clicked 

    for (let i = 0; i < buttons.length; i++) {

        //is the event i is currently on the one that was clicked?
        // button = the button that was clicked
        //button is the class of all the buttons!!!
        if (button == buttons[i]) {

            //checking to see if the events has been saved...
            if (events[i].classList.contains("saved")) {
                //yes:
                //removed saved class
                events[i].classList.remove("saved");
                //change it back
                button.textContent = "Save Event";

                //selecting the list items in the savedEventsList
                const savedItems = savedEventsList.querySelectorAll("li");

                //finding each element 
                const eventName = events[i].querySelector("h2");

                //go through the items in the list 
                for (let savedItem of savedItems) { //going through each element in savedItems 
                    const savedName = savedItem.querySelector("h3");

                    //seeing if the items is the item i need to remove 
                    if (savedName.textContent == eventName.textContent) {

                        //remove the item if it is 
                        savedEventsList.removeChild(savedItem);
                    }
                }

                //checking to see if there are any more events, if not, add the empty message back 
                const itemsLeft = savedEventsList.querySelectorAll("li");

                //if it is empty
                if(itemsLeft.length == 0){
                    emptyMessage.textContent = "No Saved Events";
                }
            }

            else {    //make it saved 
                events[i].classList.add("saved");

                //change the text on the button
                button.textContent = "Remove this event";


                //get the event name 
                const eventName = events[i].querySelector("h2");

                //get the info about the event 
                const information = events[i].querySelectorAll("li");

                //creating the li for the event
                const savedEvent = document.createElement("li");

                //create  heading under the other heading 
                const savedName = document.createElement("h3");  //<h3></h3>

                //put the name into the heading 
                savedName.textContent = eventName.textContent;

                //put heading into savedEvent 
                savedEvent.appendChild(savedName);

                //Putting the dates into savedEvent
                const date = document.createElement("p");        //<p></p>
                date.textContent = information[0].textContent;   //puling from the list at the beggining 
                savedEvent.appendChild(date);


                //Putting the time into savedEvent
                const time = document.createElement("p");        //<p></p>
                time.textContent = information[1].textContent;
                savedEvent.appendChild(time);

                //putting the location into savedEvent
                const location = document.createElement("p");       //<p></p>
                location.textContent = information[2].textContent;
                savedEvent.appendChild(location);


                //put finished event into the saved events list
                savedEventsList.appendChild(savedEvent);

                //remove the no events message 
                emptyMessage.textContent = "";
            }
        }
    }
}





