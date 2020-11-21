module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('companies', {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    company_website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    company_description: {
      type: DataTypes.TEXT,
    },
  });

  Companies.associate = (models) => {
    Companies.hasMany(models.Rolodex, {});
  };

  Companies.associate = (models) => {
    Companies.hasMany(models.Applications, {});
  };

  return Companies;
};
