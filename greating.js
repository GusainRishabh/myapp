function getGreetingMessage() {
  const now = new Date();
  const hour = now.getHours();

  let greetingMessage;

  if (hour >= 5 && hour < 12) {
    greetingMessage = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    greetingMessage = "Good afternoon!";
  } else {
    greetingMessage = "Good evening!";
  }
  return greetingMessage;
}
let ;


// Display the greeting message
const greetingDiv = document.getElementById('greeting');
const message = getGreetingMessage();
greetingDiv.textContent = message;