'use strict';

describe('Controller: StudentCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var StudentCtrl, mockStudentService, newStudent;

  beforeEach(function(){
    mockStudentService = {
      student: {
        fName: 'ABC',
        lName: 'XYZ'
      },
      get: function(){
        return this.student;
      }
    };
  });

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    StudentCtrl = $controller('StudentCtrl', {
      // place here mocked dependencies
      StudentService: mockStudentService,
    });
  }));

  it('gets student object from StudentService', function(){
    var newStudent = {
      fName: 'ABC',
      lName: 'XYZ'
    };
    expect(StudentCtrl.student).toEqual(newStudent);
  });
});
