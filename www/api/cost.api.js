(function() {
    angular.module("app")
    .factory("CostAPI",Factory);
    
    Factory.$inject = ["$cacheFactory"];

    class Cost {        
        constructor() {
            this.amount = 0;
            
        }
    }
    
    function Factory($cacheFactory) {
        
        var factory = {
            create: function() {
                var cost = {
                    
                };
                
                
                
            }
           
        };
       
       
        return factory;
        
        
        function createCost(type,amt) {
            return {
                resourceType:type,
                amount: amt
            };
        }
    }
    
})();