DROP TABLE IF EXISTS orders;
CREATE TABLE orders{
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item VARCHAR(512),
    quantity INTEGER CHECK (quantity > 0) 
}
