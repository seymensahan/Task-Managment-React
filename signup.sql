-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2024 at 10:29 AM
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
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(1, 'Dane', '4@child.com', 'Maz'),
(5, 'bob', '1stephanadrien@gmail.com', 'Abcd1234\r\n'),
(6, 'Danete', '1stephaneadrien@gmail.com', 'Abcd1234'),
(7, '', '', ''),
(8, 'Ben Tenison', 'TheOwnerofomintrix@gm', 'AlienX'),
(10, 'Franklin', 'saint@gmail.com', 'snowfall'),
(11, '', '', ''),
(12, '', '', ''),
(13, 'm', '4@child.com', '1j3nDk'),
(15, 'emry', '4@chis.com', '12ADmrr'),
(16, 'armin', 'levi@gmail.com', '1Lovenfjg'),
(17, 'lelouch', 'NEnali@gmail.com', 'Zero1mkfj'),
(18, 'Finaly', 'Idedit@gmail.com', 'Yersir12bhs'),
(19, 'Kise', 'Kuruko@gmail.com', 'Lastg1234'),
(20, 'nana', 'genver@gmail.com', 'Gaby2923'),
(21, 'Igris', 'general@gmail.com', 'Level1234'),
(22, 'adrien', '2nerd@gmail.com', 'Bigband2312');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
