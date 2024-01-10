function abortPreviewFile() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();
  console.log(reader.readyState);

  reader.addEventListener(
    'load',
    () => {
      console.log(reader.readyState);
      content.innerHTML = reader.result;
    },
    false
  );
  
  if (file) {
    reader.readAsText(file);
    console.log(reader.readyState);
  }
}
