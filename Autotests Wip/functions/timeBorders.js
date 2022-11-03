module.exports = {
  later: function timeBordersLater() {
    const moment = require("moment");
    let time = moment().format("HH:MM");
    let hours = time.slice(0, 2);
    hours = parseInt(hours, 10);
    let minutes = time.slice(2);
    let start, finish;
    if (hours + 3 >= 24) {
      start = hours - 21;
      finish = hours - 18;
      start = "1.0" + start + minutes;
      finish = "1.0" + finish + minutes;
    } else if (hours + 6 <= 24) {
      start = hours + 3;
      finish = hours + 6;
      start = start + minutes;
      finish = finish + minutes;
    } else {
      start = hours + 3;
      finish = hours - 18;
      start = start + minutes;
      finish = "1.0" + finish + minutes;
    }
    return { start, finish };
  },
  earlier: function timeBordersLater() {
    const moment = require("moment");
    let time = moment().format("HH:MM");
    let hours = time.slice(0, 2);
    hours = parseInt(hours, 10);
    let minutes = time.slice(2);
    let start, finish;
    if (hours - 3 <= 0) {
      //null наверное  3  00 - невозможно
      start = hours - 3;
      finish = hours - 2;
      start = "1.0" + start + minutes;
      finish = "1.0" + finish + minutes;
    } else if (hours + 6 <= 24) {
      start = hours + 3;
      finish = hours + 6;
      start = start + minutes;
      finish = finish + minutes;
    } else {
      start = hours + 3;
      finish = hours - 18;
      start = start + minutes;
      finish = "1.0" + finish + minutes;
    }
    return { start, finish };
  },
};
