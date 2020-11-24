module.exports = (sequelize, DataTypes) => {
  const Rolodex = sequelize.define('Rolodex', {
    contactsName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    contactsRelationship: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    contactsTitle: {
      type: DataTypes.STRING
    },
    contactsCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    contactsPhone: {
      type: DataTypes.STRING
    },
    contactsEmail: {
      type: DataTypes.STRING
    },
    contactsLinkedin: {
      type: DataTypes.STRING
    },
    contactsGithub: {
      type: DataTypes.STRING
    },
    contactsNotes: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Rolodex.associate = (models) => {
    Rolodex.belongsTo(models.companies, {
      foreignKey: 'id',
      targetKey: 'id'
    });
  };

  // Rolodex.associate = (models) => {
  //   Rolodex.belongsTo(models.cities, {
  //     // TODO This doesn't look right - what should the FK association look like?
  //     foreignKey: 'id',
  //     targetKey: 'id'
  //   });
  // };

  return Rolodex;
};
