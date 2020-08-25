let countdowns = process.argv.slice(2)
for(let countdownTime of countdowns){
  if(!isNaN(countdownTime) && countdownTime > 0){
    setTimeout(() => {
      //No sound when using process.stdout.write('\x07') so print beep! instead.
      process.stdout.write('beep!');
    }, countdownTime * 1000)
  }
}