const animate = [ '\r|   ', '\r/   ', '\r-   ', '\r\\   ' ];

const animation = (array, repeat) => {
  let delay = 100;
  for (let i = 0; i < (repeat*2); i++) {
    for (const step of array){
      setTimeout(() => process.stdout.write(step), delay);
      delay += 200;
    }
  } 
}

animation(animate,3);
