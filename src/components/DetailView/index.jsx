import React, { Component } from 'react';
import './styles.css';
import pokeball from './img/pokeball.png';

class DetailView extends Component {
    state = {
        profile : { "name": "pikachu", "id": "025", "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", "stats" :[{ "name": "hp", "base_stat": 35 },{ "name": "attack", "base_stat": 55 },{ "name": "defense", "base_stat": 40 },{ "name": "speed", "base_stat": 90 },{ "name": "Sp atk", "base_stat": 50 },{ "name": "Sp def", "base_stat": 50 }], "profile" :[{ "name" :"capture_rate", "value" : 190 },{ "name" :"egg_groups", "value" : "fairy, ground" },{ "name" :"abilities", "value" : "lightning-rod, static" },{ "name" :"gender_rate", "value" : 4 },{ "name" :"hatch_counter", "value" : 10 },{ "name" :"EVs", "value" : "0 Sp Att" }] }
    }

    render() { 
        const isEmptyState = this.props.disabled;
        return ( 
            <section id="detail_view" className="col-sm-4 col-xs-12">
                {isEmptyState ? (
                    <div className="card thumbnail col-xs-12">
                        <div className="text-center title">
                            <p>Empty state</p>
                        </div>
                        <img src={pokeball} className="img-responsive pokeball" alt="detail view empty state"></img>
                    </div>
                ) : (
                    <div className="card thumbnail col-xs-12">
                    <div className="text-center title">
                        <p>#<span>{this.state.profile.id}</span> - <span>{this.state.profile.name}</span></p>
                    </div>
                    <div className="profile">
                        <div className="non-padding col-xs-5">
                            <img className="img-responsive" src={this.state.profile.img} alt={this.state.profile.name}></img>
                        </div>
                        <div className="col-xs-7 stats">
                            <table>
                                <tbody>
                                {this.state.profile.stats.map(stat => 
                                    <tr>
                                        <td>{stat.name}</td>
                                        <td className="col-xs-12 non-padding">
                                            <div className="bar-back">
                                                <div className="bar-front">
                                                    <p className="persentage"><span>{stat.base_stat}</span>%</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-xs-12 details text-left">
                            <hr></hr>
                            <p>Profile</p>
                            <table className="col-xs-12">
                                <tbody>
                                    {this.state.profile.profile.map(detail => 
                                        <tr>
                                            <td>{detail.name}</td>
                                            <td>{detail.value}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )}
            </section>
        );
    }
}
 
export default DetailView;