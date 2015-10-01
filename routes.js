if (Meteor.isClient) {
    // Setup routing.
    Router.configure({
        layoutTemplate: 'layout'
    });
    Router.route('/', function() {
        this.render('main');
    });
}
