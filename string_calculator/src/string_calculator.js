
function SpaceshipFinder() {}
SpaceshipFinder.prototype.findSpaceship = function(string) {
	if(string === 'X') {
		return [0, 0];
	}
	return "Spaceship lost forever.";
};
