'use strict';

describe('Service: StudentService', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var StudentService;
  beforeEach(inject(function (_StudentService_) {
    StudentService = _StudentService_;
  }));

  it('student object should be empty intially', function(){
    var emptyStudent = {};
    expect(StudentService.get()).toEqual(emptyStudent);
  });

  it('student object is initialized using set method', function(){
    var newStudent = {
      fName: 'Jade',
      lName: 'Smith'
    };
    StudentService.set(newStudent);
    expect(StudentService.get()).toEqual(newStudent);
  });

});
