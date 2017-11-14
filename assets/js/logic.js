(function() {
  var xhr = new XMLHttpRequest();
  var guardian_key = '&api-key=5ece3fcc-ecb6-44cf-a6b5-ba723185825e'
  var search_request = 'nazareth';
  var url = 'https://content.guardianapis.com/search?q=' + search_request + guardian_key;

  xhr.onreadystate = function () {
    if (readyState == 4 && xhr.status == 200) {
      var guardian_obj = JSON.parase(xhr.responseText);
      //var image = 
      //var link = gif_obj.response.results[1]+guardian_key;
    }
  }
console.log(xhr);

}

)();
