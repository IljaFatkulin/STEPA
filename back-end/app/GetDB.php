<?php

namespace App;

class GetDB extends DatabaseConnection
{
    public function getAllProducts(): array
    {
        $sql = "SELECT * FROM products";
        $select = $this->connection()->query($sql);

        $result = array(array());

        if ($select->num_rows > 0)
        {
            $counter = 0;

            while($row = $select->fetch_assoc())
            {
                $result[$counter]['id'] = $row['id'];
                $result[$counter]['sku'] = $row['sku'];
                $result[$counter]['name'] = $row['name'];
                $result[$counter]['price'] = $row['price'];
                $result[$counter]['productType'] = $row['productType'];

                $counter += 1;
            }
        }

        return $result;

    }

    public function getAllBooks(): array
    {
        $sql = "SELECT * FROM books";
        $select = $this->connection()->query($sql);

        $result = array(array());

        if($select->num_rows > 0)
        {
            $counter = 0;

            while($row = $select->fetch_assoc())
            {
                $result[$counter]['id'] = $row['id'];
                $result[$counter]['weight'] = $row['weight'];

                $counter += 1;
            }
        }

        return $result;
    }

    public function getAllDvd()
    {
        $sql = "SELECT * FROM dvd";
        $select = $this->connection()->query($sql);

        $result = array(array());

        if($select->num_rows > 0)
        {
            $counter = 0;

            while($row = $select->fetch_assoc())
            {
                $result[$counter]['id'] = $row['id'];
                $result[$counter]['size'] = $row['size'];
            }
        }

        return $result;
    }

    public function getAllFurnitures()
    {
        $sql = "SELECT * FROM furnitures";
        $select = $this->connection()->query($sql);

        $result = array(array());

        if($select->num_rows > 0)
        {
            $counter = 0;

            while($row = $select->fetch_assoc())
            {
                $result[$counter]['id'] = $row['id'];
                $result[$counter]['height'] = $row['height'];
                $result[$counter]['width'] = $row['width'];
                $result[$counter]['length'] = $row['length'];
            }
        }

        return $result;
    }
}