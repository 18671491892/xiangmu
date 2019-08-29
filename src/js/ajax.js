function ajax({ type = 'GET', path, dataType = 'json', data, beforeCB, successCB }) {
  const xhr = new XMLHttpRequest();
  let dataStr = '';
  if (data) {
    for (let attr in data) {
      dataStr += `${attr}=${data[attr]}&`
    }
    dataStr = dataStr.substring(0, dataStr.length - 1);
  }

  if (type.toUpperCase() == 'GET') { // GET方式
    xhr.open('GET', `${path}?${dataStr}`, true);
    xhr.send();
  } else {
    xhr.open('POST', path, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(dataStr);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = xhr.responseText;
      var data = dataType == 'json' ? JSON.parse(result) : result;
      successCB && successCB(data);
    } else {
      beforeCB && beforeCB();
    }
  }
}