declare class MT_TT800 {
	#private;
	constructor(seed?: number);
	nekoInteger(max: number): number;
	nekoFloat(): number;
	integer(): number;
	float(): number;
}
declare const random: MT_TT800;
export { MT_TT800, random };