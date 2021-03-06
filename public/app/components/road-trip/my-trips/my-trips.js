app.controller('mytripsController', function($rootScope, $scope, $http, dataService, dataFactory, NgMap, ngDialog, $animate, $state, localStorageService) {

    $scope.alltrips = [];

    dataService.getTrips().then(function (response) {
        $scope.mytrips = response.data;

        for (var i = 0; i < $scope.mytrips.length; i++) {
            var eachTrip = {
                user_id : $scope.mytrips[i].user_id,
                trip_id : $scope.mytrips[i].trip_id,
                trip_name : $scope.mytrips[i].trip_name,
                trip_start : $scope.mytrips[i].trip_start,
                trip_end : $scope.mytrips[i].trip_end,
                trip_details : JSON.parse($scope.mytrips[i].trip_details),
                trip_pitstopcount : (JSON.parse($scope.mytrips[i].trip_details)).length
            }
            $scope.alltrips.push(eachTrip);
        }
    });

});
