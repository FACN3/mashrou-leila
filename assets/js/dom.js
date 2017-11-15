(function() {

  var guardian_key = 'api-key=5ece3fcc-ecb6-44cf-a6b5-ba723185825e';
  var guardian_api = 'https://content.guardianapis.com/search?q=';
  var guardian_fields = '&show-fields=thumbnail,headline,shortUrl&';

  //
  var twitter_con = document.getElementById("twitter_con");
  var wiki_con = document.getElementById("wikipedia_con");
  var guardian_con = document.getElementById("guardian_con");

  var fetch = function(method, url, callback, render_fucntion) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        render_fucntion(callback(JSON.parse(req.response)));
      }
    };
    req.open(method, url, true);
    req.send();
  };


  document.getElementById('todo_form').addEventListener('submit', function(event) {

    event.preventDefault();

    twitter_con.innerHTML="";
    wiki_con.innerHTML="";
    guardian_con.innerHTML="";
    var search_request = document.getElementById('search').value;
    var twitter_url = "https://welvon-1211.appspot.com/hello?query=" + search_request;
    var guardian_url = guardian_api + search_request + guardian_fields + guardian_key;
    var wikipedia_url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + search_request +
      "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=2&exlimit=max&origin=*&pithumbsize=500";

    //fetch('GET',twitter_url,filter_twitter,render_twitter);
    fetch('GET', guardian_url, filter_guardian, render_guardian);
    fetch('GET', wikipedia_url, filter_wikipedia, render_wikipedia);

  });

  function render_guardian(array) {
    //  console.log(array);
    //console.log(guardian_con);
    array.forEach(function(obj) {
      //  console.log(Object.keys(obj));
      //console.log(Object.values(obj));
      var link = document.createElement('a');
      //  console.log('link', link);
      link.href = obj['shortUrl'];
      var image = document.createElement('img');
      image.src = obj['thumbnail'];
      var title = document.createElement('span');
      title.textContent = obj.headline;
      link.appendChild(image);

      guardian_con.appendChild(title);
      guardian_con.appendChild(link);
      //console.log(guardian_con);
    });
  }

  function render_twitter(html_text) {
    twitter_con.innerHTML = s;
    twttr.widgets.load();


  };

  function render_wikipedia(data) {

    data.forEach(function(obj) {

      var wikicontent = document.createElement('span');
      wikicontent.textContent = obj.content;
      var wikititle = document.createElement('h2');
      wikititle.textContent = obj.title;



      //var wikiphoto = document.createElement('img');

        if (obj.image) {

            image=document.createElement('img');
            image.src=obj.image;
            wikititle.appendChild(image);
        }

       wikititle.appendChild(wikicontent);

      wiki_con.appendChild(wikititle);
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
