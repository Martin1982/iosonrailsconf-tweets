Ext.define('ConferenceTweets.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Tweets',
                iconCls: 'home',
                xtype: 'tweets'
            },
            {
                title: 'About',
                iconCls: 'action',
                xtype: 'about'
            }
        ]
    }
});
