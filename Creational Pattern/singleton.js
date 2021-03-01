/**
 * Singleton Pattern
The singleton pattern is a pattern used to
 restrict an object to a single instance. A singleton
  creates an instance of an object if that object
 does not exist. If it exists it returns the existing instance.
 * 
 * 
 */

class db {
  constructor(dbName, port, ip) {
    if (db.open) {
      return db.connection;
    }
    this.dbName = dbName;
    this.port = port;
    this.ip = ip;
    db.open = true;
    db.connection = this;
  }
  toString() {
    return `you open db name ${this.dbName}
       on port ${this.port} and IP ${this.ip} `;
  }
}
const mydb = new db("Cart", 8080, 255255255);
console.log(mydb.toString());
