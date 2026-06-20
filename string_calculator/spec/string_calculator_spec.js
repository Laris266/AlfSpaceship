describe('Alf Spaceship', function() {
	beforeEach(function() {
		finder = new SpaceshipFinder();
	});

	it('should return spaceship lost forever for an empty string', function() {
		expect(finder.findSpaceship('X')).toEqual([0,0]);
	});
});
