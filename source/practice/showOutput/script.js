const messageDiv = document.getElementById("messageDiv");

function showMessage() {
  alert("Xin chào!");
  messageDiv.innerHTML = 'Thẻ div: Xin chào!';
  console.log('Xin chào!');
  setTimeout(() => {
    document.write('Document: Xin chào!');
  }, 1500)
}