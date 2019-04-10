import axios from 'axios';
console.log('axios');
axios
    .get('https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/full_game_schedule.json', {
        'headers': {
            'Authorization': `Basic ${btoa('2269d933-29f3-4e97-a745-fec65d:111991')}`
        } })
    .then(function(response){
        let schedule = document.getElementById('schedule');
        
        let games = response.data.fullgameschedule.gameentry;

        for(let i = 0; i < games.length; i++){
            console.log(games[i]);


            let html = `<div>${games[i].awayTeam.Name}</div>`;
            
            schedule.insertAdjacentHTML('beforeend',html);
        }
    });