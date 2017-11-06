var myApp = angular.module('myApp', []);

myApp.controller('MessageController', function($http){
    var mc = this;
    
    mc.message = {
        name: '',
        message: ''
    }

    mc.results = {data: []};

    mc.submitMessage = function(messageToSend) {
        $http.post('/messages', messageToSend).then(function(response){
            console.log(response);
            mc.getMessages();
            mc.message = {};
        })
    }

    mc.getMessages = function() {
        $http.get('/messages').then(function(response){
            console.log(response.data);            
            mc.results.data = response.data;
        })
    }

    mc.getMessages();
})

