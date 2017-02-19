/// <reference path="C:\Users\sangeetha.EPRMTECH\Desktop\Pradep\webiner\EmployeeApp\EmployeeApp\Scripts/angular.js" />



var MyApp = angular.module("MyApp", ["ngRoute", 'EmployeeService']);


MyApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/Add', {
        templateUrl: 'View/add.html',
        controller: 'AddController'
    }).
    when('/Delete', {
        templateUrl: 'View/delete.html',
        controller: 'DeleteController'
    }).
    when('/Edit', {
        templateUrl: 'View/edit.html',
        controller: 'EditController'
    }).
       when('/Home', {
           templateUrl: 'View/home.html',
           controller: 'HomeController'
       }).
    otherwise({
        redirectTo: '/Home'
    });

   
}
]);


MyApp.controller("DeleteController",function ($scope, EmpApi) {
    $scope.selectedItem = "Select Employee";
    $scope.isDeleteItemVisible = false;
    getEmployee();

    function getEmployee() {
        EmpApi.getEmployee().success(function (emps) {

            $scope.emps = emps;
        })

  .error(function (error) {
      $scope.status = 'unable to connect' + error.message;
  })
    }
    $scope.dropboxitemselected = function (item) {
        $scope.isDeleteItemVisible = true;
        $scope.selectedItem = item.Id;
        $scope.name = item.F_Name;
        $scope.lname = item.L_Name;
        $scope.address = item.Address;
       
    };

    $scope.deletefun = function () {
        var dele = {
            '$scope.name': '',
      '  $scope.lname' : '',
       ' $scope.address ': ''

            //'F_Name': $scope.name,
            //'L_Name': $scope.lname,
            //'Address': $scope.address
        };
        EmpApi.deleteemp(dele)
        .success(function (response) {
            alert("Deleted");
            $scope.name = '';
            $scope.lname = '';
            $scope.address = '';

            $scope.selectedItem = "Select Employee";
            $scope.isDeleteItemVisible = false;
            getEmployee();
        })
        .error(function (response) {
            alert("error");
        });
    }
//$scope.delete = function (UpdateEmpNo) {
//    debugger;
//    var deleterecord = EmployeeService.delete($scope.UpdateEmpNo);
//    deleterecord.then(function (d) {
//        var Employee_table = {
//            F_Name: '',
//            L_Name: '',
//            Address: ''
//        };

//        $scope.selectedItem = "Select Employee";
//        $scope.isDeleteItemVisible = false;
//        getEmployee();
//        swal("Record deleted succussfully");
//    });
//}

});

MyApp.controller("EditController",function ($scope, EmpApi) {
    $scope.selectedItem = "Select Employee";
    $scope.isDeleteItemVisible = false;
    getEmployee();
  
    function getEmployee() {
        EmpApi.getEmployee().success(function (emps) {

            $scope.emps = emps;
        })

  .error(function (error) {
      $scope.status = 'unable to connect' + error.message;
  })
    }
    $scope.dropboxitemselected = function (item) {
        $scope.isDeleteItemVisible = true;
        $scope.selectedItem = item.Id;
        $scope.name = item.F_Name;
        $scope.lname = item.L_Name;
        $scope.address = item.Address;
       
    };

    $scope.updateEmp = function () {
        var empupdate = {
          
            'F_Name': $scope.name,
            'L_Name': $scope.lname,
            'Address': $scope.address
        };
        EmpApi.editemp(empupdate)
        .success(function (response) {
            alert("updated");
            $scope.name = undefined;
            $scope.lname = undefined;
            $scope.address = undefined;
          
            $scope.selectedItem = "Select Employee";
            $scope.isDeleteItemVisible = false;
            getEmployee();
        })
        .error(function (response) {
            alert("error");
        });
    }
 });



MyApp.controller("HomeController", function ($scope, EmpApi) {
    getEmployee();
    function getEmployee()
    {
        EmpApi.getEmployee().success(function (emps) {

            $scope.emps= emps;
        })
  
  .error(function(error){
      $scope.status = 'unable to connect' + error.message;
      })
   
    }

});



MyApp.controller("AddController", function ($scope, EmpApi) {

    $scope.add = function () {
        var empAdd = {
            'F_Name': $scope.name,
            'L_Name': $scope.lname,
            'Address': $scope.address
        };
        if (!$scope.name)
            return;
        EmpApi.addemp(empAdd)
        .success(function (response) {
            alert("added");
            $scope.name = undefined;
            $scope.lname = undefined;
            $scope.address = undefined;
        })
        .error(function (response) {
            alert("error");
        });
    }


});