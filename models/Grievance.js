// A MongoDB model for Grievance

const mongoose = require("mongoose");

const grievanceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Grievance || mongoose.model("Grievance", grievanceSchema);
