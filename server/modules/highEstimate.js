const calcBathroom = require('../modules/calcBathroom');
const calcKitchen = require('../modules/calcKitchen');

function calculateHighEstimate(constants, formList){
    // for loop for every form, perform calculations
    let totalTime = 0;
    formList.forEach(form => {
        if(form.form_type === 'bathroom'){
            // totalTime += calcBathroom('high', constants,  form);
        }
        else if(form.form_type === 'kitchen'){
            // totalTime += calcKitchen('high', constants, form);
        }
        else if (form.form_type === 'wipe_dust'){
            // totalTime += calcWipeDust('high', constants, form);
        }
        else{
            // totalTime += calcOtherRoom('high', constants, form)
        }

    })

    return totalTime;
    

}

module.exports = calculateHighEstimate;