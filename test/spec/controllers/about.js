'use strict';

describe('Controller: StudentCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var StudentCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    StudentCtrl = $controller('StudentCtrl', {
      // place here mocked dependencies
    });
  }));

  it('attach the student object', function () {
    expect(typeof StudentCtrl.student).toBe("object");
  });
});
