'use strict';
'use strict';

angular.module('cleanUI', []);

var app = angular.module('cleanUI.controllers', []);

app.controller('MainCtrl', function($scope, $http){

    var vm = this;;

    
    var timer;
    $scope.page = 50;
    //---------------//
    $scope.onSelectBoxChange = function(selectedValue){
        if (selectedValue=="five"){
            $scope.page = 10;
        } else if (selectedValue=="ten") {
            $scope.page = 20;
        } else if (selectedValue=="twenty"){
            $scope.page = 50;
        } else {
            $scope.page=undefined;
        }
    };
    $scope.limitStep = 10;
    $scope.limit = $scope.limitStep;
    $scope.pageChanged = function(){
        $scope.limit += $scope.limitStep;
    };
    //---------------//
    $scope.Sizes = function(size) {
        $scope.sizeFilter = $scope.sizeFilter || {};
        $scope.sizeFilter.size = size;
    };
    $scope.Paths = function(path) {
        $scope.myFilter = $scope.myFilter || {};
        $scope.myFilter.path = path;
    };
    $scope.search_path = function(name) {
        $scope.search.path = $scope.search.path || {};
        $scope.search.path = name;
        $scope.is_name = true;
    };
    $scope.ubids_show = false;
    $scope.toggleubids = function() {
        $scope.ubids_show = !$scope.ubids_show;
    };
    $scope.ubId_filter = function(ubId) {
        $scope.Ubidfilter = $scope.Ubidfilter || {};
        $scope.Ubidfilter.ubId = ubId;
        $scope.remove_ubid = true;
    };
    $scope.AllUbidfilter = function(){
        $scope.Ubidfilter = angular.copy($scope.default);
        $scope.remove_ubid = false;
    };
    $scope.default_textures = null;
    $scope.textures_filter = null;
    $scope.TexturesFilter = function(name) {
        console.log("name", name);
        $scope.textures_filter = $scope.textures_filter || {};
        $scope.textures_filter = name;
    };
    $scope.AllTextures = function() {
        $scope.textures_filter = angular.copy($scope.default_textures);
    };
    $scope.stat = {};
    $scope.add = function(stat){
        $scope.stat = stat;
        $scope.reverse = ($scope.stat === stat) ? !$scope.reverse : 
false;
        $scope.stat = stat;
        console.log($scope.stat);
    };
    $scope.nonstat = function(stat){
        $scope.stat = null;
        console.log("first log");
    };
    $scope.default = {};
    $scope.search = {};
    $scope.delete = function(path) {
        $scope.search = angular.copy($scope.default);
    };
    $scope.AllPaths = function() {
        $scope.myFilter = angular.copy($scope.default);
    };
    $scope.logIn = function(){
        $location.path('/dashboard')
    };
    $scope.logOut = function(){
        $location.path('/login-omega')
    };
    $scope.brick = false;
    $scope.togglebrick = function() {
        $scope.brick = !$scope.brick;
    };
    $scope.brickerror = false;
    $scope.togglebrickerror = function() {
        $scope.brickerror = !$scope.brickerror;
    };
    $scope.bricklog = false;
    $scope.togglebricklog = function() {
        $scope.bricklog = !$scope.bricklog;
    };
    $scope.thumbnails_show = false;
    $scope.togglethumbnails = function() {
        $scope.thumbnails_show = !$scope.thumbnails_show;
    };
    $scope.ftp_show = false;
    $scope.toggleftp = function() {
        $scope.ftp_show = !$scope.ftp_show;
    };
    $scope.Bricks = function(){
        $location.path('/bricks');
    };
    $scope.Textures = function(){
        $location.path('/textures');
    };
    $scope.propertyName = 'date_package';
    $scope.reverse = true;
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? 
!$scope.reverse : false;
        $scope.propertyName = propertyName;
    };
    $scope.logUrl = function(n){
        $rootScope.url = n;
        console.log(url);
    };
    $scope.cancel_time_api = function(){
        $timeout.cancel(timer);
        timer = null;
        console.log("canceled");
    };
    $scope.start_time_api = function(){
        timer = $timeout(vm.getapi, 5000);
    };
    $scope.cancel_time = function(){
        console.log('cancel');
        $timeout.cancel(timer);
        $scope.show_spinner = true;
    };
    $scope.short_name = {
        templateUrl: 'short_name.html',
        title: ''
    };
    $scope.typePopover = {
        templateUrl: 'type.html',
        title: ''
    };
    $scope.download_timePopover = {
        templateUrl: 'download_time.html',
        title: ''
    };
    $scope.on_ftp_popover = {
        templateUrl: 'on_ftp_popover.html',
        title: ''
    };
    $scope.mail_forward = {
        templateUrl: 'mail_forward.html',
        title: ''
    };
    $scope.unzip_timePopover = {
        templateUrl: 'unzip_time.html',
        title: ''
    };
    $scope.compose_timePopover = {
        templateUrl: 'compose_time.html',
        title: ''
    };
    $scope.upload_timePopover = {
        templateUrl: 'upload_time.html',
        title: ''
    };
    $scope.mason_params = {
        templateUrl: 'mason_params.html',
        title: ''
    };
    $scope.errorpopover = {
        templateUrl: 'error.html',
        title: ''
    };
    $scope.dynamicPopover = {
        templateUrl: 'size.html',
        title: ''
    };

    $scope.copied= function(n){
        $scope.showme=true
    }
    $scope.postMason_param = function(param){
        console.log("param :", param);
    };
    
    //GET//
    
    vm.getapi = function(){
        $http({
            method: 'GET' ,
            url: 'api.json',
        })
            .then(function successCallback(data) {
                $scope.data = data.data;
                console.log($scope.data);
               
            }, function errorCallback(response) {
                $scope.errorBackend = true;
                console.log(response);
            });
    };
    vm.getapi();
    //filters --------- //
    $scope.three = false;
    $scope.togglethree = function() {
        $scope.three = !$scope.three;
    };
    $scope.two = false;
    $scope.toggletwo = function() {
        $scope.two = !$scope.two;
    };
    $scope.toggleAll = function() {
        $scope.two = false;
        $scope.three = false;
    };
    $scope.size = false;
    $scope.togglesize = function() {
        $scope.size = !$scope.size;
    };
    $scope.sizemb = false;
    $scope.togglesizemb = function() {
        $scope.sizemb = !$scope.sizemb;
    };
    $scope.compose = false;
    $scope.togglecompose = function() {
        $scope.compose = !$scope.compose;
    };
    $scope.eye = false;
    $scope.toggleeye = function() {
        $scope.eye = !$scope.eye;
    };
    $scope.loading = false;
    $scope.toggleloading = function() {
        $scope.loading = !$scope.loading;
    };
    $scope.minus = false;
    $scope.toggleminus = function() {
        $scope.minus = !$scope.minus;
    };
    $scope.check = false;
    $scope.togglecheck = function() {
        $scope.check = !$scope.check;
    };
    $scope.initiated = false;
    $scope.toggleinitiated = function() {
        $scope.initiated = !$scope.initiated;
    };
    $scope.persons = [{id: 1, name: 'Alex'}, {id: 2, name: 'David'}];
    //---------------//

    var lastChecked = null;
    $scope.TypeUncheck = function (event) {
        if (event.target.value === lastChecked) {
            delete $scope.$parent.selectedType
            lastChecked = null
        } else {
            lastChecked = event.target.value
        }
    };
    //---------------//

    NProgress.configure ({
        minimum: 0.2,
        trickleRate: 0.1,
        trickleSpeed: 200
    });
    $scope.$on('$routeChangeStart', function() {
        $('body').addClass('cui-page-loading-state');
        NProgress.start();
    });
    $scope.$on('$routeChangeSuccess', function() {
        $('body').removeClass('single-page single-page-inverse');
        $rootScope.hideLeftMenu = false;
        $rootScope.hideTopMenu = false;
        $rootScope.showFooter = true;
        $('html, body').scrollTop(0);
        
$('.left-menu-list-active').removeClass('left-menu-list-active');
        $('nav.left-menu .left-menu-list-root 
.left-menu-link').each(function(){
            if ($(this).attr('href') == '#' + $location.path()) {
                $(this).closest('.left-menu-list-root > 
li').addClass('left-menu-list-active');
            }
        });
        setTimeout(function(){
            NProgress.done();
        }, 1000);
        $('body').removeClass('cui-page-loading-state');
    });
});


app.controller('ModalInstanceCtrl', function ($uibModalInstance, items, 
$scope, $timeout) {

    $timeout(function() {
        $uibModalInstance.dismiss('cancel');
    }, 7000);
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items
    };
    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };
    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

// Please note that the close and dismiss bindings are from 
$uibModalInstance.

app.component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function () {
        var $ctrl = this;
        $ctrl.$onInit = function () {
            $ctrl.items = $ctrl.resolve.items;
            $ctrl.selected = {
                item: $ctrl.items[0]
            };
        };
        $ctrl.ok = function () {
            $ctrl.close({$value: $ctrl.selected.item});
        };
        $ctrl.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };
    }
});
app.directive('leftMenu', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('click', '.left-menu-link', function() {
                if (!$(this).closest('.left-menu-list-submenu').length) 
{
                    $('.left-menu-list-opened > a + ul').slideUp(200, 
function(){
                        
$('.left-menu-list-opened').removeClass('left-menu-list-opened');
                    });
                }
            });
        }
    };
});
app.filter('dateFilterFunction',function(){
    return function(data, from, to) {
        if (!from && !to) return data;
        var newData = [];
        angular.forEach(data, function(item){
            if(item.date_package >= from && (item.date_package <= to)) {
                newData.push(item);
            }
            else if(item.date_package <= to && !from) {
                newData.push(item);
            }
            else if (item.date_package >= from && !to) {
                newData.push(item);
            }
        });
        return newData;
    };
});
app.filter('composeFilterFunction', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.state == 4 || i.state == 0 || i.state 
== 3);
    };
});
app.filter('loadinnFilterFunction', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.state == 2);
    };
});
app.filter('minusFilterFunction', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.state == 4);
    };
});
app.filter('initiatedFilterFunction', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.start_time != null);
    };
});
app.filter('checkFilterFunction', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.state != 4 && i.download_time != null 
&& i.unzip_time != null && i.compose_time != null && i.upload_time != 
null);
    };
});
app.filter('MBFilterFunction', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.mb <= 1000);
    };
});
app.filter('BricksFilterFunctionwarning', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.type == 'warning');
    };
});
app.filter('BricksFilterFunctionerror', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.type == 'error');
    };
});
app.filter('BricksFilterFunctionlog', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.type == 'log');
    };
});
app.filter('GBFilterFunction', function() {
    return function(data, from) {
        if(!from) return data;
        return data.filter(i => i.mb > 1000);
    };
});
app.filter('stateFilterFunction',function(){
    return function(data, from, to) {
        if (!from && !to) return data;
        var states = [];
        angular.forEach(data, function(item){
            if(item.state >= from && (item.state <= to)) {
                states.push(item);
            }
            else if(item.state <= to && !from) {
                states.push(item);
            }
            else if (item.state >= from && !to) {
                states.push(item);
            }
        });
        return states;
    };
});
app.filter('sizeFilterFunctionto',function(){
    return function(data, to) {
        if (!to) return data;
        var sizesto = [];
        angular.forEach(data, function(item){
            if(item.mb >= to) {
                sizesto.push(item);
            }
        });
        return sizesto;
    };
});
app.filter('TypeFilterFunction',function(){
    return function(data, type) {
        if (!type) return data;
        var types = [];
        angular.forEach(data, function(item){
            if(item.type == type) {
                types.push(item);
            }
        });
        return types;
    };
});
app.filter('sizeFilterFunctionfrom',function(){
    return function(data, from, to) {
        if (!from && !to) return data;
        var sizesfrom = [];
        angular.forEach(data, function(item){
            if(item.mb <= to && !from) {
                sizesfrom.push(item);
            }
            else if (item.mb >= from && !to) {
                sizesfrom.push(item);
            }
        });
        return sizesfrom;
    };
});
app.filter('newlines', function () {
    return function(text) {
        return text.replace(/(\\r)?\\n/g, ' ');
    }
});
app.filter('custom', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var result = {};
    angular.forEach(input, function(value, key) {
		console.log("key", key);
      if (key == search) {
        result[key] = value;
      }
    });
    return result;
  }
});
app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) text = text.replace(new RegExp('('+phrase+')', 
'gi'),
            '<span class="highlighted">$1</span>')
        return $sce.trustAsHtml(text)
    }
});
app.filter('ThumbnailsFilterFunction',function(){
    return function(data, thumb) {
        if (!thumb) return data;
        var thumbs = [];
        angular.forEach(data, function(item){
            if(!(item.name.includes('THUMBNAILS'))) {
                thumbs.push(item);
            }
        });
        return thumbs;
    };
});
app.filter('onFtpFilterFunction',function(){
    return function(data, ftp) {
        if (!ftp) return data;
        var ftps = [];
        angular.forEach(data, function(item){
            if(item.on_ftp !== false) {
                ftps.push(item);
            }
        });
        return ftps;
    };
});

