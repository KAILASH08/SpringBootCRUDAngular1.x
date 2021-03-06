angular.module('app.services', []).factory('RfmTeam', function($resource) {
  return $resource('/api/v1/rfmTeams/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
