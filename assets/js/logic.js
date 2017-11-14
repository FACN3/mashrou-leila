(function() {
    var xhr = new XMLHttpRequest();
    var guardian_key = '&api-key=5ece3fcc-ecb6-44cf-a6b5-ba723185825e'
    var url = 'https://content.guardianapis.com/search?q=' + search_request + guardian_key;
    var search_request = ' ';



    document.getElementById('button').addEventListener('button', function() {
      var search_request = document.getElementById('search').value;
      console.log('you clicked the button');

      xhr.onreadystate = function() {
        if (readyState == 4 && xhr.status == 200) {
          console.log('hello amir');
          var guardian_obj = JSON.parase(xhr.responseText);
          console.log(guardian_obj);
          var link = gif_obj.response.results[1].webUrl + guardian_key;
          console.log(link)
        }
      }
      xhr.open('GET', url, true);
      xhr.send();
    });


    console.log('xhr',xhr);

  }

)();
