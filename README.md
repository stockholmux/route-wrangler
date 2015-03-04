# route-wrangler

Manage and declare your routes with arrays instead of countless function calls.

## Example
```
var routes = {
  get : [
    [
      '/',      //your path
      homePage  //callback(s)
    ],
    [
      '/profile',     
      getProfileData,     //any number of route-specific middlewares
      anotherMiddleware,  //another middleware 
      showProfileData  
    ]
  ],
  post : [    //supported verbs: ['get','post','options','head','put','delete','trace','connect']
    [
      '/save',
      saveData
    ]
  ]
];


// app: your Express app variable
// routes: your routes in array format
// onRoutea(aVerb,aRoute): (optional) a callback executed after each route has been applied - useful for logging the route 
routeWrangler(app,routes,function(aVerb,aRoute) {
  console.log(aVerb,aRoute); //ex: get /profile
});
```