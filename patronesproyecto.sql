-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2023 a las 22:48:17
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `patronesproyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `computers`
--

CREATE TABLE `computers` (
  `computer_code` int(11) NOT NULL,
  `product_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `computers`
--

INSERT INTO `computers` (`computer_code`, `product_code`) VALUES
(29, 1),
(29, 5),
(29, 9),
(29, 13),
(29, 17),
(30, 2),
(30, 6),
(30, 10),
(30, 14),
(30, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice`
--

CREATE TABLE `invoice` (
  `invoice_code` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `total` double(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `product_code` int(11) NOT NULL,
  `invoice_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `code` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` double(5,2) NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `trademark` int(11) NOT NULL,
  `size` int(11) DEFAULT NULL,
  `unique_char` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `generation` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cycles` double(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`code`, `name`, `model`, `price`, `description`, `image`, `trademark`, `size`, `unique_char`, `generation`, `cycles`) VALUES
(1, 'RAM', 'ram-1', 150.00, 'Tarjeta con algoritmos para la gestion de la informacion del procedador', 'http://url-very-important', 1, 4, NULL, NULL, NULL),
(2, 'RAM', 'ram-2', 150.00, 'Tarjeta con algoritmos para la gestion de la informacion del procedador', 'http://url-very-important', 2, 8, NULL, NULL, NULL),
(3, 'RAM', 'ram-3', 150.00, 'Tarjeta con algoritmos para la gestion de la informacion del procedador', 'http://url-very-important', 3, 4, NULL, NULL, NULL),
(4, 'RAM', 'ram-3', 150.00, 'Tarjeta con algoritmos para la gestion de la informacion del procedador', 'http://url-very-important', 1, 8, NULL, NULL, NULL),
(5, 'CASE', 'case-1', 150.00, 'Carcasa diseñada para una correcta ventilación', 'http://url-very-important', 2, NULL, 'Rojo', NULL, NULL),
(6, 'CASE', 'case-2', 150.00, 'Carcasa diseñada para una correcta ventilación', 'http://url-very-important', 3, NULL, 'Negro', NULL, NULL),
(7, 'CASE', 'case-3', 150.00, 'Carcasa diseñada para una correcta ventilación', 'http://url-very-important', 5, NULL, 'Blanco', NULL, NULL),
(8, 'CASE', 'case-4', 150.00, 'Carcasa diseñada para una correcta ventilación', 'http://url-very-important', 1, NULL, 'Plata', NULL, NULL),
(9, 'MOTHER BOARD', 'mb-1', 150.00, 'Placa madre con una compatibilidad elevada en el bus de datos', 'http://url-very-important', 1, NULL, 'Quinta', NULL, NULL),
(10, 'MOTHER BOARD', 'mb-2', 150.00, 'Placa madre con una compatibilidad elevada en el bus de datos', 'http://url-very-important', 1, NULL, 'Quinta', NULL, NULL),
(11, 'MOTHER BOARD', 'mb-3', 150.00, 'Placa madre con una compatibilidad elevada en el bus de datos', 'http://url-very-important', 1, NULL, 'Quinta', NULL, NULL),
(12, 'MOTHER BOARD', 'mb-4', 150.00, 'Placa madre con una compatibilidad elevada en el bus de datos', 'http://url-very-important', 1, NULL, 'Quinta', NULL, NULL),
(13, 'PROCESSOR', 'processor-1', 150.00, 'Procesador de alta fidelidad con 4 nucleos y 8 hilos', 'http://url-very-important', 4, NULL, NULL, NULL, 3.20),
(14, 'PROCESSOR', 'processor-2', 150.00, 'Procesador de alta fidelidad con 4 nucleos y 8 hilos', 'http://url-very-important', 5, NULL, NULL, NULL, 3.20),
(15, 'PROCESSOR', 'processor-3', 150.00, 'Procesador de alta fidelidad con 8 nucleos y 12 hilos', 'http://url-very-important', 4, NULL, NULL, NULL, 3.20),
(16, 'PROCESSOR', 'processor-4', 150.00, 'Procesador de alta fidelidad con 8 nucleos y 12 hilos', 'http://url-very-important', 5, NULL, NULL, NULL, 3.20),
(17, 'GRAPHIC CARD', 'graphic-1', 150.00, 'Tarjeta de Video con alta capacidad para el Ray tracing', 'http://url-very-important', 4, 8, NULL, NULL, NULL),
(18, 'GRAPHIC CARD', 'graphic-1', 150.00, 'Tarjeta de Video con alta capacidad para el Ray tracing', 'http://url-very-important', 3, 8, NULL, NULL, NULL),
(19, 'GRAPHIC CARD', 'graphic-1', 150.00, 'Tarjeta de Video con alta capacidad para el Ray tracing', 'http://url-very-important', 4, 4, NULL, NULL, NULL),
(20, 'GRAPHIC CARD', 'graphic-1', 150.00, 'Tarjeta de Video con alta capacidad para el Ray tracing', 'http://url-very-important', 3, 4, NULL, NULL, NULL),
(21, 'KEYBOARD', 'key-1', 15.00, 'Teclado de alta fidelidad', 'http://url-very-important', 1, NULL, 'Tipo', NULL, NULL),
(22, 'KEYBOARD', 'key-2', 15.00, 'Teclado de alta fidelidad', 'http://url-very-important', 2, NULL, 'Tipo', NULL, NULL),
(23, 'MOUSE', 'mouse-1', 15.00, 'Raton gamer con regulacion de los dpi', 'http://url-very-important', 1, NULL, 'TRUE', NULL, NULL),
(24, 'MOUSE', 'mouse-2', 15.00, 'Raton gamer con regulacion de los dpi', 'http://url-very-important', 2, NULL, 'TRUE', NULL, NULL),
(25, 'SCREEN', 'screen-1', 150.00, 'Pantalla en alta resolucion con 500 nits', 'http://url-very-important', 1, 24, NULL, NULL, NULL),
(26, 'SCREEN', 'screen-2', 150.00, 'Pantalla en alta resolucion con 500 nits', 'http://url-very-important', 2, 20, NULL, NULL, NULL),
(27, 'SPEAKERS', 'speakers-1', 15.00, 'Parlantes capaces de reproducir bajos perfectamente audibles', 'http://url-very-important', 1, 500, NULL, NULL, NULL),
(28, 'SPEAKERS', 'speakers-1', 15.00, 'Parlantes capaces de reproducir bajos perfectamente audibles', 'http://url-very-important', 2, 600, NULL, NULL, NULL),
(29, 'COMPUTER', 'computer-1', 999.99, 'Computadora muy fina', 'http://url-very-important', 2, NULL, NULL, NULL, NULL),
(30, 'COMPUTER', 'computer-2', 999.99, 'Computadora muy fina', 'http://url-very-important', 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trademarks`
--

CREATE TABLE `trademarks` (
  `trademark_code` int(11) NOT NULL,
  `trademark_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `trademark_description` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `trademarks`
--

INSERT INTO `trademarks` (`trademark_code`, `trademark_name`, `trademark_description`) VALUES
(1, 'Asus', 'Eventualmente Cambiar en Produccion'),
(2, 'Dell', 'Eventualmente Cambiar en Produccion'),
(3, 'Nvidia', 'Eventualmente Cambiar en Produccion'),
(4, 'AMD', 'Eventualmente Cambiar en Produccion'),
(5, 'Intel', 'Eventualmente Cambiar en Produccion');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`code`);

--
-- Indices de la tabla `trademarks`
--
ALTER TABLE `trademarks`
  ADD PRIMARY KEY (`trademark_code`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `trademarks`
--
ALTER TABLE `trademarks`
  MODIFY `trademark_code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
