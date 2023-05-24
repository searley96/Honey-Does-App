const calcBathroom = require('../modules/calcBathroom');
const calcKitchen = require('../modules/calcKitchen');

function calculateLowEstimate(constants, formList){
    // for loop for every form, perform calculations
    let totalTime = 0;
    let hours = 0;
    
    formList.forEach(form => {
        if(form.form_type === 'bathroom'){
            totalTime += calcBathroom('low', constants,  form);
        }
        else if(form.form_type === 'kitchen'){
            totalTime += calcKitchen('low', constants, form);
        }
        else if(form.form_type === 'wipe_dust'){
            totalTime += constants.FLOORS_LOW;
            totalTime += constants.FLOORS_MARGIN_LOW;
        }
        else{
            totalTime += constants.GLASS_LOW;
            totalTime += constants.WIPE_LOW;
            totalTime += constants.DUST_LOW;
        }
       
    })
    
    hours = getHours(totalTime);
    
    return calcEstimate(constants.HOURLY_RATE, hours);
    
    function getHours(totalTime){
        return totalTime / 60;
    }

    function calcEstimate(rate, hours){
        console.log('rate * hours', rate, '*', hours, (rate * hours));
        if(rate * hours < 50){
            return 50;
        }
        else{
            return rate * hours;
        }
        
    }

}

module.exports = calculateLowEstimate;