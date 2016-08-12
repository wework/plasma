import $ from 'jquery';
import _ from 'lodash';

export default function getItems() {
  const tableItems = [];

  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://randomuser.me/api/?results=100',
      dataType: 'json',
      success: function(data) {
        _.forEach(data.results, (person) => {
          const obj = {};
          obj.name = _.startCase(`${person.name.first} ${person.name.last}`);
          obj.email = person.email;
          obj.phone = person.phone;
          obj.city = _.startCase(person.location.city);
          tableItems.push(obj);
        });
        resolve(tableItems);
      }
    });
  });
}