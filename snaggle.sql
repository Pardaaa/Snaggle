-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2025 at 05:36 AM
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
(13, '7931a506-ee5a-424d-81a6-9cb37b679e2c', 'Kemeja', 2, '2024-12-01 06:49:28', '2025-01-23 15:22:02'),
(26, '93378268-8af5-487d-80c7-faa451e7307c', 'Kaos', 2, '2025-01-15 06:50:36', '2025-01-15 16:36:10'),
(27, '82d721f3-9e7a-4505-8571-0289fbb6f605', 'Jaket', 2, '2025-01-15 16:34:54', '2025-01-15 16:34:54'),
(28, '3f2faf04-2fef-4e57-b764-119e1fb9fc1c', 'Celana', 2, '2025-01-15 16:35:54', '2025-01-15 16:35:54'),
(30, 'cf775f95-9dc4-49bb-a141-3d9bc8ff3640', 'Polo', 16, '2025-01-23 10:31:58', '2025-01-23 10:31:58'),
(31, '47b6fbe5-da12-444d-a72d-ce0156a6e93a', 'Jeans', 10, '2025-01-23 10:35:40', '2025-01-24 04:19:30'),
(32, 'cc663fa3-2b79-42b0-b2fd-1d9370f44d26', 'Cardigan', 2, '2025-01-24 04:25:32', '2025-01-24 04:25:32');

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
(2, 'b58ec940-22c3-48c0-b1de-54c9bb90fac5', 'Flannel', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non nam quis esse aperiam possimus quidem suscipit, quaerat aliquid dolor voluptatum quam ex fugiat quisquam repellendus reprehenderit quas soluta illo eaque, adipisci maxime eum distinctio', 500000, 29, 'f79ab2e1d7a4a18ef5e49cbec1b492b5.jpg', 'http://localhost:5000/images/f79ab2e1d7a4a18ef5e49cbec1b492b5.jpg', 13, 2, '2024-12-01 06:49:46', '2025-01-24 04:22:50'),
(6, '6b7be084-424d-4fa1-88ad-29532fe7a6d1', 'Celana Jeans', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe recusandae omnis commodi voluptatem facilis quod sit unde sequi nobis velit soluta eum deleniti ab esse corrupti, earum ipsam voluptates tempore ea eligendi impedit vero! Rem et a', 200000, 100, '1ca1461d48e172495883549dce24d0b0.jpg', 'http://localhost:5000/images/1ca1461d48e172495883549dce24d0b0.jpg', 31, 2, '2025-01-15 06:50:14', '2025-01-24 04:21:21'),
(7, 'b62a177d-f2f2-4c93-8af4-b1a6b84e16f5', 'Jaket Kulit', 'Kulit Ular', 150000, 10, '5630c48f35aaa8b711d9dc6701716eb4.jpg', 'http://localhost:5000/images/5630c48f35aaa8b711d9dc6701716eb4.jpg', 27, 2, '2025-01-15 16:36:56', '2025-01-24 04:22:12'),
(8, 'e23ffdf6-c8d9-4ba5-a650-ed23fdebb587', 'Kaos Collab', 'Collab resmi', 120000, 5, '002b42a847fc98c1898594bc87d01924.png', 'http://localhost:5000/images/002b42a847fc98c1898594bc87d01924.png', 26, 2, '2025-01-24 04:24:54', '2025-01-24 04:24:54'),
(9, 'cd41ced5-9d15-4753-97b7-55df7999eded', 'Polo', 'Polo tanpa kerah', 600000, 75, 'd9a4b9f69aa50c73e60d44e4567e0034.jpg', 'http://localhost:5000/images/d9a4b9f69aa50c73e60d44e4567e0034.jpg', 30, 2, '2025-01-24 04:26:06', '2025-01-24 04:26:06'),
(10, 'e52baac6-38db-43c2-bdfd-7d3bdd19dbfb', 'Cardigan lembut', 'warna putih,    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe qui, officiis, velit sit excepturi alias natus deserunt eius molestias optio reprehenderit commodi voluptatibus unde itaque! Distinctio suscipit iure facere! Consequuntur, ips', 100000, 29, 'e6e5fac452d51bdf1e0e14b5004f400b.png', 'http://localhost:5000/images/e6e5fac452d51bdf1e0e14b5004f400b.png', 32, 2, '2025-01-24 04:26:44', '2025-01-24 04:26:44');

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
('-fqal5_e-J6kPEGEXny--ot31UpytHk3', '2025-01-24 10:24:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:24:34', '2025-01-23 10:24:34'),
('-u2qMgDHQt6EwAtjhlCIbWK3XeWP47vY', '2025-01-24 18:01:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:01:56', '2025-01-23 18:01:56'),
('-vJ9agqeweTE_ijrnb-XhmIr0-BUTMSd', '2025-01-24 10:35:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:58', '2025-01-23 10:35:58'),
('0EVVtrK3H85xPMZYLuCCsi-3Ayui82Ac', '2025-01-24 15:25:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:25:57', '2025-01-23 15:25:57'),
('0UAY167NlMLgaQ8JhuwwR6Dtbf8Wt10s', '2025-01-24 15:20:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:20:42', '2025-01-23 15:20:42'),
('1wwY5D3gyEuaebE8TsmgbZYdOLpKEzpX', '2025-01-24 10:36:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:36:12', '2025-01-23 10:36:12'),
('24iasrHp974-_eXRCGJOOfASbfjGHQLP', '2025-01-24 10:35:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:48', '2025-01-23 10:35:48'),
('2ISqyP951iN6R_EL4VcPFBP2EnfnQJVp', '2025-01-24 10:35:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:23', '2025-01-23 10:35:23'),
('3rTbiOulcluJL2MWFOkVZTR1erIKULwb', '2025-01-24 18:03:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:03:13', '2025-01-23 18:03:13'),
('44SZpT7iav3SY5xH45eCEUDLJ-WmhBE0', '2025-01-24 15:22:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:22:14', '2025-01-23 15:22:14'),
('5fcAyZtwFX5hFwsMhw_GfQOxaql-pk_5', '2025-01-24 10:31:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:51', '2025-01-23 10:31:51'),
('5l_c9PPNjJBjJP142R_fvWDV5GQzsr95', '2025-01-24 10:33:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:33:40', '2025-01-23 10:33:40'),
('6DrW9dtlCeD252A8_19Y45t6UdrTvjvR', '2025-01-24 18:01:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:01:37', '2025-01-23 18:01:37'),
('7aaFpY0nc5eMlfSM9l0usAMmwgcbMdVa', '2025-01-24 15:20:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:20:25', '2025-01-23 15:20:25'),
('7pVuFMzu9UTaUWQBVP3pjzYZ7J0Digu_', '2025-01-25 04:21:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:21:59', '2025-01-24 04:21:59'),
('7SvpWSp1aNYVeiW8IkQp1-OGAGW3Rli3', '2025-01-24 10:26:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:26:03', '2025-01-23 10:26:03'),
('8EVdmnmhQVYtQlypST_Rstg2cDOkk3ZL', '2025-01-25 04:27:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:27:30', '2025-01-24 04:27:30'),
('8Oa_chI3ML438rbwfkjOKB2vq3M43x7E', '2025-01-24 10:51:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:51:40', '2025-01-23 10:51:40'),
('9Ea2yiVlUN0beDxJqiIGJYT7zNVASRG9', '2025-01-24 10:42:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:42:43', '2025-01-23 10:42:43'),
('AbnPEgmXrQ2O6xd2ZT7F3Bf4LCfqlr73', '2025-01-24 10:24:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:24:18', '2025-01-23 10:24:18'),
('as1oLUQnJ235tJwFgytBD-Uc71PO9VXh', '2025-01-24 10:29:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:29:35', '2025-01-23 10:29:35'),
('aWCxvQd39oiCKnADhmTQIxOtZXTP768B', '2025-01-24 10:36:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:36:12', '2025-01-23 10:36:12'),
('AwsXLwfpDWCMPth9qEl4Esvd4LQRDqje', '2025-01-24 10:25:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:25:59', '2025-01-23 10:25:59'),
('aXhthAofG5IGqzHn8Lbfzs92vLa3a8WV', '2025-01-24 10:35:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:46', '2025-01-23 10:35:46'),
('b26mqlkLlVc5yDfOp9XGI4CXDy4JsxN8', '2025-01-24 10:51:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:51:32', '2025-01-23 10:51:32'),
('b3O52f1rzI-lpef3Ir-fQxAuI3_bqHOM', '2025-01-25 04:25:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:25:32', '2025-01-24 04:25:32'),
('b6CyJAWwuRdNsMq5FSskhVQOSoTH3TIC', '2025-01-24 10:35:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:19', '2025-01-23 10:35:19'),
('bC9RGd02IIJJONjDeoljLPqTlTeuqeMi', '2025-01-24 10:51:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:51:19', '2025-01-23 10:51:19'),
('bpEQJW0BXkiorhX9_uZMdjkf3uU9h5qx', '2025-01-24 15:20:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:20:34', '2025-01-23 15:20:34'),
('Chv-dD8Jo72Pty74d-nzehKG-72-lntC', '2025-01-25 04:22:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:22:50', '2025-01-24 04:22:50'),
('cwd61TMHJLTeoKao_kjSgJWnN0tb85mf', '2025-01-24 10:24:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:24:27', '2025-01-23 10:24:27'),
('cyiiNEDc13d8HwVnJm_BxGJ3t-vcxP4r', '2025-01-24 10:32:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:32:07', '2025-01-23 10:32:07'),
('dl0JP5v8hn5zhkb0I87f1FPBJfaSf4lQ', '2025-01-24 10:31:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:02', '2025-01-23 10:31:02'),
('DnrgdMibbUP2gJRgwMCuK46sFN_dyjdO', '2025-01-24 15:17:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:17:22', '2025-01-23 15:17:22'),
('EeFYfyDRbGoFe2wszI33P5ZYlnt2oPKk', '2025-01-24 10:36:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:36:12', '2025-01-23 10:36:12'),
('ez5D8zEpR2UglET5uxuCLhdTiKpMdzrR', '2025-01-24 15:25:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:25:57', '2025-01-23 15:25:57'),
('FjjuVbpowR3RQQCLMawHfuaHeQZfTpqA', '2025-01-25 04:19:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:19:30', '2025-01-24 04:19:30'),
('f_LJRSyXD0Eo0eI5j6AJsQccam6tYAnw', '2025-01-25 04:22:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:22:12', '2025-01-24 04:22:12'),
('GCd4uiTORSAYf4swnHWY00t5rrik00iX', '2025-01-25 04:32:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"1bb22eff-6a49-4aa0-bc8e-9391fb52874c\"}', '2025-01-24 04:31:22', '2025-01-24 04:32:26'),
('Gt0XvEkLp-1tfvnw2bIjgvrI0YfQee6u', '2025-01-25 04:31:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:31:22', '2025-01-24 04:31:22'),
('gVbus1kKFdwo-Uz5SKyqAqSYhL8WGCSt', '2025-01-24 10:43:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:43:07', '2025-01-23 10:43:07'),
('GwUHeDFp0a66H7RLQ9V33xf3Bohpahzy', '2025-01-24 10:31:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:38', '2025-01-23 10:31:38'),
('gyPmrP92goiJlH8Aqm9fl5SYNKZIXfRV', '2025-01-24 10:31:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:17', '2025-01-23 10:31:17'),
('heVHb-JTvWIQy7S63FkzDtT1llBUiAzu', '2025-01-24 18:02:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:02:29', '2025-01-23 18:02:29'),
('hLFV23GarvpHI_Vg4HExRLm6CtrgyoZA', '2025-01-24 10:31:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:47', '2025-01-23 10:31:47'),
('hmMuwQWhWotkvUBElJE7x_rCwzBzvYb5', '2025-01-24 18:01:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:01:20', '2025-01-23 18:01:20'),
('Hr7BkL2D4XT9PbLMPmF5X4mGPeW103LD', '2025-01-25 04:22:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:22:06', '2025-01-24 04:22:06'),
('HzbN9hOr-Ux4ACdXnxYAsMdVnjtjFP83', '2025-01-24 18:07:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:07:39', '2025-01-23 18:07:39'),
('IyqfRb0cBG5hXBXtful2rqRhTHxV-QqK', '2025-01-25 04:31:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:31:04', '2025-01-24 04:31:04'),
('jd42VZHAwRzxzvsORyuxTY_jHoyy76hq', '2025-01-25 04:28:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:28:30', '2025-01-24 04:28:30'),
('JiWAaZq3pg4x1HuYW32-sxg6SwwH2TzP', '2025-01-24 15:27:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:27:24', '2025-01-23 15:27:24'),
('JPN1em6b8YbDExTHRPDr997qFBoOqQKa', '2025-01-24 11:00:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 11:00:30', '2025-01-23 11:00:30'),
('kCYEhAhSZska_kZjM6MAskQIy3bXATyT', '2025-01-24 10:35:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:40', '2025-01-23 10:35:40'),
('kp0jExjCt18WnqY5pTfe4paj5G94Em1E', '2025-01-24 10:51:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:51:46', '2025-01-23 10:51:46'),
('lB09d1iv3XD2gPlSRwWIdqo6U5a5mazN', '2025-01-24 15:20:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:20:06', '2025-01-23 15:20:06'),
('LByaY784SUInV7WW6M7C1yDmCNYOuq49', '2025-01-24 10:31:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:07', '2025-01-23 10:31:07'),
('LiEid7QcxKbbARVgNna-t82IGNaAm3aa', '2025-01-24 10:43:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:43:08', '2025-01-23 10:43:08'),
('LM3mT5CFTlQgmOXk4SDDj2wAxx0uRvwg', '2025-01-24 10:27:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:27:18', '2025-01-23 10:27:18'),
('mAq8fumHXJtlIUcUbdvrE84PnAavw6n1', '2025-01-24 10:31:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:11', '2025-01-23 10:31:11'),
('mp-WMID2gJYkil2cP4H4jZpfQ-mOcP85', '2025-01-24 10:29:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:29:38', '2025-01-23 10:29:38'),
('NC927tlvwRIeOwRKW2qWFBgH8eRg2H_s', '2025-01-24 10:26:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:26:05', '2025-01-23 10:26:05'),
('O2OqxSBhRc22FnpBHodmDT-JWhSQjOzC', '2025-01-24 10:35:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:30', '2025-01-23 10:35:30'),
('oaI4c7pgwWDh4gXg6Lbfo5m0Lh1PjZlw', '2025-01-24 10:31:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:34', '2025-01-23 10:31:34'),
('oVbtgznOIRrlKebCti7k45hdRJ9CqJEo', '2025-01-24 10:33:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:33:37', '2025-01-23 10:33:37'),
('PhsSi3rwqs-RjNklaG8SFG9b8OXDy3u3', '2025-01-24 10:35:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:27', '2025-01-23 10:35:27'),
('PxCzDfEHt9smhySGVune4EKfLgHNlbd3', '2025-01-24 15:25:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:25:12', '2025-01-23 15:25:12'),
('Q7Y4JTzdue1vT3oj0lVTJI044Y0TU062', '2025-01-24 10:27:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:27:14', '2025-01-23 10:27:14'),
('QL83NbLtOk-ihPEylVilGxdy06UAsazQ', '2025-01-24 11:00:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"cd6eb155-f7dc-44b4-b40d-1180e28bb9b6\"}', '2025-01-23 10:51:46', '2025-01-23 11:00:38'),
('QTJOdm0DZp0msbWlILcCf39fcq9L4xvi', '2025-01-24 18:01:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:01:18', '2025-01-23 18:01:18'),
('R61vQrZK3o_sHyb9_P3vDqnNLe3Z3baO', '2025-01-25 04:19:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:19:07', '2025-01-24 04:19:07'),
('RD9vXM-cgtRREIRkmsZMd7bRb0WSCu5g', '2025-01-24 15:21:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:21:13', '2025-01-23 15:21:13'),
('rfRLGy_cFs3abisAPCF0Gywxynd6QDpR', '2025-01-24 15:20:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:20:11', '2025-01-23 15:20:11'),
('rGLFo5sueISGqBIapebXVnfV2mtaCLHT', '2025-01-24 10:35:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:42', '2025-01-23 10:35:42'),
('rqlltH1W0sPFjVr9Cwk_-1m1btmpOaag', '2025-01-24 10:32:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:32:02', '2025-01-23 10:32:02'),
('rRWzXC-AXoMe6klxntB7TsUznZgU3Nof', '2025-01-24 15:25:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:25:57', '2025-01-23 15:25:57'),
('rS2-88u1DKsJwOBuDU6UKpLIlZwwMNvh', '2025-01-24 18:02:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:02:20', '2025-01-23 18:02:20'),
('rURSriAapFT84FvRYOy9ky0oQxXIK0hR', '2025-01-24 15:27:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"cd6eb155-f7dc-44b4-b40d-1180e28bb9b6\"}', '2025-01-23 15:25:57', '2025-01-23 15:27:27'),
('snuI2xn-vXmtMplK7jSh1tS9YCXcI9-z', '2025-01-24 10:31:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:14', '2025-01-23 10:31:14'),
('sQmnBgPZjjyYyBtjk-Uhsln6GysM_g3k', '2025-01-24 18:02:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:02:01', '2025-01-23 18:02:01'),
('sUGSMOrzyeSF2Dptpc7M5GsT9xgWDJk3', '2025-01-24 10:42:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:42:45', '2025-01-23 10:42:45'),
('sXKYvqvviiDCct6nnzw6fxYCj7FAqp6K', '2025-01-24 15:20:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:20:37', '2025-01-23 15:20:37'),
('TaXx_gZ_3Y-sS06f13g3s0ePp3D21fU4', '2025-01-25 04:27:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:27:30', '2025-01-24 04:27:41'),
('tfhoPVpNzskaaPR5vkr8k-WycXlwIJFB', '2025-01-24 10:26:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:26:09', '2025-01-23 10:26:09'),
('Ti99Qdxd7mXflArD2ztpwXK0fTVO5Xgq', '2025-01-24 18:01:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:01:47', '2025-01-23 18:01:47'),
('tQlsYNwj3f5Tf2Ft3zb7Cw10czlZm_Jv', '2025-01-24 10:35:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:55', '2025-01-23 10:35:55'),
('up8Y5qD18BkmzVhhD3Sy0Yeq7iGA4mNW', '2025-01-24 10:31:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:22', '2025-01-23 10:31:22'),
('uwC2tVRMXGQPjG22KBPOL825Tsx4UxWk', '2025-01-24 10:42:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:42:49', '2025-01-23 10:42:49'),
('uZHy_bnaYdkTjmEebRrof7hoWAkD4jYf', '2025-01-24 15:21:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:21:20', '2025-01-23 15:21:20'),
('VehM1w85-TSA7pDUDLOgcxM2BykuzNxX', '2025-01-24 10:31:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:05', '2025-01-23 10:31:05'),
('ViA5vUdFPqftR-xYqBN7XJ_5BlzXOKV0', '2025-01-25 04:21:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-24 04:21:21', '2025-01-24 04:21:21'),
('vLrJ7qumoQEucYHb5gkUYmRJF6s22vWp', '2025-01-24 10:42:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:42:53', '2025-01-23 10:42:53'),
('Wuwg7oTnzDV5EBuS2bdjBxuJ4AVWFO6k', '2025-01-24 18:02:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:02:38', '2025-01-23 18:02:38'),
('WwnDFt04VIrvgzRlLT9YUj3V4hqjDzuA', '2025-01-24 10:29:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:29:42', '2025-01-23 10:29:42'),
('XDts4SRuVSZ1aX3WO0r2jekqwqTXUtGL', '2025-01-24 10:24:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:24:32', '2025-01-23 10:24:32'),
('xnqFtTQw33zkDl86ihomIWBXB1bk8xvU', '2025-01-24 10:51:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:51:28', '2025-01-23 10:51:28'),
('Xr8Y7aIQGmQfXl15-3SMJ_ChmxxCQbF_', '2025-01-24 15:19:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:19:53', '2025-01-23 15:19:53'),
('YlDDaD8s_PpjKrHr2Mio-FbEs27Ep_25', '2025-01-24 10:29:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:29:46', '2025-01-23 10:29:46'),
('YpnP7IAvytNkMhw8S5joyUKez8TxsC2O', '2025-01-24 15:22:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 15:22:02', '2025-01-23 15:22:02'),
('YzCquL0tJmEfkVcIxU7_zd-oQipxUNhc', '2025-01-24 10:31:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:31:58', '2025-01-23 10:31:58'),
('ZcSvJ8l9pVIEKz0v_w7yaLZ2WQwDEgNJ', '2025-01-24 18:10:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"1bb22eff-6a49-4aa0-bc8e-9391fb52874c\"}', '2025-01-23 18:02:20', '2025-01-23 18:10:42'),
('zkwOMlL2VvKBOOs7i0A18I8webmb1XEP', '2025-01-24 10:51:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:51:22', '2025-01-23 10:51:22'),
('ZkwplgTvd6AQmkSH1XPT2_Iu5Xp6jSoz', '2025-01-24 18:02:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:02:09', '2025-01-23 18:02:09'),
('zn7SutpDc6wUQlh83DfRMqSmcSIJpbG4', '2025-01-24 10:35:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:35:52', '2025-01-23 10:35:52'),
('zpkaY_0QJWGkSibOOGNVEY-jM03hNKd1', '2025-01-24 10:36:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 10:36:03', '2025-01-23 10:36:03'),
('_ISdMv2PRK5GG_0WQrYEAgkPmh2uW_T6', '2025-01-24 18:01:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-01-23 18:01:23', '2025-01-23 18:01:23');

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
(2, '1bb22eff-6a49-4aa0-bc8e-9391fb52874c', 'Nathan', 'nathan@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$wEjJYiCqBJJ+CgERNUt0DA$G9xhpaW4P2d6k3McrH4d5iVQCehY965AxekL1L5Y2Oc', 'admin', '2024-10-26 12:45:06', '2025-01-23 18:01:56'),
(10, '0fd00292-115e-46a8-8656-a75b03b95456', 'Nabilla', 'nabilla@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$0oPKCtA1XDmYVPhhuy8m/A$GWyfD0KICOel47IWg7yAjm4My4RCe3JHR7Q/EhtFLOE', 'staff', '2025-01-10 08:15:16', '2025-01-24 04:28:34'),
(13, 'cd6eb155-f7dc-44b4-b40d-1180e28bb9b6', 'iman', 'iman@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Bo7bvYooBigSsPK5WkhQ0w$/TOEufKOz9NhKD9T4LVC2fkpjvreaidj1I6VZwkQn14', 'staff', '2025-01-11 16:05:05', '2025-01-23 18:03:13'),
(14, 'f48092b3-c5a6-488d-ac19-0fcd140cb756', 'Charles', 'charles@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Cv/FqWOB6SSv7zjeSSTn9g$Z2GCsRblvaCyZsioLVgdgm7ZRH8PO1kvrMvqkOe7IP0', 'staff', '2025-01-15 11:22:38', '2025-01-15 11:22:38'),
(16, '5f88c9a6-f966-4435-a765-279254593d8a', 'Luffy', 'luffy@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$qDfueDfJCygm3e4YM5Ic8Q$h/s+hAkYKeGTQ94ZzN71ggKUxoWByZPINUCmPUSm2Vc', 'staff', '2025-01-22 11:14:08', '2025-01-23 18:02:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`),
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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `name_2` (`name`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  ADD CONSTRAINT `products_ibfk_5` FOREIGN KEY (`categoryId`) REFERENCES `categorys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_6` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
