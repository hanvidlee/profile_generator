const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What?'s your name?", (name) => {
  console.log(`Thank you for your name ${name}`);
  
  rl.question("What's an activity you like doing?", (activity) => {
    console.log(`${activity} is a fun activity!`);

    rl.question("What is your favourite food?", (food) => {
      console.log(`${food} tastes good!`);

  rl.close();

  console.log(`${name} loves ${activity} as an activity to do when ${name} is bored. ${name} enjoys eating ${food} as it is ${name}'s favourite.`)
    });
  });
});