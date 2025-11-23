-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for cv_aisah
CREATE DATABASE IF NOT EXISTS `cv_aisah` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cv_aisah`;

-- Dumping structure for table cv_aisah.biodata
CREATE TABLE IF NOT EXISTS `biodata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `deskripsi` text,
  `foto_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aisah.biodata: ~1 rows (approximately)
INSERT INTO `biodata` (`id`, `nama`, `email`, `no_hp`, `deskripsi`, `foto_url`) VALUES
	(1, 'Siti Aisah Riski Amanda', 'aisahrskmanda27@gmail.com', '085794266973', 'Saya seseorang yang suka belajar hal baru, senang mengeksplorasi dunia kreatif, dan selalu mencari cara untuk berkembang setiap hari. Saya percaya bahwa kerja keras, konsistensi, dan sikap positif adalah kunci untuk mencapai apa pun yang kita impikan.', '/foto2.jpg');

-- Dumping structure for table cv_aisah.keahlian
CREATE TABLE IF NOT EXISTS `keahlian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_nama` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aisah.keahlian: ~8 rows (approximately)
INSERT INTO `keahlian` (`id`, `skill_nama`) VALUES
	(1, 'Pemrograman: Python, Java, JavaScript'),
	(2, 'Analisis & pemecahan masalah'),
	(3, 'Kemampuan belajar cepat'),
	(4, 'Perhatian terhadap detail'),
	(5, 'Komunikasi teknis yang jelas'),
	(6, 'Manajemen waktu'),
	(7, 'Kerja sama tim'),
	(8, 'Adaptasi terhadap teknologi baru');

-- Dumping structure for table cv_aisah.pendidikan
CREATE TABLE IF NOT EXISTS `pendidikan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `institusi` varchar(100) DEFAULT NULL,
  `gelar` varchar(100) DEFAULT NULL,
  `tahun` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aisah.pendidikan: ~1 rows (approximately)
INSERT INTO `pendidikan` (`id`, `institusi`, `gelar`, `tahun`) VALUES
	(1, 'Universitas Muhammadiyah Sukabumi', 'S.Kom', '2023 - Sekarang');

-- Dumping structure for table cv_aisah.pengalaman
CREATE TABLE IF NOT EXISTS `pengalaman` (
  `id` int NOT NULL AUTO_INCREMENT,
  `posisi` varchar(100) DEFAULT NULL,
  `perusahaan` varchar(100) DEFAULT NULL,
  `durasi` varchar(50) DEFAULT NULL,
  `deskripsi` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aisah.pengalaman: ~0 rows (approximately)
INSERT INTO `pengalaman` (`id`, `posisi`, `perusahaan`, `durasi`, `deskripsi`) VALUES
	(1, 'IT Support / Technical Support', 'PT Teknologi Maju', '2022 – 2024', 'Menangani troubleshooting hardware dan software untuk lebih dari 100 karyawan. Melakukan instalasi, konfigurasi, dan pemeliharaan perangkat komputer, printer, dan jaringan. Mengelola tiket bantuan teknis dan memastikan penyelesaian masalah tepat waktu. Melakukan monitoring jaringan internal dan memastikan performa tetap stabil. Memberikan pelatihan dasar kepada pengguna terkait penggunaan aplikasi dan keamanan data.');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
