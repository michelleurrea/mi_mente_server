'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    postId: DataTypes.INTEGER,
    commentAuthor: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.comment.belongsTo(models.post)
  };
  return comment;
};