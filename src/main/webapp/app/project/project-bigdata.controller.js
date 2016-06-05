/**
 * Created by 310031267 on 2016/6/2.
 */
(function(){
    'use strict';

    angular.module('resumeApp')
        .controller('BigDataController', BigDataController);

    BigDataController.$inject = [];

    function BigDataController() {
        var vm = this;

        vm.myInterval = 0;
        vm.noWrapSlides = false;

        vm.projectTitle = "Healthcare Big Data Analytics";
        vm.keywords = "Correlation Analytics, multi-variable association, Data Visualzation, Statistical Analytics, Cardiology";
        vm.abstract = [
            "Currently Cardiovascular Information System (CVIS) is only being used for reporting, scheduling and management purposes. There is no deep analysis tool to turn rich data to information even though there are a number of third party business analytics tools available for generic usage. The proposed correlation analytics method is to automatically generate multi-variable associated/correlated information for the data in the clinical data repository.",
            "The proposed correlation analytics method transforms  the data from Cardiovascular Data Repository (CDR), into useful information, and then visualizes the information in an interative and convenient way in web browsers."
        ];
        vm.managementSummary = [
            'A variety of data source from Cathlab, Philips Xper, Philips Xcelera and others like HIS/EMR, RIS and LIS are collected and stored in CDR. There is implicit knowledge underlying this big data, but it is not easy or even impossible for human to digest the raw data directly. So how to transform this big data into knowledge automatically shows more and more importance in improving cardiac patient care, research & registry outcomes.',
            'There are a number of third party business analytics tools available for users to con-duct data analysis,however, these tools are developed for generic usage. This project data analysis tries to analyze the CNCDR data in depth to provide knowledge/information to the physician in a friendly way. ',
            'The correlation analytic module includes three parts: data preprocessing, correlation calculation and visualization. The user case has been refined with coorperation with clini-cal doctor and BIU, user interface is designed with coorperation with data visualization team, UI design, Philips Netherland, and implementation is coorperated with Pins Philips Netherland and R&D team from BIU.',
            'In physician’s view, current correlation analytic module is meaningful, and then it has been accepted and transferred to BIU, BIU tries to integrate correlation analytic module into CNCDR platform, meanwhile correlation analytic module will be integrated into DHP. Our next step will focus on patter discovery.'
        ];
        vm.workflow = [
            'visualization of category correlation',
            'visualization of top 5 outcome measures',
            'view Attribute correlation',
            'view bar chart 2D',
            'view bar chart 3D',
            'view a list of patients'
        ];
        vm.slides = getSlides();

        function getSlides(){
            var slides = [] ;
            for (var i = 0 ; i < 11; ++ i) {
                slides.push({
                    image: 'content/images/bigdata/Slide' + (i+1) + '.JPG',
                    text: 'Slide' + (i+1) + '.JPG'
                });
            }

            return slides ;
        }

    }
})();
