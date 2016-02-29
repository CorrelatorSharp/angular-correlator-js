;(function(ng) {
    ng
    .module('correlator-js-ngRoute', ['ngRoute', 'correlator-js'])
    .run(['$rootScope', 'csActivityScope', function(rootScope, activityScope) {
        rootScope.$on('$routeChangeStart', function(event, next, current) {
            activityScope.create(next);
        });
    }]);
}(angular));