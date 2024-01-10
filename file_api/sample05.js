function previewFile() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener(
    'load',
    () => {
      let buffer = reader.result;
      console.log(buffer);
    },
    false
  );
  
  if (file) {
    reader.readAsArrayBuffer(file.slice(1000, 3000, file.type))
  }
}
