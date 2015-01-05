// Create Ember.js application and assign to a global varialble `App`
App = Ember.Application.create({
	LOG_VIEW_LOOKUPS: true,
	LOG_VERSION: true,
	LOG_STACKTRACE_ON_DEPRECATION: true,
	debugMode: true
});

var urls = [{
	id: '1',
	title: 'Android Developers',
	url: 'https://developer.android.com/training/'
}, {
	id: '2',
	title: 'Android Tutorial - Codelearn',
	url: 'http://codelearn.org/android-tutorial'
}, {
	id: '3',
	title: 'AndroidHive',
	url: 'http://androidhive.info/'
}, {
	id: '4',
	title: 'CodePath Android Cliffnotes',
	url: 'https://guides.codepath.com/android'
}, {
	id: '5',
	title: 'The Busy Coder\'s Guide to Android Development',
	url: 'https://commonsware.com/Android/'
}, {
	id: '6',
	title: 'Android Weekly',
	url: 'http://androidweekly.net'
}, {
	id: '7',
	title: 'Android Dev Subreddit',
	url: 'http://www.reddit.com/r/androiddev/'
}, {
	id: '8',
	title: 'Android Developer Blog',
	url: 'http://android-developers.blogspot.com/'
}, {
	id: '9',
	title: 'Android Developers - Youtube',
	url: 'http://www.youtube.com/user/androiddevelopers'
}, {
	id: '10',
	title: 'Android UI Patterns',
	url: 'http://www.androiduipatterns.com/'
}];


App.Router.map(function() {
  this.resource('web', { path: '/websites'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.WebRoute = Ember.Route.extend({
	model: function() {
		return 'Hello World';
	}
});

