const myFunctions = require('./functions.js')

test ('return two test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test ('greeting test', () => {
    expect(myFunctions.greeting("James")).toBe('Hello, James')
})

test ('greeting test2', () => {
    expect(myFunctions.greeting("Jill")).toBe("Hello, Jill")
})


describe("math functions", () => {
    test ('add test', () => {
        expect(myFunctions.add(1, 2)).toBe(3)
    })
    
    test ('add test2', () => {
        expect(myFunctions.add(5, 9)).toBe(14)
    })

    it("multiply test", () => {
        expect(myFunctions.multiply(6,6)).toBe(36)
    })

    it("divide test", () => {
        expect(myFunctions.divide(6,6)).toBe(1)
    })

    it("subtract test", () => {
        expect(myFunctions.subtract(16,6)).toBe(10)
    })
})