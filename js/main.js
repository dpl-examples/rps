$(document).ready( function() {
  $('.choice').click( function() {
    var choice = $(this).attr('id');
    var label = $('#user_selection');
    label.text('You: ' + choice);
    $('#user_prompt').hide();
    var comp = computerChoice();
    compare(choice, comp);
  });

  function computerChoice() {
    var options = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
    $('#computer_selection').text('Computer: ' + computerChoice);
    return computerChoice;
  }

  function displayResult(result) {
    var label = $('#result');
    var color;
    switch (result) {
      case 'win':
        color = 'green';
        break;
      case 'lose':
        color = 'red';
        break;
      case 'tied':
        color = 'black'
        break;
    }
    label.text("You " + result);
    label.css("color", color);
  }

  function compare(user, computer) {
    switch(user) {
      case 'rock':
        if (computer === 'paper')
          displayResult("lose")
        else if (computer === 'scissors')
          displayResult("win")
        else
          displayResult("tied")
        break;
      case 'paper':
        if (computer === 'scissors')
          displayResult("lose")
        else if (computer === 'rock')
          displayResult("win")
        else
          displayResult("tied")
        break;
      case 'scissors':
        if (computer === 'rock')
          displayResult("lose")
        else if (computer === 'paper')
          displayResult("win")
        else
          displayResult("tied")
        break;
    }
  }
});
