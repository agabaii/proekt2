const User = require('./User');
const Comment = require('./Comment');
const Note = require('./Note');

// Связи
User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Note);
Note.belongsTo(User);

module.exports = { User, Comment, Note };