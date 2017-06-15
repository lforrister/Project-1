var config = {
  apiKey: "AIzaSyCUa3OmzBQAV9MHxQg6Pgl2s5533V5qjEI",
  authDomain: "coder-bay-fee9d.firebaseapp.com",
  databaseURL: "https://project01-concert-bud.firebaseio.com/",
  storageBucket: "coder-bay-fee9d.appspot.com"
};

firebase.initializeApp(config);
var database = firebase.database();


var person = {
    key :"",
    id :1,
    name : "",
    email : 0,
    phone : 0,
    city :"r"
};




$("#submit").on("click", function(event) {
    event.preventDefault();

        person.name = $("#name-input").val().trim();
        var con = database.ref().child("persons").push({
           
            id :    person.id,
            name:   person.name,
            email:  person.email,
            phone:  person.phone,
            city:   person.city
        });
        });
