let example1 = Array();
let example2 = Array(6);
console.log(example2.length);
console.log(
  example2[0],
  example2[example2.length - 1],
  example2[Math.trunc(example2.length / 2)]
);
let mixedDataTypes = [0, 1.3, "test", [0, 1], { test: "1" }];
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(
  itCompanies[0],
  itCompanies[example2.length - 1],
  itCompanies[Math.trunc(itCompanies.length / 2)]
);
itCompanies.forEach((e) => {
  console.log(e);
});
itCompanies.forEach((e) => {
  console.log(e.toUpperCase());
});
console.log(itCompanies.join(", "), " are bit IT companies");
itCompanies.includes("Google")
  ? console.log("Google")
  : console.log("Company not found.");
let filteredItCompanies = [];
itCompanies.forEach((e) => {
  let counter = 0;
  for (i = 0; i < e.length; i++) {
    if (e[i] == "o") {
      counter++;
    }
  }
  if (counter >= 2) {
    filteredItCompanies.push(e);
  }
});
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(3));
console.log(itCompanies.slice(3, 1));
console.log(itCompanies.splice(0, 3));
console.log(itCompanies.splice(3, 3));
console.log(itCompanies.splice(3, 1));
console.log(itCompanies.splice(0));
