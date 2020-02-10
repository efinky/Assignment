import * as React from "react"
import {Figure} from 'react-bootstrap';

import { Person } from "../person";

//the box that contains the user information including email if email visibility is set to public
export interface InfoBoxProps {person: Person|null; }

export class InfoBox extends React.Component<InfoBoxProps, {}> {

    render() {
        if (this.props.person != null)
        {
            return <div>
                <h1>{this.props.person.name} <div style={{width: 300, height: 'auto'}}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={this.props.person.image}
                            />
                        </Figure>
                    </div>
                </h1>
                <h4>{this.props.person.department + " Department, " + this.props.person.role + " " + this.props.person.title}</h4>
                <p>Phone: {this.props.person.phone} </p>
                <p> Email: {this.props.person.address.length > 0 ? (this.props.person.address[0].visible == "Public" ? (this.props.person.address[0].email  + "\n") : ("N/A\n")) :("N/A\n")}</p>
                <p> SlackName: {this.props.person.slack}</p>

            </div>;
        } else {
            return <div>
                
            </div>;
        }
        
    }
}