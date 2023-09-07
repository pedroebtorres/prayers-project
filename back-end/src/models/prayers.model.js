module.exports = (sequelize, DataTypes) => {
  const PrayerModel = sequelize.define(
    'Prayer',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      prayerReason: DataTypes.STRING,
      prayerWhom: DataTypes.STRING,
    },

  { timestamps: false, tableName: 'prayers', underscored: true },
);

  return PrayerModel;
};
