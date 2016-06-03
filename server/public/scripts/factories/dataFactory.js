myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  //PRIVATE
  var heroes;
  var powers;

  function getHeroes() {
    var promise = $http.get('/heroes').then(function(response) {
      console.log('Async data returned: ', response.data);
      heroes = response.data;
    });
    return promise;
  }
  function getPowers() {
    var promise = $http.get('/powers').then(function(response) {
      console.log('Async data returned: ', response.data);
      powers = response.data;
    });
    return promise;
  }




  //PUBLIC
  var publicApi = {
    factoryGetHeroes: function() {
      return getHeroes();
    },
    factoryGetPowers: function() {
      return getPowers();
    },
    factoryReturnHeroes: function() {
      //return our array
      return heroes;
    },
    factoryReturnPowers: function(favID) {
      return powers;
    }
  };
  return publicApi;
}]);
