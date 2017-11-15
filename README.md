# API Week Project Team

## Members:

:see_no_evil: **_[Amir](https://github.com/Amirk390)_** :see_no_evil:

:person_with_blond_hair: **_[Pavel](https://github.com/prodionov)_** :person_with_blond_hair:

:rage3: **_[Ghassan](https://github.com/ghassanmas)_** :rage3:

:sun_with_face: **_[Hoslack](https://github.com/hoslack)_** :sun_with_face:

### What is the project:

build a simple web app that make a query to a two  API or more  and use the results to update/create  the DOM according to the responses of the API.

## We Have used the following **API:** in our project

[The Guardian](https://www.theguardian.com/international) : Pretty straight, we created an api key, sent a request then we filtered the results such as we have an article headline, articl url and image url.


[Twitter](https://twitter.com/): This one is really frustrating to work with, we didn't use it directly we have used other API that invokes the twitter-api which is at  http://welvon-1211.appspot.com which returns the tweets html contetns.

[Wikipedia](en.Wikipedia.org) :

## Project Files:

1. [logic.js](https://github.com/FACN3/mashrou-leila/blob/master/assets/js/logic.js): This has the filtering functions which will take the response of the http request as a full json object then it will returns the a filtered result so that the dom.js will use it for rendering.

1. [dom.js](https://github.com/FACN3/mashrou-leila/blob/master/assets/js/dom.js): this file has the script which will create and and handles the submit event, once the submit event is fired, [dom.js](https://github.com/FACN3/mashrou-leila/blob/master/assets/js/dom.js) will invoke the fetch function 3 times for twitter, Wikipedia and the Guardian API. the dom.js also takes the filtering function as a parameters so it will invoke them once the request is done successfully then and finally the rendering function will be invoked while passing what filtering functions have returned.   
