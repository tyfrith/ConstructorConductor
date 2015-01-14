//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

var User = function() {
	this.name = name;
	this.email = email;
	this.password = password;
	this.totalScore = totalScore;
}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

 var Question = function() {
 	this.title = title;
 	this.answersArray = answersArray;
 	this.rightAnswer = rightAnswer;
 	this.difficulty = difficulty;
 };


//Create a users Array which is going to hold all of our users.

 var users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

 var user1 = ('john', 'john@gmail', 'boogie', 40);
 var user2 = ('sam', 'sam@gmail.com', '4895yw835y', 50);
 var user3 = ('tim', 'tim@gmail.com', 'q89y98y', 60);

 users.push(user1);
 users.push(user2);
 users.push(user3);


//Create a questions Array which is going to hold all of our questions

 var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

 var question1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?');
 var question2 = new Question('T/F: JavaScript is just a scripting version of Java');
 var question3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value");


//Now push all of your instances of Question into the questions Array

questions.push(question1);
questions.push(question2);
questions.push(question3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

for (var i = 0; i < users.length; i++) {
	console.log(users[i]);
}

for (var i = 0; i < questions.length; i++) {
	console.log(questions[i]);
}

