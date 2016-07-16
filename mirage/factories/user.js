import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.name.firstName();
  },
  color(i){
    return faker.list.random('blue', 'green', 'teal', 'aquamarine', 'purple', 'red')(i);
  }
});
