import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
   this.route('bands', function() {
    this.route('band', { path: ':id' }, function() {
      this.route('songs');
    });
  });
     this.route('admin', function() {
    this.route('inquiries', function(){
    	this.route('inquiry', {path: ':id'}, function(){
    		this.route('inquiry');
    	});
    });
    this.route('subscriptions');
  });
});

export default Router;
