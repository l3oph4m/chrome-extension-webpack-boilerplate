import { handleSubmitNewMsg } from './task-socket';

export default function () {}

async function onSubmitBtn(e) {
  let val = document.getElementById('tiktok_id').value;
  val = val.replace(/^\s+|\s+$/gm, '');
  val = val.trim();
  console.log('@ID:', val);
  let url = `https://tiktok.com/${val}`;
  console.log('copy to clipboard: ', url);
  await window.navigator.clipboard.writeText(`${url}`);

  var tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = 'Copied, use Ctrl+V now';
}

function outFunc() {
  var tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = 'Copy to clipboard';
}

export function regEvents() {
  console.log('registering events ...');
  document.getElementById('submit_btn').addEventListener('click', onSubmitBtn);
  document.getElementById('submit_btn').addEventListener('mouseout', outFunc);

  document
    .getElementById('submit-msg-btn')
    .addEventListener('click', handleSubmitNewMsg);
  console.log('events registered');
}
