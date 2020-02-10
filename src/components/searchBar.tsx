import * as React from "react"

import { Dropdown, Form, Button} from 'react-bootstrap';

//component for the search bar.  
//If you wanted to get more fancy you could include the ability to filter on more than just name
export interface SearchBarProps {filterList : (text:string) => void}

export class SearchBar extends React.Component<SearchBarProps, {text:string}> {
    constructor(props:SearchBarProps) {
        super(props);
        this.state = {text: ""};
        
    }
    //called every time the value in the input form is changed
    handleChangeInput = async (event:any) => {
        const value = event.target.value;
        await this.setState({
            text: value,
        });
        this.updateParent();
    }
    //calls the function passed down from the parent to pass the search string back to the parent level
    updateParent() {        
        this.props.filterList(this.state.text)
    }
    render() {
        return <div>
            <Form inline >
                <Form.Group controlId="search">
                    <Form.Label >Search</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Search" 
                        onChange={(e: any) => this.handleChangeInput(e)}/>
                </Form.Group>
            </Form>
        </div>;
        
    }
}