$(document).ready(function() {
  var buzzer = $("#buzzer")[0];
  var buzzer2 = $("#buzzer2")[0];
  $("#reset, #timebox, #dance, #march").hide();
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakTime").html());

  $("#start").click(function(event) {
    event.preventDefault();
    var counter = setInterval(timer, 1000);
    count *= 60;
    breakTime *= 60;
    function timer() {
      $("#menu").hide();
      $('#timebox').show();
      $('.breakTime').hide();
      $("#timeType").html("Session Time: ");
      count -= 1;
      if (count === 0) {
        buzzer.play();
        $("#dance").show();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $(".num ").hide();
      }

      if (count % 60 >= 10) {
        $(".num").html(Math.floor(count / 60) + ":" + count % 60);
      } else {
        $(".num").html(Math.floor(count / 60) + ":0" + count % 60);
      }

      function breakTimer() {
        $("#timeType").html("Break Time: ");
        $(".breakTime").show();
        breakTime -= 1;

        if (breakTime === 0) {
          clearInterval(startBreak);
          $("#reset, #march").show();
          $("#timeType, .num, .breakTime, #dance").hide();
          buzzer2.play();
        }

        if (breakTime % 60 >= 10) {
          $(".breakTime").html(
            Math.floor(breakTime / 60) + ":" + breakTime % 60
          );
        } else {
          $(".breakTime").html(
            Math.floor(breakTime / 60) + ":0" + breakTime % 60
          );
        }
      }
    }
  });

  $("#reset").click(function(event) {
    count = 5;
    breakTime = 5;
    $("#num").html(count);
    $("#breakTime").html(breakTime);
    $("#timebox, #march").hide();
    $("#menu").show();
  });

  $("#takeTime").click(function(event) {
    event.preventDefault();
    if (count > 5) {
      count -= 5;
      $(".num, #num").html(count);
    }
  });
  
  $("#addTime").click(function(event) {
    event.preventDefault();
    count += 5;
    $(".num, #num").html(count);
  });
  
  $("#minusBreak").click(function(event) {
    event.preventDefault();
    if (breakTime > 5) {
      breakTime -= 5;
      $(".breakTime, #breakTime").html(breakTime);
    }
  });
  
  $("#addBreak").click(function(event) {
    event.preventDefault();
    breakTime += 5;
    $(".breakTime, #breakTime").html(breakTime);
  });
});