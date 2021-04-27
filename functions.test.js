const functions = require('./functions');

test('Output should be 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Output should not be undefined', () => {
    expect(functions.add(undefined , 0)).not.toBe(undefined)
})

test('Should be Null', () =>  {
    expect(functions.isNull()).toBe(null);
})

test('should be Falsy' , () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('should be user', ()=> {
    expect(functions.createUser()).toEqual({firstName: 'Tushar', lastName: 'Roy'});
})

afterAll(()=>{
    console.log('Finished Testing')
}) 

afterEach(() => {
    console.log('Runs after each test')
})

describe('My beverrage', () => {
    test('is delicious', () => {
        expect(functions.myBeverage.delicious).toBeTruthy();
    })
    test('is not sour', () => {
        expect(functions.myBeverage.sour).toBeFalsy();
    })
})

describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });
  
    test(`returned value not be greater than ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });
  
    test(`returned value not be less than ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  });