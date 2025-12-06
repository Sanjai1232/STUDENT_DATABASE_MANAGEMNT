const database = require("mongoose");
const DP=async()=>{
    database.connect(process.env.DP).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log("database not connected", err);
});
}
module.exports = DP;