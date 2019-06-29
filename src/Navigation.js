import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavList,
    NavVariants,
} from '@patternfly/react-core';

export default class Navigation extends Component {
    state = {
        activeItem: 0
    }

    onNavSelect = e => {
        this.setState({
            activeItem: e.itemId,
        })
    }

    render() {
        const { activeItem } = this.state;

        const items = [
            "Project",
            "Compute",
            "Volumes",
            "Network",
        ]

        return (
            <Nav onSelect={this.onNavSelect} aria-label="Nav">
                <NavList variant={NavVariants.horizontal}>
                    {items.map((navItem, i) =>
                        <NavItem key={i} itemId={i} isActive={activeItem === i}>
                            {navItem}
                        </NavItem>)}
                </NavList>
            </Nav>
        )
    }
}