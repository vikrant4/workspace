describe('Student info input app', function() {
  var testStudent;

  beforeEach(function(){
    testStudent = {
      fName: 'Bruce',
      lName: 'Willis',
      hDeg: 'B.Tech',
      dob: new Date(),
      state: 'Delhi',
      address: '2804',
      postalCode: '110078',
    };

    browser.get('http://localhost:9000');

    element(by.model('form.student.fName')).sendKeys(testStudent.fName);
    element(by.model('form.student.lName')).sendKeys(testStudent.lName);
    element(by.model('form.student.hDeg')).sendKeys(testStudent.hDeg);
    element(by.model('form.student.state')).sendKeys(testStudent.state);
    element(by.model('form.student.address')).sendKeys(testStudent.address);
    element(by.model('form.student.postalCode')).sendKeys(testStudent.postalCode);
  });
  it('change state to "student" on form submit', function() {

    //submit form
    var form = element(by.css('[ng-submit="studentForm.$valid && form.submit()"]'));
    form.submit();

    //check for state change
    expect(browser.getCurrentUrl()).toContain('#/student');
  });
  it('don\'t submit form when first name is not present', function() {
    //clear first name
    element(by.model('form.student.fName')).clear();

    //submit form
    var submitButton = element(by.css('[ng-disabled="studentForm.$invalid"]'));
    submitButton.click();

    //check for state change
    expect(browser.getCurrentUrl()).not.toContain('#/student');
  });
  it('empty the form.student object on reset', function() {
    //Enter data into the form

    element(by.css('[ng-click="form.reset()"]')).click();

    expect(element(by.model('form.student.fName')).getAttribute('value')).toEqual('');
  });
  it('match data to object present in "student" state', function() {
    //submit form
    var submitButton = element(by.css('[ng-disabled="studentForm.$invalid"]'));
    submitButton.click();
    //check for state change
    expect(element(by.binding('student.student.fName')).getText()).toEqual(testStudent.fName);
    expect(element(by.binding('student.student.lName')).getText()).toEqual(testStudent.lName);
    expect(element(by.binding('student.student.hDeg')).getText()).toEqual(testStudent.hDeg);
    expect(element(by.binding('student.student.state')).getText()).toEqual(testStudent.state);
    expect(element(by.binding('student.student.address')).getText()).toEqual(testStudent.address);
    expect(element(by.binding('student.student.postalCode')).getText()).toEqual(testStudent.postalCode);
  });
});
