var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
  title:       String,
  content:     String,
  tags:         [String],
});

var Article = mongoose.model('article', ArticleSchema);

module.exports = Article;