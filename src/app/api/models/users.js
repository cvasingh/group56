import { Schema, model, models } from 'mongoose';

const usersSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})


const User = models.User || model('User', usersSchema);


export default User;