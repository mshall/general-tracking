import { Table, Column, Model, DataType } from 'sequelize-typescript';
import * as JSONObjectMappter from 'json-object-mapper';
@Table({
  tableName: 'trackingstream',
  timestamps: false,
  freezeTableName: true,
})
/*
CREATE TABLE `fleet`.`trackingstream` (
  `datetime1` DATETIME NOT NULL,
  `imei` CHAR(15) NOT NULL,
  `longitude` FLOAT NOT NULL,
  `latitude` FLOAT NOT NULL,
  `kph` INT NULL,
  `event0` SMALLINT(1) NULL,
  `event1` SMALLINT(1) NULL,
  `event2` SMALLINT(1) NULL,
  `event3` SMALLINT(1) NULL,
  `event4` SMALLINT(1) NULL,
  PRIMARY KEY (`datetime1`, `imei`));
*/
export default class TrackingStream extends Model<TrackingStream> {

  @JSONObjectMappter.JsonProperty({ type: String, name: 'trackingDateTime' })
  @Column({ type: DataType.DATE, primaryKey: true })
  trackingDateTime?: Date;


  @Column({ type: DataType.STRING, primaryKey: true })
  imei?: string;

  @Column(DataType.NUMBER)
  longitude?: number;

  @Column(DataType.NUMBER)
  latitude?: number;

  @Column(DataType.NUMBER)
  kph?: number;

  @JSONObjectMappter.JsonProperty({ type: Number, name: 'firstEvent' })
  @Column(DataType.NUMBER)
  firstEvent?: number;

  @JSONObjectMappter.JsonProperty({ type: Number, name: 'secondEvent' })
  @Column(DataType.NUMBER)
  secondEvent?: number;

  @JSONObjectMappter.JsonProperty({ type: Number, name: 'thirdEvent' })
  @Column(DataType.NUMBER)
  thirdEvent?: number;

  @JSONObjectMappter.JsonProperty({ type: Number, name: 'fourthEvent' })
  @Column(DataType.NUMBER)
  fourthEvent?: number;

  @JSONObjectMappter.JsonProperty({ type: Number, name: 'fifthEvent' })
  @Column(DataType.NUMBER)
  fifthEvent?: number;
 
  @Column(DataType.DATE)
  CreatedAt?: Date;

  @Column(DataType.DATE)
  UpdatedAt?: Date;

}
