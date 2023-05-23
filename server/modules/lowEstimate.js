const calcBathroom = require('../modules/calcBathroom');
const calcKitchen = require('../modules/calcKitchen');

function calculateLowEstimate(constants, formList){
    // for loop for every form, perform calculations
    let totalTime = 0;
    formList.forEach(form => {
        if(form.form_type === 'bathroom'){
            // totalTime += calcBathroom('low', constants,  form);
        }
        else if(form.form_type === 'kitchen'){
            // totalTime += calcKitchen('low', constants, form);
        }
        else if (form.form_type === 'wipe_dust'){
            // totalTime += calcWipeDust('low', constants, form);
        }
        else{
            // totalTime += calcOtherRoom('low', constants, form)
        }

    })

    return totalTime;
    console.log('inside calculateLowEstimate()');
    

}

module.exports = calculateLowEstimate;