Ext.define('ConferenceTweets.controller.Tweets', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            'tweetslist': 'list',
            'tweetsnav': 'tweets'
        },
        control: {
            'tweetslist': {
                'itemtap': 'showTweetDetail'
            }
        }
    },

    showTweetDetail: function(cmp, index, target, record) {
        var detailView = Ext.create('ConferenceTweets.view.TweetDetail'),
            masterView = this.getTweetsnav();

        detailView.setData(record.getData());
        masterView.push(detailView);
    }
});