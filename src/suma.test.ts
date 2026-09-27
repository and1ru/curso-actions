import { describe, it, expect } from 'vitest'
import { suma } from './suma'

describe("", () => {
    it("test 1", () => {
        const result = suma(1,2)
        expect(result).toBe(3)
    })
})