const yes = document.getElementById('yes');
const no = document.getElementById('no');

const height = innerHeight - 80;
const width = innerWidth  - 80;
let widthYes = 80;
let heightYes = 40;
let fSize = 20;

function hover() {
  let left = (Math.random(0, 1) * width) - width / 2;
  let top = (Math.random(0, 1) * height) - height / 2;
  widthYes *= 1.2
  heightYes *= 1.2
  fSize *= 1.2
  yes.style.cssText = `position: absolute; left: -50%; top: -50%; width: ${widthYes}px; height: ${heightYes}px; font-size: ${fSize}px; font-weight: 600; background: #f33; border-radius: 8px; transform: translate(-50%, -50%); z-index: 0;`
  no.style.left = left + 'px';
  no.style.top = top + 'px';
}