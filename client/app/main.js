var LernhowRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'signup': 'createUser'
  },
  initialize: function() {
    console.log('Lernhow CLIENT is live ...');
    this.globalNav = new GlobalNavView();
    $('.header').html(this.globalNav.el);
  },
  index: function(id) {
    console.log("hit index");
    if (!this.homeView) {
      this.homeView = new HomeView();
    }
    $('#container').html(this.homeView.el);
    this.globalNav.selectMenuItem('index');
  },

  createUser: function(id){
    console.log("hit create user");
    $('#container').html(new CreateUserView());
    this.globalNav.selectMenuItem('signup-form');
  }
});

utils.loadTemplates(['GlobalNavView', 'HomeView', 'CreateUserView'], function() {
  var app = new LernhowRouter();
  Backbone.history.start({ pushState: true });
});
