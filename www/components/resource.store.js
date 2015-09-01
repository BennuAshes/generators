// Holds 
(function() {
    angular.module("app")
        .factory("ResourceStore",Factory);
        
        Factory.$inject = ["$cacheFactory","ResourceAPI"];
        
        function Factory($cacheFactory,ResourceAPI) {
            
            
            
            var factory = {
                
                
                get: function() {
                    var cache = $cacheFactory.get("ResourceStore");
                    if(typeof cache !== "undefined") {
                        return resources;
                    }
                    return ResourceAPI.get().then(function(response) {
                        var resources = response;
                        return 
                    });
                }
            };
            
            
            return factory;
        }
})();