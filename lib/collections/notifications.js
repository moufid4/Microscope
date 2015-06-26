Notifications = new Meteor.Collection('notifications');
ownsDocument = function(userId, doc) { return doc && doc.userId === userId;
}
Notifications.allow({
	update: ownsDocument
});

createCommentNotification = function(comment) {
	var post = Posts.findOne(comment.postId);

	if (comment.userId !== post.userId) {
		Notifications.insert({
			userId: post.userId,
			postId: post._id,
			commentId: comment._id,
			commenterName: comment.author,
			read: false
		});
	};
};