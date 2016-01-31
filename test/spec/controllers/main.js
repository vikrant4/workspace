'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var FormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('degrees array has eight items', function () {
    expect(FormCtrl.degrees.length).toBe(8);
  });

  it('states array has 36 items', function(){
    expect(FormCtrl.states.length).toBe(36);
  });

  it('student object is empty after reset', function(){
    var emptyStudent = {};
    FormCtrl.reset();
    expect('FormCtrl.student').not.toEqual(emptyStudent);
  })
});
