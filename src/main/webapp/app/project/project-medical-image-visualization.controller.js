/**
 * Created by 310031267 on 2016/6/1.
 */
(function(){
  'use strict';

  angular.module('resumeApp')
    .controller('MedicalImageVisualizationController', MedicalImageVisualizationController);

    MedicalImageVisualizationController.$inject = [];

  function MedicalImageVisualizationController() {
    var vm = this;

    vm.myInterval = 0;
    vm.noWrapSlides = false;
    vm.slides = getSlides();

    function getSlides(){
      var slides = [] ;
      for (var i = 0 ; i < 25; ++ i) {
        slides.push({
          image: 'content/images/medication-image-visualization/Slide' + (i+1) + '.JPG',
          text: 'Slide' + (i+1) + '.JPG'
        });
      }


      return slides ;
    }
  }
})();
