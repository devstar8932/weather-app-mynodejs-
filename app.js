// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help','h')
//     .argv;
    
// geocode.geocodeAddress(argv.address,(errorMessage,results) => {
//     if(errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(results,undefined,2));
//     }
// });

//7db264285314d2717920306c5d01dfaa
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

const request = require('request');

request({
    url:'https://api.darksky.net/forecast/[7db264285314d2717920306c5d01dfaa]/[42.8140012],[-73.9814578]',
    json:true
},(error,response,body) => {
    if(error){
        console.log('Unable to connect to Forecast.io.server');
    } else if (response.body=='Forbidden\n') {
        console.log(`Can't access this page.`);
    } else if (response.body=='ok'){
        console.log('Succefully access.');
    }

})