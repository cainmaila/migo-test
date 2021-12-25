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

//================================================================

function _switchAnserie(serie, off) {
  _switchAllSeasons(serie, off)
}

function _switchAnSeason({ series, season }, off) {
  if (off) {
    series.switchOff = true
    season.switchOff = true
    _switchAllEpisodes(season, true)
  } else {
    _switchAllEpisodes(season, false)
    season.switchOff = false
    _chkSwitchHasOn(series.seasons) || (series.switchOff = false)
  }
}

function _switchAnEpisode({ series, season, episode }, off) {
  if (off) {
    series.switchOff = true
    season.switchOff = true
    episode.switchOff = true
  } else {
    episode.switchOff = false
    _chkSwitchHasOn(season.episodes) || (season.switchOff = false)
    _chkSwitchHasOn(series.seasons) || (series.switchOff = false)
  }
}

function _switchAllSeasons(serie, off) {
  serie.switchOff = off
  serie.seasons.forEach((_season) => {
    _switchAllEpisodes(_season, off)
  })
}

function _switchAllEpisodes(season, off) {
  season.switchOff = off
  _switchAll(season.episodes, off)
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
