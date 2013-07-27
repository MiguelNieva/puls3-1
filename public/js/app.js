var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails",
	},

	initialize: function  () {
		this.menuItems = new MenuItems();
		this.menuItems.fetch();

		this.menuItemModel = new MenuItem();
		this.menuItemView = new MenuItemDetails(
			{
				model: this.menuItemModel
			}
		);
				
		this.menuView = new MenuView({collection: this.menuItems});
		this.listaView = new ListaView({collection: this.menuItems});
		this.menuItemForm = new MenuItemForm({model: new MenuItem()});

	},	

	list: function () {
	$('#listas').html(this.menuView.render().el);
	$('#app').html(this.listaView.render().el);
	},

	itemForm: function () {
	$('#app').html(this.menuItemForm.render().el);
	},

	itemDetails: function (item) {
		this.menuItemView.model = this.menuItems.get(item);
		$('#app').html(this.menuItemView.render().el);
	},

});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});