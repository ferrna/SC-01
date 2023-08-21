CREATE TABLE `product` (
  `product_id` integer PRIMARY KEY,
  `name` varchar(255),
  `components` varchar[],
  `price` integer,
  `update_at` timestamp
);

CREATE TABLE `article` (
  `article_id` integer PRIMARY KEY,
  `title` varchar(255),
  `content` text,
  `author` varchar(255),
  `subtitle` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `articleproducts` (
  `articleproducts_id` integer PRIMARY KEY,
  `product_id` integer,
  `article_id` integer
);

CREATE TABLE `category` (
  `category_id` integer PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `categoryproducts` (
  `categoryproducts` integer PRIMARY KEY,
  `product_id` integer,
  `category_id` integer
);

CREATE TABLE `new_product` (
  `new_product_id` integer PRIMARY KEY,
  `product_id` integer
);

ALTER TABLE `articleproducts` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

ALTER TABLE `articleproducts` ADD FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`);

ALTER TABLE `product` ADD FOREIGN KEY (`product_id`) REFERENCES `new_product` (`product_id`);

ALTER TABLE `categoryproducts` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

ALTER TABLE `categoryproducts` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);
