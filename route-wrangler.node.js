function wrangle(app,routes,onRoute) {
  var verbs = ['get','post','options','head','put','delete','trace','connect'];
  verbs.forEach(function(aVerb) {
    if (routes[aVerb]) {
      routes[aVerb].forEach(function(aRoute){
        app[aVerb].apply(app,aRoute);
        if (onRoute) {
          onRoute(aVerb,aRoute)
        }
      });
    }
  });
}

module.exports = wrangle;