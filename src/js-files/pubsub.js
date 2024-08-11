export const pubsub = {
	events: {},

	subscribe: function(eventName, fn) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	},

	unsubscribe: function(eventName, fn) {
		if (this.events[eventName]) {
			for (var i = 0; i < this.events[eventName].length; i++) {
				if (this.events[eventName][i] === fn) {
					this.events[eventName].splice(i, 1);
					break;
				}
			}
		}
	},

	publish: function(eventName, data = null) {
		if (this.events[eventName]) {
			if (data)
				this.events[eventName].forEach((fn) => {
					fn(data);
				});
			else
				this.events[eventName].forEach((fn) => {
					fn();
				});
		}
	},
};