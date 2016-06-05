/**
 * Created by 310031267 on 2016/6/3.
 */

(function(){
    'use strict';

    angular.module('resumeApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state("project-breastcancer", {
            parent: 'app',
            url: '/project-breastcancer',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/project/project-bigdata.html',
                    controller: 'BreastCancerController',
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
