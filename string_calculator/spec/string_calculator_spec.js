describe('SpaceshipFinder', function() {
	let finder;

	beforeEach(function() {
		finder = new SpaceshipFinder();
	});

	it('should return "Spaceship lost forever." for an empty string', function() {
		expect(finder.findSpaceship('')).toBe("Spaceship lost forever.");
	});
	it('should return [0,0] for "X"', function() {
		expect(finder.findSpaceship('X')).toEqual([0,0]);
	});
	it('should return [1,0] for ".X"', function() {
		expect(finder.findSpaceship('.X')).toEqual([1,0]);
	});
	it('should return [2,1] for "....\n..X.\n...."', function() {
		expect(finder.findSpaceship('....\n..X.\n....')).toEqual([2,1]);
	});
	it('should return "Spaceship lost forever." for "....\n....\n...."', function() {
		expect(finder.findSpaceship('....\n....\n....')).toBe("Spaceship lost forever.");
	});
});
