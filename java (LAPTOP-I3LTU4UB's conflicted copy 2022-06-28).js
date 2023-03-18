let img1 = document.querySelector('#slider1 .image img');
let slider1 = document.querySelector('#slider1');
let img2 = document.querySelector('#slider2 .image img');
let slider2 = document.querySelector('#slider2');
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let slider = document.getElementById("slider1");

let a = slider1.getBoundingClientRect();

console.log(a);

img_src = ["images/0.png", "images/1.png", "images/2.png"];
let index1 = 0;
let index2 = 1;
img1.src = img_src[1];
img2.src = img_src[0];

// console.log(index)

// let time = 3
// function time_counter(){
//     if(time==3){
//         clearInterval(time);
//     }
//     else{
//         time+=1;
//     }
// }
// let timer = setInterval(time_counter,1000)

// next.addEventListener('click', () => {
//     time = 0;
//     if (index == 2) {
//         index = 0;
//         img.src = img_src[index]; 
//         timer;
               
//     }
//     else {
//         index++;
//         img.src = img_src[index];
//         timer;
//     }


// })


// prev.addEventListener('click', () => {
//     time = 0;
//     if (index == 0) {
//         index = 2;
//         img.src = img_src[index]; 
//         timer;       
//     }
//     else {
//         index--;
//         timer;
// }})

// setInterval(function(){
//     if(time>=3){
//         if (index == 2) {
//             index = 0;
//             img.src = img_src[index];        
//         }
//         else {
//             index++;
//             img.src = img_src[index];
//     }
    
//     }
// },3000);
// setInterval(function(){

//     if(index1==2){
//         index1=0;
//     }
//     else{
//         index1++;
//     }
//     if(index2==2){
//         index2=0;
//     }
//     else{
//         index2++;
//     }
//     img2.src = img_src[index1];
//     img1.src = img_src[index2];
    
//     console.log(index1);
// },3000)

slider.addEventListener('animationiteration',e =>{
    if(index1==2){
        index1=0;
    }
    else{
        index1++;
    }
    if(index2==2){
        index2=0;
    }
    else{
        index2++;
    }
    img2.src = img_src[index1];
    img1.src = img_src[index2];

} )


