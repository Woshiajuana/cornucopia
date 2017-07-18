/**
 * Created by Administrator on 2017/4/21.
 */
const models = require('../database/db');
const db = models.db;
const Schema = models.Schema;
/**定义了一个新的模型，但是此模式还未和users集合有关联*/
const tagSchema = new Schema({
    tag_name: {
        type: String,
        unique: true
    },
    tag_group: String,
    tag_date: Date
},{
    versionKey: false
});
/**与数据库users集合关联*/
module.exports = db.model('tags', tagSchema);