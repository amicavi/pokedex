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
            <section id="search_bar" class="col-sm-8 col-xs-12">
                <div class="inner-addon">
                    <i class="glyphicon glyphicon-search search-icon"></i>
                    <input type="text" placeholder="Search" class="form-control" />
                </div>
            </section>
        );
    }
}