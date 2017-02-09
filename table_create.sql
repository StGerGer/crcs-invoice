CREATE TABLE invoice_data (
	invoiceID 		int 	NOT NULL 		PRIMARY KEY,
	customerID		int,
	first	        text,
	last 	        text,
	email			text,
	customer_pswd	text,
	invoice_date	date,
	paid_by			text,
	item_arr        text,
    price_arr       text,
    hardware_arr    text,
	subtotal		decimal,
	discount		decimal,
	tax 			decimal,
	total			decimal,
	active			boolean
);
