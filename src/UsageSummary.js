import React from 'react';
import { CalendarAltIcon } from '@patternfly/react-icons';
import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupText,
  TextInput,
  TextContent,
  Text,
} from '@patternfly/react-core';

import {
  Table,
  TableHeader,
  TableBody,
} from '@patternfly/react-table';

const InputGroupTextWithIcon = ({ htmlFor }) => {
  return (
    <InputGroupText component="label" htmlFor={htmlFor}>
      <CalendarAltIcon />
    </InputGroupText>
  )
}

export default class SimpleInputGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: ''
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: false,
        selected: event.currentTarget.value
      });
    };
  }

  render() {
    const array = [
      { def: 'Active Instances', term: '2', },
      { def: 'Active RAM', term: '40GB' },
      { def: 'This Period\'s VCPU-Hours', term: '4' },
      { def: 'This Period\'s RAM-Hours:', term: '80' }
    ]

    const columns = [
      'Instance Name',
      'VCPUs',
      'Disk',
      'RAM',
      'Time since created'
    ]

    const rows = [
      ['LinuxRHEL8.small', '1', '40GB', '5GB', 'About 1 hour ago'],
      ['LinuxRHEL8.big', '1', '40GB', '35GB', 'About 2 hours ago']
    ]
    return (
      <React.Fragment>
        <TextContent>
          <Text component="h2">Usage Summary</Text>
          <Text component="h4">Select a period of time to query its usage:</Text>
        </TextContent>
        <Form >
          <FormGroup isInline fieldId="date-from" >
            <InputGroup style={{ lineHeight: '36px', maxWidth: '50%' }}>
              <InputGroupTextWithIcon htmlFor="date-from" />
              <TextInput name="date-from" id="date-from" type="date" aria-label="Date from input" />
              <div style={{ 'margin': '0px 5px' }}>To</div>
              <InputGroupTextWithIcon htmlFor="date-to" />
              <TextInput name="date-to" id="date-to" type="date" aria-label="Date to input" />
              <Button variant="primary">Submit</Button>
            </InputGroup>
          </FormGroup>
        </Form>
        <TextContent>
          <dl style={{ fontSize: '13px', marginTop: '10px' }}>
            {array.map((item, i) =>
              <React.Fragment key={i}>
                <dt style={{ float: 'left', clear: 'left', textAlign: 'right', width: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} >{item.def}</dt>
                <dd style={{ marginLeft: '180px' }}>{item.term}</dd>
              </React.Fragment>
            )}
          </dl>
        </TextContent>
        <Table caption="Summary" cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
