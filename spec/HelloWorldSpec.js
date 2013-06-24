describe("Hello world", function(){
	it("says hello", function(){
		expect(helloWorld()).toEqual("Hello world!");
	});
});

describe("Returns true", function(){	
	it("returns true", function(){
		expect(returnsTrue()).toEqual(true);
	});
});