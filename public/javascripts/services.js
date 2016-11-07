app.service('postsService', function($http) {
  return {
    getPosts: function() {
      return $http.get('/api/allposts').then(function(response) {
        return response.data
      })
    },
    newPost: function(post) {
      return $http.post('/api/newpost', post).then(function(response) {
        return response.data
      })
    }
  }
})

app.service('authService', function($http, $location) {
  return {
    signup: function(userObj) {
      return $http.post('/api/signup', userObj).then(function(response) {
        $location.path('/')
      })
    },
    login: function(userObj) {
      return $http.post('/api/login', userObj).then(function(response){
        $location.path('/')
      })
    }
  }
})

app.service('cookieService', function($cookies, $location) {
  return {
    decodeCookie: function(cookie){
      let base64decoded = atob(cookie) //takes a cookie and decodes it into a string
      let sliceStart = (base64decoded.indexOf('"username":"') + 12) //looking for the username. add 12 because its 12 characters long
      let sliceEnd = (base64decoded.indexOf('}}')-1) //end of the string
      let username = base64decoded.slice(sliceStart, sliceEnd) //username is stuff inbetween the slicestart and end
      return username
    }
  }
})

app.service('userService', function($http){
  return {
    getUser: function(){
      return $http.get('/api/userinfo').then(function(results){
        return results.data
      })
    }
  }
})
