const fileInput = document.querySelector('input[type=file]');
const output = document.querySelector('.output');

fileInput.addEventListener('change', () => {
  const fileList = fileInput.files;
  console.log(fileList);
  var res = '';
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
    console.log(file);
    console.log('name:' + file.name);
    console.log('type:' + file.type);
    console.log('size:' + file.size);
    console.log('lastModifiedDate:' + file.lastModifiedDate);
    res += `${file.name}を選択しました<br />`;
  }
  output.innerHTML = res;
});
