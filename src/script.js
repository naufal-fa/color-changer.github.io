const ubahWarna = document.getElementById("btn_ubahWarna");
const rgbText = document.getElementById("rgb_text");
const boxColor1 = document.getElementById("boxColor1");
const boxColor2 = document.getElementById("boxColor2");
const boxColor3 = document.getElementById("boxColor3");
const redRange = document.querySelector('input[name="rRange"');
const greenRange = document.querySelector('input[name="gRange"');
const blueRange = document.querySelector('input[name="bRange"');
const redLabel = document.getElementById("redLabel");
const greenLabel = document.getElementById("greenLabel");
const blueLabel = document.getElementById("blueLabel");

ubahWarna.onclick = function () {
  // document.body.classList.toggle('biru-muda');
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  rgbText.innerText = `RGB (${r}, ${g}, ${b})`;
  rgbText.style.color = `rgb(${b}, ${g}, ${r})`;
  boxColor1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  ubahWarna.style.backgroundColor = `rgb(${g}, ${r}, ${b})`;
};

redRange.addEventListener("input", function () {
  const r = redRange.value;
  const g = greenRange.value;
  const b = blueRange.value;

  redLabel.innerText = `R(${r})`;
  boxColor2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

greenRange.addEventListener("input", function () {
  const r = redRange.value;
  const g = greenRange.value;
  const b = blueRange.value;

  greenLabel.innerText = `R(${g})`;
  boxColor2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

blueRange.addEventListener("input", function () {
  const r = redRange.value;
  const g = greenRange.value;
  const b = blueRange.value;

  blueLabel.innerText = `R(${b})`;
  boxColor2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
