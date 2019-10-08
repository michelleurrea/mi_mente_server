'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    author: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    models.post.belongsTo(models.user)
    models.post.hasMany(models.comment)
    models.post.belongsToMany(models.tag, {through: "postTag"});
  };
  return post;
};