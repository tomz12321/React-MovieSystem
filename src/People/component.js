import React, {Component} from 'react';
import PropTypes from 'prop-types';

class People extends Component{
    constructor(){
        super();
        this.attributes = {
            name: "Tom",
            age: "30",
            father: "Andy",
            mother: "Bonnie",
        };
        this.childrenList = {
            children1: "Cathy",
            children2: "Don",
            children3: "Eddie",
        }

        render(){
            const { Name } = this.props;
            return (
                <div>
                    <p> Name: { this.attribute.name }; </p>
                    <p> Age: { this.attribute.age }; </p>
                </div>
            )
        };
    }
}

People.proTypes = {
    Name: PropTypes.string.isRequired,
    //setPokemonHandler: PropTypes.func.isRequired,
};

export default Search;