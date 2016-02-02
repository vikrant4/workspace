'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var FormCtrl, mockStudentService;

  beforeEach(function(){
    module(function($provide){
      $provide.service('StudentService', function(){
        this.get = jasmine.createSpy('get');
        this.set = jasmine.createSpy('set');
      });
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, StudentService) {
    mockStudentService = StudentService;
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

  it('student object is empty after reset', function(){
    var emptyObject = {};
    FormCtrl.reset();
    expect(StudentService.get()).toEqual(emptyObject);
  });
});
