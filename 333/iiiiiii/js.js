new Vue({
	el: '.todolist',
	data: {
	item: '',
	items: [],
	show: false,
	
},

	methods: {
		addItem: function () {
			var item = {
				id: Date.now(),
				name: this.item,
				
};
		this.items.push(item);
			
			
		localStorage.setItem('items', JSON.stringify(this.items));
			
		this.item = '';
		
},
		edit:  function(){
			
		 this.show = !this.show  ;
			
		},


		removeItem: function (item) {
			var newItems = this.items.filter(function (i) {
						return item.id !== i.id;				
											 });
			this.items = newItems;
			
			localStorage.setItem('items', JSON.stringify(this.items));
		},
	

},
	
	ready: function (newItems) {
		this.items = JSON.parse(localStorage.getItem('items')) || [];
	},
	
});