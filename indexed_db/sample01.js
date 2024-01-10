let db;

//const DBOpenRequest = window.indexedDB.open('toDoList', 1);
const DBOpenRequest = window.indexedDB.open('toDoList', 2);

DBOpenRequest.onerror = (event) => {
  const dbOpenStateLabel = document.getElementById('db_open_status');
  dbOpenStateLabel.innerText = 'データベースの読み込み中にエラーが発生しました。';
}

DBOpenRequest.onsuccess = (event) => {
  const dbOpenStateLabel = document.getElementById('db_open_status');
  db = DBOpenRequest.result;
  dbOpenStateLabel.innerText = 'データベース名：' + db.name + ', バージョン：' + db.version + ', データベースの初期化が完了しました。';
}

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  const oldVersion = event.oldVersion;

  if (oldVersion < 1) {
    db.createObjectStore('foo');
  }
  if (oldVersion < 2) {
    db.deleteObjectStore('foo');
    db.createObjectStore('bar');
  }

  const transaction = DBOpenRequest.transaction;
  const bar = transaction.objectStore('bar');
  console.log('upgrade.');
}

function deleteDatabase() {
  db.close();
  const DBDeleteRequest = window.indexedDB.deleteDatabase('toDoList');
  DBDeleteRequest.onsuccess = (event) => {
    const dbDeleteStateLabel = document.getElementById('db_delete_status');
    dbDeleteStateLabel.innerText = 'データベースの削除が完了しました。';
    console.log(event)
  }
  DBDeleteRequest.onerror = (event) => {
    const dbDeleteStateLabel = document.getElementById('db_delete_status');
    dbDeleteStateLabel.innerText = 'データベースの削除が失敗しました。'
    console.log(event);
  }
  DBDeleteRequest.onblocked = (event) => {
    console.log(event);
  }
}

function transaction1() {
  const transaction = db.transaction(
    'bar',
    'readwrite');
  const bar = transaction.objectStore('bar');
  console.log(bar);
}
