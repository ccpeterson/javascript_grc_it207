/**
Author: Clinton Peterson
Project: Interactive Bio
Date: 27 November 2017
 */

$( function() {
    infoTabEvents();
    foodTabEvents();
    profilePictureEvents();
    bioEvents();
    skillsListEvents();
} );

// info tab
function infoTabEvents()
  {
    // creates tabs
    $( "#tabs" ).tabs();
    $( "#date-text" ).datepicker();
    $( "#dialog" ).dialog({ autoOpen: false });
    $("#dream-job-button").on("click", function()
    {
      $( "#dialog" ).dialog("open");
    });
  }

// foods tab
function foodTabEvents()
{
  $( ".draggable" ).draggable();
  $( "#droppable" ).droppable(
    {
      over: function( event, ui )
      {
        $(this).attr("src","images/fridge-open.png");
      },
      out: function( event, ui )
      {
        $(this).attr("src","images/fridge-closed.png");
      },
      drop: function( event, ui )
      {
        ui.draggable.hide(0);
        $(this).attr("src","images/fridge-closed.png");
      }
    });
}

// profile pic tab
function profilePictureEvents() {
    $( "#profile-picture" ).resizable().tooltip();
}

// bio tab
function bioEvents()
{
  $("#bio-button").on("click", function()
  {
    $.get('bio.txt', function(data)
    {
      var sentences = data.split("\n");
      var randomIndex = Math.floor((Math.random() * sentences.length));
      $("#fileDisplayArea").text(sentences[randomIndex]);
    },
    'text');
  });
}

// profile tab
function skillsListEvents()
{
  $.get('bio.json', function(data)
  {
    var temp = JSON.parse(data);
    $("#skills-list-content").append(
      "Javascript = " + temp["Javascript"] + "<br>" +
      "JSON = " + temp["JSON"] + "<br>" +
      "Interviewing = " + temp["Interviewing"] + "<br>" +
      "Video Games = " + temp["Video Games"]);
  },
  'text');
}
