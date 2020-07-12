var preference = prompt('Which episode do you prefer? one, two, or three?') 
var response;

if (preference === 'one') {
    response = 'Episode 1 is the best!';
} else if (preference === 'two') {
    response = 'Episode 2 is ok.';
} else if (preference ==='three') {
    response = 'Oh...';
} else {
    response = 'fine don\'t answer!'
}

document.write('<h3>' + response + '</h3>');