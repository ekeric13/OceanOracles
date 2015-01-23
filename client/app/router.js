Lernhow.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  },
  routes: {
    '': 'index',
    'create': 'createUser'
  },
  swapView: function(view) {
    this.$el.html(view.render().el);
  },
  index: function() {
    // get all guides
      // var guides = new Lernhow.guides();
    // init guidesView
      // var guidesView = new Lernhow.GuidesView({collection: guides})
    // swap the guidesView into place
      // this.swapView(guidesView);
    console.log("Index Route hit on Client");
  },

  createUser: function(){
    this.swapView(new Lernhow.createUserView())
  }
});
