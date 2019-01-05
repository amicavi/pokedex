import React, { Component } from 'react';
import './styles.css';
import pokeball from './img/pokeball.png';

export class DetailView extends Component {
    // state = {  }
    render() { 
        return ( 
            <section id="detail_view" className="col-sm-4 col-xs-12">
                <div className="card thumbnail col-xs-12">
                    <div className="text-center title">
                        <p>#001 - Bulbasaur</p>
                    </div>
                    <div className="profile">
                        <div className="col-xs-5">
                            <img className="img-responsive" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokemon"></img>
                        </div>
                        <div className="col-xs-7 stats">
                            <ul>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 details text-left">
                            <hr></hr>
                            <p>Profile</p>
                            <table className="col-sm-6 col-xs-12">
                                <tbody>
                                    <tr>
                                        <td>Height:</td>
                                        <td>0.7 m</td>
                                    </tr>
                                    <tr>
                                        <td>Catch Rate:</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>Egg Groups:</td>
                                        <td>Monster, Grass</td>
                                    </tr>
                                    <tr>
                                        <td>Abilities:</td>
                                        <td>Chlorophyll, Overgrow</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="col-sm-6 col-xs-12">
                                <tbody>
                                    <tr>
                                        <td>Weight:</td>
                                        <td>6.9 kg</td>
                                    </tr>
                                    <tr>
                                        <td>Gender Ratio:</td>
                                        <td>87.5% ♂ 12.5% ♀</td>
                                    </tr>
                                    <tr>
                                        <td>Hatch steps:</td>
                                        <td>5100</td>
                                    </tr>
                                    <tr>
                                        <td>Evs:</td>
                                        <td>1 5p Att</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card thumbnail col-xs-12">
                    <div className="text-center title">
                        <p>Empty state</p>
                    </div>
                    <img src={pokeball} className="img-responsive pokeball" alt="detail view empty state"></img>
                </div>
            </section>
        );
    }
}
 
// export default DetailView;