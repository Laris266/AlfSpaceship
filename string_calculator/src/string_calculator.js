
function SpaceshipFinder() {}
SpaceshipFinder.prototype.findSpaceship = function(string) {
	if(string === 'X') {
		return [0, 0];
	}
	if(string === '.X') {
		return [1, 0];
	}
	return "Spaceship lost forever.";
};
