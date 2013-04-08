Ext.define('ConferenceTweets.store.Tweets', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'ConferenceTweets.model.Tweets',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json',
            extraParams: {
                q: '#iosonrailsconf',
                rpp: 20,
                result_type: 'recent'
            },
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});