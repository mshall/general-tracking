CREATE DATABASE `fleet`; /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- fleet.trackingstream definition

CREATE TABLE `trackingstream` (
  `trackingDateTime` datetime NOT NULL,
  `imei` char(15) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `kph` int DEFAULT NULL,
  `firstEvent` smallint DEFAULT NULL,
  `secondEvent` smallint DEFAULT NULL,
  `thirdEvent` smallint DEFAULT NULL,
  `fourthEvent` smallint DEFAULT NULL,
  `fifthEvent` smallint DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`trackingDateTime`,`imei`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- fleet.users definition

CREATE TABLE `users` (
  `userId` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `users_UN` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO fleet.trackingstream (trackingDateTime,imei,longitude,latitude,kph,firstEvent,secondEvent,thirdEvent,fourthEvent,fifthEvent,CreatedAt,UpdatedAt) VALUES
	 ('1968-11-16 00:00:00','1',1.0,1.0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

   INSERT INTO fleet.users (userId,username,email,password,createdAt,updatedAt) VALUES
	 ('2e651bec-99bd-49a9-b1c2-ac722b9f2276','mohamed','mohamed@gmail.com','$2a$10$7bhd.PkYwaRtSCCO.RAP9edx2EYHvXYo8O3mI1lUvj0zci6EXRJdi','2021-03-03 00:55:16','2021-03-03 00:55:16'),
	 ('87d38b68-21be-40b6-8991-3680ff9b2147','shall','shall@gmail.com','$2a$10$1Gu93MLqBNdqcecNpHX8tuwt3IE1S9jpprHIfgo5cD7x58pGFN1Sm','2021-03-03 00:55:11','2021-03-03 00:55:11');