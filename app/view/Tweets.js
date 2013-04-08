Ext.define('ConferenceTweets.view.Tweets', {
    extend: 'Ext.navigation.View',
    xtype: 'tweets',
    requires: [
        'Ext.dataview.List',
        'Ext.plugin.PullRefresh'
    ],
    config: {
        items: [
            {
                title: 'Tweets',
                xtype: 'list',
                store: 'Tweets',
                styleHtmlContent: true,
                itemTpl: '<strong>@{from_user}:</strong> {text}',
                onItemDisclosure: true,
                plugins: [
                    {type: 'pullrefresh'}
                ]
            }
        ]
    }
});
