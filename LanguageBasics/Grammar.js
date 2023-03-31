const { isLiteralTypeNode } = require("typescript");

const length = 16; 
let weight = 7.5;
let Name = "Pooja";
let BoolenValue = true;
let person = {firstName:"Pooja", lastName:"Pedamkar", date:new Date("2022-03-25"), randomnumber:1 };
const ArrayTest = ["Pink", "Yellow", "Red"];
const date = new Date("2022-03-25");
let bigNumber = 123456789012345678901234567890n;
let FloatPoint = 12.34E+56
console.log(isLiteralTypeNode(FloatPoint): Number);