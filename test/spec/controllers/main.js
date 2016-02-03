'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var FormCtrl, mockStudentService;

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
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    FormCtrl = $controller('FormCtrl', {
      // place here mocked dependencies
      StudentService: mockStudentService,

    });
  }));

  it('degrees array has eight options', function () {
    expect(FormCtrl.degrees.length).toBe(8);
  });

  it('states array has 36 options', function(){
    expect(FormCtrl.states.length).toBe(36);
  });

  it('set student object on form submit', function(){
    var newStudent = {
      fName: 'ABC',
      lName: 'XYZ',
    };
    FormCtrl.student = newStudent;
    FormCtrl.submit();
    expect(mockStudentService.get()).toEqual(newStudent);
  });

  it('reset student object on form reset', function(){
    var emptyNewStudent = {};
    var newStudent = {
      fName: 'ABC',
      lName: 'XYZ',
    };
    FormCtrl.student = newStudent;

    //First submit some object to mockStudentService
    FormCtrl.submit();

    //Now we reset that value
    FormCtrl.reset();

    //The mockStudentService.get() method should return empty object
    expect(mockStudentService.get()).toEqual(emptyNewStudent);
  });
});
