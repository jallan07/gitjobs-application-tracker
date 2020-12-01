module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('Companies', {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    },
    companyEmployees: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1]
      }
    },
    companyRevenue: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    companyWebsite: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    companySector: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    companyIndustry: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    companyCity: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    companyState: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    companyDescription: {
      type: DataTypes.TEXT
    }
  });

  Companies.associate = (models) => {
    Companies.hasMany(models.Applications, {
      sourceKey: 'companyName',
      foreignKey: 'jobCompany'
    });
    Companies.hasMany(models.Rolodex, {
      sourceKey: 'companyName',
      foreignKey: 'contactsCompany'
    });
  };

  return Companies;
};
