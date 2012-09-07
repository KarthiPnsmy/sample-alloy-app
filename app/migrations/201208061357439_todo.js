migration.up = function(db) {
	db.createTable("todo",
		{
		    "columns": {
		        "name": "string",
		        "active": "boolean"
		    },
		    "defaults": {},
		    "adapter": {
		        "type": "sql",
		        "tablename": "todo"
		    }
		}
	);
};

migration.down = function(db) {
	db.dropTable("todo");
};
