# generators
create generators that produce resources - an incremental/idler toy in AngularJS

## Tasks
* resource.store.js isn't actually used
* app.controller is doing /way/ too much
* newResource should contact the store, which should then communicate with the API, which should then return the resource, setting it in Store, which updates the controller via two way binding
* a container has a store that maps other stores needed
* curious about exploring actual .service() (rather than more common factory) as a way to create various objects needed (contact with API)
* a store holds entities like "resources" or "generators"
* collect() should call a method on the container's store is stashed. this could serve as a "action creator" that reaches out to the other stores
