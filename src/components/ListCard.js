'use client';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function ListCard({ item }) {
  return (
    <div>
      <Card>
        <Card.Body>{item}</Card.Body>
        <Button variant="success">Done</Button>
        <Button variant="danger">Not Done</Button>
      </Card>
    </div>
  );
}

ListCard.propTypes = {
  item: PropTypes.string.isRequired,
};
