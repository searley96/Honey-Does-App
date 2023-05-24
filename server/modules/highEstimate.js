const calcBathroom = require('../modules/calcBathroom');
const calcKitchen = require('../modules/calcKitchen');

function calculateHighEstimate(constants, formList){
    // for loop for every form, perform calculations
    let totalTime = 0;
    let hours = 0;
    
    formList.forEach(form => {
        if(form.form_type === 'bathroom'){
            totalTime += calcBathroom('high', constants,  form);
        }
        else if(form.form_type === 'kitchen'){
            totalTime += calcKitchen('high', constants, form);
        }
        else if(form.form_type === 'wipe_dust'){
            totalTime += constants.FLOORS_HIGH;
            totalTime += constants.FLOORS_MARGIN_HIGH;
        }
        else{
            totalTime += constants.GLASS_HIGH;
            totalTime += constants.WIPE_HIGH;
            totalTime += constants.DUST_HIGH;
        }

    })

    hours = getHours(totalTime);
    console.log('hours', hours);
    return calcEstimate(constants.HOURLY_RATE, hours);
    
    function getHours(totalTime){
        return totalTime / 60;
    }

    function calcEstimate(rate, hours){
        console.log('rate * hours', rate, '*', hours, (rate * hours));
        return rate * hours;
    }
    

}

module.exports = calculateHighEstimate;