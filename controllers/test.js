module.exports = {
	// index
    test: (req, res) => {
		// Return them as json
		let r = Math.random().toString(36).substring(7);
		res.send(r);
		console.log("random", r);
	},

	// show
    testdb: (req, res) => {
    	let query = "SELECT * FROM `employees`"; 

		con.query(query, (err,rows) => {
			if (err) {
				// res.redirect('/');
			}

			res.send(rows);
			console.log(rows);
		});
	}
};