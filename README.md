Type: String {#String}
==================================

A collection of the String Object methods and functions.

How to Use
----------

Use them like any other string method.

    "AnimalCracker".pluralize()


Function: String.camelize {#String:String-camelize}
---------------------------------------------------

By default, camelize converts strings to UpperCamelCase. If the argument to camelize is set to true then camelize produces lowerCamelCase.

### Syntax:

    str.camelize();

### Arguments:

1. lower - (*boolean*) if true, will return lowerCamelCase.

### Returns:

* (*string*) The camelized string.

### Example:

	"active_record".camelize(2); // "ActiveRecord"
	"post_category".camelize(true); // "postCategory"


Function: String.classify {#String:String-classify}
---------------------------------------------------

Create a class name from a plural table name like Rails does for table names to models. Note that this returns a string and not a Class.

### Syntax:

    str.classify();

### Returns:

* (*string*) The classifyd string.

### Examples:

    "egg_and_hams".classify(); // "EggAndHam"
    "posts".classify(); // "Post"


Function: String.dasherize {#String:String-dasherize}
---------------------------------------------------

Replaces underscores and spaces with dashes in the string.

### Syntax:

    str.dasherize();

### Returns:

* (*string*) The dasherized string.

### Examples:

    "puni_puni".dasherize(); // "puni-puni"
    "puni puni".dasherize(); // "puni-puni"


Function: String.foreign_key {#String:String-foreign_key}
---------------------------------------------------

Creates a foreign key name from a class name.

### Syntax:

    str.foreign_key([dontUnderScoreId]);

### Arguments:

1. dontUnderScoreId - (*boolean*) - If true, will omit the '_'.

### Returns:

* (*string*) The foreign_key-ed string.

### Examples:

    "Message".foreign_key(); // "message_id"
    "Message".foreign_key(false); // "messageid"



Function: String.humanize {#String:String-humanize}
---------------------------------------------------

Capitalizes the first word and turns underscores into spaces and strips a trailing "_id", if any.  Like titleize, this is meant for creating pretty output.

### Syntax:

    str.humanize();

### Returns:

* (*string*) The humanize-ed string.

### Examples:

    "employee_salary".humanize(); // "Employee salary"
    "author_id".humanize(); // "Author"



Function: String.ordinalize {#String:String-ordinalize}
---------------------------------------------------

Turns a number into an ordinal string used to denote the position in an ordered sequence such as 1st, 2nd, 3rd, 4th.

### Syntax:

    str.ordinalize();

### Returns:

* (*string*) The ordinalized string.

### Examples:

    "1".ordinalize(); // "1st"
    "3".ordinalize(); // "3rd"
    "24".ordinalize(); // "24th"


### Note

See also Number.ordinalize.




Function: String.pluralize {#String:String-pluralize}
---------------------------------------------------

Returns the plural form of the word in the string.

### Syntax:

    str.pluralize([count]);

### Arguments:

1. count - (*number*) - Optional, determines whether or not to pluralize the word.

### Returns:

* (*string*) The pluralized string.

### Examples:

    "post".pluralize();         // "posts"
    "sheep".pluralize();        // "sheep"
    "matrix".pluralize();       // "matrices"
    "person".pluralize();       // "people"
    "CrazyOctopus".pluarlize(); // "CrazyOctopi"
    
    "post".pluralize(1);     // "post"
    "post".pluralize(0);     // "posts"
    "post".pluralize(10);    // "posts"



Function: String.singularize {#String:String-singularize}
---------------------------------------------------

The reverse of pluralize, returns the singular form of a word in a string.

### Syntax:

    str.singularize();

### Returns:

* (*string*) The singularized string.

### Examples:

    "posts".singularize();       // "post"
    "octopi".singularize();      // "octopus"
    "CamelOctopi".singularize(); // "CamelOctopus"




Function: String.tableize {#String:String-tableize}
---------------------------------------------------

Create the name of a table like Rails does for models to table names. This method uses the pluralize method on the last word in the string.

### Syntax:

    str.tableize();

### Returns:

* (*string*) The tableized string.

### Examples:

    "RawScaledScorer".tableize(); // "raw_scaled_scorers"
    "egg_and_ham".tableize(); // "egg_and_hams"
    "fancyCategory".tableize(); // "fancy_categories"


Function: String.titleize {#String:String-titleize}
---------------------------------------------------

Capitalizes all the words and replaces some characters in the string to create a nicer looking title.

### Syntax:

    str.titleize();

### Returns:

* (*string*) The titleized string.

### Examples:

    "man from the boondocks".titleize(); // "Man From the Boondocks"
    "x-men: the last stand".titleize(); // "X Men: The Last Stand"



Function: String.underscore {#String:String-underscore}
---------------------------------------------------

The reverse of camelize. Makes an underscored, lowercase form from the expression in the string.

### Syntax:

    str.underscore();

### Returns:

* (*string*) The underscore-ed string.

### Examples:

    "ActiveRecord".underscore(); // "active_record"



Function: String.capitalizeFirst {#String:String-capitalizeFirst}
---------------------------------------------------

Capitalizes the first letter of a string.

### Syntax:

    str.capitalizeFirst();

### Returns:

* (*string*) The capitalizeFirst-ed string.

### Examples:

    "hello my name is Simon".capitalizeFirst(); // "Hell my name is Simon"



Function: String.lowercaseFirst {#String:String-lowercaseFirst}
---------------------------------------------------------------

Lower cases the first letter of a string

### Syntax:

    str.lowercaseFirst();

### Returns:

* (*string*) The lowercaseFirst-ed string.

### Examples:

    "Hello my name is Simon".lowercaseFirst(); // "hello my name is Simon"
