/// <reference path="C:\Users\sangeetha.EPRMTECH\Desktop\Pradep\webiner\EmployeeApp\EmployeeApp\Scripts/angular.js" />


var EmployeeService = angular.module('EmployeeService', []);

EmployeeService.factory('EmpApi', function ($http) {



    var urlBase = "http://localhost:56081/api";
    var EmpApi = {};
    EmpApi.getEmployee = function () {
        return $http.get (urlBase + '/Employee_table');
    };

    EmpApi.addemp = function (emps) {
        return $http.post(urlBase + '/Employee_table', emps);
    };



    EmpApi.editemp = function (empupdate) {
        var request = $http({
            method: 'put',
            url: urlBase + '/Employee_table' + empupdate.Id,
            data: empupdate
        });
        return request;
    };


    EmpApi.deleteemp = function (empdele) {
        var request = $http({
            method: 'delete',
            url: urlBase + '/Employee_table' + empdele.Id,
            
        });
        return request;
    };
    return EmpApi;
});