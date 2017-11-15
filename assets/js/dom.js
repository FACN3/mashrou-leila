(function() {
  console.log('hello')

  var guardian_key = 'api-key=5ece3fcc-ecb6-44cf-a6b5-ba723185825e';
  var guardian_api = 'https://content.guardianapis.com/search?q=';
  var guardian_fields = '&show-fields=thumbnail,headline,shortUrl&';

  //
  var twitter_con = document.getElementById("twitter_con");
  var wiki_con = document.getElementById("wiki_con");
  var guardian_con = document.getElementById("guardian_con");

  var fetch = function(method, url, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
         render_guardian(callback(JSON.parse(req.response)));
      }
    };
    req.open(method, url, true);
    req.send();
  };


  document.getElementById('todo_form').addEventListener('submit', function(event) {
    event.preventDefault();

    var search_request = document.getElementById('search').value;
    var twitter_url = "https://welvon-1211.appspot.com/hello?query=" + search_request;
    var guardian_url = guardian_api + search_request + guardian_fields + guardian_key;


    //fetch('GET',twitter_url,twitter_filter);
    fetch('GET', guardian_url, filter_guardian);
  });

  function render_guardian(array) {
    console.log(array);
    console.log(guardian_con);
    array.forEach(function(obj) {
      console.log(Object.keys(obj));
      console.log(Object.values(obj));
      var link = document.createElement('a');
      console.log('link', link);
      link.href = obj['shortUrl'];
      var image = document.createElement('img');
      image.src = obj['thumbnail'];
      var title = document.createElement('span');
      title.textContent=obj.headline;
      link.appendChild(image);

      guardian_con.appendChild(title);
      guardian_con.appendChild(link);
      console.log(guardian_con);
    });
  }

  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
    return t;
  }(document, "script", "twitter-wjs"));


})();
