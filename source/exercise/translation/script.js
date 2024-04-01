const englishWords = ["apple", "banana", "cat", "dog", "elephant"];
const vietnameseWords = ["táo", "chuối", "mèo", "chó", "voi"];

function translate() {
  const englishWord = document.getElementById("txtEnglish").value;
  const index = englishWords.indexOf(englishWord);
  if (index === -1) {
    document.getElementById("txtResult").innerHTML = "Không tìm thấy từ \"" + englishWord + "\"";
  } else {
    const vietnameseWord = vietnameseWords[index];
    document.getElementById("txtResult").innerHTML = englishWord + " nghĩa là \"" + vietnameseWord + "\"";
  }
}