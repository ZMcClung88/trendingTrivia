angular.module('myApp').controller('mainController', function($scope,service) {

  $scope.getQuestions = function() {
      service.getQuestions().then(function(response) {
      $scope.questions = response.data;

        addDifficulty($scope.questions);

        $scope.page = 0;
      })
    }

    $scope.getQuestions();

    



})
