//json

// var classRoom = {}; //empty object

// var classRoom = {
// //properties
//   seats: 30,
//   projectorAvailable: true,
//   room: "AC330",
//   hdmiPort: true,
//   registeredStudents: ["Jack S", "Sally P", "Jimmy O"],
//   //methods
//   register: function (first, last) {
//     var name = first + " " + last;
//     this.registeredStudents.push(name);
//
//   }
// }




//constructors

function classRoom (seats, projectorAvailable, room, hdmiPort) {
  this.seats = seats;
  this.projectorAvailable = projectorAvailable;
  this.room = room;
  this.hdmiPort = hdmiPort;
  this.registeredStudents = [];
  this.register = function (first, last) {
    var name = first + " " + last;
    this.registeredStudents.push(name);
  }
}

var myClass = new classRoom("17", false, "AC123", false);

console.log(myClass);
console.log(myClass['registeredStudents'])
myClass.register("Bob", "Smith");
console.log(myClass);
myClass.register("Sally", "Smith");
console.log(myClass);
