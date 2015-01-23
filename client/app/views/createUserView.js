Lernhow.createUserView = Backbone.View.extend({

  className: 'create-user-form',

  template: Templates['createUser'],

  events: {
  },

  render: function(){
    this.$el.html( this.template() );
    return this;
  }

})
