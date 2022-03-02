describe('Mock Implementations', () => {
    test('mockingImplementation', () => {
        const myMockFn = jest.fn();

        myMockFn((val) => console.log(val));    
    })

    test('mockingImplementationOnce', () => {
        const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');
      
      console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
      // > 'first call', 'second call', 'default', 'default'        
    })

    test('mocking This', () => {
        const myMockFn = {
            thisFunction : jest.fn().mockReturnThis() // it will return this object 
        } 
        myMockFn.thisFunction();
        expect(myMockFn.thisFunction).toHaveBeenCalled();
        
    })

    test('mock Names', () => {
        const myMockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add');

        // expect(myMockFn).toBeCalled(); 
        // will throw error with the name provided
    })

    test('Custom Matchers', () => {
        const mockFunction = jest.fn().mockReturnValue("Mocked")
        const arg1 = "Mocking"
        const arg2 = "Custom Matcher"

        mockFunction(arg1, arg2);

        expect(mockFunction).toBeCalled();
        expect(mockFunction).toHaveBeenCalledWith(arg1, arg2);
        expect(mockFunction).toHaveBeenLastCalledWith(arg1, arg2);
        expect(mockFunction).toMatchSnapshot();
    })

})
