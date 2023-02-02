//Var with numbers
var n1:number = 10;
console.log(n1);

//var with Strings
var s1:string = "This is a string on JS";
var s2:string = 'You cant see but this is a different String too.';

console.log(s1);
console.log(s2);
var s3:string = s1;
console.log(s3);

//Var booleans
var b1:boolean = true;
var b2:boolean = false;
console.log(b1);
console.log(b2);

//Var os any kind
var a1:any = {
    productId:1,
    productName:"Iphone",
    productPrice:1000
}
console.log(a1);
/*
var array1:Array<string> = ["AngularJS","ReactJS","NodeJS"];
console.log(array1);
console.log(array1[0]);
console.log(array1.length);
*/
var array2:Array<any> = [123,"AngularJS", true];
console.log(array2);