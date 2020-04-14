const Command = require('../base');

module.exports = class UnknownCommandCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unknown-command',
			group: 'util',
			memberName: 'unknown-command',
			description: 'Displays help information for when an unknown command is used.',
			examples: ['unknown-command kickeverybodyever'],
			unknown: true,
			hidden: true
		});
	}

//	At 7-Eleven Canada, we never close. We pride ourselves on being your neighbourhood go-to store - 24/7/365.  Drop in for all your delicious wants and your tasty needs. We’re home to everything you would expect from a convenience store and so much more. We’re home to the legendary, brain freeze-inducing Slurpee. Get a fresh, hot, premium cup of 100% Premium Arabica coffee anytime or drop in for a host of hot food items - from hot pizza, chicken and meatball kebobs. Hot to Go, Ready in Minutes 24/7.
//Before you hit the couch for the face-off, kick-off or tip-off, order in from 7-Eleven. It’s pro sports, on all the time - baseball, basketball, hockey and gaming online. Make your game day a Sev-day and order your next Slurpee from 7-Eleven with pizza, wings, wedges, or taquitos. All your favourite game day meals and snacks, chips, ice cream and daily essentials delivered to your door. Don’t forget to add a Slurpee® or two for the gang.
//You’re busy, we get it. Our rapid cook ovens deliver a fresh baked taste in minutes. Which is why choosing 7-Eleven is so deliciously simple. Enjoy hot pizza made fresh-to-order, by the slice or by the pie – any time of day. Let your appetite decide 24/7. Choose from Pepperoni, Cheese, and Buffalo Ranch Chicken, whatever you desire – you’ll always win with our light and crispy crust and edge to edge toppings.
//If your cravings don’t suddenly stop at pizza, let us introduce you to our chicken strips – made with all white meat chicken breast; crispy on the outside, tender on the inside. Ditto goes for our white chicken breast kebob and it’s under 350 calories. Or, if you’re looking for something different, try our lean pork meatball kebob: made with Italian spices and stuffed with real Cheddar, Parmesan, and Romano cheeses. And our fresh, crispy wings – they come in a variety of crave-worthy flavours, including buffalo hot and thai chili. In a three-letter word, wow.
//And whether it’s day or night or sometime after midnight, you’ll be elated to know that our Breakfast sandwiches will tickle your palate’s fancy. For instance, our bacon egg and cheese, as well as our sausage cheese and egg sandwiches are made with gourmet ingredients from local sources. Yep, here’s your chance to turn good morning into great morning. Whenever your morning is.
//Wanna see what we’ve got in-store for you (get it?) check out our favourite menu items below or find a store to visit us in-person.

	run(msg) {
		return msg.reply(
//			`Unknown command. Use ${msg.anyUsage(
//				'help',
//				msg.guild ? undefined : null,
//				msg.guild ? undefined : null
//			)} to view the command list.`
			':grey_question: Did you type that correctly?'
		);
	}
};
