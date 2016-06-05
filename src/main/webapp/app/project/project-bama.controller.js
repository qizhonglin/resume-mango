/**
 * Created by 310031267 on 2016/6/1.
 */

(function () {
    'use strict';

    angular.module('resumeApp')
        .controller('BamaController', BamaController);

    BamaController.$inject = [];

    function BamaController() {
        var vm = this;

        vm.myInterval = 0;
        vm.noWrapSlides = false;
        vm.scenarioSlides = getScenarioSlides();

        vm.projectTitle = "Integrated Health Management Cardiac Care Solutions";
        vm.keywords = "Cardiac, software architecture, micro-service, spring boot, Android, RESTful API";
        vm.abstract = [
            "There are some key benefits of connection between physician, pa-tient and CHC. Patient gets continual care with personalized intervention tool, physician gets a better overview of patients’ status for better quality of care, meawhile physician collects more data for clinical research, the resource of CHC can be fully leveraged to release overburnden of level 3 hospital.",
            "The project focus on integrated health management solution which targets to cardiac care and this technical note describes in detail  software design and implementation including the back-end server and android native app."
        ];
        vm.managementSummary = {
            'p1': 'Currently in China there are some issues related to heathcare. For example, the healthcare system is not optizimed like over burdened higher level hospitals and no GP system in place. Clinical and technology focus on treating health issues so it is difficult to monitor patients over time. The relationship between patients and physicians is poor. Even though Healthcare system is under pressure but change is initiated. In future prima-ry care system will spring up and hospitals will be vertically integrated. Clinical and tech-nology will focus on early detection, data integration and analysis. There is why govern-ment policies focus on prevention, evidence-based medicine, and healthy cities.',
            'p2': 'The project aims to integrate health management solution, which currently targets to Cardiac Care. The workflow is as follows:',
            'ul': [
                'cardiologist writes discharge plan via his tablet, nurse educates patient via pa-tient’s tablet during the discharge meeting. ',
                'Patient measures blood pressure/heart rate daily and records symptoms when they occur via his tablet',
                'Patient brings his tablet to the CHC during follow-up meetings, the GP writes comments to the treatment plan if he makes a change',
                'Patient brings his tablet to the hospital during follow-up meetings, the physician or nurse updates the treatment',
                'Physician reviews all patient’s data and does research analysis via his tablet an-ytime'
            ],
            'p3': 'The solution adds benefits to all related people. Patient owns more information from and contact with their specialist. Patient’s family understands their parents’ current disease status easier. Cardiologist can collect data to get a better overview of patients’ status for better quality of care from patient at home and other care providers, in this case they can do clinical research. GP in CHC have more training and knowledge from L3 specialists and share workload from overburdened level 3 hospital.',
            'p4': 'Considering potential business models, the solution can be deployed and sold to hospitals as standalone. As platform the solution is scalable, more features can be added like clini-cal decision support, retrohab and data analysis etc.'
        };
        vm.portal = [
            {
                'title': 'Doctor Portal',
                'workflow': [
                    'Login ',
                    'Task - physician select discharge and followup task',
                    'Patient list – physician include/exclude patient account into trial',
                    'Basic info of patient',
                    'Discharge summary of patient',
                    'Medication plan – physician create medication plan for patient',
                    'Lifestyle plan – physician create lifestyle plan for patient',
                    'Followup plan – physician create followup plan for patient'
                ],
                'slides': getUiDoctorSlides()
            },
            {
                'title': 'Patient Portal',
                'workflow': [
                    'Login ',
                    'Main home – task view, medication taken view, score view…',
                    'Medication list, and CRUD of medication',
                    'Lifestyle ',
                    'Followup ',
                    'Measurement view and input',
                    'Annotation including symptom view and input',
                    'Medication taken reminder'
                ],
                'slides': getUiPatientSlides()
            }
        ];

        function getScenarioSlides() {
            var slides = [];
            for (var i = 0; i < 27; ++i) {
                slides.push({
                    image: 'content/images/bama/scenario/Slide' + (i + 1) + '.JPG',
                    text: 'Slide' + (i + 1) + '.JPG'
               });
            }

            return slides;
        }

        function getUiDoctorSlides() {
            var slides = [];
            for (var i = 0; i < 8; ++i) {
                slides.push({
                    image: 'content/images/bama/ui/doctor-portal/Slide' + (i + 1) + '.jpg',
                    text: 'Slide' + (i + 1) + '.jpg'
                });
            }

            return slides;
        }

        function getUiPatientSlides() {
            var slides = [];
            for (var i = 0; i < 14; ++i) {
                slides.push({
                    image: 'content/images/bama/ui/patient-portal/Slide' + (i + 1) + '.jpg',
                    text: 'Slide' + (i + 1) + '.jpg'
                });
            }

            return slides;
        }
    }
})();
