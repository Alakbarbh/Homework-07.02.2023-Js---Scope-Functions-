"use strict"

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// let n =21

// function division () {

//     if (n % 3 == 0 && n % 7 == 0) {
//         console.log("Bolunur");
//     }else{
//         console.log("Bolunmur");
//     }
// }

// division(n);




// let n = 21

// let division = (n) => {
//     if (n % 3 == 0 && n % 7 == 0) {
//         console.log("Bolunur");
//     } else {
//         console.log("Bolunmur");
//     }
// }

// division(n)













// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 




// function factorial(nums) {
//     let multiple = 1;

//     for(let i = 0;i <= nums;i++){
//         multiple*=i;
//     }

//     console.log(multiple);
// }

// factorial(5);





// let factorial = (nums) => {
//     let multiple = 1;

//     for (let i = 0; i <= nums; i++) {
//         multiple *= i;
//     }

//     console.log(multiple);
// }

// factorial(5);













// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin

// let arr = [1, 2, 3, 4, 5, 6]

// function sumOfEven(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum += arr[i]**2
//         }
//     }

//     console.log(sum);
// }

// sumOfEven(arr);




// let arr = [1,2,3,4,5,6]

// let sumOfEven = () =>{

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum += arr[i]**2
//         }
//     }

//     console.log(sum);
// }


// sumOfEven(arr);











// 4) Functiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 


// let mail = "cavid@code.edu.az";
// let password = "12345";


// function authentication (mail,password) {
//     if(mail == "cavid@code.edu.az" && password == "12345"){
//         console.log("Girish olundu");
//     }else{
//         console.log("Mail ve yaxud password sehvdir");
//     }

// }

// authentication(mail,password);







// let mail = "cavid@code.edu.az";
// let password = "12345";


// let authentication = (mail,password) => {

//     if (mail == "cavid@code.edu.az" && password == "12345") {
//         console.log("Girish olundu");
//     } else {
//         console.log("Mail ve yaxud password sehvdir");
//     }


// }

// authentication(mail,password)












// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.


// let arr = [1,2,3,4,5,6]

// function sumOffOdd(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//      {
//         if (arr[i] % 2 == 1) {
//             sum+= arr[i];
//         }
//     }
//     return sum;
// }

// console.log(sumOffOdd(arr));




// let arr = [1,2,3,4,5,6]

// let sumOffOdd = () =>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//      {
//         if (arr[i] % 2 == 1) {
//             sum+= arr[i];
//         }
//     }
//     return sum;
// }

// console.log(sumOffOdd(arr));











// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let arr = [1, 2, 3, 4, 5, 6];

// function getCountEven(arr) {

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(getCountEven(arr));




let arr = [1, 2, 3, 4, 5, 6];


let getCountEven = () =>{
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}


console.log(getCountEven(arr));

