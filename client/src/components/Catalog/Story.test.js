import {render, screen} from "@testing-library/react"
import { Story } from "./Story/Story"
import { BrowserRouter } from "react-router-dom"
describe('Story Component', ()=>{
    test('Show title', ()=>{
        const title = "Test Title"
        
        render(<BrowserRouter><Story _id={'id'} title={title} /></BrowserRouter>)
       
        expect(screen.queryByText(title)).toBeInTheDocument() ;
    })
})