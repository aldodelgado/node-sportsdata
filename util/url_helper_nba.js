var config = require('../config');

function createUrlWithEndpoint(endpoint) {
    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/[endpoint]?season_id=[season]&api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nba-'
        + config.nba.access_level
        + config.nba.version
        + '/'
        + config.nba.season
        + '/'
        + endpoint
        + '?season_id='
        + config.nba.seasonID
        + '&api_key='
        + config.nba.apikey;
}

function createSeasonScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/schedule?season_id=[season]&api_key=[your_api_key]
    return createUrlWithEndpoint('schedule');
}

function create3DayScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/schedule-3day?season_id=[season]&api_key=[your_api_key]
    return createUrlWithEndpoint('schedule-3day');
}

function createStandingsUrl() {

    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/standings?season_id=[season]&api_key=[your_api_key]
    return createUrlWithEndpoint('standings');
}

function createRostersUrl() {

    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/roster?season_id=[season]&api_key=[your_api_key]
    return createUrlWithEndpoint('roster');
}

function createGameScoreAndStatsUrl(gameid) {

    // URL should look like: http://api.sportsdatallc.org/[nba_type]-[access_level][version]/statistics?game_id=[game_id]&api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nba-'
        + config.nba.access_level
        + config.nba.version
        + '/statistics?game_id='
        + gameid
        + '&api_key='
        + config.nba.apikey;
}

function createPlayByPlayUrl(gameid) {

    // URL should look like: http://api.sportsdatallc.org/[nba_type]-[access_level][version]/pbp?game_id=[game_id]&api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nba-'
        + config.nba.access_level
        + config.nba.version
        + '/pbp?game_id='
        + gameid
        + '&api_key='
        + config.nba.apikey;
}

function createEventsGloassaryUrl() {

    // URL should look like: http://api.sportsdatallc.org/[nba_type]-[access_level][version]/events?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nba-'
        + config.nba.access_level
        + config.nba.version
        + '/events?&api_key='
        + config.nba.apikey;
}

function createSeasonalStatsUrl(teamid) {

    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/seasontd?team=[team_id]&season_id=[season_id]&api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nba-'
        + config.nba.access_level
        + config.nba.version
        + '/'
        + config.nba.season
        + '/seasontd?team='
        + teamid
        + '&season_id='
        + config.nba.seasonID
        + '&api_key='
        + config.nba.apikey;
}

function createStatusUrl() {

    // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/[nba_season]/status/[season]/schedule/daily.xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nba-'
        + config.nba.access_level
        + config.nba.version
        + '/'
        + config.nba.season
        + '/status/'
        + config.nba.seasonID
        + '/schedule/daily.xml?api_key='
        + config.nba.apikey;
}


module.exports = {

    getSeasonScheduleUrl: function() {
        return createSeasonScheduleUrl();
    },

    get3DayScheduleUrl: function() {
        return create3DayScheduleUrl();
    },

    getStandingsUrl: function() {
        return createStandingsUrl();
    },

    getRostersUrl: function() {
        return createRostersUrl();
    },

    getGameScoreAndStatsUrl: function(gameid) {
        return createGameScoreAndStatsUrl(gameid);
    },

    getPlayByPlayUrl: function(gameid) {
        return createPlayByPlayUrl(gameid);
    },

    getEventsGloassaryUrl: function() {
        return createEventsGloassaryUrl();
    },

    getSeasonalStatsUrl: function(teamid) {
        return createSeasonalStatsUrl(teamid);
    },

    getStatusUrl: function() {
        return createStatusUrl();
    }
}