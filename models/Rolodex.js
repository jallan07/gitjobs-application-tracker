module.exports = (sequelize, DataTypes) => {
  const Rolodex = sequelize.define('Rolodex', {
    network_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    network_relationship: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    network_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    network_city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    network_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    network_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    network_linkedin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    network_github: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    network_notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Rolodex.associate = function (models) {
    Rolodex.belongsTo(models.Companies, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Rolodex;
};
