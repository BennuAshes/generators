
(function() {
    angular.module("app")
    .factory("ResourceAPI",Factory);
    
    Factory.$inject = ["$cacheFactory"];
        
    function Factory($cacheFactory) {
        var nextId = 0;
        
        var FAKE_DATA = [];
        
        var factory = {
            get: function() {
                
                
            },
            createResource:createResource
           
        };
       function hasCosts(costs) {
            for(var i = 0; i < costs.length; i++) {
                var cost = costs[i];      
                // bail if one of them doesn't match
                if(!hasCost(cost)) {                    
                    return false;
                }
            }
            return true;
        }
        function hasCost(cost) {
            for(var key in vm.resources) {
                var resource = vm.resources[key];
                
                if(cost.resourceType == resource.resourceType) {
                    if(resource.amount >= cost.amount) {
                        return true;
                    }
                }
            }
            return false;
        } 
       
        return factory;
        
        
        function createResource(name) {
            return {
                id:nextId++,
                resourceType: name,
                amount:1
            };
        }
        
        function increment(selectedResourceType) {
            console.log("selectedRes:",selectedResourceType);
            // TODO: replace with lodash call
            for(var key in vm.resources) {
                var resource = vm.resources[key];
                if(resource.resourceType == selectedResourceType) {
                    resource.amount+=0.1;
                }
            }
            
        }
    }
    
})();