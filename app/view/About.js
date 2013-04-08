Ext.define('ConferenceTweets.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [
            {
                xtype: 'titlebar',
                title: 'About',
                docked: 'top'
            },
            {
                styleHtmlContent: true,
                html: '<h3>#IosOnRailsCOnf2013 Tweets app</h3> <p>By: The awesome attendees</p>'
            }
        ]
    }
});
