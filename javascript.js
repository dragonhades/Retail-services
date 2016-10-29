angular.module('portalApp')

.controller('skylarCtrl', ['$scope', '$http', '$q', 'skylarFactory', function ($scope, $http, $q, skylarFactory) {

    // Import variables and functions from service
    $scope.item ={value:''};
    $scope.item2 = {value:''};
    $scope.item3 = {value:''};
    $scope.item4 = {value:''};
    
     
    
    // Model for the search and list example
    $scope.model = {value: [{
        title: "Campus Tech",
        
        location: "Location: Student Life Center Downstairs",
        hours:"Regular Hours: Monday-Friday, 9a.m-5p.m",  
        
        details: [    
        {title: "Notebooks",
        details: "item 1 details",
        category: '2'},
            
        {title: "Pensils",
        details: "item 1 details",
        category: '2'},
            
         {title: "Pens",
        details: "item 1 details",
        category: '2'}        
                            ],
        
        category: '1'
    }, {
        title: "Waterloo Store",
        
        location: "Location: South-campus-hall (SCH)",
        hours:"Regular Hours Begin Monday, September 19 <br> \
Monday – Tuesday: 9am – 6pm <br> \
Wednesday - Friday: 9am - 5pm  <br> \
Saturday: 12pm - 4pm <br> \
Sunday: Closed ",
        
        details: [    
        {title: "Collegiate Hoodie",
        details: "item 1 details",
        category: '2'},
            
        {title: "Ceremonial Seal Hoodie",
        details: "item 1 details",
        category: '2'},
            
         {title: "Nike Youth T-Shirt",
        details: "item 1 details",
        category: '2'}        
                            ],
        category: '1'
    }, {
        title: "Write Stuff",
        details: "item 3 details",
        category: '1'
    }, {
        title: "International News",
        details: "item 4 details",
        category: '1'
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

     // Handle click on an item in the second list 
 $scope.showDetails2 = function (item) {
        console.log(item);
        // Set which item to show in the details view
        $scope.item2.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('skylarDetails2.html', 3);
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