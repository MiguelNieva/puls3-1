var ListaView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' +
		'{{#each models}}<img class="mini"src="{{attributes.imagepath}}" />{{/each}}' +
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