import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'person',
  color: Ember.computed.readOnly('model.color'),
  someInformation: Ember.computed('model.name', 'model.color', function(){
    return 'Your name is ' + this.get('model.name') + ' and your favorite color is ' + this.get('model.color') + '.';
  }),
  colorStyle: Ember.computed('color', function(){
    let color = CSS.escape(this.get('color'));
    return Ember.String.htmlSafe('color: ' + color);
  }),
  actions: {
    updateName(newName){
      this.set('model.name', newName);
      this.send('saveModel');
    },
    updateColor(newColor){
      this.set('model.color', newColor);
      this.send('saveModel');
    },
    saveModel(){
      this.get('model').save().then(()=> {
        console.log('promise-fulfilled - the model was saved');
      }).catch(()=> {
        console.log('promise rejected or error caught');
      }).finally(()=> {
        console.log('this happens REGARDLESS!!!');
      });
    }
  }
});
