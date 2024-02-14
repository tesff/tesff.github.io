const codingBox = document.getElementById('codingBox');
const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', function() {
  const color = colorInput.value.trim();
  if (isValidColor(color)) {
    codingBox.style.backgroundColor = color;
  }
});

function isValidColor(str) {
  const s = new Option().style;
  s.color = str;
  return s.color !== '';
}
