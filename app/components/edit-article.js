import Ember from 'ember';

export default Ember.Component.extend({
  editArticle: false,
  actions: {
    editFormShow() {
      this.set('editArticle', true);
    },
    updateArticle(article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        story: this.get('story'),
        image: this.get('image')
      };
      this.set('editArticle', false);
      this.sendAction('updateArticle', article, params);
    }
  }
});
