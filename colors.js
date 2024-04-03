// Function without logical AND/OR operators
function basicTrafficLight(color) {
  if (color === 'red') {
    console.log('The traffic light is red. Stop!');
  } else if (color === 'yellow') {
    console.log('The traffic light is yellow. Slow down and prepare to stop!');
  } else if (color === 'green') {
    console.log('The traffic light is green. Go!');
  } else {
    console.log('Traffic light malfunction! Proceed with caution.');
  }
}


// Function with logical AND/OR operators
function advancedTrafficLight(color, isPedestrianWaiting) {
  console.log(`The traffic light is ${color}.`);

  if (color === 'red' && isPedestrianWaiting) {
    console.log('Pedestrians can cross the street.');
  } else if (color === 'red') {
    console.log('Stop! No pedestrians should cross.');
  } else if (color === 'yellow' && isPedestrianWaiting) {
    console.log('Pedestrians should wait as the light is about to change.');
  } else if (color === 'yellow') {
    console.log('Slow down and prepare to stop, no pedestrians should cross.');
  } else if (color === 'green' && !isPedestrianWaiting) {
    console.log('Go, but watch for pedestrians.');
  } else if (color === 'green') {
    console.log('Go, but let pedestrians cross first.');
  } else {
    console.log('Traffic light malfunction! Be careful.');
  }
}

// Test the functions with different scenarios
console.log('Testing basicTrafficLight:');
basicTrafficLight('red');
basicTrafficLight('yellow');
basicTrafficLight('green');
basicTrafficLight('blue'); // Malfunction case

console.log('\nTesting advancedTrafficLight:');
advancedTrafficLight('red', true);
advancedTrafficLight('red', false);
advancedTrafficLight('yellow', true);
advancedTrafficLight('yellow', false);
advancedTrafficLight('green', true);
advancedTrafficLight('green', false);
advancedTrafficLight('blue', false); // Malfunction case
