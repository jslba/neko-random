class MT_TT800 {
	#index = 0;
	#phase = 7;
	#magic = [0x0n, 0x8ebfd028n];
	#seeds = [
		0x95f24dabn, 0x0b685215n, 0xe76ccae7n, 0xaf3ec239n, 0x715fad23n,
		0x24a590adn, 0x69e4b5efn, 0xbf456141n, 0x96bc1b7bn, 0xa7bdf825n,
		0xc1de75b7n, 0x8858a9c9n, 0x2da87693n, 0xb657f9ddn, 0xffdc8a9fn,
		0x8121da71n, 0x8b823ecbn, 0x885d05f5n, 0x4e20cd47n, 0x5a9ad5d9n,
		0x512c0c03n, 0xea857ccdn, 0x4cc1d30fn, 0x8891a8a1n, 0xa6b7aadbn
	];
	constructor(seed = 0) {
		if (seed > 0 && seed <= 0xffffffff) { // only 32bit seeds
			this.#init(BigInt(seed));
		}
	}
	#init(s) {
		for (let i = 0; i < this.#seeds.length; i++) {
			this.#seeds[i] ^= s;
		}
	}
	nekoInteger(max) {
		return (this.integer() & 0x3fffffff) % max;
	}
	nekoFloat() {
		let big = 0x100000000;
		return ((this.integer() / big + this.integer()) / big + this.integer()) / big;
	}
	integer() {
		if (this.#index == this.#seeds.length) {
			for (let i = 0; i < this.#seeds.length; i++) {
				let sid = i + this.#phase;
				if (i >= (this.#seeds.length - this.#phase)) {
					sid = sid - this.#seeds.length;
				}
				this.#seeds[i] = this.#seeds[sid] ^ (this.#seeds[i] >> 1n) ^ this.#magic[Number(this.#seeds[i] % 2n)];
			}
			this.#index = 0;
		}
		let result = this.#seeds[this.#index++];
		result ^= (result <<  7n) & 0x2b5b2500n;
		result ^= (result << 15n) & 0xdb8b0000n;
		result &= 0xffffffffn;
		// 1996 improve lower bit's corellation:
		result ^= (result >> 16n);
		return Number(result);
	}
	float() {
		return this.integer() / 0xffffffff;
	}
}

const random = new MT_TT800(Date.now());

module.exports = { MT_TT800, random };
