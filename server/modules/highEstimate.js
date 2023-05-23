const calcBathroom = require('../modules/calcBathroom');

function calculateHighEstimate(constants, formList){
    // for loop for every form, perform calculations
    let totalTime = 0;
    formList.forEach(form => {
        if(form.form_type === 'bathroom'){
            totalTime += calcBathroom('high', constants,  form);
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
    

}

module.exports = calculateHighEstimate;