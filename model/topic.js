const mongoose = require('mongoose')
const Schema =mongoose.Schema

const topicSchema = new Schema ({

    // For course content
    topicName :String,
    topicType:String,
    description:String,
    moduleId: { type: Schema.ObjectId, ref: 'module',default:'' },
    user: { type: Schema.ObjectId, ref: 'user' },

    // For introduction
    inductionName:String,
    inductionCode:Number,

    //For Techniques
    techniquesName:String,
    techniquesCode:Number,
    
    //For Language Patterns
    languagePatternsName:String,
    languagePatternsCode:Number,
    languagePatternsDefination:String,
    languagePatternsExample:String,
    selectInductions:[{type:String,default:""}],
    selectTechniques:[{type:String,default:""}],
    patternsType:[{type:String,default:""}],
    keyReminder:String,

    image:[String],
    video:[String],
    audio:[String],
    audioSuggestion:[String],
    signLanguageimage:[String],

    date: { type: Date, required: true, default: Date.now },
})
const TOPIC = mongoose.model('topic', topicSchema);

module.exports = TOPIC;