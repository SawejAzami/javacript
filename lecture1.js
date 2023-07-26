console.log("hello wolrd");
// Type of variable
let accountId=12345;
const accountHolderName="Ramlal";
var accountPassword="897564"
 accountCity="jaipur"

console.log(accountId);
console.log(accountHolderName);
console.log(accountPassword);
console.log(accountCity);
// accountHolderName can not be change because it is const
// to print above variable together we use console.table([])

console.table([accountId,accountHolderName,accountPassword,accountCity]);
//  output will be
// │ (index) │  Values  │
// ├─────────┼──────────┤
// │    0    │  12345   │
// │    1    │ 'Ramlal' │
// │    2    │ '897564' │
// │    3    │ 'jaipur' │
// └─────────┴──────────┘

// pefer not to use var because of  issue in block scope and function scope