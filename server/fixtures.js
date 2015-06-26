if (Posts.find().count() === 0) { var now = new Date().getTime();
var moufidId = Meteor.users.insert({ profile: { name: 'Moufid' }
});
var moufid = Meteor.users.findOne(moufidId);

var mouId = Meteor.users.insert({ profile: { name: 'Mou' }
});
var mou = Meteor.users.findOne(mouId);

var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: mou._id,
    author: mou.profile.name,
    commentsCount: 2,
    url: 'http://sachagreif.com/introducing-telescope/', submitted: now - 7 * 3600 * 1000
});
    Comments.insert({
        postId: telescopeId,
        userId: moufid._id,
        author: moufid.profile.name,
        submitted: now - 5 * 3600 * 1000,
        body: 'Interesting project Sacha, can I get involved?'
    });
    Comments.insert({
        postId: telescopeId,
        userId: moufid._id,
        author: moufid.profile.name, submitted: now - 3 * 3600 * 1000, body: 'You sure can Tom!'
    });


Posts.insert({
title: 'The Meteor Book',
userId: moufid._id,
author: moufid.profile.name,
url: 'http://themeteorbook.com', submitted: now - 12 * 3600 * 1000, commentsCount: 0
});
for (var i = 0; i < 10; i++) { Posts.insert({
title: 'Test post #' + i,
author: mou.profile.name,
userId: mou._id,
url: 'http://google.com/?q=test-' + i, submitted: now - i * 3600 * 1000, commentsCount: 0
}); }
}
