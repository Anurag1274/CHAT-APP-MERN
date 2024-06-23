import mongoose from 'mongoose'
import User from './user.models.js';

const conversationSchema = new mongoose.Schema({

    participants: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }],

    messages: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }]


}, {timestamps: true})

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;