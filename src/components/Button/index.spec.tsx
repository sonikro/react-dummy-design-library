import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import React from "react"
import { Button } from "."

describe("Button", () => {
    it("renders with correct text", () => {
        const document = render(<Button text="banana" />)
        expect(document.getByText("banana")).toBeInTheDocument()
    })
})