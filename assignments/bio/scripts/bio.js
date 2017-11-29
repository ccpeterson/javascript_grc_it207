/**
 * Interactive Bio
 * @author Kevin Santos
 */

// This calls the events when the document is ready
$( function() {
    infoTabEvents();
    foodTabEvents();
    profilePictureEvents();
    bioEvents();
    skillsListEvents();
} );

// Functions for the info tab
function infoTabEvents() {
    // This creates the tabbed menu
    $( "#tabs" ).tabs();

    // This shows a datepicker when the textbox is selected
    $( "#date-text" ).datepicker();

    // This creates a dialog that is closed at first
    $( "#dialog" ).dialog({ autoOpen: false });

    // Dream job "..." button function
    $("#dream-job-button").on("click", function(){
        $( "#dialog" ).dialog("open");
    });
}

// Functions for the foods tab
function foodTabEvents() {
    // Makes the draggable class draggable
    $( ".draggable" ).draggable();

    // Hides the draggable item (with a cool fading effect)
    // Closes the fridge when a draggable goes over it
    // Closes the fridge when a draggable goes out
    $( "#droppable" ).droppable( {
        over: function( event, ui ) {
            $(this).attr("src","images/fridge-open.png");
        },
        out: function( event, ui ) {
            $(this).attr("src","images/fridge-closed.png");
        },
        drop: function( event, ui ) {
            ui.draggable.hide(0);
            $(this).attr("src","images/fridge-closed.png");
        }
    });

}

// Functions for the profile pricture tab
function profilePictureEvents() {
    // Makes the profile picture resizable makes the title a tooltip
    $( "#profile-picture" ).resizable().tooltip();
}

// Functions for the bio tab
function bioEvents() {
    // This function gets called when the "Show me a bio" button gets clicked
    $("#bio-button").on("click", function(){
        // This places a solid border around the div
        $("#fileDisplayArea").css("border","solid");

        $.get('bio.txt', function(data) {
            // Splits the data using "\n" as the delimiter
            var sentences = data.split("\n");

            // Gets a random number between 0 and the length of sentences array
            var randomIndex = Math.floor((Math.random() * sentences.length));

            // Sets the text of fileDisplayArea to the random sentence selected
            $("#fileDisplayArea").text(sentences[randomIndex]);
        }, 'text');
    });
}

// Functions for the profile skills list tab
function skillsListEvents() {
    // Retrieves the JSON file
    $.get('bio.json', function(data) {
        // Parses the data in to a JSON object
        var temp = JSON.parse(data);

        // Displaying the JSON Object
        $("#skills-list-content").append("Javascript = " + temp["Javascript"] + "<br>" +
            "JSON = " + temp["JSON"] + "<br>" +
            "Interviewing = " + temp["Interviewing"] + "<br>" +
            "Video Games = " + temp["Video Games"]);
    }, 'text');
}