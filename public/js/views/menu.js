var MenuView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul class="zero">' +
		'<a href="#">' +
		'<button class="btn btn-inverse marginspecial">' +
		'Inicio' +
		'</button>' +
		'</a>' +
		'<a href="#/menu-items/new">' +
		'<button class="btn btn-inverse marginspecial">' +
		'Nuevo' +
		'</button>' +
		'</a>' +
		'{{#each models}}<a href="#/menu-items/{{attributes.id}}"><button class="btn btn-info marginspecial">{{attributes.name}}</button></a>{{/each}}' +
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