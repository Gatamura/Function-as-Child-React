import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class functionAsChild extends Component {

    state = {
        data: {
            nome: 'Gabriel',
            sobrenome: 'Tamura',
            idade: 22
        }
    }

    render() {
        
        const { render } = this.props;
        const { data } = this.state;

        return (
            <Fragment>
                {render(data)}
            </Fragment>
        );
    }
}

functionAsChild.propTypes = {
    render: PropTypes.func
};

export default functionAsChild;