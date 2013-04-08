Ext.define('ConferenceTweets.model.Tweets', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'Number' },
            { name: 'text', type: 'String' },
            { name: 'created_at', type: 'String' },
            { name: 'from_user', type: 'String' },
            { name: 'profile_image_url', type: 'String' }
        ]
    }
});