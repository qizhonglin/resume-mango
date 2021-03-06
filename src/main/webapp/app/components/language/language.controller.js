(function() {
    'use strict';

    angular
        .module('resumeApp')
        .controller('JhiLanguageController', JhiLanguageController);

    JhiLanguageController.$inject = ['$translate', 'JhiLanguageService', 'tmhDynamicLocale', '$rootScope'];

    function JhiLanguageController ($translate, JhiLanguageService, tmhDynamicLocale, $rootScope) {
        var vm = this;

        vm.changeLanguage = changeLanguage;
        vm.languages = null;

        JhiLanguageService.getAll().then(function (languages) {
            vm.languages = languages;
        });

        function changeLanguage (languageKey) {
            $translate.use(languageKey);
            tmhDynamicLocale.set(languageKey);

            $rootScope.$emit("language.changedEvent", languageKey);
        }
    }
})();
