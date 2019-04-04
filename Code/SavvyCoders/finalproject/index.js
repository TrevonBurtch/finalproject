axios
    .get('https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/games.json', {
        'headers': {
            'Authorization': `Basic ${btoa('b0830822-1dcd-4e7b-869b-dd01b8:MYSPORTSFEEDS')}`
        } }).then(function(response){
        // handle error
        console.log(response);
    });