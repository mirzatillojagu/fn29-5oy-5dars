//////////////Majburiy masalalar//////////////////////

// 1
// function str(v) {
//     let res = v.toLowerCase().split(" ");

//     for (let i = 0; i < res.length; i++) {
//       res[i] = res[i][0].toUpperCase() + res[i].slice(1);
//     }

//     return res.join(" ");
//   }

//   console.log(str("salom bolalar yaxshimiszlar"));

// 2
// let str = "salom"
// function str1(arg){
//        return  arg.split('').reverse().join('')
// }
// console.log(str1(str));

// 3
// let arr = [1,2,3,4]
// function son(arr){
//  let sum =0;
//  for(let i = 0; i < arr.length; i++){
//   sum+=arr[i]
//  }
//  return Math.trunc(sum / arr.length)
// }
// console.log(son(arr));

// 4
// let arr = ['salom', 'talim', 'anor', 'nimadur'];
// function str(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         res.push(arg[i].length);
//     }
//     return res;
// }

// console.log(str(arr));

// 5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function str(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1) {
//             res.push(arg[i])
//         }
//     }
//     return res;
// }

// console.log(str(arr));

// 6
// let res = {name: "Alex", age: 99,};

// let res1 = { father: "John", brother:"David"}

// function obekt(arg, arg1){
//     return {...arg, ...arg1}

// }
// console.log(obekt(res, res1));

// 7
// let str = "  ichimlik suvi"
// console.log(str.trim());

// 8
// function obekt(arg) {
//     return Object.values(arg);
// }

// let arg = {
//     name: 'John',
//     age: 30,
// };

// console.log(obekt(arg));

// 9
// function obekt(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     return { min: min, max: max };
// }

// let res = [3, 5, 2, 8, 1, 10];
// console.log(obekt(res));

// 10
// let str = "salom";
// let count = 0;
// let unli = ["a", "o", "u", "i", "e"];

// for (let i = 0; i < str.length; i++) {
//     if (unli.includes(str[i])) {
//         count++;
//     }
// }

// console.log(count);

// 11
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function son(arg){
//     let son1 =[]
//     for (let i = 0; i < arg.length; i++) {
//          son1.push(arg[i]+2)
//     }
//     return son1
// }
// console.log(son(arr));

// 12
// let arr = ["salom", "Mirzo", "olma"];

// function maxArr(arg) {
//     let max = arg[0];

//     for (let i = 1; i < arg.length; i++) {
//         if (arg[i].length > max.length) {
//             max = arg[i];
//         }
//     }
//     return max;
// }

// console.log(maxArr(arr));

// 14
// function soz(arg) {
//     if (arg.length > 1 && arg[0] === arg[arg.length - 1]) {
//         return arg.slice(1, -1);
//     }
//     return arg;
// }

// console.log(soz("salas"))

// 15

// let arr = [1, 2, 3, 4, 5, 6, 7]

// function son(arg){
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i] ** 2
//     }

//     return sum
// }
// console.log(son(arr));

// 16
// let arr = [1, 2, 3, 4, 5, 6, 7]

// function son(arg){
//     arg.reverse()
//     return arg
// }
// console.log(son(arr));

// 17
// let str = "salom bolalar"

// function soz(arg){
//     return arg.toUpperCase();

// }
// console.log(soz(str));

// 19
// let arr = [1, 2, 3, 1, 5, 1, 7, 1]

// function son(arg){
//     let count =0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] == 1) {
//             count++;
//         }

//     }
//     return count;
// }
// console.log(son(arr));

// 20
// let str = "bolalar";
// let str1 = "yaxshimiszlar";

// function soz(arg, arg1) {
//     let res = arg + ' ' + arg1;
//     let res1 = res.split('').join(' ');
//   return res1
// }
// console.log(soz(str, str1));

/////////////////Ixtiyoriy masalalar////////////////////

// 1

// let str = "JavaScript"

// function soz(arg){
//     let count =0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] == 'a') {
//             count++;
//         }

//     }
//     return count;
// }
// console.log(soz(str));

// 2
// let arr = [1, 2, 3, 4, 5, 5, 6];
// let arr1 = [1, 5, 6, 8, 9, 2];

// function son(arg, arg1) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg1.includes(arg[i]) && !res.includes(arg[i])) {
//       res.push(arg[i]);
//     }
//   }

//   return res
// }

// console.log(son(arr, arr1));
