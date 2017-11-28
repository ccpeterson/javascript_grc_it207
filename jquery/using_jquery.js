//adds a listener to window.onload
$(document).ready(function() {
    //test our jQuery install with the functions below
    jquerySelectors();
    jqueryEvents();
    jqueryBuiltInFunctions();
    jqueryAnimations();
    jqueryAddingElements();
    jqueryRemovingElements();
    jqueryTraversingTheDom();
});

function jquerySelectors()
{
    //we can select and apply changes to multiple elements at once
    var paragraphs = $("p.interesting");
    paragraphs.css("background-color", "rgb(220, 220, 220)");
    paragraphs.css("padding", "6px");
    
    //apply method chaining
    $("span.quote").css("display", "block").css("margin", "10px 30px")
                   .css("font-style", "italic");
}

function jqueryEvents()
{
    $("span.quote").click(function() {
        //add quotes to my span...
        var currentText = $(this).text(); //retrieve text
        
        currentText = '"' + currentText + '"';
        
        $(this).text(currentText); //assign text
    });
    
    //alternative syntax
    $("p").on("click", function() {
        //set an attribute
        $(this).attr("tag", "I was clicked");
    });
    
    //meta-events - managed by jQuery
    
    //hover - mouseenter() and mouseleave()
    $("span.quote").hover(function() {
        $(this).css("color", "rgb(100, 100, 100)");
    },
    function() {
        $(this).css("color", "rgb(200, 200, 200)");
    });
    
    //assign multiple events
    $("ol").on({
        mouseenter : function() {
            $(this).css("font-family", "arial");
        },
        mouseleave : function() {
            $(this).css("font-family", "times new roman");
        }/*,
        mousemove : function() {
            //increase the font size as we mouse over
            var size = $(this).css("font-size");
            
            //pull out the point size
            size = size.substring(0, size.length - 2);
            
            size = parseInt(size) + 1;
            $(this).css("font-size", size + "px");
        }*/
    });
}

function jqueryBuiltInFunctions()
{
    //hide(), show(), toggle()
    $("button#toggle-button").click(function() {
        //retrieve the button text (is the table visible),
        //as well as the table
        var buttonText = $(this).text();
        var table = $("#contact-table");
        
        //toggle the table
        if (buttonText == "Show")
        {
            $(this).text("Hide");
            //table.show();
        }
        else
        {
            $(this).text("Show");
            //table.hide();
        }
        
        //alternative
        table.toggle();
    });
}

function jqueryAnimations()
{
    //fade a few list items in and out
    $("li.other").fadeIn(2000).fadeOut(2000);
    $("li.every").slideDown(1000).fadeTo("slow", 0.5);
}

function jqueryAddingElements()
{
    //append(), prepend(), after(), before()
    $("body").append("<p>Lorem ipsum dolor sit amet, consectetur adipiscing " +
                     "elit. Quisque sit amet sollicitudin libero. " +
                     '<span class="quote">Cras id nibh nec magna efficitur' + 
                     "aliquet quis non eros. </span>Aenean quis tortor scelerisque, " +
                     "malesuada risus ut, blandit nisi. Aenean rhoncus massa " +
                     "nec tristique egestas.</p>");
    
    //update my styles
    jquerySelectors();
    
    //update event handlers
    jqueryEvents();
}

function jqueryRemovingElements()
{
    $("button#remove-list").click(function() {
        //to remove all children
        $("ol.list").empty();
        
        //remove elements based on a selector
        //$("span.quote").remove();
        
        //alternative form
        $("span").remove(".quote"); //".quote" is a filter here
    });
}

function jqueryTraversingTheDom()
{
    //parent(), parents(), parentsUntil()
    var parent = $("button#remove-list").parent();
    var parents = $("button#remove-list").parents();
    
    //attributes are values directly set on tags in your html, whereas
    //properties are values tracked with elements in the dom
    var parentTag = parent.prop("tagName");
    print("Parent: " + parentTag);
    
    //how do I print out all ancestors from parents()
    var ancestorTags = "";
    for (var i = 0; i < parents.length; i++)
    {
        if (i != 0)
        {
            ancestorTags += ", ";
        }
        
        ancestorTags += $(parents[i]).prop("tagName");
    }
    
    print("Ancestors: " + ancestorTags);
    
    //children
    $("body").children().css("font-family", "lucida sans");
    
    //find(), this performs a search amount descendent nodes
    $("aside").find("ol").css({
        color: "red",
        "text-decoration": "line-through"
    });
}

function print(message)
{
    $("body").append("<p>" + message + "</p>");
}

















