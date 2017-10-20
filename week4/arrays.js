var output = document.getElementById("output");

var numbers = [0,1,2,3,4,5];
var mixedTypes= ["1010 e seattle st", "kent", "wa", 98030, false];

var city = mixedTypes[1];
var zip = mixedTypes[3];

mixedTypes[3] = "98030-4000"



var genre;
var title;
var platform;
var players;
var id;

var videoGame = {
  id: 0,
  genre: "action",
  title: "COD",
  platform: "Xbox",
  players: 4
}

function VideoGame (id, genre, title, platform, players)
{
  this.id = id;
  this.genre = genre;
  this.title = title;
  this.platform = platform;
  this.players = players;
}

for (var i = 0; i < mixedTypes.length; i++)
{
  var tempGame = {}
  switch (i)
  {
    case 0:
    tempGame = new VideoGame(i, "action", "AC1", "xbox", 1)
    break;

    case 0:
  }
  arrayOfVideoGames.push(tempGame);
}
