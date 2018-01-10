'use strict';
module.exports = (sequelize, DataTypes) => {
  var link = sequelize.define('link', {
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    isShared: DataTypes.BOOLEAN,
    tags: DataTypes.ARRAY(DataTypes.STRING)
  });
  return link;
};