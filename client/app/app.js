window.Lernhow = Backbone.View.extend({
  template: Templates['layout'],
  events: {
    'click li a.index' : 'renderIndexView',
    'click li a.create-user': 'renderUserCreateView'
  },
  initialize: function() {
    console.log('Lernhow CLIENT is live ...');
    $('body').append(this.render().el);
    this.router = new Lernhow.Router({ el: this.$el.find('#container') });
    // trigger event session when user is created or logins
    this.router.on('route', this.updateNav, this);
    Backbone.history.start({ pushState: true });
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },
  renderCreateUserView: function(e){
    e && e.preventDefault();
    this.router.navigate('/create', { trigger: true });
  },
  updateNav: function(){
    console.log("router hit");
    // have a session-toggle class that undisplays html
    // this.$el.find('.navigation li a create-user')
    //   .toggleClass('session-toggle');
    // this.$el.find('.navigation li a login-user')
    //   .toggleClass('session-toggle');
    // this.$el.find('.navigation li a logout')
    //   .toggleClass('session-toggle');
    // this.$el.find('.navigation li a profile')
    //   .toggleClass('session-toggle');
  }

});
