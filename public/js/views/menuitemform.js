var MenuItemForm = Backbone.View.extend({

	template: Handlebars.compile(
		'<form class="form-horizontal">' +
			'<fieldset>' +
				'<legend>Agrega un instrumento quirúrgico</legend>' +
				'<div class="control-group">' +
					'<input type="text" name="name" placeholder="Nombre" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="category" placeholder="Categoría" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="url" placeholder="Ruta URL" />' +
				'</div>' +
				'<div class="control-group">' +
					'<input type="text" name="imagepath" placeholder="Ruta Imagen" />' +
				'</div>' +
				'<button type="button" class="btn btn-danger">Cancel</button>' +
				'<button type="button" class="btn btn-primary">Save</button>' +
			'</fieldset>' +
		'</form>'
	),

	render: function  () {
		this.$el.html(this.template());
		this.delegateEvents({
			'click .btn-primary': 'save'
		});
		return this;
	},

	save: function () {
		this.setModelData();

		this.model.save(this.model.attributes, 
			{
				success: function (model) {
					app.menuItems.add(model);
					app.navigate('menu-items/' + model.get('url'), {trigger: true});
				}
			}
		);
	},

	setModelData: function  () {
		this.model.set({
			name: this.$el.find('input[name="name"]').val(),
			category: this.$el.find('input[name="category"]').val(),
			id: null,
			url: this.$el.find('input[name="url"]').val(),
			imagepath: this.$el.find('input[name="imagepath"]').val()
		});
	}

});