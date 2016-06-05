/**
 * Created by 310031267 on 2016/6/2.
 */
(function(){
    'use strict';

    angular.module('resumeApp')
        .controller('NlpController', NlpController);

    NlpController.$inject = [];

    function NlpController() {
        var vm = this;

        vm.myInterval = 0;
        vm.noWrapSlides = false;

        vm.projectTitle = "NLP in China for Cardiac Applications";
        vm.keywords = "Annotation system, natural language processing, medical reporting, iCMC";
        vm.abstract = [
            "How to secondary use electronic clinical data is vital important to improve clinical care through clinical researches and quality management. However, most clinical data in China are unstructured or semi-structured. How to automatically transform the unstructured/semi-structured medical data into structured report accurately is a key problem, that is why the project “NLP in China for Cardiac Applications (2013-0112)” exsit.",
            "The iCMC platform is required as an integrated platform, which contains project management, raw reports management, ground truth management, model training and evaluation etc, to accelerate project research and extend the NLP application in different type of reports "
        ];
        vm.managementSummary = [
            'To improve clinical care through clinical researches and quality management the secondary use of electronic clinical data are still in high demand, However, most clinical data in China are unstructured or semi-structured because of heavy scans in China hospital and preferred free typing report. ',
            'That is why the project NLP in China for Cardiac Applications (2013-0112) would apply natural language processing technology (NLP)  to automatically process the unstructured/semi-structured medical data and feed into clinical data repository system ',
            'NLP project requires a lot of training files as ground truth, and trains a lot of models, how to manage the whole progress consistently and effectively is highly important. Meanwhile NLP framework could be applied to other type of reports like coronary angiography, radiology report, ECG report, laboratory result, PCI or other interventional operation notes, and admission note of cardiovascular department etc.',
            'That is why the iCMC platform is required as an integrated platform, which contains project management, raw reports management, ground truth management, model training and evalua-tion etc, to accelerate project research and extend the NLP application in different type of re-ports Since the whole platform is huge and still in progress, this technical note only covers some use case with highly priority which has already been developed.'
        ];
        vm.workflow = [
            'Login in',
            'Create project',
            'Upload Reports',
            'Relocate and split reports',
            'Annotator UI',
            'Train model',
            'Tag next group of raw reports'
        ];
        vm.slides = getSlides();

        function getSlides(){
            var slides = [] ;
            for (var i = 0 ; i < 6; ++ i) {
                slides.push({
                    image: 'content/images/nlp/Slide' + (i+1) + '.JPG',
                    text: 'Slide' + (i+1) + '.JPG'
                });
            }

            return slides ;
        }

    }
})();
