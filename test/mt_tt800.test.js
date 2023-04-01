const { MT_TT800, random } = require("../source/index");
const neko_seed = 652709;
const expected_neko_integer = [
	0x155ae, 0x114ea, 0x0e03d, 0x063da, 0x129db, 0x0d7b6, 0x0dc86, 0x07e40,
	0x159b3, 0x02616, 0x0cecc, 0x11e15, 0x0e8dd, 0x0c7ac, 0x03afd, 0x0e185,
	0x043e7, 0x04eb4, 0x0d612, 0x0b335, 0x08ed8, 0x0fea4, 0x0ffd0, 0x12814,
	0x154c0, 0x054b3, 0x180ba, 0x0744e, 0x18393, 0x0c9ee, 0x091d4, 0x0088d,
	0x0c8a1, 0x06788, 0x048be, 0x10556, 0x102d4, 0x0c8f7, 0x107a2, 0x04e82,
	0x033c4, 0x1211f, 0x05b9a, 0x0b1d4, 0x1444e, 0x061dc, 0x02789, 0x0525c,
	0x02008, 0x03d95
];
const expected_neko_float = [
	0.806637778289523, 0.211888743174189, 0.864945811167688, 0.22011185930216,
	0.799922406103479, 0.914127011981496, 0.544898262438017, 0.53931946051066,
	0.043399280502114, 0.513213533485949, 0.007462539188908, 0.41283404598658,
	0.821657702949837, 0.248237982202014, 0.799169878965041, 0.11923748172876,
	0.369569751823033, 0.193482234976204, 0.497848685657727, 0.56440628146453,
	0.428005304838873, 0.076664774311915, 0.865712331477844, 0.31866851990590,
	0.930670867928476, 0.401772973468219, 0.401562910649211, 0.04761918448988,
	0.306707985914117, 0.250428975111621, 0.604173349852430, 0.91084843074493,
	0.569076449027951, 0.075551570247452, 0.844233617442459, 0.64889086008795,
	0.703762514542531, 0.600787494631669, 0.615131661634432, 0.94250059277452,
	0.109678226212179, 0.018098984953071, 0.895254206406629, 0.84539478721084,
	0.941675729707289, 0.543106903972254, 0.744414500206606, 0.73926007750005,
	0.897921170531393, 0.008338882049981
];
const expected_integer = [
	0xbcf1f45a, 0xa26bf07e, 0x14aeff49, 0x6777a14e, 0x880c242f, 0xecef7842,
	0x03bd9352, 0x1dd55c94, 0x07bc39c7, 0x75e78dc2, 0xf0cf8478, 0xe2886f41,
	0xb63ac1a9, 0x57858a58, 0x16169989, 0xd8602211, 0x031818d3, 0x30d51520,
	0x1c61f026, 0x0b58fa81, 0x51af5cac, 0x609d3850, 0x278bf184, 0x50c1f860,
	0xee6f61b4, 0x33c2a07e, 0x55ee93b7, 0x40bd28c3, 0x713db4be, 0xdd9352e3,
	0x9254d8b9, 0x9c02ee00, 0x5f1bb40c, 0xf741d0a5, 0x6ee25c13, 0x375dd95b,
	0x0fb24339, 0xf3e2c95a, 0x8caa8c6f, 0x63858f2f, 0x70369b29, 0x617e2292,
	0x357ec977, 0xc0b7e080, 0x16474ada, 0xafdf1588, 0xa1502f9d, 0xc4577788,
	0xe3a9893c, 0x71662621
];
const expected_float = [
	0.738067, 0.634460, 0.080795, 0.404169, 0.531435, 0.925529, 0.014611,
	0.116537, 0.030216, 0.460564, 0.940666, 0.884894, 0.711834, 0.341881,
	0.086282, 0.845217, 0.012086, 0.190751, 0.110869, 0.044326, 0.319082,
	0.377399, 0.154479, 0.315460, 0.931387, 0.202189, 0.335672, 0.252886,
	0.442348, 0.865529, 0.571607, 0.609420, 0.371516, 0.965848, 0.433141,
	0.216276, 0.061314, 0.952679, 0.549477, 0.388757, 0.438333, 0.380831,
	0.208966, 0.752806, 0.087025, 0.686998, 0.630130, 0.766960, 0.889306,
	0.442965
];

test("classic use integer", function () {
	// There is  no real need to test since the operation is  basically the same
	// as  for the  other  examples. The only  difference  is that the  class is
	// auto-initialized (neko style) with the current timestamp (`Date.now()`).
	// The test is only there as an example of "how to use it".
	expect(Number.isInteger(random.integer())).toStrictEqual(true);
});

test("classic use float", function () {
	// There is  no real need to test since the operation is  basically the same
	// as  for the  other  examples. The only  difference  is that the  class is
	// auto-initialized (neko style) with the current timestamp (`Date.now()`).
	// The test is only there as an example of "how to use it".
	expect(Number.isInteger(random.float())).toStrictEqual(false);
});

test("nekoInteger result", function () {
	let generator = new MT_TT800(neko_seed);
	for (let i = 0; i < 50; i++) {
		let result = generator.nekoInteger(100000);
		expect(result).toStrictEqual(expected_neko_integer[i]);
	}
});

test("nekoFloat result", function () {
	let generator = new MT_TT800(neko_seed);
	for (let i = 0; i < 50; i++) {
		let result = generator.nekoFloat();
		expect(result).toBeCloseTo(expected_neko_float[i], 13);
	}
});

test("integer result", function () {
	let generator = new MT_TT800();
	for (let i = 0; i < 50; i++) {
		let result = generator.integer();
		expect(result).toStrictEqual(expected_integer[i]);
	}
});

test("float result", function () {
	let generator = new MT_TT800();
	for (let i = 0; i < 50; i++) {
		let result = generator.float();
		expect(result).toBeCloseTo(expected_float[i], 6);
	}
});