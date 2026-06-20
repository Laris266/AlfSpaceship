
function SpaceshipFinder() {}
SpaceshipFinder.prototype.findSpaceship = function(map) {
	const rows = map.split('\n');

	for (let y = 0; y < rows.length; y++) {
		const row = rows[y];
		const x = row.indexOf('X');
		if (x !== -1) {
			return [x, y];
		}
	}
	return "Spaceship lost forever.";
};
