-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: final_project
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` int DEFAULT NULL,
  `manufacturer` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `lot_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type_idx` (`type`),
  KEY `FK8ttpt5vejr2ji3ubybk5o6dji` (`lot_id`),
  CONSTRAINT `FK8ttpt5vejr2ji3ubybk5o6dji` FOREIGN KEY (`lot_id`) REFERENCES `lots` (`id`),
  CONSTRAINT `topic2topics` FOREIGN KEY (`type`) REFERENCES `types` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,2018,'Lexus','es350','SEDAN',45000,1),(2,2020,'Audi','A8','SEDAN',90000,3),(3,2015,'Toyota','RAV4','SUV',19100,1),(4,2021,'Jeep','Grand Cherokee','SUV',35000,2),(5,2020,'RAM','1500','PICKUP',32000,3),(6,2019,'Toyota','Tacoma','PICKUP',23000,2),(7,2020,'Volkswagen','Golf','HATCHBACK',29000,3),(9,2020,'BMW','i8','SEDAN',1000000,3),(10,2020,'Tesla','Model S','SEDAN',60000,3),(12,2021,'Rivian','R1s','SUV',80000,4),(13,2021,'Rivian','R1t','PICKUP',75000,9),(14,2021,'Zoox','Robotaxi','SUV',5000000,9),(17,2022,'Tesla','Roadster','SEDAN',250000,2),(18,2021,'Tesla','Model S Plaid','SEDAN',120000,2),(19,2021,'Porsche','Taycan','SEDAN',80000,2),(21,2021,'GMC','Hummer','PICKUP',100000,2),(22,2005,'Toyota','Camry','SEDAN',10000,2);
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 16:47:44
