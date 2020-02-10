import * as React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { PrettyList } from "./prettyList";

import { InfoBox } from "./infoBox";
import { Person } from "../person";
import {SearchBar} from "./searchBar";
export interface MainProps {}

export class Main extends React.Component<MainProps, {data: Person [], filteredData: Person[], filterText:string, loading: boolean, person:Person|null }> {
    constructor(props:MainProps) {
        super(props);
        this.state = {data: [], filteredData: [], filterText:"", loading: true, person:null}
        
    }
    //passed into PrettyList
    rowClicked(userData:Person) {
        this.setState({person: userData});
    }
    //filters the list based on the value passed back to us from the searchBar
    filterFunction(value:Person){
        return value.name.toUpperCase().includes(this.state.filterText.toUpperCase());
    }
    //passed into SearchBar
    filterList(text:string) {
        this.setState({filterText: text});
        
        this.setState({filteredData: this.state.data.filter((value:Person) => this.filterFunction(value))});
    }   

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/efinky/Temp/master/assignment.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                data: myJson.data, 
                filteredData: myJson.data,
                loading: false
            });
        }).catch((reason) => {
            console.log(reason);
        });
    }
    render() {
        return <div >
        <Container style={{borderStyle: "solid", borderWidth: 10}}>
            <Row>
                <Col lg><SearchBar filterList={(text:string) => this.filterList(text)}/></Col>
            </Row>
            <Row>
                <Col sm={4}><PrettyList  data={this.state.filteredData} loading ={this.state.loading} rowClicked={(p) => this.rowClicked(p)} /></Col>
                <Col sm={8}><InfoBox person={this.state.person}/></Col>
            </Row>
        </Container>
        
        </div>;
    }
}