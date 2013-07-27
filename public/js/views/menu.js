var MenuView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' +
		'<a href="#/menu-items/new">' +
		'<button class="btn btn-inverse">' +
		'Nuevo' +
		'</button>' +
		'</a>' +
		'<a href="#">' +
		'<button class="btn btn-inverse">' +
		'Listas' +
		'</button>' +
		'</a>' +
		'{{#each models}}<a href="#/menu-items/{{attributes.id}}"><button class="btn btn-info">{{attributes.name}}</button></a>{{/each}}' +
		'</ul>' +
		'</div>'
	),

	initialize: function  () {
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
		this.listenTo(this.collection, "reset", this.render);
	},

	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});