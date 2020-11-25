module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define(
    'Cities',
    {
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      freezeTableName: true
    }
  );

  // Cities.associate = (models) => {
  //   Cities.hasMany(models.Rolodex, {
  //     as: 'Rolodex',
  //     foreignKey: 'id',
  //     sourceKey: 'id'
  //   });
  // };

  // Cities.associate = (models) => {
  //   Cities.hasMany(models.Applications, {
  //     as: 'Applications',
  //     foreignKey: 'id',
  //     sourceKey: 'id'
  //   });
  // };

  return Cities;
};
