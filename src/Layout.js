import React, { Component } from 'react';
import {
  Brand,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';

import imgBrand from './patternfly.png';

import Navigation from './Navigation'
import PageToolbar from './ToolbarLayout'
import UsageSummary from './UsageSummary'
import LimitSummary from './LimitSummary'


class Layout extends Component {
  render() {
    const Header = (
      <PageHeader
        toolbar={<PageToolbar />}
        topNav={<Navigation />}
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        style={{ borderTop: "2px solid #c00" }}
      />
    );

    return (
      <React.Fragment>
        <Page header={Header} >
          <PageSection variant={PageSectionVariants.light}>
            <LimitSummary />
          </PageSection>
          <PageSection variant={PageSectionVariants.light}>
            <UsageSummary />
          </PageSection>
        </Page>
      </React.Fragment>
    )
  }
}

export default Layout;