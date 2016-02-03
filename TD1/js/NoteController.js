angular.module("NoteApp").controller("NoteController", function(){
    this.message="Votre message";
    this.info="";
    this.save=function(){
        if(this.message.length>0)
            this.info="Note sauvegardée";
    };
    this.clear=function(){
        this.message="";
        this.info=null;
    };
    this.count=function(){
        return 100-this.message.length;
    };
})