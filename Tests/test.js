var tests = {
	camelize: [
		['active_record', 'ActiveRecord'],
		['barn_door'    , 'barnDoor'    , true]
	],
	classify: [
		['egg_and_hams', 'EggAndHam'],
		['posts', 'Post']
	],
	dasherize: [
		['hello_there', 'hello-there'],
		['hello there', 'hello-there'],
		['hello   there', 'hello-there']
	],
	foreign_key: [
		['Message', 'message_id'],
		['Message', 'messageid', true]
	],
	humanize: [
		['employee_salary', 'Employee salary'],
		['author_id', 'Author']
	],
	ordinalize: [
		['1', '1st'],
		['2', '2nd'],
		['3', '3rd'],
		['4', '4th'],
		['11', '11th'],
		['12', '12th'],
		['13', '13th'],
		['21', '21st'],
		['22', '22nd'],
		['23', '23rd'],
		['24', '24th']
	],
	pluralize: [
		['post',         'posts'],
		["octopus",      "octopi"],
		["sheep",        "sheep"],
		["words",        "words"],
		["CamelOctopus", "CamelOctopi"],
		['quiz',         'quizzes'],
		['matrix',       'matrices'],
		['person',       'people'],
		['SweetCategory','SweetCategories'],
		['house',        'house', 1],
		['house',        'houses', 2],
		['house',        'houses', 0]
	],
	singularize: [
		['posts',         'post'],
		["octopi",        "octopus"],
		["sheep",         "sheep"],
		["words",         "word"],
		["CamelOctopi",   "CamelOctopus"],
		['quizzes',       'quiz'],
		['matrices',      'matrix'],
		['people',        'person'],
		['SweetCategories','SweetCategory']
	],
	tableize: [
		['RawScaledScorer', 'raw_scaled_scorers'],
		['egg_and_ham',     'egg_and_hams'],
		['fancyCategory',   'fancy_categories']
	],
	titleize: [
		['man from the boondocks', 'Man From The Boondocks'],
		['x-men: the last stand', 'X Men: The Last Stand']
	],
	underscore: [
		['ActiveRecord', 'active_record']
	]
}

function log(message){
	new Element('pre', { html: message }).inject(document.body);
}

var passed = 0;
var failed = 0;

for (i in tests){
	tests[i].each(function(test){
		var result = test[0][i](test[2] || '');
		if (result == test[1]) {
			passed++;
		} else {
			log('Failed! -- ' + i + '.' + test[0] + '('+(test[2] || '')+') = ' + result + '; expected: ' + test[1]);
			failed++;
		}
	});
};

var total = passed + failed;
log('Failed: ' + failed + ' out of ' + total + ' tests.');
