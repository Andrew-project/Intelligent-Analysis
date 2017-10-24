export function initMonthTime (type) {
  const now = new Date(); // 当前日期
  const nowMonth = now.getMonth(); // 当前月
  const nowYear = now.getFullYear(); // 当前年
  let time = 0;
  if (type === 'startMonth') {
    if (nowMonth > 3) {
      time = new Date(nowYear, nowMonth - 4).getTime();
    } else {
      time = new Date(nowYear - 1, nowMonth + 8).getTime();
    }
  } else {
    time = new Date(nowYear, nowMonth + 1).getTime() - 1;
  }
  return time;
}

export function initDayTime (type) {
  const now = new Date(); // 当前日期
  const nowDay = now.getDate(); // 当前日
  const nowMonth = now.getMonth(); // 当前月
  const nowYear = now.getFullYear(); // 当前年
  let time = 0;
  if (type === 'startDay') {
    time = new Date(nowYear, nowMonth, nowDay).getTime();
  } else {
    time = new Date(nowYear, nowMonth, nowDay).getTime() + 24 * 60 * 60 * 1000 - 1;
  }
  return time;
}

export function initHourTime (type) {
  const now = new Date(); // 当前日期
  const nowHour = now.getHours(); // 当前时
  const nowDay = now.getDate(); // 当前日
  const nowMonth = now.getMonth(); // 当前月
  const nowYear = now.getFullYear(); // 当前年
  return new Date(nowYear, nowMonth, nowDay, nowHour).getTime();
}
