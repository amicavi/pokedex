import React, { Component } from 'react';
import './styles.css';
import pokeball from './img/pokeball.png';

export class DetailView extends Component {
    // state = {  }
    render() { 
        return ( 
            <section id="detail_view" class="col-sm-4 col-xs-12">
                <div class="card thumbnail col-xs-12">
                    <div class="text-center title">
                        <p>#001 - Bulbasaur</p>
                    </div>
                    <div class="profile">
                        <div class="col-xs-5">
                            <img class="img-responsive" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokemon"></img>
                        </div>
                        <div class="col-xs-7 stats">
                            <ul>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                            </ul>
                        </div>
                        <div class="col-xs-12 details text-left">
                            <hr></hr>
                            <p>Profile</p>
                            <table class="col-sm-6 col-xs-12">
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
                            </table>
                            <table class="col-sm-6 col-xs-12">
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
                            </table>
                        </div>
                    </div>
                </div>
                <div class="card thumbnail col-xs-12">
                    <div class="text-center title">
                        <p>Empty state</p>
                    </div>
                    <img src={pokeball} class="img-responsive pokeball" alt="detail view empty state"></img>
                </div>
            </section>
        );
    }
}
 
// export default DetailView;