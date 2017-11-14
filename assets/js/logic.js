(function() {
    var xhr = new XMLHttpRequest();
    var guardian_key = '&api-key=5ece3fcc-ecb6-44cf-a6b5-ba723185825e'
    var url = 'https://content.guardianapis.com/search?q=' + search_request + guardian_key;
    var search_request = ' ';



    console.log(document.getElementById('button'));
    document.getElementById('button').addEventListener('button', function(event) {
      var search_request = document.getElementById('search').value;


      xhr.onreadystate = function() {
        if (readyState == 4 && xhr.status == 200) {
          var guardian_obj = JSON.parase(xhr.responseText);
          //var image =
          var link = gif_obj.response.results[1].webUrl + guardian_key;
          console.log(link)
        }
      }
      xhr.open('GET', url, true);
      xhr.send();
    });


    console.log(xhr);

  }

)();
