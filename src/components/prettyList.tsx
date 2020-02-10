import * as React from "react"
import { Spinner, ListGroup } from 'react-bootstrap';
import { Person } from "../person";

//the Loading displays a spinning animation while we wait for the data to load
function Loading(props: {}): JSX.Element {
    return <div>
        <Spinner animation="border" />
    </div>;
}
//once we are done loading the data we are ready to display it in our list.
function Loaded(props: {data:any[]; rowClicked : (x:Person)=>void}) :  JSX.Element {
    return <div >
        <ListGroup style={{borderStyle: "solid", borderWidth: 1, height: 500, overflow: "auto"}}>
            {props.data.map(element => (<div key={element.name}><ListGroup.Item action onClick={() => props.rowClicked(element)}> {element.name} </ListGroup.Item></div>)) }

        </ListGroup>

    </div>;
}

//List component that neatly handles our data.
export interface ListProp {data: Person [], loading: boolean, rowClicked : (x:Person)=>void}


export class PrettyList extends React.Component<ListProp, {}> {
        constructor(props:ListProp) {
            super(props);
            this.state = {};
            
        }



    render() {
        if (!this.props.loading)
        {
            return <div>
                <Loaded data={this.props.data} rowClicked={(p) => this.props.rowClicked(p)}/>
            </div>;
        }
        else {
            return <div>
                <Loading />
            </div>;
        }
        
    }
}