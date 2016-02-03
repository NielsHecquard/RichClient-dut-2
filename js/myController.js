angular.module("myApp").controller("myController", [ function(){  //accède à l'application créée et y ajoute un controlleur. $scope est un service qu'on  injecte
    this.message="Hello world!"; //variable message intégré à scope
    this.updateMessage=function(){
        this.message="Autre message...";
    };
}]);