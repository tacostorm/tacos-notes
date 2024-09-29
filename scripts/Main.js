import Character from './character.js';
import Location from './location.js';

/*Hooks.once('ready', function() {
    console.log("Your module is ready!");

    Hooks.on('getSceneControlButtons', (controls) => {
        // Find the 'journal' control group (Journal Notes toolbar)
        const journalControls = controls.find(group => group.name === "notes");
        
        // Add a custom tool button to the Journal Notes toolbar
        if (journalControls) {
          journalControls.tools.push({
            name: "Taco's Notes",
            title: "Open Taco's Notes", 
            icon: "fas fa-book",  // FontAwesome icon for a window
            visible: true,
            onClick: () => {
              // Open a new blank window when clicked
              new Dialog({
                title: "Blank Window",
                content: `<p>Content goes here.</p>`,
                buttons: {
                  close: {
                    label: "Close",
                    callback: () => console.log("Window Closed")
                  }
                },
                default: "close"
              }).render(true);
            },
            button: true
          });
        }
      });
});
*/

// Create a character instance for Tetsuo
const tetsuo = new Character("Tetsuo");

// Create a location instance for Thornwatyr
const thornwatyr = new Location("Thornwatyr");

// Add a relationship between Tetsuo and Thornwatyr
tetsuo.addRelationship("livesIn", thornwatyr);

// Display Tetsuo's details and relationships
tetsuo.displayDetails();