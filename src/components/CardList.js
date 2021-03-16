import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <Fragment>
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              email={robots[i].email} 
              name={robots[i].name} 
            /> 
          )
        })
      }
    </Fragment>
  )
}

export default CardList;