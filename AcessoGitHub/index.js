var data = document.getElementById('user');

function app(){
   var user = data.value;
   data.value=''; 
    axios.get('https://api.github.com/users/diego3g')//+ dado.value)
    .then(function(response){
      function renderHeader(){
        var table = document.getElementById('header');
        table.innerHTML = '';
        var tableRow = document.createElement('tr');
        tableRow.innerHTML = '';
        var tableHeaderName = document.createElement('th'); 
        tableHeaderName.innerHTML = '';
        var name = document.createElement('h5');
        var textName = document.createTextNode('Name: ' + response.data.name);
        name.appendChild(textName);
 
        tableHeaderName.appendChild(name);
 
        var tableHeaderLogin = document.createElement('th');
        tableHeaderLogin.innerHTML = '';
 
        var login = document.createElement('h5');
        var textLogin = document.createTextNode('Login: ' + response.data.login);
        login.appendChild(textLogin);
 
        tableHeaderLogin.appendChild(login);
        
        tableRow.appendChild(tableHeaderName);
        tableRow.appendChild(tableHeaderLogin);
        table.appendChild(tableRow);
      };
      
      renderHeader();
  
    })
    .catch(function(error){
      alert(error);
    });
    axios.get('https://api.github.com/users/diego3g/repos')
    .then(function(response){
      var repositorys =  response.data;
      console.log(repositorys);
      console.log(user.value);
      
    function renderRepositoryName(){
      var table = document.getElementById('repository');
      table.innerHTML = '';
        for(var i = 0; i< repositorys.length; i++){
          var tableRow = document.createElement('tr');
          tableRow.innerHTML = '';
          var indexRepository = document.createElement('td');
          var indextext = document.createTextNode(i + 1);
          indexRepository.appendChild(indextext);

          var nameRepository = document.createElement('td');
          var nametext = document.createTextNode(repositorys[i].name);
          nameRepository.appendChild(nametext);

          var urlRepository = document.createElement('td');
          var link = document.createElement('a');
          link.setAttribute('href',repositorys[i].html_url);
          link.setAttribute('target','_blank');
          var text = document.createTextNode('link');
          link.appendChild(text);
          urlRepository.appendChild(link);
            
          tableRow.appendChild(indexRepository);
          tableRow.appendChild(nameRepository);
          tableRow.appendChild(urlRepository);
          table.appendChild(tableRow);
        } 
     
    }
    renderRepositoryName();
    })
    .catch(function(error){
      alert(error);
    });
}

/*
console.log(user);

 /* 
  --Forma de fazer uma requisição HTTP usando AJAX e Promice--
  var minhaPromise = function (){
    return new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open('get', 'https://api.github.com/users/diego3g');
      xhr.send(null);
  
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          }else {
            reject('Erro na requisição');
          }
        }
      }
    });
  }
  */