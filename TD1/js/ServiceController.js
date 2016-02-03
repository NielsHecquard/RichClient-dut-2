angular.module("ServiceApp").controller("ServiceController", ["$http", function(http) {
    var self = this;
    http.get("./promo.json").then(function(reponse) {
       self.promos = reponse.data;
    });

    this.nbSelect = 1;
    this.total = 300;
    this.codeRemise = "";
    this.totalR = this.total;
    this.reduc = 0;
    this.promos = {};
    this.checkbox=false;
    this.services=
    [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];

    this.toggleActive=function(service){
        if(service.active) {
            service.active=false;
            this.nbSelect--;
        }
        else {
            service.active=true;
            this.nbSelect++;
        }
    };

    this.CalcTotal=function(service) {
        if(service.active) {
            this.total += service.price;
        }
        else this.total -= service.price;
    };

    this.getRemise=function() {
        var remise = this.promos[this.codeRemise];
        if(angular.isUndefined(remise) || !this.checkbox) {
            remise = 0;
        }
        else {
            remise = this.total * remise;
        }
        this.reduc = remise;
        this.totalR = this.total - this.reduc;
        return remise;
    }
}]);