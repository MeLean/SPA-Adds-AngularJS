'use strict';
addsApp.controller('AddsController', function ($scope) {
    $scope.testAdds = [
    {
        title: 'add1',
        date:   '02/01/2015',
        name: 'Pesho',
        picture: 'images/noPicture.png',
        email: 'email@abv.bg',
        tel: '0987234987',
        text: 'ala bala 1',


    },
    {
         title: 'add2',
         date: '03/01/2015',
         name: 'Pesho',
         picture: 'images/noPicture.png',
         email: 'email@abv.bg',
         tel: '0987234987',
         text: 'ala bala 2',


     },
     {
          title: 'add3',
          date: '03/01/2015',
          name: 'Gosho',
          picture: 'images/noPicture.png',
          email: 'email2@abv.bg',
          tel: '0987234989',
          text: 'ala bala 3',


      }
        
    ]; //TODO delete me
})