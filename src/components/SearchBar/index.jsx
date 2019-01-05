import React, { Component } from 'react';
import './styles.css';
// import {Grid, Row, Col, Glyphicon, FormGroup, InputGroup, FormControl} from "react-bootstrap";

export class SearchBar extends Component {
    state = { 
        value : ""
    }

    render() { 
        return (
            // <section id="search_bar">
            //     <Grid>
            //         <Row className="show-grid">
            //             <Col xs={12} sm={8}>
            //                 <form>
            //                     <FormGroup>
            //                         <InputGroup>
            //                             <InputGroup.Addon>
            //                                 <Glyphicon glyph="search" />
            //                             </InputGroup.Addon>
            //                             <FormControl
            //                                 type="text"
            //                                 value={this.state.value}
            //                                 placeholder="Search"
            //                                 onChange={this.handleChange}
            //                             />
            //                         </InputGroup>
            //                     </FormGroup>
            //                 </form>    
            //             </Col>
            //         </Row>
            //     </Grid>
            // </section>
            <section id="search_bar" className="col-sm-8 col-xs-12">
                <div className="inner-addon">
                    <i className="glyphicon glyphicon-search search-icon"></i>
                    <input type="text" placeholder="Search" className="form-control" />
                </div>
            </section>
        );
    }
}