module.exports = (sequelize, DataTypes) => {
  const Applications = sequelize.define('Applications', {
    job_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    job_link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    job_salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    job_hiringMgrName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    job_hiringMgrTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    job_hiringMgrEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    job_status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    job_nextStep: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Applications.associate = function (models) {
    Applications.belongsTo(models.Companies, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Applications;
};
