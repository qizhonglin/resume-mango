/**
 * Created by 310031267 on 2016/6/2.
 */
(function(){
    'use strict';

    angular.module('resumeApp')
        .controller('BreastCancerController', BreastCancerController);

    BreastCancerController.$inject = [];

    function BreastCancerController() {
        var vm = this;

        vm.myInterval = 0;
        vm.noWrapSlides = false;

        vm.projectTitle = "Clinical Decision Support for Breast Cancer";
        vm.keywords = "Breast Cancer, Clinical Decision Support, WPF, Image Processing, Machine Learning";
        vm.abstract = [
            "The diagnosis of breast cancer is very important for human beings especially for women. However the current clinical diagnosis is not quantitative and highly depends on doctors’ experiences. The diagnosis performance also should be further improved. Since nowadays computerized techniques play an important role in providing quantitative diagnostic information for clinical applications and ultrasound techniques have the advantages of its noninvasive nature, real time display and low cost for clinical diagnosis, it is necessary to establish the computerized quantitative models for the diagnosis of breast cancer based on ultrasound B-mode images. Currently the existent computerized approaches mainly focus on some quantitative features of breast lesions. Also the models and the approach for the model establishment need to be further improved.",
            "In our work, the procedure to establish the quantitative models consists of lesion segmentation, quantitative feature extraction and the approach of model establishment. The clinical data are collected in Western China hospital and there are 467 well-arranged cases which consist of 315 benign lesion cases and 152 malignant lesion cases with the pathologic or diagnosis confirmation. The experimental results for the discrimination between benign and malignant breast lesions could achieve the performance of 77.5% accuracy and the AUROC of 0.8061."
        ];
        vm.managementSummary = [
            'The diagnosis of breast cancer is very important for human beings especially for women. However the current clinical diagnosis is not quantitative and highly depends on doctors’ experiences. The diagnosis performance also should be further improved. Since nowadays computerized techniques play an important role in providing quantitative diagnostic information for clinical applications and ultrasound techniques have the advantages of its noninvasive nature, real time display and low cost for clinical diagnosis, it is necessary to establish the computerized quantitative models for the diagnosis of breast cancer based on ultrasound B-mode images. Currently the existent computerized approaches mainly focus on some quantitative features of breast lesions. Also the models and the approach for the model establishment need to be further improved.',
            'In our work, the procedure to establish the quantitative models has a complete machine-learning structure and for each component, there are different methods to guarantee the optimal setting to some extent for the specific application. The clinical data are collected in Western China hospital and there are 467 well-arranged cases to validate the established models.',
            'For the diagnosis of benign and malignant breast lesions, the accuracy is around 80% for our models. The results are based on strict cross-validation, which could be reliable. This might be the limitation of ultrasound 2D B-mode images for the breast diagnosis. Higher dimensional data might provide the possibility to improve the diagnostic performance, which should be based on the computerized methods since human beings have the inherent drawbacks for the perception of higher dimensional space.'
        ];
        vm.workflow = [
            'View patient list',
            'View patient: select slice, zoom in/out, pan, magnify, adjust contrast and brightness, reset, show/hide lesion, show/hide image information',
            'View likelihood',
            'Query similar case',
            'BI-RADS report manual-fill or auto-fill'
        ];
        vm.slides = getSlides();

        function getSlides(){
            var slides = [] ;
            for (var i = 0 ; i < 6; ++ i) {
                slides.push({
                    image: 'content/images/breast-cds/Slide' + (i+1) + '.JPG',
                    text: 'Slide' + (i+1) + '.JPG'
                });
            }

            return slides ;
        }

    }
})();
