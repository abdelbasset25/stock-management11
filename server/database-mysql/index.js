const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "25445833@Basset",
  database: "myData",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const selectAll = (callback) => {
  connection.query("SELECT * FROM products", (error, results) => {
    callback(error, results);
  });
};

const insert = (product, callback) => {
  const sql = "INSERT INTO products SET ?";
  connection.query(sql, product, (err, results) => {
    callback(err, results);
  });
};

const deleteProduct = (id, callback) => {
  const sql = "DELETE FROM products WHERE id = ?";
  connection.query(sql, id, (err, results) => {
    callback(err, results);
  });
};

const updateProduct = (id, product, callback) => {
  const sql = "UPDATE products SET ? WHERE id = ?";
  connection.query(sql, [product, id], callback);
};

module.exports = {
  connection,
  selectAll,
  insert,
  deleteProduct,
  updateProduct,
};
