module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('companies', {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    companyWebsite: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    companyDescription: {
      type: DataTypes.TEXT
    }
  });

  Companies.associate = (models) => {
    Companies.hasMany(models.Rolodex, {});
  };

  Companies.associate = (models) => {
    Companies.hasMany(models.Applications, {});
  };

  return Companies;
};
