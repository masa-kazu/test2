$(document).ready(function () {
  // スタートボタン
  $("#start").click(function () {
    $(".time").text("0:0:0:0");
    timer = setInterval("countUp()", 100);
    $("#start").prop("disabled", true);
    $("#stop").prop("disabled", false);
    $("#reset").prop("disabled", false);
  });
  // ストップボタン
  $("#stop").click(function () {
    clearInterval(timer);
    $("#start").prop("disabled", false);
    $("#stop").prop("disabled", true);
    $("#reset").prop("disabled", false);
  });
  // リセットボタン
  $("#reset").click(function () {
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    $(".time").text("0:0:0:0");
    clearInterval(timer);
    $("#start").prop("disabled", false);
    $("#stop").prop("disabled", true);
    $("#reset").prop("disabled", true);
  });
});

// タイマー
msec = 0;
sec = 0;
min = 0;
hour = 0;

function countUp() {
  msec += 1;

  if (msec > 9) {
    msec = 0;
    sec += 1;
  }

  if (sec > 59) {
    sec = 0;
    min += 1;
  }

  if (min > 59) {
    min = 0;
    hour += 1;
  }

  // ミリ秒
  msecNumber = msec;

  // 秒
  if (sec < 10) {
    secNumber = sec.toString();
  } else {
    secNumber = sec;
  }

  // 分
  if (min < 10) {
    minNumber = min.toString();
  } else {
    minNumber = min;
  }

  // 時
  if (hour < 10) {
    hourNumber = hour.toString();
  } else {
    hourNumber = hour;
  }

  // 出力
  $(".time").text(
    hourNumber + ":" + minNumber + ":" + secNumber + ":" + msecNumber
  );
}
