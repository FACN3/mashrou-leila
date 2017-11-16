console.log('logic run');

function filter_guardian(data) {
  var guardian_array = [];
  data.response['results'].forEach(function(task) {
    guardian_array.push(task.fields);
  })
  return guardian_array;

}

function filter_twitter(data) {
  arr_result = data.href;
  var ids = [];
  for (var i = 0; i < arr_result.length; i += 1) {
    ids.push("<div>" + (arr_result[i].replace(/\\/g, '')) + "</div>");
  }
  s = "";
  for (var i = 0; i < 10; i++) {
    s = s.concat(ids[i]);
  }

  return s;
}

function filter_wikipedia(data) {
  object = data.query.pages;

  var arr = [];

  Object.keys(object).forEach(function(key) {

    var extract = {
      'title': object[key].title,
      'content': object[key].extract,
      'url': "http://en.wikipedia.org/wiki?curid=" + object[key].pageid
    };

    if (object[key].thumbnail) {
      extract.image = object[key].thumbnail.source;
    }
    arr.push(extract);
  });
  return (arr);
}
