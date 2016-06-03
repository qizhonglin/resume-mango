/**
 * Created by 310031267 on 2016/6/3.
 */

(function(){
    'use strict';

    angular.module('resumeApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state("project-overview", {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/project/project-overview.html',
                    controller: 'OverviewController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader){
                    $translatePartialLoader.addPart('resume');
                    return $translate.refresh();
                }]
            }
        });
    }

})();
