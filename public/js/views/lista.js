var ListaView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' +
		'{{#each models}}' +
		'<li>' +
		'<figure><img class="mini" src="{{attributes.imagepath}}"></figure>' +
		'<div class="informacion">' +
		'<h4>{{attributes.name}}}</h4><p>${{attributes.price}}} MXN</p>' +
		'<br><a href="/#/menu-items/{{attributes.url}}}">' +
		'<button class="btn">Detalles</button>' +
		'</a></div></li>{{/each}}'
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