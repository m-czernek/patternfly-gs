import React, { Component } from 'react';
import {
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  DropdownToggle,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';

import { BellIcon, CogsIcon } from '@patternfly/react-icons'

import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { css } from '@patternfly/react-styles';

export default class ToolbarLayout extends Component {

  state = {
    isDropdownOpen: false,
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen: isDropdownOpen
    });
  };

  onDropdownSelect = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  render() {
    const { isDropdownOpen } = this.state;

    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
            </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];

    return (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogsIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>John Doe</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}