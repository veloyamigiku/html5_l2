function previewFile() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener(
    'load',
    () => {
      content.innerHTML = reader.result;
    },
    false
  );
  
  if (file) {
    reader.readAsText(file);
  }
}
