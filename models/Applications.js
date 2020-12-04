module.exports = (sequelize, DataTypes) => {
  const Applications = sequelize.define(
    'Applications',
    {
      jobName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      jobCompany: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      jobLink: {
        type: DataTypes.STRING,
        // allowNull: false,
        validate: {
          len: [1]
        }
      },
      jobSalary: {
        type: DataTypes.INTEGER
      },
      jobHiringMgrName: {
        type: DataTypes.STRING,
        // allowNull: false,
        validate: {
          len: [1]
        }
      },
      jobHiringMgrTitle: {
        type: DataTypes.STRING
      },
      jobHiringMgrEmail: {
        type: DataTypes.STRING
      },
      jobStatus: {
        type: DataTypes.STRING,
        // allowNull: false,
        validate: {
          len: [1]
        }
      },
      jobNextStep: {
        type: DataTypes.TEXT,
        // allowNull: false,
        validate: {
          len: [1]
        }
      },
      applied: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      freezeTableName: true
    }
  );

  Applications.associate = (models) => {
    Applications.belongsTo(models.Companies, {
      targetKey: 'companyName',
      foreignKey: 'jobCompany'
    });
  };

  return Applications;
};
