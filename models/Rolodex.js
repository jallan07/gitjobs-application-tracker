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

  Rolodex.associate = function (models) {
    Rolodex.belongsTo(models.Companies, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Rolodex;
};
