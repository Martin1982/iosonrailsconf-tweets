Ext.define('ConferenceTweets.view.TweetDetail', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        title: 'Tweet',
        styleHtmlContent: true,
        data: {},
        tpl: '<img src="{profile_image_url}" align="left"><h3>On {created_at}, {from_user} wrote:</h3><p>{text}</p>'
    }
});
