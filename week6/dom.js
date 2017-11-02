

accessingIndividualElements();
accessingMultipleElements();
traversingTheDom();

function accessingIndividualElements()
{
  var header = document.getElementById("page_header");
  console.log(header);
  header.textContent = "Welcome to my page";

  header.innerHTML = "Welcome to <span class = 'title'> Clinton\'s</span> page";

  var figures = document.querySelector("#figures");
  console.log(figures);
  figures.textContent = "My " + figures.textContent;
}

function accessingMultipleElements()
{
  var every = document.getElementsByClassName("every");
  var other = document.getElementsByClassName("other");
  console.log(every);
  for (var i=0; i <every.length; i++)
  {
    every[i].style.backgroundColor = "rgb(220,220,220)";
    other[i].style.backgroundColor = "yellow";
  }

  var paragraph = document.getElementsByTagName("p");

  console.log(paragraph);

  for( var j=0; j < paragraph.length; j++)
  {
    paragraph[j].style.margin = "20px";
  }

  var quotes = document.querySelectorAll("p span.quote");
  console.log(quotes);

  for (var k = 0; k < quotes.length; k++)
  {
    quotes[k].style.display = "block";
    quotes[k].style.fontStyle = "italic";
    quotes[k].style.margin = "10px 30px";
    quotes[k].textContent = '"' + quotes[k].textContent + '"';
  }
}


function traversingTheDom()
{
  var quotes = document.querySelectorAll(".quote");

  for (var i = 0; i<quotes.length; i++)
  {
    var parent = quotes[i].parentNode;
    parent.style.backgroundColor = "gray";
    parent.style.borderRadius = "5px";
    parent.style.padding = "8px";
  }

  var element = document.body.firstChild;

  while (element != undefined)
  {
    if (element.nodeType != Node.TEXT_NODE && element.nodeType != Node.COMMENT_NODE)
    {
      element.style.fontFamily = "veranda";
    }
    element = element.nextSibling;
  }

  var table = document.getElementById("contact_table");
  var headerRow = table.firstElementChild.firstElementChild;











}


function addRecord()
{
  var table = document.getElementById("contact_table");
  var body = table.last
}

function getTableCell(promptMessage)
{

}
