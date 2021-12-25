import Lazy from 'lazy.js'
/**
 * switch off
 */
export function switchOffController({ series, season, episode }) {
  if (episode) {
    _switchAnEpisode({ series, season, episode }, !episode.switchOff)
  } else if (season) {
    _switchAnSeason({ series, season }, !season.switchOff)
  } else if (series) {
    _switchAnserie(series, !series.switchOff)
  }
}

export const SWITCH_STR = {
  ALL_SEASONS: 'All Seasons',
  ALL_EPISODES: 'All Episodes',
  PER_EPISODE: 'Per Episode',
  SINGLE_MOVIE: 'Single Movie',
}

//================================================================

function _switchAnserie(serie, off) {
  _switchAllSeasons(serie, off)
}

function _switchAnSeason({ series, season }, off) {
  if (off) {
    series.switchOff = true
    season.switchOff = true
    _switchAllEpisodes(season, true)
    chkSeasonsSwitchIsAllOn(series) &&
      (series.switchStr = SWITCH_STR.ALL_SEASONS)
  } else {
    _switchAllEpisodes(season, false)
    season.switchOff = false
    _chkSwitchHasOn(series.seasons) || (series.switchOff = false)
    chkSeasonsSwitchIsAllOn(series) || (series.switchStr = '')
  }
}

function _switchAnEpisode({ series, season, episode }, off) {
  if (off) {
    series.switchOff = true
    season.switchOff = true
    episode.switchOff = true
    chkEpisodesSwitchIsAllOn(season) &&
      (season.switchStr = SWITCH_STR.ALL_EPISODES)
    chkSeasonsSwitchIsAllOn(series) &&
      (series.switchStr = SWITCH_STR.ALL_SEASONS)
  } else {
    episode.switchOff = false
    _chkSwitchHasOn(season.episodes) || (season.switchOff = false)
    _chkSwitchHasOn(series.seasons) || (series.switchOff = false)
    chkEpisodesSwitchIsAllOn(season) || (season.switchStr = '')
    chkSeasonsSwitchIsAllOn(series) || (series.switchStr = '')
  }
}

function _switchAllSeasons(serie, off) {
  serie.switchOff = off
  serie.seasons.forEach((_season) => {
    _switchAllEpisodes(_season, off)
  })
  serie.switchStr = off ? SWITCH_STR.ALL_SEASONS : ''
}

function _switchAllEpisodes(season, off) {
  season.switchOff = off
  _switchAll(season.episodes, off)
  season.switchStr = off ? SWITCH_STR.ALL_EPISODES : ''
}

function _switchAll(list, off = false) {
  list.forEach((item) => {
    item.switchOff = off
  })
}

function _chkSwitchHasOn(list) {
  return Lazy(list).find((item) => {
    return item.switchOff
  })
}

export function chkSeasonsSwitchIsAllOn(serie) {
  return chkSwitchAllOff(serie.seasons)
}

export function chkEpisodesSwitchIsAllOn(season) {
  return chkSwitchAllOff(season.episodes)
}

export function chkSwitchAllOff(list) {
  return !Lazy(list).find((item) => {
    return !item.switchOff
  })
}
