//FETCH FONT
async function fetchFont() {
    //try-catch block to handle errors
    try{
        //try All this code;
        //  Fetch font api; A RISKY CODE THAT COULD FAIL i.e return error
        let response = await fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDKRcuBI4y2JTfcm76fwKro47YYHuc1tBE");

       //if fetch fail due to some reason handle it,and don't crash the program but throw an error [object]
        if(!response.ok){
            throw new Error();
        }

        // Turn fetched data to json/object format
        let responseInJson = await response.json();

        let fontArray = await responseInJson.items; //the property that holds the array of fonts
        
        //save the fetched font data to a local json file for later use
        const fs = require('fs');
          fs.writeFileSync('./data/fonts-data.json', JSON.stringify(fontArray, null, 2));
          console.log('Fonts saved to fonts-data.json!'); //success message
    }catch(error){
        console.error(error.message);
    }
 
}

//call the fetchFont function, so that the font data is fetched and saved to a local json file
fetchFont();