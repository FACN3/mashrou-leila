(function() {

var  twitter_con=document.getElementById("twitter_con");
var  wiki_con=document.getElementById("wiki_con");

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




  var fetch = function(method, url, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        callback(JSON.parse(req.response));
      }
    };
    req.open(method, url);
    req.send();
  };


      var guardian_key = '&api-key=5ece3fcc-ecb6-44cf-a6b5-ba723185825e';


      document.getElementById('todo_form').addEventListener('submit', function(event) {
          event.preventDefault();

          var search_request = document.getElementById('search').value.replace("","%20");
          var twitter_url = "https://welvon-1211.appspot.com/hello?query="+search_request;
          var guardian_url = 'https://content.guardianapis.com/search?q=' + search_request + guardian_key;

         fetch('GET',twitter_url,parseTwitter);
         fetch('GET',guardian_url,parseGuardian);



      });


      function parseGuardian(data){

        var link = data.response.results[1].webUrl;
        console.log(link);
         return 0;
      }


      function parseTwitter(data){
        var  twitter_con=document.getElementById("twitter_con");

        arr_result=data.href;

var ids=[];

for(var i=0;i<arr_result.length;i+=1){

 ids.push("<div>"+(arr_result[i].replace(/\\/g,''))+"</div>");
}

s="";


for(var i=0;i<10;i++){

      s=s.concat(ids[i]);

}

twitter_con.innerHTML=s;


twttr.widgets.load();



    return 0;
  }
}
)();
