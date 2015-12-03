Cards = new Mongo.Collection("cards");

if (Meteor.isClient) {
  Template.body.helpers( {
    // cards: [
    //   { comment: "A very Good Thing", detail:"This was really really good.", user:"couch", anonymous:false, goodBad:10},
    //   { comment: "An ok Thing", detail:"This was good.", user:"alexS", anonymous:true, goodBad:5},
    //   { comment: "Tottaly Meh", detail:"", user:"Alex3", anonymous:true, goodBad:0},
    //   { comment: "Didn't like", detail:"crap crap crap.", user:"couch", anonymous:false, goodBad:-5},
    //   { comment: "José is coming back", detail:"", user:"couch", anonymous:true, goodBad:-10}
    // ]
    cards: function() {
      return Cards.find({});
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
