function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetMorning(name) {
  console.log('Good Morning', name);
}

function greetEvening(name) {
  console.log('Good Evening', name);
}

greeting(greetMorning, 'Omor');
greeting(greetMorning, 'Faruk');
greeting(greetMorning, 'Mahfuj');

greeting(greetEvening, 'Omor');
greeting(greetEvening, 'Faruk');
greeting(greetEvening, 'Mahfuj');