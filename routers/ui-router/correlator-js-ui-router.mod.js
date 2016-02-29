;(function(ng) {
    ng
    .module('correlator-js-ui-router', ['ui.router', 'correlator-js'])
    .run(['$rootScope', 'csActivityScope', function(rootScope, activityScope) {
        rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
            activityScope.create(toState);
        });
    }]);
}(angular));