import { QueryInterface, DataTypes } from "sequelize";

type T = typeof DataTypes;

export const up = async (queryInterface: QueryInterface, DataTypes: T) => {
  await queryInterface.createTable("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
export const down = async (queryInterface: QueryInterface, DataTypes: T) => {
  await queryInterface.dropTable("User");
};
