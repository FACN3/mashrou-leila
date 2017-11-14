(function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('hello amir');
        var guardian_obj = JSON.parse(xhr.response);
        console.log(guardian_obj);
        var link = guardian_obj.response.results[1].webUrl ;
        console.log(link)
      }}

      var guardian_key = '&api-key=5ece3fcc-ecb6-44cf-a6b5-ba723185825e'


      document.getElementById('todo_form').addEventListener('submit', function(event) {
          event.preventDefault();
          var search_request = document.getElementById('search').value;
          console.log('you clicked the button');
          var url = 'https://content.guardianapis.com/search?q=' + search_request + guardian_key;
          console.log(url);
          xhr.open('GET', url, true);
           xhr.send();
      });



  }

)();
