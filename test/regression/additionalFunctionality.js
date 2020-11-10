const sel = require('../../data/selectors.json');
const inputData = require('../../data/testData.json');
const expected = require('../../data/expected.json');
const inputValue4andClick = require('../../helpers/inputValues4andClick');
const findTextAge = require('../../helpers/findTextAge');



describe('Additional functionality',function () {

    describe('Age converts to words',function (){

        it('TC -000 Check age converts to text', function () {
            browser.url('');
            for (let i = 0; i < inputData.testAge.length; i++) {
            inputValue4andClick(inputData.name, inputData.gender.she,inputData.testAge[1],
            let textAge = findTextAge();
            console.log(textAge);
                expect(textAge).toEqual(expected.checkAge[1]);
                $(sel.tryAgain).click();

            };

        });

    });
});