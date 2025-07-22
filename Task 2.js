let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


let input;
do {
  input = prompt("Enter 5 to continue:");
} while (input != 5);


let sum = 0;
let N = 5;
for (let j = 1; j <= N; j++) {
  sum += j;
}
console.log("Sum is:", sum);


for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= 10; col++) {
    line += (row * col) + "\t";
  }
  console.log(line);
}