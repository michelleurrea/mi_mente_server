'use strict';
module.exports = (sequelize, DataTypes) => {
  const postTag = sequelize.define('postTag', {
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  postTag.associate = function(models) {
    // associations can be defined here
  };
  return postTag;
};