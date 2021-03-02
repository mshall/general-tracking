import { Table, Column, Model, DataType, Default, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import * as JSONObjectMappter from 'json-object-mapper';
import { UUID, UUIDV4 } from 'sequelize/types';
@Table({
  tableName: 'users',
  timestamps: false,
  freezeTableName: true,
})

export default class User extends Model<User> {

  @Column({ field: 'userId', type: DataType.STRING, primaryKey: true })
  userId?: string;

  @Column({ field: 'username', type: DataType.STRING})
  username?: string;
 
  @Column({ field: 'email', type: DataType.STRING})
  email?: string;

  @Column({ field: 'password', type: DataType.STRING})
  password?: string;


  @CreatedAt
  @Column({ field: 'createdAt' , type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt?: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' , type: DataType.DATE, defaultValue: DataType.NOW })
  updatedAt?: Date;

}
