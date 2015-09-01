
(function() {
    angular.module("app")
    .factory("GeneratorAPI",Factory);
    
    Factory.$inject = ["$cacheFactory"];
        
    function Factory($cacheFactory) {
        var nextId = 0;
        var factory = {
            get: get,
            create:createGenerator
           
        };
        
        function get() {
            
        }
        
        function createGenerator(resourceType) {
            // TODO: random costs based on resources available          
            
            var g = {
                id:nextId++,
                costs:[createCost("gold",parseInt(1*vm.baseGeneratorCost)),createCost("lumber",parseInt(1*vm.baseGeneratorCost))],
                resourceType: resourceType,
                amount:0.1, // how much is generated per tick. TODO: better name
                storage:0
            };
            /*g.prototype.use: function() {
                
            };*/
            
            // another approach would be to
            // perform all the actual changes and check to make sure
            // everything has okay values, and if they don't, roll it back
            if(!hasCosts(g.costs)) {
                alert("not enough stuff");
                return false;
            }
            
            for(var i = 0; i < g.costs.length; i++) {
                var cost = g.costs[i];      
                  
                for(var key in vm.resources) {
                    var resource = vm.resources[key];
                    
                    if(cost.resourceType == resource.resourceType) {
                        resource.amount -= cost.amount;
                    }
                }
            }
            
            vm.baseGeneratorCost *= 1.3;
            
            return g;
        }
       
        return factory;
    }
    
})();