angular.module('portalApp')

.controller('skylarCtrl', ['$scope', '$http', '$q', 'skylarFactory', function ($scope, $http, $q, skylarFactory) {

    // Import variables and functions from service
    $scope.item = [
		{			
			tags: ['tag A', 'tag B', 'tag C'],			
		}];

    // Model for the search and list example
    $scope.model = {value: [{
        title: "Campus Tech",
        details: "item 1 details",
        category: '1'
    }, {
        title: "Waterloo Store",
        details: "item 2 details",
        category: '2'
    }, {
        title: "Write Stuff",
        details: "item 3 details",
        category: '1'
    }, {
        title: "International News",
        details: "item 4 details",
        category: '2'
    }, {
        title: "Media.doc",
        details: "item 5 details",
        category: '1'
    }]};

    // initialize the service
    skylarFactory.init($scope);	
	$scope.portalHelpers.showView('skylarMain.html', 1);

    // Handle click on an item in the list and search example
    $scope.showDetails = function (item) {
        // Set which item to show in the details view
        $scope.item.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('skylarDetails.html', 2);
    };

    // Handle "previous item" click from the details page
    $scope.prevItem = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails(prevItem);
    }

    $scope.nextItem = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails(nextItem);
    }

}])
    // Factory maintains the state of the widget
    .factory('skylarFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
        var initialized = {
            value: false
        };


        var sourcesLoaded = 0;

        var init = function ($scope) {
            if (initialized.value)
                return;
            initialized.value = true;
        }


        return {
            init: init
        };

    }]);