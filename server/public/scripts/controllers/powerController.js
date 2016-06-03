myApp.controller('PowerController', ['$scope', '$http', function($scope, $http) {
    console.log("Power Controller running!");
    $scope.heroes = [];
    $scope.powerFilter;
    $scope.filteredHeroes = [];

    //Functions are called to fetch data from databases
    getHeroes();
    getPowers();


    function getPowers() {
        $http.get('/powers')
            .then(function(response) {
                $scope.powers = response.data;
                console.log('GET /powers ', response.data);
                $scope.sortHeroes();
            });
    }
    function getHeroes() {
        $http.get('/heroes')
            .then(function(response) {
                console.log('GET /heroes', response.data);
                $scope.heroes = response.data;
            });
    }
    $scope.deleteHero = function(id) {
      $http.delete('/heroes/' + id)
        .then(function (response) {
          console.log('DELETE /movies ', id);
          getHeroes();

        });
    };

    //Function checks each hero to see if their power name is the same as the one in the select field. If 'all' is selected, all heroes are added to the filtered list.
    $scope.sortHeroes = function () {
      console.log("Sorting ...");
      $scope.filteredHeroes = [];
for (var i =0; i < $scope.heroes.length; i++){
if($scope.heroes[i].power_name == $scope.powerFilter){
  $scope.filteredHeroes.push($scope.heroes[i]);
} else if ($scope.powerFilter == 'all'){
  $scope.filteredHeroes.push($scope.heroes[i]);
}
}
    };
}]);
