console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

$('#addjokeButton').on('click', function(event) {
    event.preventDefault();
    
    addJoke();
})
    getJokes();
}

function addJoke (){
    console.log('Inside add Joke', $(this));
    const jokeToUpdate = $(this).parent().parent().data().id;

    console.log('Joke to update' , jokeToUpdate);
    $.ajax ({
      method: 'PUT',
      url: `/jokes/${jokeToUpdate}`
    })
    .then ((response) => {
      getJokes();
    })
    .catch ((error) => {
      alert('error on jokes route' , error);
    })

}

function postJoke() {
    console.log('inside post joke');
    let payloadObject = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchLineIn').val()   
    }
    $.ajax({
        type: 'POST',
        url: '/',
        data: payloadObject
    }).then( function (response) {
        $('#whoseJokeIn').val(''),
        $('#questionIn').val(''),
        $('#punchLineIn').val(''),
        getJokes();
    });
}

function getJokes() {
    $("#outputDiv").empty();
    $.ajax({
        type: 'GET',
        url: '/jokes'
    }).then(function (response) {
        const listOfJokes = response;
        console.log("GET /jokes response", response);
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
         
            $('#outputDiv').append(`
                <tr data-id=${response[i].id}>
                    <td>${response[i].whoseJoke}</td>
                    <td>${response[i].jokeQuestion}</td>
                    <td>${response[i].punchLine}</td>
                    
                </tr>
            `);
          
        }
    });
}
function renderJokes(listOfJokes) {
    // Empty previous data
    $('#jokesTableBody').empty();
    // Add all jokes to table
    for (let joke of listOfJokes) {
        $('#jokesTableBody').append(`
                <tr>
                    <td>${joke.whoseJoke}</td>
                    <td>${joke.jokeQuestion}</td>
                    <td>${joke.punchLine}</td>
                </tr>`
            );
    }
}

