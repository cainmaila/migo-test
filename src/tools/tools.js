import dateFormat from 'dateformat'

function dateFormatStr(_date) {
  return dateFormat(_date * 1, 'mmmm d, yyyy')
}

export function dateFormatByKey(
  obj,
  key = 'publish_timestamp',
  strKey = 'publish_timestampStr',
) {
  obj[strKey] || (obj[strKey] = dateFormatStr(obj[key]))
}
