const stampit = require("stampit");

const character = stampit().props({
	name: "anonymous",
	lifePoints: 100,
	x: 0,
	y: 0
});

const mover = stampit().methods({
	move(xIncr, yIncr) {
		this.x += xIncr;
		this.y += yIncr;
		console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
	}
});

const slasher = stampit().methods({
	slash(direction) {
		console.log(`${this.name} slashed to the ${direction}`);
	}
});

const shooter = stampit()
	.props({
		bullets: 6
	})
	.methods({
		shoot(direction) {
			if (this.bullets > 0) {
				--this.bullets;
				console.log(`${this.name} shoot to the ${direction}`);
			}
		}
    });

    const gunslinger = stampit.compose(character, mover, shooter);

    const joel = gunslinger();
    joel.name = 'Palmer';
    joel.move(1, 0);
    joel.shoot('right');
    
