const textArea = document.getElementById("textarea");
const countBtn = document.getElementById("countBtn");
const result = document.getElementById("result");

countBtn.addEventListener("click", () => {
  let str = textArea.value;
  let count = 0;
  console.log(str);

  for (const ele of str) {
    if (ele === " ") {
      count++;
    }
  }
  console.log(count + 1);
  let p = document.createElement("p");
  p.classList.add("result");
  let text = `There are ${count + 1} ${count <= 1 ? "word" : "words"} here.`;
  if(str === ''){
    p = '';
  }
  p.innerText = text;
  result.appendChild(p);
});
