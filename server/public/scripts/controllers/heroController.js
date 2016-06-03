myApp.controller('HeroController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    console.log("Hero Controller running!");
    $scope.powers = [];
    $scope.newHero = {};
    $scope.dataFactory = DataFactory;
    if($scope.dataFactory.factoryReturnPowers() === undefined) {
      $scope.dataFactory.factoryGetPowers().then(function() {
        $scope.powers = $scope.dataFactory.factoryReturnPowers();
      });
    } else {
      $scope.powers = $scope.dataFactory.factoryReturnPowers();
    }


    $scope.submitHero = function() {
        $http.post('/heroes', $scope.newHero)
            .then(function() {
                console.log('POST /heroes');

            });
    };
}]);
