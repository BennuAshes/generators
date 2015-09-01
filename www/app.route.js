(function() {
    angular.module("app")
    .config(function($stateProvider) {
        $stateProvider.state("app",{
            url:"",
            templateUrl:'app.html',
            controller: "AppController",
            controllerAs: "vm"
        
        });
    })
    
})();