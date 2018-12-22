'use strict'

let inquirer = require('inquirer');
let weather = require('weather-js');

let inputLocation = [
    {
        type: 'input',
        name: 'city',
        message: 'Please Input the name of a city',
    },
    {
        type: 'input',
        name: 'state',
        message: 'Please input the name a of state',
    }
]

inquirer.prompt(inputLocation).then(function(location){

    weather.find({search: location.city + ", " + location.state, degreeType: "F"}, function(err, result) {
        if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
      });

});

