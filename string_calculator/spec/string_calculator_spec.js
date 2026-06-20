describe('SpaceshipFinder', function() {
	let finder;
	
	beforeEach(function() {
		finder = new SpaceshipFinder();
	});

	it('should return "Spaceship lost forever." for an empty string', function() {
		expect(finder.findSpaceship('')).toBe("Spaceship lost forever.");
	});
});
