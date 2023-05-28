import { Schema, model, models } from 'mongoose';

const scanSchema = new Schema({
    lyf: {
        type: Number
    },
    for: {
        type: String
    },
})


const Scan = models.Scan || model('Scan', scanSchema);


export default Scan;