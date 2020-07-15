function greetUser() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    }

    return document.write('<h3>' + greeting + '</h3>');
}

function askName() {
    var name = prompt('What\'s your name');

    return document.write('<h3>' + name + '</h3>');
}

function askPreference() {
    var preference = prompt('Which episode do you prefer? one, two, or three?')
    var response;
    
    // possibly a variable before prompt possibly something to reassign that variable the response to the prompt
    while (preference != 'one' && preference != 'two' && preference != 'three') {
        var preference = prompt('Please answer with one, two, or three in all lower case.');
    }

    if (preference === 'one') {
        response = 'Episode 1 is the best!';
    } else if (preference === 'two') {
        response = 'Episode 2 is ok.';
    } else if (preference === 'three') {
        response = 'Oh...';
    }

    return document.write('<h3>' + response + '</h3>');
}