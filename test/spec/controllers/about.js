'use strict';

describe('Controller: StudentCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var StudentCtrl, mockStudentService, newStudent;

  beforeEach(function(){
    mockStudentService = {
      student: {},
      get: function(){
        return this.student;
      },
      set: function(newStudent){
        this.student = newStudent;
      }
    };

    newStudent = {
      fName: 'ABC',
      lName: 'XYZ',
    };
    mockStudentService.set(newStudent);
  });

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    StudentCtrl = $controller('StudentCtrl', {
      // place here mocked dependencies
      StudentService: mockStudentService,
    });
  }));

  it('gets student object from StudentService', function(){
    expect(StudentCtrl.student).toEqual(newStudent);
  });
});
