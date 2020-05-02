import React, { Component } from 'react';
import Presentation from '../../components/presentation/Presentation';
import Description from '../../components/description/Description';
import RelatedList from '../../components/related-list/RelatedList';

export default class Service extends Component {
    render() {
        return (
            <div>
                <Presentation />
                <Description />
                <RelatedList />
            </div>
        )
    }
}
