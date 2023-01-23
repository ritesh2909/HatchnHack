const mongoose = require("mongoose");

const CommitSchema = mongoose.Schema({

    customerId: {
        type: String,
        required: true
    },
    vendors:{
        type: Array,
        required: true
    }

})

const Commit = mongoose.model("Commit", CommitSchema);

module.exports = Commit;
