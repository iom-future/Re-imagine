// Drop down algorithm

//get elements
let dropDownMenu = document.querySelectorAll('.nav-links li');
let hamburgerIcon = document.querySelector('.bi bi-list');

//hide cancel icon
let cancelIcon = document.querySelector('.bi-x');
cancelIcon.style.display = 'none';

//display menu
hamburgerIcon.addEventListener('click',()=>{

})

//IOM'S COLOR GENERATION ALGORITHM
// Get required elements from DOM-> button clicked ? generate random rgb numbers -> Apply to each color palette-> Display on browser : Do nothing

//Get required Elements
const colorBtn = document.querySelector('.generate-color-btn');
const colorPalette = document.querySelectorAll('.color-palette');
const colorCOde = document.querySelectorAll('h3');
//from nodeList To Array
let arrayOfColorPalette = [...colorPalette];
let arrayOfColorCode = [...colorCOde];

//GENERATE RANDOM RGB NUMBERS
function rbgValues() {
    let maxRgbValue = 255;
    return {
        red: Math.ceil(Math.random() * (maxRgbValue + 1)), //maxRgbValue + 1 -- includes 255 in the range(0- 255)
        green: Math.ceil(Math.random() * (maxRgbValue + 1)),
        blue: Math.ceil(Math.random() * (maxRgbValue + 1))
    };
}

//Button Clicked
colorBtn.addEventListener('click',()=>{
   /* console.log('button working');*///Debugging sake
    let index=0;
    //Apply to each color palette
    arrayOfColorPalette.forEach((colorPalette)=>{
        //Generate Random Rgb Numbers for each color palette
        let {red,green,blue} = rbgValues();

        //Display on browser
        colorPalette.style.cssText+=`background-color: rgb(${red},${green},${blue});`

        //display rbg values
        arrayOfColorCode[index].innerText=`rgb(${red},${green},${blue})`; //get the h3 element for a specific box (the box you're current on)
        index++;//makes it possible to get the next box h3 after each iteration
    })
})