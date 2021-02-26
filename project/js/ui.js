document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
});

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}


//-----------------------drawing pad below-----------------------------

function pad(){
  var canvas = document.getElementById('paint');
  var ctx = canvas.getContext('2d');
    
  var sketch = document.getElementById('sketch');
  var sketch_style = getComputedStyle(sketch);
  canvas.width = 250;
  canvas.height = 250;
  var mouse = {x: 0, y: 0};

  /* Mouse Capturing Work */
  canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  }, false);

  /* Drawing on Paint App */
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;

  /*document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });*/

  canvas.addEventListener('mousedown', function(e) {
      e.preventDefault();
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
  
      canvas.addEventListener('mousemove', onPaint, false);
  }, false);
  
  canvas.addEventListener('mouseup', function() {
      canvas.removeEventListener('mousemove', onPaint, false);
  }, false);
  
  var onPaint = function() {
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
  };

  function erase() {
    ctx.clearRect(0, 0, 250, 250);
  }
}
/*-----------------------table audio-----------------------------*/
function play_audio(){
  document.getElementById(`${event.target.className}`).play();
}
