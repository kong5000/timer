const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('SIGINT', () => {
  console.log("Thanks for using me, ciao!")
  rl.close();
});

rl.question('Set timer count : ', (countdown) => {
  console.log(`Setting timer for ${countdown} seconds`)
  for (let countdownTime of countdown) {
    if (!isNaN(countdownTime) && countdownTime > 0) {
      setTimeout(() => {
        //No sound when using process.stdout.write('\x07') so print beep! instead.
        process.stdout.write('beep!\n');
        rl.close();
      }, countdownTime * 1000);
    }
  }
})

process.stdin.on('keypress', (c, k) => {
  if(k.name === 'b'){
    console.log("\nbeep!\n");
    rl.close();
  }
});

