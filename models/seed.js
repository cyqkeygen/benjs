(function(){
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test');
  var Article = require('./articles');

  var articles = [
    {
      title: '文章一',
      content: '效果是让我们实现了，但其扩展性那就不一定强了。示例中只显示了五页和向前向后的七个显项，但往往我们很多情况下是不知道会有多少个分页项显示出来，而且也无法确定每个分页选项的宽度是多少，也就无法确认容器的宽度。',
      tags: ['javascript', 'nodejs']    
    },
    {
      title: '文章二',
      content: '效果是让我们实现了，但其扩展性那就不一定强了。示例中只显示了五页和向前向后的七个显项，但往往我们很多情况下是不知道会有多少个分页项显示出来，而且也无法确定每个分页选项的宽度是多少，也就无法确认容器的宽度。',
      tags: ['Mongodb', 'nodejs']    
    },
    {
      title: '文章三',
      content: '效果是让我们实现了，但其扩展性那就不一定强了。示例中只显示了五页和向前向后的七个显项，但往往我们很多情况下是不知道会有多少个分页项显示出来，而且也无法确定每个分页选项的宽度是多少，也就无法确认容器的宽度。',
      tags: ['Ruby', 'Rails']    
    }
  ];
  for (var i = articles.length - 1; i >= 0; i--) {
    var article = new Article(articles[i]);
    article.save(function(err, article){
      if (err) throw err;
      console.log(article.title + " 存储成功！");
    });
  };
} ());