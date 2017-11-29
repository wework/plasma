$(document).ready(function() {
  var randomness = 30;
  var threshold = 200;
  var anim_duration = 3000; //1000 = 1s

  function rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }

  const animate = function(){
    var randomNumRed1 = 255;
    var randomNumGreen1 = Math.round(Math.random()*30 + 190);
    var randomNumBlue1 = Math.round(Math.random()*30 + 90);
    var randomNumRed2 = 255;
    var randomNumGreen2 = Math.round(Math.random()*30 + 90);
    var randomNumBlue2 = Math.round(Math.random()*30 + 90);
    var randomNumRed3 = 100;
    var randomNumGreen3 = Math.round(Math.random()*30 + 30);
    var randomNumBlue3 = Math.round(Math.random()*150 + 155);

    $('.plasma1').velocity({
        borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
      backgroundColor: rgb2hex('rgba(' + randomNumRed1 + ',' + randomNumGreen1 + ', ' + randomNumBlue1 + ')') 
      },anim_duration,animate);
    $('.plasma2').velocity({
        borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
      backgroundColor: rgb2hex('rgba(' + randomNumRed2 + ',' + randomNumGreen2 + ', ' + randomNumBlue2 + ')') 
      },anim_duration,animate);
    $('.plasma3').velocity({
        borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
      backgroundColor: rgb2hex('rgba(' + randomNumRed3 + ',' + randomNumGreen3 + ', ' + randomNumBlue3 + ')') 
      },anim_duration,animate);
  }

  requestAnimationFrame(animate());
});