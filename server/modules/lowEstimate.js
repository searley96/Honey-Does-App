const calcBathroom = require('../modules/calcBathroom');

function calculateLowEstimate(constants, formList){
    // for loop for every form, perform calculations
    let totalTime = 0;
    formList.forEach(form => {
        if(form.form_type === 'bathroom'){
            totalTime += calcBathroom('low', constants,  form);
        }
        else if(form.form_type === 'kitchen'){
            //calcKitchen('low', rate, form);
        }
        else if (form.form_type === 'wipe_dust'){
            // calcWipeDust('low', rate, form);
        }
        else{
            // calcOtherRoom('low', rate, form)
        }

    })

    return totalTime;
    console.log('inside calculateLowEstimate()');
    

}

module.exports = calculateLowEstimate;