var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'LarbiBlog',
		author: 'Moufid Larbi',
		url: 'http://larbibouamrane.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];
Template.postsList.helpers({
	posts: postsData
})