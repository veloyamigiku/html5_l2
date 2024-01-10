function abortPreviewFile() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener(
    'abort',
    () => {
      console.log(reader.error);
      content.innerHTML = reader.error;
    },
    false
  );
  
  if (file) {
    reader.readAsText(file);
    reader.abort();
  }
}
