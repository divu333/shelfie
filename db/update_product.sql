UPDATE products
SET pname = $2,
    price= $3,
    image_url =$4
WHERE id = $1