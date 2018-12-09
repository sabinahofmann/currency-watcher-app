import React from 'react';
import { Form, Input } from 'reactstrap';

const SearchInput = () => {
    return (
      <Form inline onSubmit={e => e.preventDefault()}>
          <Input
              type="search"
              placeholder="Search..."
          />
      </Form>
    );
};

export default SearchInput;