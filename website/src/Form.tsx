import * as React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Col, FormGroup, Input, Label } from 'reactstrap';

const Form = (
  props: {
    readonly display: boolean;
    readonly uuid: string | undefined;
    readonly prefix: string;
  } & React.HTMLAttributes<HTMLElement>,
) => {
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={`/${props.prefix}/${props.uuid}/${password}`} />;
  }
  return props.display ? (
    <Col sm="6">
      <FormGroup>
        <Label>A decryption key is required, please enter it below</Label>
        <Input
          type="text"
          autoFocus={true}
          placeholder="Decryption Key"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button block={true} size="lg" onClick={() => setRedirect(true)}>
        Decrypt Secret
      </Button>
    </Col>
  ) : null;
};
export default Form;
