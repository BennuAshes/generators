// BIG TODO: 
/*    
    - 
    - crafting: simple+composite items
    base resource -> simple item -> composite item

*/ 

(function() {
    angular.module("app")
    .controller("AppController",Controller);
    
    Controller.$inject = ["$interval"];
        
    
        
        
    function Controller($interval) {
        var vm = this;
        vm.baseGeneratorCost = 1;
        // TOOD: get 
        
        
        vm.increment = function(resourceType) {
            ResourceStore.increment(resourceType);
        };
        vm.newResource = function(resourceType) {
            // console.log("new resource",resourceType);
            vm.resources[resourceType] = createResource(resourceType);
        };
        vm.newGenerator = function(resourceType) {
            // this whole thing is awful
            if(typeof resourceType != "undefined") {
                var newGen = createGenerator(resourceType);
                if(newGen !== false) {
                    vm.generators.push(newGen);        
                }
            }            
        };
        vm.collect = function(resourceType) {
            for(var g = 0; g < vm.generators.length; g++) {
                var generator = vm.generators[g];
                if(generator.resourceType == resourceType) {
                    var total = generator.storage;
                    generator.storage -= total;
                    vm.resources[resourceType].amount += total;
                }                
            }
        };
        /*function resourceAsArray() {
            var resources = [];
            for(var key in vm.resources) {
                resources.push(vm.resources[key]);
            }
            return resources;
        }*/
        function activate() {
            vm.generators = [];
            vm.resources = {};
            
            vm.resources["gold"] = createResource("gold");
            vm.resources["lumber"] = createResource("lumber");
            // vm.resources.push(resource(""));    
            
            vm.selectedResourceType = "gold";
            
            $interval(function() {
                // this is the workhorse, definitely needs to be in a service
                for(var g = 0; g < vm.generators.length; g++) {
                    var generator = vm.generators[g];
                    generator.storage+=generator.amount;
                }
            },1000);
        }
        
        activate();     
        
    }
    
   

    
})();