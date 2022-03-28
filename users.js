document.addEventListener("DOMContentLoaded", function(event) { 
  fetchData();
});

function fetchData() {
  // solution 1:
  // $.ajax({
  //   url: "https://reqres.in/api/users",
  //   type: 'GET',
  //   success: function(response) {
  //     renderUserList(response.data);
  //   },
  //   error: function (response) {
  //     console.log(response);
  //   }
  // });
  // solution 2:
  // let xhr = new XMLHttpRequest();
  // xhr.open("GET", "https://reqres.in/api/users", true);
  // xhr.onload = function(){
  //   console.log(xhr.responseText);
  //   response = JSON.parse(xhr.responseText);
  //   renderUserList(response.data);
  // };
  // xhr.send();
  // solution 3:
  const url = "https://reqres.in/api/users";
  fetch(url)
  .then(
    response => response.text()
  ).then(text => {
    response = JSON.parse(text);
    renderUserList(response.data);
  });
}

function renderUserList(data) {
  let bodyTable = document.getElementById("bodyTable");
  let html = '';
  if (data) {
    for (let i = 0; i < data.length; i++) {
      html += `<tr>
                <td>${data[i].id + 1}</td>
                <td><img src="${data[i].avatar}" alt="avatar"></td>
                <td>${data[i].first_name}</td>
                <td>${data[i].last_name}</td>
                <td>${data[i].email}</td>
              </tr>`;
    }
  }
  bodyTable.innerHTML = html;
}

function newUser(event) {
  // $('form').serializeArray();
  // let dataForm = $('#myForm').serializeArray();
  // console.log($('#myForm').serializeArray());
  let dataRequest = {};
  dataForm.map(item => {
    dataRequest[item.name] = item.value;
  });
  console.log(dataRequest);


  $.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    body: dataRequest,
    success: function(response) {
      console.log(response);
      // renderUserList(response.data);
    },
    error: function (response) {
      console.log(response);
    }
  });
}



