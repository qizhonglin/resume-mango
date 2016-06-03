/**
 * Created by 310031267 on 2016/6/1.
 */

(function(){
    'use strict';

    angular.module('resumeApp')
        .controller('OverviewController', OverviewController);

    OverviewController.$inject = ['$scope'];

    function OverviewController($scope) {
        var vm = this;

        vm.projectsFlat = mockData_ch() ;
        vm.projects = transformFormat(trimFormat(vm.projectsFlat, 200), 3);

        function mockData_ch() {
            var projects = [
                {
                    'image': 'images/medication-image-visualization/Slide13.jpg',
                    'title': '3D Visualization of Large Medical Image',
                    'description': 'There are some key benefits of connection between physician, pa-tient and CHC. Patient gets continual care with personalized intervention tool, physician gets a better overview of patients’ status for better quality of care, meawhile physician collects more data for clinical research, the resource of CHC can be fully leveraged to release overburnden of level 3 hospital.',
                    'href': '#/project-medical-image-visualization'
                },
                {
                    'image': 'images/bama/ui/patient-portal/Slide2.jpg',
                    'title': 'Integrated Health Management Cardiac Care Solutions',
                    'description': "There are some key benefits of connection between physician, pa-tient and CHC. Patient gets continual care with personalized intervention tool, physician gets a better overview of patients’ status for better quality of care, meawhile physician collects more data for clinical research, the resource of CHC can be fully leveraged to release overburnden of level 3 hospital.",
                    'href': '#/project-bama'
                },
                {
                    'image': 'images/bigdata/Slide10.jpg',
                    'title': 'Healthcare Big Data Analytics of CNCDR',
                    'description': "There are a number of third party business analytics tools available for users to conduct data analysis. However, these tools are developed for generic usage. Therefore, as a user of CVIS, one needs to first extract data from the CVIS system or/and other HIT systems within the hospital, then pre-process them to a correct format before users can start using the third party analytics tool. This will require a large amount of time and resources every time when physi-cians want to conduct data analysis using patients’ records. ",
                    'href': '#/project-bigdata'
                },
                {
                    'image': 'images/nlp/Slide4.jpg',
                    'title': 'NLP in China for Cardiac Applications',
                    'description': "How to secondary use electronic clinical data is vital important to improve clinical care through clinical researches and quality management. However, most clinical data in China are unstructured or semi-structured. How to automatically transform the unstructured/semi-structured medical data into structured report accurately is a key problem, that is why the project “NLP in China for Cardiac Applications (2013-0112)” exsit. ",
                    'href': '#/project-nlp'
                },
                {
                    'image': 'images/breast-cds/Slide5.jpg',
                    'title': 'Clinical Decision Support for Breast Cancer',
                    'description': "Breast cancer is No.1 cancer for women.In China, the current annual death is over 20,000; the incidence is expected to jump from 25-60/100,000 to 100/100,000 by 2021 if no action. 35-59 year old women (~200 million) are high risk individuals.Ultrasound rather than mammography is the primary imaging modality for breast cancer detection in China.However, U/S doctors have less confidence in differentiating malignant from benign lesions.Less experienced doctors need training. Develop an ultrasound-based Clinical Decision Support (CDS) system with case retrieval and likelihood output functions ",
                    'href': '#/project-breastCancer'
                }
            ];

            return projects;
        }

        function transformFormat(projects, colNum) {
            var result = [];
            var rowNum = Math.ceil(projects.length / colNum) ;
            for (var i = 0 ; i < rowNum; ++ i) {
                var projectRow = [];
                for (var j = 0 ; j<colNum && i*colNum+j<projects.length; ++ j) {
                    projectRow.push(projects[i*colNum+j]);
                }
                result.push(projectRow);
            }
            return result;
        }

        function trimFormat(projects, strLen) {
            angular.forEach(projects, function(value, index){
                if (value.description.length > strLen) {
                    projects[index].description = projects[index].description.slice(0, strLen) + "...";
                }
            });
            return projects;
        }
    }
})();
