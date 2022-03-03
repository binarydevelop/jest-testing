describe('Mock property', () => {
    beforeAll(() => {
        mockedError = {"type": "return", "value": "return"}
        mockedErrorSecond = {"type": "return", "value": "return second"}
    })
    // check the instances of the mocked function 
    test('Check Instances of the mocked Function', () => {
        const myMock = jest.fn();
        const a = new myMock();
        a.name = 'A'
        const b = {};
        b.name = 'B'
        const bound = myMock.bind(b);
        bound();
        console.log(myMock.mock.instances);
        console.log('CALLS', myMock.mock.calls)
    })

    describe('Mock property calls', () => {
        const newMock = jest.fn();
        newMock.mockReturnValueOnce("return").mockReturnValueOnce("return second")
        newMock('first argument', 'second argument');
        newMock('secondCall first argument', 'secondCall second argument')

        // Mock Calls Length
        test('Mock Calls Length should pass', () => {
            expect(newMock.mock.calls.length).toBe(2);
        })

        test('Mock Calls Length should Fail', () => {
            expect(newMock.mock.calls.length).not.toBe(0);
        })

        //Arguments in Mock Call
        test('Mock Calls Arguments First call First Argument', () => {
//                                    |- callNumber
            expect(newMock.mock.calls[0][0]).toBe('first argument')
//                                       |- Argument Number
        })

        test('Mock Calls Arguments First call second argument', () => {
            expect(newMock.mock.calls[0][1]).toBe('second argument')
        })

        test('Mock Calls Arguments secondCall first argument', () => {
            expect(newMock.mock.calls[1][0]).toBe('secondCall first argument')
        })
        test('Mock Calls Arguments secondCall second argument', () => {
            expect(newMock.mock.calls[1][1]).toBe('secondCall second argument')
        })

        // instances length
        test('Mock Calls instance length', () => {
            expect(newMock.mock.instances.length).toBe(2)
        })

        //return value
        test('Mock Calls return value for first call', () => {
            expect(newMock.mock.results[0].value).toBe("return")
            expect(newMock.mock.results[0]).toEqual(mockedError)
                                    //  |- Call Numnber
        })

        test('Mock Calls return value for second call', () => {
            expect(newMock.mock.results[1].value).toBe("return second")
            expect(newMock.mock.results[1]).toEqual(mockedErrorSecond)
                                    //  |- Call Numnber
        })
    })

    describe("Functional continuation - passing style", () => {
        const filterTestFn = jest.fn()

        test('Filter function test', () => {
            filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

            const result = [11,12].filter(num => filterTestFn(num))
            // <= 11

            console.log(result);
            console.log(filterTestFn.mock.calls)
            expect(filterTestFn.mock.instances.length).toBe(2);
            //first call arguments
            expect(filterTestFn.mock.calls[0][0]).toBe(11);
            expect(filterTestFn.mock.calls[0][1]).toBe(undefined);
            //second call arguments
            expect(filterTestFn.mock.calls[1][0]).toBe(12);
            expect(filterTestFn.mock.calls[1][1]).toBe(undefined);
        })
    })
})




