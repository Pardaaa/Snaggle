-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2024 at 02:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `snaggle`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `uuid`, `name`, `userId`, `createdAt`, `updatedAt`) VALUES
(13, '7931a506-ee5a-424d-81a6-9cb37b679e2c', 'Kemeja', 2, '2024-12-01 06:49:28', '2024-12-01 06:49:28');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `stok` int(11) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `uuid`, `name`, `description`, `price`, `stok`, `picture`, `url`, `categoryId`, `userId`, `createdAt`, `updatedAt`) VALUES
(2, 'b58ec940-22c3-48c0-b1de-54c9bb90fac5', 'Flannel', 'FSfasd', 314231, 43214, '5d33fb80a27e3facd3af8b2275a32a79.png', 'http://localhost:5000/images/5d33fb80a27e3facd3af8b2275a32a79.png', 13, 2, '2024-12-01 06:49:46', '2024-12-01 06:49:46'),
(3, '8cbf344a-07c8-4cd7-ab4a-420c80b309f4', '32141', '233423142', 42314, 31, 'f3f5535c416b589388b5be309c75f295.jpg', 'http://localhost:5000/images/f3f5535c416b589388b5be309c75f295.jpg', 13, 2, '2024-12-01 07:36:47', '2024-12-12 08:13:55');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('25eoC0gfGocpp9GORORb-9HVaFTrvx6g', '2024-12-13 08:14:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:14:16', '2024-12-12 08:14:16'),
('3i-cTIzSQFZnsVxQYwTS4CnAGWuUaztZ', '2024-12-13 08:13:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:13:55', '2024-12-12 08:13:55'),
('Axaa5NJTXEm2QGTkYllhabbgyxlJtH5Z', '2024-12-13 08:30:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:30:43', '2024-12-12 08:30:43'),
('eThDSKsDHSD-xFE7Jc1_F3gwt4ilfIGf', '2024-12-13 08:14:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:14:05', '2024-12-12 08:14:05'),
('Gw_j2uVjK0kh9b_r-Exoz2AYOXzTqgAt', '2024-12-13 08:14:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:14:08', '2024-12-12 08:14:08'),
('n6xvGQw1zWTvin4eIXKZkdLL5znu-EFQ', '2024-12-13 08:28:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:28:40', '2024-12-12 08:28:40'),
('nMT0Vi8LyQ2wbKhQ-IwT4ZoWJMJUFCAH', '2024-12-13 08:14:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:14:54', '2024-12-12 08:14:54'),
('nvFuBxMpy069hTs96ZVYOwLBgC2Qg7r5', '2024-12-13 08:22:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:22:24', '2024-12-12 08:22:24'),
('O2O6zBxsFlyQSy1-pjl_7Xkk4PFpsrO1', '2024-12-13 08:49:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:49:29', '2024-12-12 08:49:29'),
('OyH4lNoJ2PUF6azBdrdeIjhx6H42p7xX', '2024-12-13 08:14:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:14:39', '2024-12-12 08:14:39'),
('Tj237TsUGVQE88y-vy0XMP25iRTO1mnd', '2024-12-13 08:12:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:12:34', '2024-12-12 08:12:34'),
('Wj5eNctLTnF5cuNBu4leZhJH_vG_3vs1', '2024-12-13 08:12:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-12-12 08:12:56', '2024-12-12 08:12:56'),
('XUmJeFx34fPJnnb1ZFj0YZjxhBMkNcXh', '2024-12-13 08:55:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"1bb22eff-6a49-4aa0-bc8e-9391fb52874c\"}', '2024-12-12 08:49:29', '2024-12-12 08:55:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, '1bb22eff-6a49-4aa0-bc8e-9391fb52874c', 'Nathan', 'nathan@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$0+g5BXbypaHSL+8HqgIPlA$G6MUP5GAF7Y6596hSyHWaotYp8dzm+G0bD3ceeoKppI', 'admin', '2024-10-26 12:45:06', '2024-10-29 19:06:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categorys`
--
ALTER TABLE `categorys`
  ADD CONSTRAINT `categorys_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categorys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
