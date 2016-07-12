angular
  .module('universal-inbox.PostsFactory', [])
  .factory('PostsFactory', PostsFactory);

  // A different method to add dependency injection.
  PostsFactory.$inject = ['$http'];

  function PostsFactory($http) {
    function myCoolFnc() {
      // function body
    }

    return {
      myCoolFnc
    };
  }
