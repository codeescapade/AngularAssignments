(function () {
    'use strict';
    
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope)
    {
        $scope.food = "";
        $scope.message = "";
        $scope.fontColor = "";
        $scope.borderColor = "";

        $scope.checkFood = function ()
        {
            if ($scope.food.length === 0)
            {
                $scope.message = "Please input a food";
                $scope.fontColor = "red";
                $scope.borderColor = "red";
                return;
            }

            var foods = $scope.food.split(",");
            var foodAmount = 0;

            for (var i = 0; i < foods.length ; i++)
            {
                if (foods[i].trim() !== "")
                {
                    foodAmount++;
                }
            }

            $scope.fontColor = "green";
            $scope.borderColor = "green";

            if(foodAmount <= 3)
            {
                $scope.message = "Enjoy";
            } else
            {
                $scope.message = "Too much";
            }
        }
    }

})();