module.exports = (sequelize, DataTypes) => {
  const Rolodex = sequelize.define(
    'Rolodex',
    {
      contactsName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      contactsRelationship: {
        type: DataTypes.STRING,
        // allowNull: false,
        validate: {
          len: [1]
        }
      },
      contactsTitle: {
        type: DataTypes.STRING
      },
      contactsCompany: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      contactsCity: {
        type: DataTypes.STRING
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
        // allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      freezeTableName: true
    }
  );

  Rolodex.associate = (models) => {
    Rolodex.belongsTo(models.Companies, {
      targetKey: 'companyName',
      foreignKey: 'contactsCompany'
    });
  };

  return Rolodex;
};
