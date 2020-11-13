
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip)
  .then(() => {
    console.log('Text copied to clipboard');
      /* Alert the copied text */
  alert("Copied the text: " + newClip);
  })
  .catch(err => {
    // This can happen if the user denies clipboard permissions:
    console.error('Could not copy text: ', err);
    alert("Copied the text: " + err);
  });
}

function myFunction2(text) {
  

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text);

  /* Alert the copied text */

  /* Alert the copied text */
  alert("Copied the text by navigator: " + text);
}