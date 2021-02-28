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
// =============
// == Globals ==
// =============
const canvas = document.getElementById('drawing-area');
const canvasContext = canvas.getContext('2d');
const clearButton = document.getElementById('clear-button');
const state = {
  mousedown: false
};

// ===================
// == Configuration ==
// ===================
const lineWidth = 10;
const halfLineWidth = lineWidth / 2;
const fillStyle = '#333';
const strokeStyle = '#333';
const shadowColor = '#333';

// =====================
// == Event Listeners ==
// =====================
canvas.addEventListener('mousedown', handleWritingStart);
canvas.addEventListener('mousemove', handleWritingInProgress);
canvas.addEventListener('mouseup', handleDrawingEnd);
canvas.addEventListener('mouseout', handleDrawingEnd);

canvas.addEventListener('touchstart', handleWritingStart);
canvas.addEventListener('touchmove', handleWritingInProgress);
canvas.addEventListener('touchend', handleDrawingEnd);

clearButton.addEventListener('click', handleClearButtonClick);

// ====================
// == Event Handlers ==
// ====================
function handleWritingStart(event) {
  event.preventDefault();

  const mousePos = getMosuePositionOnCanvas(event);
  
  canvasContext.beginPath();

  canvasContext.moveTo(mousePos.x, mousePos.y);

  canvasContext.lineWidth = lineWidth;
  canvasContext.strokeStyle = strokeStyle;
  canvasContext.shadowColor = null;

  canvasContext.fill();
  
  state.mousedown = true;
}

function handleWritingInProgress(event) {
  event.preventDefault();
  
  if (state.mousedown) {
    const mousePos = getMosuePositionOnCanvas(event);

    canvasContext.lineTo(mousePos.x, mousePos.y);
    canvasContext.stroke();
  }
}

function handleDrawingEnd(event) {
  event.preventDefault();
  
  if (state.mousedown) {
    canvasContext.shadowColor = shadowColor;

    canvasContext.stroke();
  }
  
  state.mousedown = false;
}

function handleClearButtonClick(event) {
  event.preventDefault();
  
  clearCanvas();
}

// ======================
// == Helper Functions ==
// ======================
function getMosuePositionOnCanvas(event) {
  const clientX = event.clientX || event.touches[0].clientX;
  const clientY = event.clientY || event.touches[0].clientY;
  const { offsetLeft, offsetTop } = event.target;
  const canvasX = clientX - offsetLeft;
  const canvasY = clientY - offsetTop;

  return { x: canvasX, y: canvasY };
}

function clearCanvas() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

const padContainer = document.querySelector("#containerD");
const handwriteTable = document.querySelector("#handwriteTable");

function openPad(){
  padContainer.classList.remove("hidItem");
  handwriteTable.classList.add("hidItem");
}

function closePad(){
  padContainer.classList.add("hidItem");
  handwriteTable.classList.remove("hidItem");
}
/*-----------------------table audio-----------------------------*/
function play_audio(){
  document.getElementById(`${event.target.className}`).play();
}


