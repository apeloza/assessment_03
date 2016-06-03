myApp.controller('PowerController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    console.log("Power Controller running!");
    $scope.heroes = [];
    $scope.powerFilter = "all";
    $scope.filteredHeroes = [];
    $scope.dataFactory = DataFactory;
    //Functions are called to fetch data from databases
    if($scope.dataFactory.factoryReturnPowers() === undefined) {
      $scope.dataFactory.factoryGetPowers().then(function() {
        $scope.powers = $scope.dataFactory.factoryReturnPowers();
      });
    } else {
      $scope.powers = $scope.dataFactory.factoryReturnPowers();
    }
    if($scope.dataFactory.factoryReturnHeroes() === undefined) {
          $scope.dataFactory.factoryGetHeroes().then(function() {
            $scope.heroes = $scope.dataFactory.factoryReturnHeroes();
            $scope.filteredHeroes = $scope.heroes;
          });
        } else {
          $scope.heroes = $scope.dataFactory.factoryReturnHeroes();
          $scope.filteredHeroes = $scope.heroes;
        }



    $scope.deleteHero = function(id) {
      $http.delete('/heroes/' + id)
        .then(function (response) {
          console.log('DELETE /heroes ', id);
          $scope.heroes = $scope.dataFactory.factoryReturnHeroes();
          $scope.sortHeroes();
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
