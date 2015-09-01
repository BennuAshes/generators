(function() {
    angular.module("app")
        .directive("baGenerators",Directive);
        
        Directive.$inject = [];
        
        function Directive(element,link) {
            var directive = {
                controller:Controller,
                controllerAs:"vm",
                templateUrl:"components/generators.html",
                scope: {
                    generators:"="
                },
                bindToController:true
            }
            
            return directive;
        
        }
        
        Controller.$inject = [];
        
        function Controller() {
            var vm = this;
            console.log("yep");
        }
})();