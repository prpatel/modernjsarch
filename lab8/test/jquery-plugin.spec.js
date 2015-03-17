jasmine.getFixtures().fixturesPath = 'test/fixtures';

describe('jquery plugin', function() {
    var elem;

    beforeEach(function() {
        loadFixtures('example.html');
        elem = $('.my-element');
    });

    it('should add default classes to the element', function() {
        elem.plugin();
        expect(elem).toHaveClass('my default classes');
    });

    it('should add default text to the element', function() {
        elem.plugin();
        expect(elem).toHaveText('Some default text');
    });

    it('should add add custom classes to the element', function() {
        elem.plugin({ 'classes': 'my custom classes' });
        expect(elem).toHaveClass('my custom classes');
    });

    it('should add add custom text to the element', function() {
        elem.plugin({ 'text': 'Hello' });
        expect(elem).toHaveText('Hello');
    });
});
