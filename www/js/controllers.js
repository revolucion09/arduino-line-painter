angular.module('app.controllers', [])
  
.controller('controlRemotoCtrl', // The following is the constructor 
function ($scope, $stateParams, $ionicPopup, $ionicLoading, $cordovaBluetoothSerial) {
	
	var btManager = $cordovaBluetoothSerial;
	var alertPopup;
	
	function showLoading() {
    $ionicLoading.show({
      template: 'Buscando dispositivos disponibles'
    }).then(function(){
       console.log("Waiting for devices");
    });
  };
	
  function hideLoading() {
    $ionicLoading.hide().then(function(){
       console.log("No longer waiting for devices");
    });
  };
	
	function openBtListPopup(foundDevices) {
        $scope.foundDevices = foundDevices;
        alertPopup = $ionicPopup.alert({
            title: 'Dispositivos',
            templateUrl: 'templates/bluetoothListPopup.html',
            scope: $scope
        });
        alertPopup.then(function(res) {
        console.log('Popup dismissed');
        });
	};
	
	function closeBtListPopup(foundDevices) {
		if (alertPopup)
			alertPopup.close();
	};
	
	$scope.foundDevices = [];
	
	$scope.btList = function() {
        
		console.log('called bt search');
		$scope.foundDevices = [];
		showLoading();
        
		btManager.discoverUnpaired().then(
			function(s) {
				console.log('discover: ' + JSON.stringify(s));
				hideLoading();
				openBtListPopup(s);
			},
			function(e) {
                console.log('discover: ' + e);
            }
		);
		//openBtListPopup([{'address': "6C:94:F8:E4:99:91", 'name': 'Celu Saif'}, {'address': "9D:97:A8:E8:99:95"}]);
	};
    
    $scope.btInstruction = function(data) {
        console.log('called bt forward');
        btManager.write(data).then(
            function(s) {
                console.log('write success: ' + data);
            },
            function(e) {
                console.log('write failure: ' + e);
            }
        );
    };
	
	$scope.btEnable = function() {
		console.log('called bt enable');
		btManager.enable().then(
			function(s) {console.log('success on bt enable')},
			function(e) {console.log('fail on bt enable')}
		);
	}
	
	$scope.btConnect = function(mac) {
		console.log('called bt connect on: ' + mac);
		
		btManager.connect(mac).then(
			function(s) {console.log('bt connected')},
			function(e) {console.log('bt not connected')}
		);
		
		closeBtListPopup();
	}
	
	$scope.btDisconnect = function() {
		console.log('called bt disconnect');
		btManager.disconnect();
	}
	
})

.controller('trabajosCtrl', ['$scope', '$stateParams', // The 
function ($scope, $stateParams) {


}])
   
.controller('configuracionCtrl', ['$scope', '$stateParams', // The 
function ($scope, $stateParams) {
	
	
}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following 
function ($scope, $stateParams) {


}])
 