import Ember from 'ember';

export default Ember.Controller.extend({
  newTitle: '',
  sortOptions: [
    { id: "rating:desc,title:asc", name: "Best" },
    { id: "title:asc", name: "By title (asc)" },
    { id: "title:desc", name: "By title (desc)" },
    { id: "rating:asc", name: "By rating (asc)" },
    { id: "rating:desc", name: "By rating (desc)" }
  ],
  selectedSort: 'rating:desc,title:asc',

  sortProperties: Ember.computed('selectedSort', function() {
    let selected = this.get('selectedSort');
    return (selected ? selected.split(',') : ['rating:desc', 'title:asc']);
  }),

  sortedSongs: Ember.computed.sort('model.songs', 'sortProperties'),

  newSongPlaceholder: Ember.computed('model.name', function() {
    return 'New ' + this.get('model.name') + ' song';
  }),

  songCreationStarted: false,
  canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function() {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),

  actions: {
    enableSongCreation() {
      this.set('songCreationStarted', true);
    }
  },

  disabled: Ember.computed('newTitle', function() {
    return Ember.isEmpty(this.get('newTitle'));
  })
});

