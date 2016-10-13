import React from 'react';
import $ from 'jquery';
import _ from 'lodash';

const petNames = ['Fluffy', 'Pickles', 'Beethoven', 'Bailey', 'Bella'];
const petTypes = ['Dog', 'Cat', 'Burmese python', 'Gerbil'];

export default function getItems() {
  const tableItems = [];

  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://randomuser.me/api/?results=100',
      dataType: 'json',
      success: function(data) {
        _.forEach(data.results, (person) => {
          const obj = {};
          obj.name = <div><b><div>{_.startCase(`${person.name.first} ${person.name.last}`)}</div></b><div style={{color: '#999'}}>Boo this person.</div></div>;
          obj.email = person.email;
          obj.pets = [];
          for (let i = 0; i <= _.random(0, 3); i++) {
            obj.pets.push({
              petName: petNames[_.random(0, petNames.length - 1)],
              petType: petTypes[_.random(0, petTypes.length - 1)],
            });
          }
          // obj.phone = person.phone;
          // obj.city = _.startCase(person.location.city);
          tableItems.push(obj);
        });
        resolve(tableItems);
      },
    });
  });
}
