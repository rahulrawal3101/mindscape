import mongoose from "mongoose";
import postiveSchema from "../schema/PositiveSchema";

const details  = mongoose.models.details || new mongoose.model('details',postiveSchema);
export default details