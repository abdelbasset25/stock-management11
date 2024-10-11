CREATE SCHEMA IF NOT EXISTS `myData` DEFAULT CHARACTER SET utf8;
USE `myData`;

CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `brand` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `image` TEXT NOT NULL,
  `price` DECIMAL(10,2) NULL,
  `created_at` TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

INSERT INTO `products` (`name`, `brand`, `category`, `image`, `price`) VALUES
('iPhone 12', 'Apple', 'Phone', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000', 799.99),
('Galaxy S21', 'Samsung', 'Phone', 'https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-s21/gallery/uk-galaxy-s21-5g-g991-sm-g991bzadeua-368338283?$720_576_PNG$', 699.99),
('Pixel 5', 'Google', 'Phone', 'https://lh3.googleusercontent.com/qRxtMM-2hwo9tgibCg_RTOXaoO4-TwcMRT7qvW_G_-vxENpeSeqUQNLzEL6Uv5V7Dx7E_1QisKBtN0pnlTAkDL8W1ZicRbNnY93qMg=rw-e365-w1440', 699.00),
('OLED CX Series', 'LG', 'TV', 'https://www.lg.com/us/images/tvs/md07000130/gallery/desktop-01.jpg', 1499.99),
('QLED Q80T', 'Samsung', 'TV', 'https://images.samsung.com/is/image/samsung/p6pim/uk/qe55q80tatxxu/gallery/uk-qled-q80t-qe55q80tatxxu-rperspective-titan-black-207134910?$720_576_PNG$', 1299.99);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/