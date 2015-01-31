var mongoose = require('mongoose');
var User = require('../users/userModel.js');
var Guide = require('../guides/guideModel.js');
var Step = require('../steps/stepModel.js');
// db setup
var pEnv = process.env;
var devDb = 'mongodb://localhost/oceanoracles-dev';
var database = mongoose.connect(pEnv.MONGOLAB_URI || pEnv.MONGOHQ_URL  || devDb);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error:'));
db.on('open', function() { console.log('mongo hooked'); });

console.log(database.collection(users));

var userData = [
  {
    "username" : "eric",
    "password" : 123,
    "email" : "eric@gmail.com"
  },
  {
    "username" : "raghu",
    "password" : 456,
    "email" : "raghu@gmail.com"
  },
  {
    "username" : "clark",
    "password" : 789,
    "email" : "clark@gmail.com"
  }
];

var guideTitles = [
  {
    "title" : "How to bbq",
    "steps" : [
      {"stepNum" : 1, "content": "Keep your grill clean and maintained"},
      {"stepNum" : 2, "content": "Get used to working with charcoal grills"},
      {"stepNum" : 3, "content": "Try to cook with thicker cuts of meat"},
      {"stepNum" : 4, "content": "Stick with simple seasonings"},
      {"stepNum" : 5, "content": "Always use a thermometer to test doneness"}
    ]
  },
  {
    "title" : "How to play guitar",
    "steps" : [
      {"stepNum" : 1, "content": "Buy guitar"},
      {"stepNum" : 2, "content": "Keep a schedule"},
      {"stepNum" : 3, "content": "Practice fundamental chords"},
      {"stepNum" : 4, "content": "Learn to read guitar tabs"},
      {"stepNum" : 5, "content": "Find a guitar buddy"}
    ]
  },
  {
    "title" : "How to read study material faster",
    "steps" : [
      {"stepNum" : 1, "content": "Stop sounding words out loud"},
      {"stepNum" : 2, "content": "Don't read word by word"},
      {"stepNum" : 3, "content": "Scan for the most important words"},
      {"stepNum" : 4, "content": "Read the first and last paragraphs"},
      {"stepNum" : 5, "content": "Avoid distractions"}
    ]
  },
  {
    "title" : "How to be a good cook",
    "steps" : [
      {"stepNum" : 1, "content": "Research new recipies on the internet"},
      {"stepNum" : 2, "content": "Begin by cooking simple recipies"},
      {"stepNum" : 3, "content": "Don't hesitate to cook something that seems challenging"},
      {"stepNum" : 4, "content": "Watch cooking shows to learn how to experiment"},
      {"stepNum" : 5, "content": "Learn from other cooks what ingridients they like"}
    ]
  },
  {
    "title" : "How to learn chinese (mandarin)",
    "steps" : [
      {"stepNum" : 1, "content": "Practice the four tones"},
      {"stepNum" : 2, "content": "Make flashcards to memorize simple vocabulary"},
      {"stepNum" : 3, "content": "Try to use conversational chinese in an everyday situation"},
      {"stepNum" : 4, "content": "Join online programs such as rosetta stone or duolingo"},
      {"stepNum" : 5, "content": "Join an in person meetup to be motivated by your peers"}
    ]
  },
  {
    "title" : "How to begin long distance running",
    "steps" : [
      {"stepNum" : 1, "content": "Get good running shoes"},
      {"stepNum" : 2, "content": "Be sure to drink water and eat a very light meal before running"},
      {"stepNum" : 3, "content": "Start off by running 2 miles and increase your distance by .5 miles each day"},
      {"stepNum" : 4, "content": "Run 6 days a week with one day of rest"},
      {"stepNum" : 5, "content": "Find a running buddy to motivate yourself"}
    ]
  }
];

console.log("User Model=", User);
for(var i=0; i<3; i++) {
  var tempUser = userData.splice(Math.floor(Math.random() * userData.length), 1)[0];
  console.log("tempUser", tempUser );
  var userDataTemp = {
    username: tempUser.username,
    password: tempUser.password,
    email: tempUser.email
  };
  console.log("userdataTemp", userDataTemp );
  database.users.insert(userDataTemp);
  User.create(userDataTemp, function(error, user) {
    for (var j=0; j<2; j++){
      var tempGuide = guideTitles.splice(Math.floor(Math.random() * guideTitles.length), 1)[0];
      var guideDataTemp = {
        title: tempGuide.title,
        userId: user._id
      };
      console.log("created user", user);
      console.log("guideDataTemp ", guideDataTemp);
      // db.guides.save(guide);
      Guide.create(guideDataTemp, function(error, guide) {
        for (var k = 0; k<5; k++){
          var tempSteps = tempGuide.steps;
          var stepDataTemp = {
            stepNum: tempSteps[k].stepNum,
            content: tempSteps[k].content,
            userId: user._id,
            guideId: guide._id
          }
          // db.steps.save(step);
          Step.create(stepDataTemp, function(error, step) {

          });
        }
      });
    }
  });
  console.log("seed user done")
}



