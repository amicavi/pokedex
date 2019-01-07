import React, { Component } from 'react';
import './styles.css';
import pokeball from './img/pokeball.png';
import Parser from './Parser.js';

class DetailView extends Component {

    state = {
        profile: [],
        isEmptyState : true,
    }

    updateProfile = (profile) => {
        this.setState({
            profile: profile,
            isEmptyState : false
        })
    }

    componentDidUpdate(oldProps){
        if (oldProps.id !== this.props.id) {
            Parser.getPokemonDetails(this.props.id, this.updateProfile)
        }
    }

    render() {
        const isEmptyState = this.state.isEmptyState;
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
                                        <tr key={stat.name}>
                                            <td>{stat.name}</td>
                                            <td className="col-xs-12 non-padding">
                                                <div className="bar-back">
                                                    <div style={{width: stat.base_stat + '%'}} className="bar-front">
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
                                            <tr key={detail.name}>
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