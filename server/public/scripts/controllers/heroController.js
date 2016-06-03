myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {
    console.log("Hero Controller running!");
    $scope.powers = [];
    $scope.newHero = {};
    getPowers();

    function getPowers() {
        $http.get('/powers')
            .then(function(response) {
                $scope.powers = response.data;
                console.log('GET /powers ', response.data);
            });
    }

    function getHeroes() {
        $http.get('/heroes')
            .then(function(response) {
                console.log('GET /heroes', response.data);

            });
    }
    $scope.submitHero = function() {
        $http.post('/heroes', $scope.newHero)
            .then(function() {
                console.log('POST /heroes');
                getHeroes();
            });
    };
}]);
