let sentence = "hello there from lighthouse labs!\n";

for(let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, 100 * i)
}

// for(let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write()
//   }, 1000)
// } 