var myNinjaApp = angular.module('ninja', ['ngRoute']);

//This function will run before application starts
//it fire lots of code before our application runs
myNinjaApp.config(['$routeProvider',  function($routeProvider){
  //$routeProvider is a object which helps us to setup our route
  $routeProvider
  .when('/home',{
    templateUrl: 'views/home.html'
  })
  .when('/directory',{
    templateUrl: 'views/directory.html',
    controller: 'ninjaController'
  }).otherwise({
    redirectTo: '/home'
  });
}]);

//This function will run after the application starts running.
myNinjaApp.run(function(){

});
 myNinjaApp.controller('ninjaController', ['$scope', function($scope){
//  $scope.message = "hey y'all";
  $scope.removeNinja= function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    //document.write(removedNinja);
    $scope.ninjas.splice(removedNinja, 1);
  };
  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });
    $scope.newninja.name = "";
    $scope.newninja.belt = "";
    $scope.newninja.rate = "";
  };

  $scope.ninjas = [
    {
      name: "Abhishek",
      belt: "black",
      rate: 100,
      available: true,
      thumb: "content/img/images.jpeg"
    },
    {
      name: "Deep",
      belt: "red",
      rate: 200,
      available: true,
      thumb: "content/img/images1.jpeg"
    },
    {
      name: "Aarsh",
      belt: "black",
      rate: 300,
      available: true,
      thumb: "content/img/index.png"
    }
  ];

}]);
