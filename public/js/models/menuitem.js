var MenuItem = Backbone.Model.extend({
	urlRoot: '/items',
	defaults: {
		imagepath: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQa1SuNi4lNC2EAt5qvkpvmMzqIZ1VfVQAXfyfKbdBo68SS-Gv1Mg',
		name: ''
	}
});